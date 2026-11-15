# AZ-900 Practice Hub

**Redesigned and enhanced by Davin Verma.**

A simple practice website for preparing for the Microsoft Azure Fundamentals (AZ-900) exam. It includes practice questions, saved progress, bookmarks, revision flashcards, a timed exam mode, topic filters, analytics, and dark/light themes.

<img width="1522" height="727" alt="image" src="https://github.com/user-attachments/assets/80e6b3b7-71d1-45fa-954b-29a835ad6649" />
<img width="1523" height="731" alt="image" src="https://github.com/user-attachments/assets/da92a37e-9f59-4a82-810d-9932743d046c" />



## Run this project on your computer

You can get the project in either of these two ways. Both methods work. You only need to choose one.

### Before you start

Install these programs:

1. **Node.js 20 or newer:** Download it from [https://nodejs.org](https://nodejs.org). Choose the LTS version. Node.js also installs npm.
2. **Visual Studio Code:** Download it from [https://code.visualstudio.com](https://code.visualstudio.com).
3. **Git (only for Method 1):** Download it from [https://git-scm.com](https://git-scm.com). If you use Method 2, Git is not required.

After installing, close and reopen Visual Studio Code so it can detect the programs.

## Method 1: Clone the Repository Using Command Prompt (CMD)

Follow these steps to download and run the AZ-900 Practice Hub using Command Prompt.

### Step 1: Open Command Prompt

- Press `Windows + R`.
- Type `cmd` and press Enter.

### Step 2: Clone the GitHub Repository

Run the following command:

```cmd
git clone https://github.com/davinverma/AZ900-Practice-Hub.git
```

This downloads the complete project to your Desktop.

### Step 3: Enter the Project Folder

```cmd
cd AZ900-Practice-Hub
```

### Step 4: Run the Setup Command

```cmd
npm run setup
```

This automatically installs the required packages, imports the AZ-900 question bank, and starts the development server.

### Step 5: Open the Website

Once the server starts, open your browser and visit:

**http://localhost:3000**

You can now use the AZ-900 Practice Hub!

---

### If the Setup Command Does Not Work

Make sure you are inside the `AZ900-Practice-Hub` folder in CMD, then run these commands one by one:

**1. Install dependencies:**

```cmd
npm install
```

**2. Import or refresh the question bank:**

```cmd
npm run setup
```

**3. Start the development server:**

```cmd
npm run dev
```

**4. Open the website:**

Visit **http://localhost:3000** in your browser.

**Important:** Keep the Command Prompt window open while using the website. Closing it will stop the development server.

(For Next time whenever you want to open this website just open cmd and then go to this folder by cd and type npm run dev)


## Method 2: Download ZIP and Run Using VS Code

Follow these steps if you do not want to use Git or clone the repository.

### Step 1: Download the Project

1. Open the GitHub repository:  
   https://github.com/davinverma/AZ900-Practice-Hub
2. Click the green **Code** button.
3. Select **Download ZIP**.
4. Once downloaded, extract the ZIP file to your preferred location.

### Step 2: Open the Project in VS Code

1. Open Visual Studio Code.
2. Select **File → Open Folder**.
3. Choose the extracted `AZ900-Practice-Hub` folder.
4. Open the terminal using **Terminal → New Terminal**.

### Step 3: Run the Setup Command

**Option A: One-line command**

Copy and run this command in the VS Code terminal:

```bash
npm run setup
```

This automatically installs the required packages, imports the AZ-900 question bank, and starts the development server.

**Option B: Run commands line by line**

If you prefer to execute each command separately, run:

**1. Install the required dependencies:**

```bash
npm install
```

**2. Import or refresh the question bank:**

```bash
npm run setup
```

**3. Start the development server:**

```bash
npm run dev
```

### Step 4: Open the Website

Once the server starts, open your browser and visit:

**http://localhost:3000**

You can now use the AZ-900 Practice Hub!

### Important Notes

- Make sure Node.js is installed on your computer.
- Open the extracted project folder containing `package.json` in VS Code.
- Keep the VS Code terminal open while using the website. Closing it will stop the development server.


## Progress and privacy

Your practice progress is saved in your browser's local storage on that device. It remains after refreshing the page, but it does not automatically sync to another browser or device. Clearing the browser's site data can erase saved progress.

## Credits and acknowledgements

- **Redesign and enhancements:** Davin Verma.
- **Original application:** Created by Eduard-Constantin Ibinceanu in the [original repository](https://github.com/eduardconstantin/azure-cloud-exams), and later forked and maintained in [WISNIOM/azure-fundamentals](https://github.com/WISNIOM/azure-fundamentals).
- **Question content:** The AZ-900 practice questions are sourced from [Ditectrev's Microsoft Azure AZ-900 Practice Tests repository](https://github.com/Ditectrev/Microsoft-Azure-AZ-900-Microsoft-Azure-Fundamentals-Practice-Tests-Exams-Questions-Answers). Thanks to Ditectrev and its contributors.


**Microsoft, Azure, and AZ-900** are trademarks of Microsoft. This is an independent community study project and is not affiliated with, endorsed by, or sponsored by Microsoft. This is a practice resource, not an official Microsoft exam question bank. Exam objectives and questions can change, so also study the current [Microsoft Azure Fundamentals certification page](https://learn.microsoft.com/credentials/certifications/azure-fundamentals/) and Microsoft Learn materials.
