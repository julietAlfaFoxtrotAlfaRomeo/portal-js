// pages/api/analytics.ts
import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { period } = req.query;

    try {
        let data;
        switch (period) {
            case 'daily':
                data = await prisma.$queryRaw`
                    SELECT DATE(created_at) as date, COUNT(*) as count
                    FROM product
                    GROUP BY DATE(created_at)
                    ORDER BY DATE(created_at) ASC
                `;
                break;
            case 'hourly':
                data = await prisma.$queryRaw`
                    SELECT DATE_FORMAT(created_at, '%Y-%m-%d %H:00:00') as date, COUNT(*) as count
                    FROM product
                    GROUP BY DATE_FORMAT(created_at, '%Y-%m-%d %H:00:00')
                    ORDER BY DATE_FORMAT(created_at, '%Y-%m-%d %H:00:00') ASC
                `;
                break;
            case 'monthly':
                data = await prisma.$queryRaw`
                    SELECT DATE_FORMAT(created_at, '%Y-%m') as date, COUNT(*) as count
                    FROM product
                    GROUP BY DATE_FORMAT(created_at, '%Y-%m')
                    ORDER BY DATE_FORMAT(created_at, '%Y-%m') ASC
                `;
                break;
            case 'yearly':
                data = await prisma.$queryRaw`
                    SELECT DATE_FORMAT(created_at, '%Y') as date, COUNT(*) as count
                    FROM product
                    GROUP BY DATE_FORMAT(created_at, '%Y')
                    ORDER BY DATE_FORMAT(created_at, '%Y') ASC
                `;
                break;
            default:
                res.status(400).json({ error: 'Invalid period' });
                return;
        }

        res.status(200).json({ data });
    } catch (error) {
        console.error('Error fetching analytics:', error);
        res.status(500).json({ error: 'Error fetching analytics' });
    }
}
