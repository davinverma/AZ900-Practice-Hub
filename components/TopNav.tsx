import Link from 'next/link';
import { useEffect, useState } from 'react';
const TopNav = () => {
 const [theme,setTheme]=useState<'dark'|'light'>('dark');
 useEffect(()=>{const saved=localStorage.getItem('az900-theme') as 'dark'|'light'|null; if(saved)setTheme(saved);},[]);
 useEffect(()=>{document.documentElement.dataset.theme=theme; localStorage.setItem('az900-theme',theme);},[theme]);
 return <header className="min-h-16 mb-8 w-full px-5 border-b flex justify-between items-center app-nav"><Link href="/" className="font-bold tracking-wide text-xl">AZ-900 <span className="text-sky-400">PRACTICE</span></Link><nav className="flex gap-3 sm:gap-5 text-sm items-center"><Link href="/practice">Practice</Link><Link href="/exam">Exam simulator</Link><button className="theme-toggle" onClick={()=>setTheme(t=>t==='dark'?'light':'dark')} aria-label="Toggle theme">{theme==='dark'?'☀ Light':'☾ Dark'}</button></nav></header>;
};
export default TopNav;
