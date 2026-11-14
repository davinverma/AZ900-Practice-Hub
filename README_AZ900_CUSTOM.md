# AZ-900 Practice Hub (customized)

This is a modification of the WISNIOM/azure-fundamentals Next.js project.

## Features added
- Local JSON question bank; the active quiz pages no longer call Cosmos DB or GraphQL.
- Automatic browser-local saving of answers and the active session position.
- Resume the exact active session after closing and reopening the browser.
- 10/20/30/50-question batches, plus all available questions.
- Unanswered, incorrect-answer retry, and bookmark-only practice filters.
- Correct-answer feedback and progress dashboard.

## Import the complete Ditectrev question bank

The included `src/qdb.json` is the original five-question sample from the uploaded project. To replace it with the complete question bank from the Ditectrev repository, run this once from the project folder while connected to the internet:

```bash
npm install
npm run import:questions
```

The importer fetches the public README from:
https://github.com/Ditectrev/Microsoft-Azure-AZ-900-Microsoft-Azure-Fundamentals-Practice-Tests-Exams-Questions-Answers

It parses the question headings and checked answer options and writes them to `src/qdb.json`. It refuses to overwrite the sample if fewer than 400 questions are parsed. The source README identifies 485 unique questions; the imported count is printed by the script. Review the source's current licensing and attribution requirements before redistributing the question content.

Then start the app:

```bash
npm run dev
```

Open http://localhost:3000.

## Build / deploy

`npm run build` uses the question bank already present in `src/qdb.json` and does not need internet. Run the importer manually whenever you want to refresh the bank.

## Progress storage

Progress uses `localStorage` in the browser. It survives refreshes and browser restarts on the same browser profile/device. It does not sync across devices or browsers. Clearing site data will erase progress; use the dashboard's Reset progress only when you intentionally want to start over.

## Important exam note

The Ditectrev bank is a community study resource, not an official Microsoft exam question set. Some content may be outdated. Check the current AZ-900 skills outline on Microsoft Learn before the exam.

## One-command setup (Windows, macOS, or Linux)

Install Node.js 20 or newer, extract this ZIP, open the project folder in a terminal, and run:

```bash
npm run setup
```

The setup command installs dependencies, imports the latest available question bank from the Ditectrev README into `src/qdb.json`, and starts the Next.js development server. Open http://localhost:3000. Keep the terminal open while using the local site. The first run requires an internet connection. If the import fails, the setup stops rather than silently replacing the existing question bank with an incomplete import.

To start the site on later days (after the first setup), run `npm run dev`.
