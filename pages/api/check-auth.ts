import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const token = req.cookies['user-session'];
    if (!token) {
      return res.status(401).json({ message: 'Tidak ada token. Silakan login terlebih dahulu.' });
    }

    try {
      const decodedToken = JSON.parse(token);
      const user = await prisma.user.findUnique({
        where: { id: decodedToken.userId },
      });

      if (!user) {
        return res.status(401).json({ message: 'User tidak ditemukan' });
      }

      return res.status(200).json({ message: 'Sudah login', role: decodedToken.role });
    } catch (error) {
      console.error('Error during check auth:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    return res.status(405).json({ message: 'Method tidak diizinkan' });
  }
}
