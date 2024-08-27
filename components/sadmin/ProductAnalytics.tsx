// components/ProductAnalytics.tsx
import { Box, Flex, Select, Spinner, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

interface AnalyticsData {
    date: string;
    count: number;
}

const ProductAnalytics = () => {
    const [data, setData] = useState<AnalyticsData[]>([]);
    const [loading, setLoading] = useState(true);
    const [period, setPeriod] = useState('daily');

    useEffect(() => {
        const fetchAnalytics = async () => {
            setLoading(true);
            try {
                const response = await fetch(`/api/analytics?period=${period}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const result = await response.json();
                setData(result.data);
            } catch (error) {
                console.error('Error fetching analytics:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchAnalytics();
    }, [period]);

    if (loading) {
        return (
            <Flex justify="center" align="center" height="100vh">
                <Spinner size="xl" />
            </Flex>
        );
    }

    return (
        <Box p="4">
            <Text fontSize="xl" fontWeight="bold" mb="4">Product Analytics</Text>
            <Select
                value={period}
                onChange={(e) => setPeriod(e.target.value)}
                mb="4"
            >
                <option value="daily">Per Day</option>
                <option value="hourly">Per Hour</option>
                <option value="monthly">Per Month</option>
                <option value="yearly">Per Year</option>
            </Select>
            <LineChart width={800} height={400} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="count" stroke="#8884d8" />
            </LineChart>
        </Box>
    );
};

export default ProductAnalytics;
