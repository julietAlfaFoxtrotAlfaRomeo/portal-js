import { AuthProvider } from "@saas-ui/auth";
import { SaasProvider } from "@saas-ui/react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Layout } from "components/layout";
import 'leaflet/dist/leaflet.css';
import type { AppProps } from "next/app";
import { useRouter } from 'next/router';
import theme from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
  const { header, footer } = pageProps;
  const router = useRouter();

  const isAdminPage = router.pathname.startsWith('/admin');
  const isSadminPage = router.pathname.startsWith('/sadmin');

  return (
    <SaasProvider theme={theme}>
      <AuthProvider>
        {isAdminPage || isSadminPage ? (
          <Component {...pageProps} />
        ) : (
          <Layout headerProps={header} footerProps={footer}>
            <Component {...pageProps} />
          </Layout>
        )}
      </AuthProvider>
    </SaasProvider>
  );
}

export default MyApp;
