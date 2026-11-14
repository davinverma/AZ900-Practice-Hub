import Link from 'next/link';
import type { NextPage } from 'next';
import bank from '@azure-fundamentals/src/qdb.json';
const Home: NextPage = () => <div className="mx-auto w-11/12 max-w-5xl pb-12">
  <div className="text-center mt-10 sm:mt-16"><p className="text-sky-400 font-bold tracking-[0.25em] text-xs">MICROSOFT AZURE FUNDAMENTALS</p><h1 className="text-white text-4xl sm:text-6xl font-extrabold mt-4">AZ-900 Practice Hub</h1><p className="text-slate-400 text-lg max-w-2xl mx-auto mt-5">Practise in short sessions, track your accuracy and pick up exactly where you stopped.</p><Link href="/practice" className="inline-block mt-8 bg-sky-600 hover:bg-sky-500 text-white rounded-xl px-8 py-4 font-semibold">Open practice dashboard →</Link></div>
  <div className="grid sm:grid-cols-3 gap-4 mt-14">{[{n:'01',t:'Practise in batches',d:'Choose 10, 20, 30 or 50 questions instead of doing the entire bank at once.'},{n:'02',t:'Automatic progress',d:'Your selected answers, last position and bookmarks are saved in this browser.'},{n:'03',t:'Target weak areas',d:'Retry incorrect answers or practise only your bookmarked questions.'}].map(x=><div key={x.n} className="bg-slate-800 border border-slate-700 rounded-2xl p-6"><p className="text-sky-400 font-bold">{x.n}</p><h2 className="text-white text-xl font-semibold mt-4">{x.t}</h2><p className="text-slate-400 text-sm mt-2 leading-relaxed">{x.d}</p></div>)}</div>
  <p className="text-center text-slate-500 text-xs mt-10">Current bundled questions: {bank.length}. Use <code>npm run import:questions</code> to fetch the full Ditectrev question bank.</p>
</div>;
export default Home;
