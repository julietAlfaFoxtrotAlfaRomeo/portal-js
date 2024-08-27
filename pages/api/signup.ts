import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

// Middleware untuk rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Implementasi Helmet
  helmet()(req as any, res as any, () => {});

  // Terapkan rate limiting
  limiter(req as any, res as any, async () => {
    if (req.method === 'POST') {
      const {
        businessName,
        pirtNumber,
        responsiblePerson,
        nik,
        businessAddress,
        netWorth,
        businessType,
        province,
        city,
        postalCode,
        phone,
        mobile,
        website,
        email,
        password,
        role,
        username, // Menambahkan username
      } = req.body;

      try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
          data: {
            businessName,
            pirtNumber,
            responsiblePerson,
            nik,
            businessAddress,
            netWorth,
            businessType,
            province,
            city,
            postalCode,
            phone,
            mobile,
            website,
            email,
            password: hashedPassword,
            username, // Menambahkan username
          },
        });

        res.status(201).json({ message: 'User registered successfully', user });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to register user' });
      }
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  });
}
