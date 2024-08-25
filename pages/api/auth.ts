import { PrismaClient } from '@prisma/client';
import { parse } from 'cookie';
import { GetServerSideProps } from 'next';

const prisma = new PrismaClient();

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req } = context;
  const cookie = req.headers.cookie;
  
  if (cookie) {
    const cookies = parse(cookie);
    const userSession = cookies['user-session'];

    if (userSession) {
      const sessionData = JSON.parse(userSession);
      if (sessionData.role === 'user') {
        const user = await prisma.user.findUnique({
          where: { id: sessionData.userId },
          select: { username: true, email: true, role: true },
        });

        if (user) {
          return {
            props: { user }, // Return user data if authenticated
          };
        }
      }
    }
  }

  // Redirect ke halaman login jika tidak terautentikasi atau bukan user
  return {
    redirect: {
      destination: '/login',
      permanent: false,
    },
  };
};
