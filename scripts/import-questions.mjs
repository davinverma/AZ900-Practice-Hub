import fs from 'node:fs/promises';
import path from 'node:path';

const SOURCE_URL = 'https://raw.githubusercontent.com/Ditectrev/Microsoft-Azure-AZ-900-Microsoft-Azure-Fundamentals-Practice-Tests-Exams-Questions-Answers/main/README.md';
const OUT = path.resolve('src/qdb.json');

function cleanQuestion(text) {
  return text
    .replace(/\*\*/g, '')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/`/g, '')
    .replace(/\\\n/g, '\n')
    .replace(/\s+/g, ' ')
    .trim();
}

function parseQuestions(markdown) {
  const start = markdown.search(/^###\s+/m);
  if (start < 0) throw new Error('Could not find the question section in the source README.');
  const body = markdown.slice(start);
  const blocks = body.split(/^###\s+/m).slice(1);
  const questions = [];

  for (const block of blocks) {
    const lines = block.split(/\r?\n/);
    const options = [];
    const questionLines = [];
    for (const line of lines) {
      const option = line.match(/^\s*-\s*\[([ xX])\]\s*(.+?)\s*$/);
      if (option) {
        options.push({ text: cleanQuestion(option[2]), isAnswer: option[1].toLowerCase() === 'x' });
      } else if (!/^\*\*\[⬆ Back to Top\]/.test(line) && !/^\s*$/.test(line)) {
        questionLines.push(line.trim());
      }
    }
    if (!options.length) continue;
    const question = cleanQuestion(questionLines.join(' '));
    if (!question || options.length < 2 || !options.some((o) => o.isAnswer)) continue;
    questions.push({ id: String(questions.length), question, options });
  }
  return questions;
}

const response = await fetch(SOURCE_URL, { headers: { 'User-Agent': 'AZ900-Practice-Importer' } });
if (!response.ok) throw new Error(`Unable to download question source (${response.status} ${response.statusText}). Check your internet connection and try again.`);
const markdown = await response.text();
const questions = parseQuestions(markdown);
if (questions.length < 400) throw new Error(`Only ${questions.length} questions were parsed. Refusing to overwrite the existing bank; source format may have changed.`);
await fs.writeFile(OUT, `${JSON.stringify(questions, null, 2)}\n`, 'utf8');
console.log(`Imported ${questions.length} questions from Ditectrev into ${OUT}`);
