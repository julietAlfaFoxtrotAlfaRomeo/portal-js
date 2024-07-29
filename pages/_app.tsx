import { AuthProvider } from "@saas-ui/auth";
import { SaasProvider } from "@saas-ui/react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Layout } from "components/layout";
import 'leaflet/dist/leaflet.css';
import type { AppProps } from "next/app";
import theme from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
  const { announcement, header, footer } = pageProps;

  return (
    <SaasProvider theme={theme}>
      <AuthProvider>
        <Layout
          announcementProps={announcement}
          headerProps={header}
          footerProps={footer}
        >
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </SaasProvider>
  );
}

export default MyApp;
