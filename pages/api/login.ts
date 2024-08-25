import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { serialize } from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email/Username dan password diperlukan' });
    }

    try {
      let user;
      let role: 'user' | 'admin' | 'super_admin' = 'user'; // Default role is 'user'

      // Cek apakah input adalah email
      const isEmail = email.includes('@');

      if (isEmail) {
        // Coba temukan user berdasarkan email
        user = await prisma.user.findUnique({
          where: { email },
        });
        if (user && user.role === 'SUPER_ADMIN') {
          role = 'super_admin';
        } else if (user && user.role === 'ADMIN') {
          role = 'admin';
        }
      } else {
        // Coba temukan user berdasarkan username
        user = await prisma.user.findUnique({
          where: { username: email },
        });
        if (user && user.role === 'SUPER_ADMIN') {
          role = 'super_admin';
        } else if (user && user.role === 'ADMIN') {
          role = 'admin';
        }
      }

      if (!user) {
        return res.status(401).json({ message: 'User tidak ditemukan' });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Password tidak valid' });
      }

      // Set session cookie
      const cookie = serialize('user-session', JSON.stringify({ userId: user.id, role }), {
        path: '/',
        httpOnly: true,
        maxAge: 60 * 60, // Sesi bertahan selama 1 jam
      });

      res.setHeader('Set-Cookie', cookie);

      // Redirect berdasarkan role
      let redirectUrl = '/user/';
      if (role === 'admin') {
        redirectUrl = '/admin/';
      } else if (role === 'super_admin') {
        redirectUrl = '/sadmin/';
      }

      return res.status(200).json({ message: 'Login berhasil', redirectUrl });
    } catch (error) {
      console.error('Error during login:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    return res.status(405).json({ message: 'Method tidak diizinkan' });
  }
}
