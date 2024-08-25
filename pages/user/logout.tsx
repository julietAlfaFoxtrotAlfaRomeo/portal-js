import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';

const LogoutButton = () => {
    const router = useRouter();
    const [cookies, setCookie, removeCookie] = useCookies(['user-session']);

    const handleLogout = () => {
        removeCookie('user-session');
        router.push('/login');
    };

    return (
        <Button colorScheme="red" size="md" onClick={handleLogout}>
            Logout
        </Button>
    );
};

export default LogoutButton;

