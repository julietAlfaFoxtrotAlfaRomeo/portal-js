import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            const admins = await prisma.user.findMany({
                where: {
                    role: 'ADMIN',
                },
            });
            return res.status(200).json(admins);
        } catch (error) {
            console.error('Error fetching users:', error);
            return res.status(500).json({ message: 'Internal server error' });
        } finally {
            await prisma.$disconnect();
        }
    } else {
        return res.status(405).json({ message: 'Method not allowed' });
    }
}
