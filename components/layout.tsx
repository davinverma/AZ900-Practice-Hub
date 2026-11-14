import TopNav from '@azure-fundamentals/components/TopNav';
import Head from 'next/head';
import Footer from './Footer';
type LayoutProps = { children: React.ReactNode };
export default function Layout({ children }: LayoutProps) { return <><Head><title>AZ-900 Practice Hub</title><meta name="description" content="Personal Azure Fundamentals AZ-900 practice dashboard with saved progress."/><meta name="viewport" content="width=device-width, initial-scale=1"/><meta name="theme-color" content="#0f172a"/><link rel="icon" href="/favicon.ico"/></Head><div className="min-h-screen flex flex-col bg-slate-900"><TopNav/><main className="flex-1">{children}</main><Footer/></div></>; }
