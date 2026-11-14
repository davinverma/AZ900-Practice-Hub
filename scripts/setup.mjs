import { spawnSync } from 'node:child_process';
import process from 'node:process';

const isWindows = process.platform === 'win32';

function run(command, args, label, { shell = false } = {}) {
  console.log(`\n\n========== ${label} ==========`);
  const result = spawnSync(command, args, {
    stdio: 'inherit',
    shell,
    env: process.env,
  });
  if (result.error) {
    console.error(`\nCould not start ${label}: ${result.error.message}`);
    process.exit(1);
  }
  if (result.status !== 0) {
    console.error(`\n${label} failed (exit code ${result.status ?? 'unknown'}). Fix the error above and run "npm run setup" again.`);
    process.exit(result.status ?? 1);
  }
}

console.log('AZ-900 Practice Hub: first-time setup');
console.log('This will install packages, import the question bank, and start the website.');

// Windows .cmd launchers need the shell; Node itself must be launched directly
// so paths such as C:\\Program Files\\nodejs\\node.exe are handled safely.
const npmCommand = isWindows ? 'npm.cmd' : 'npm';
run(npmCommand, ['install'], '1/3 Installing project dependencies', { shell: isWindows });
run(process.execPath, ['scripts/import-questions.mjs'], '2/3 Importing AZ-900 questions');
run(npmCommand, ['run', 'dev'], '3/3 Starting the practice website', { shell: isWindows });
