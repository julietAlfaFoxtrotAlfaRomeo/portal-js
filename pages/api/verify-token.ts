import jwt from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Ambil token dari cookies
  const token = req.cookies['auth-token'];

  // Periksa apakah token ada dan merupakan string
  if (!token || typeof token !== 'string') {
    console.error('Token tidak valid:', token); // Log token untuk debugging
    return res.status(401).json({ message: 'Format token tidak valid' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
    console.log('Token terdecode:', decoded);

    // Lanjutkan dengan logika Anda setelah token terverifikasi
    res.status(200).json({ message: 'Token valid' });
  } catch (error) {
    console.error('Error memverifikasi token:', error);
    res.status(401).json({ message: 'Tidak diotorisasi' });
  }
}
