import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
    const [loading, setLoading] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const checkAuth = async () => {
            // Periksa autentikasi di sini, misalnya dengan memeriksa token dari cookies
            const res = await fetch('/api/check-auth');
            const data = await res.json();
            if (data.authenticated) {
                setAuthenticated(true);
            } else {
                router.push('/admin-login');
            }
            setLoading(false);
        };

        checkAuth();
    }, [router]);

    if (loading) return <p>Loading...</p>;

    return <>{authenticated ? children : null}</>;
};

export default AdminLayout;
