import React, { useEffect, useMemo, useState } from 'react';
import type { Question } from './types';

type Props = {
  question: Question;
  questionNumber: number;
  total: number;
  savedAnswer?: number[];
  isBookmarked: boolean;
  onAnswer: (indexes: number[]) => void;
  onBookmark: () => void;
  onNext: () => void;
  onPrevious: () => void;
};

export default function QuizForm({ question, questionNumber, total, savedAnswer, isBookmarked, onAnswer, onBookmark, onNext, onPrevious }: Props) {
  const [selected, setSelected] = useState<number[]>(savedAnswer || []);
  const [revealed, setRevealed] = useState(false);
  const correct = useMemo(() => question.options.map((o, i) => o.isAnswer ? i : -1).filter(i => i >= 0), [question]);
  const multi = correct.length > 1;

  useEffect(() => { setSelected(savedAnswer || []); setRevealed(false); }, [question.id, savedAnswer]);

  const toggle = (index: number) => {
    if (revealed) return;
    const next = multi ? (selected.includes(index) ? selected.filter(i => i !== index) : [...selected, index]) : [index];
    setSelected(next);
    onAnswer(next);
  };
  const isRight = selected.length === correct.length && selected.every(i => correct.includes(i));

  return <section className="w-full">
    <div className="flex flex-wrap justify-between items-center gap-3 mb-5">
      <div><p className="text-sm text-slate-400">QUESTION {questionNumber} OF {total}</p><div className="h-2 w-48 bg-slate-700 rounded-full mt-2 overflow-hidden"><div className="h-full bg-emerald-400" style={{width:`${total ? questionNumber/total*100 : 0}%`}} /></div></div>
      <button onClick={onBookmark} className={`rounded-lg border px-3 py-2 text-sm ${isBookmarked ? 'border-amber-400 text-amber-300' : 'border-slate-600 text-slate-300'}`}>{isBookmarked ? '★ Bookmarked' : '☆ Bookmark'}</button>
    </div>
    <h2 className="text-xl sm:text-2xl font-semibold leading-relaxed text-white mb-6">{question.question}</h2>
    <p className="text-xs uppercase tracking-wide text-slate-400 mb-3">{multi ? 'Select all that apply' : 'Select one answer'}</p>
    <div className="space-y-3">
      {question.options.map((option, i) => {
        const active = selected.includes(i);
        const correctOption = revealed && option.isAnswer;
        const wrongSelected = revealed && active && !option.isAnswer;
        return <button key={`${question.id}-${i}`} type="button" onClick={() => toggle(i)} className={`w-full text-left rounded-xl border p-4 transition ${correctOption ? 'border-emerald-400 bg-emerald-500/15' : wrongSelected ? 'border-rose-400 bg-rose-500/15' : active ? 'border-sky-400 bg-sky-500/15' : 'border-slate-600 bg-slate-700/40 hover:border-slate-400'} ${revealed ? 'cursor-default' : ''}`}>
          <span className="flex gap-3 items-start"><span className={`shrink-0 rounded-md w-7 h-7 flex items-center justify-center text-xs font-bold ${active ? 'bg-sky-500 text-white' : 'bg-slate-600 text-slate-200'}`}>{String.fromCharCode(65+i)}</span><span className="text-slate-100 pt-1">{option.text}</span>{correctOption && <span className="ml-auto text-emerald-300">✓</span>}{wrongSelected && <span className="ml-auto text-rose-300">✕</span>}</span>
        </button>;
      })}
    </div>
    {revealed && <div className={`mt-5 rounded-xl p-4 border ${isRight ? 'border-emerald-500/60 bg-emerald-500/10' : 'border-rose-500/60 bg-rose-500/10'}`}><p className={`font-semibold ${isRight ? 'text-emerald-300' : 'text-rose-300'}`}>{isRight ? 'Correct!' : 'Not quite. Review the highlighted answer.'}</p><p className="text-sm text-slate-300 mt-1">Correct answer{correct.length > 1 ? 's' : ''}: {correct.map(i => `${String.fromCharCode(65+i)}. ${question.options[i].text}`).join(' · ')}</p></div>}
    <div className="flex flex-wrap gap-3 mt-7">
      <button onClick={onPrevious} disabled={questionNumber <= 1} className="px-5 py-3 rounded-lg bg-slate-700 text-white disabled:opacity-40">← Previous</button>
      {!revealed ? <button onClick={() => setRevealed(true)} disabled={!selected.length} className="px-5 py-3 rounded-lg bg-sky-600 hover:bg-sky-500 text-white disabled:opacity-40">Check answer</button> : <button onClick={onNext} className="px-5 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white">Next question →</button>}
      {revealed && questionNumber === total && <span className="self-center text-sm text-emerald-300">Session complete!</span>}
    </div>
  </section>;
}
