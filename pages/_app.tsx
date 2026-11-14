import '@azure-fundamentals/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@azure-fundamentals/components/layout';
export default function App({ Component, pageProps }: AppProps) { return <Layout><Component {...pageProps} /></Layout>; }
