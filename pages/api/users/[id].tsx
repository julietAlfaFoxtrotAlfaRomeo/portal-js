import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method, query } = req;
    const { id } = query;

    if (method === 'GET') {
        try {
            const user = await prisma.user.findUnique({
                where: {
                    id: Number(id),
                },
            });
            return res.status(200).json(user);
        } catch (error) {
            console.error('Error fetching user:', error);
            return res.status(500).json({ message: 'Internal server error' });
        } finally {
            await prisma.$disconnect();
        }
    } else if (method === 'PUT') {
        try {
            const { email, role, password } = req.body;
            const updatedUser = await prisma.user.update({
                where: {
                    id: Number(id),
                },
                data: {
                    email,
                    role,
                    password, // Note: Be cautious with passwords, consider hashing
                },
            });
            return res.status(200).json(updatedUser);
        } catch (error) {
            console.error('Error updating user:', error);
            return res.status(500).json({ message: 'Internal server error' });
        } finally {
            await prisma.$disconnect();
        }
    } else {
        return res.status(405).json({ message: 'Method not allowed' });
    }
}
