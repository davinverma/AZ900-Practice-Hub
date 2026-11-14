# AZ-900 Practice Hub

**Redesigned and enhanced by Davin Verma.**

An independently customized AZ-900 study interface based on the WISNIOM Azure Fundamentals quiz application. It adds browser-local progress saving, resume, practice batches, bookmarks, search and topic filters, flashcards/revision, timed exam practice, analytics, and theme controls.

## Credits and acknowledgements

- **Redesign and enhancements:** Davin Verma

This project is a redesigned and independently modified version of the Azure Fundamentals quiz application. The original application was created by **Eduard-Constantin Ibinceanu** and is available in the [original repository](https://github.com/eduardconstantin/azure-cloud-exams). The project was later forked and maintained in [WISNIOM/azure-fundamentals](https://github.com/WISNIOM/azure-fundamentals).

The AZ-900 practice questions and answer content are sourced from [Ditectrev's Microsoft Azure AZ-900 Practice Tests repository](https://github.com/Ditectrev/Microsoft-Azure-AZ-900-Microsoft-Azure-Fundamentals-Practice-Tests-Exams-Questions-Answers). Thanks to **Ditectrev and the repository contributors** for making this question resource available. See the [contributors list](https://github.com/Ditectrev/Microsoft-Azure-AZ-900-Microsoft-Azure-Fundamentals-Practice-Tests-Exams-Questions-Answers/graphs/contributors).

**Redesigned, customized, and maintained by Davin Verma:** the interface was redesigned and the project was enhanced with practice, progress saving/resume, bookmarks, search and topic filters, flashcards/revision, timed exam practice, analytics, and theme controls. Davin Verma’s work covers the redesign and added functionality only. These additions do not replace or claim ownership of the original application or question content.

**Microsoft, Azure, and AZ-900** are trademarks of Microsoft. This is an independent community study project and is not affiliated with, endorsed by, or sponsored by Microsoft.

The original application's [MIT licence](LICENSE) is retained in this repository. Please refer to the source repositories for their respective content, contributor, and licensing information.

## Run locally

Requires Node.js 20 or newer.

```bash
npm run setup
```

The setup script installs dependencies, imports the question bank, and starts the local Next.js development server. Open http://localhost:3000. On later runs, use `npm run dev`.

## Build for deployment

```bash
npm install
npm run build
npm run start
```

Import the question bank before building if the local `src/qdb.json` does not already contain it. For a public deployment, first confirm permission/license terms for redistributing the Ditectrev question content.

## Progress storage

Progress is stored in `localStorage` in the current browser profile and device. It survives refreshes and browser restarts but does not sync between devices. Clearing browser site data removes saved progress.

## Important exam note

This is a community practice resource, not an official Microsoft exam question bank. Questions and exam objectives can change. Check the current [Microsoft AZ-900 certification page](https://learn.microsoft.com/credentials/certifications/azure-fundamentals/) and Microsoft Learn materials.
