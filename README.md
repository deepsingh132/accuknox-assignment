# 🛠 CNAPP Dashboard

A customizable dashboard for managing widgets in different categories. Users can add, remove, and select widgets to personalize their experience. Built with React, Vite, TypeScript, and TailwindCSS.

By: [Mandeep Singh](https://www.linkedin.com/in/deepsingh132/)

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/deepsingh132/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://www.github.com/deepsingh132/)

## Table of Contents

- [Assignment Overview](#assignment-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Assignment Structure](#assignment-structure)
- [Contact](#contact)

## Assignment Overview

CNAPP Dashboard is a widget-based dashboard interface where users can:

- Add new widgets to specific categories.
- Remove widgets from the dashboard.
- Filter displayed widgets using a modal that
allows selection from available widgets in each category.

This assignment uses React's Context API to manage the state of the modals and the widget selection process, ensuring a smooth user experience.

## Features

- **Widget Management**: Add, remove, and filter widgets across different categories.
- **Modals**: Easy-to-use modal interface for adding and selecting widgets.
- **Persistent UI**: Reflects real-time updates to widgets on the dashboard.
- **Responsive Design**: Uses TailwindCSS to ensure the application is responsive across all devices.

## Tech Stack

- **React**: Frontend JavaScript library
- **Vite**: Fast build tool for modern web development
- **TypeScript**: Static type checking
- **TailwindCSS**: Utility-first CSS framework
- **ESLint**: Linting tool for identifying and reporting patterns in JavaScript
- **Lucide Icons**: Open-source icon set
- **React Context API**: State management for modals and widgets

## Prerequisites

To run this application locally, you'll need to have the following installed:

- **Node.js**: v18.x or higher
- **npm** or **yarn**: Package manager

## Installation

Follow the steps below to get the assignment running on your local machine:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/mandeeparora132/accuknox-assignment.git
   cd accuknox-assignment
   ```

2. **Install Dependencies**:

   If you are using npm:

   ```bash
   npm install
   ```

   Or if you prefer yarn:

   ```bash
   yarn install
   ```

3. **Run the Application**:

   To start the development server, use:

   ```bash
   npm run dev
   ```

   Or with yarn:

   ```bash
   yarn dev
   ```

   The application will be running at `http://localhost:3000`.

4. **Build the Application**:

   To create a production-ready build:

   ```bash
   npm run build
   ```

   Or with yarn:

   ```bash
   yarn build
   ```

5. **Linting and Formatting**:

   You can lint the code using ESLint:

   ```bash
   npm run lint
   ```

   And format the code using Prettier:

   ```bash
   npm run format
   ```

## Running the Application

Once you've installed the dependencies, run the following commands to start the application:

```bash
npm run dev
```

Or with yarn:

```bash
yarn dev
```

Open your browser and navigate to `http://localhost:3000` to access the dashboard.

## Assignment Structure

Here's a basic overview of the assignment structure:

```.
├── public
│   └── CustomSelect.js           # Custom select component
|   └── vite.svg                  # Vite logo
├── src
│   ├── assets
│   │   └── icons
│   ├── components
│   │   ├── Dashboard.tsx         # Main dashboard component
│   │   ├── Header.tsx            # Header component
│   │   ├── Modal.tsx             # Modal component
│   │   ├── NewWidgetModal.tsx    # Modal for adding new widgets
│   │   ├── Widget.tsx            # Widget component
│   └── context
│       └── ModalContext.tsx      # React context for handling modal state
│       └── SearchContext.tsx     # React context for handling search state
|       └── WidgetContext.tsx     # React context for handling widget state
│   ├── App.tsx                   # Main application component
│   ├── data.json                 # Sample data for widgets
│   ├── index.css                 # Global styles
│   ├── main.tsx                 # Entry point for the application
|   ├── vite-env.d.ts             # Vite environment types
├── .gitignore
├── .eslint.config.js                   # ESLint configuration
├── package.json
├── README.md
├── tailwind.config.js                  # TailwindCSS configuration
└── tsconfig.json
```

## Contact

For any queries or feedback, feel free to reach out to me at [mandeeparora132@gmail.com](mailto:mandeeparora132@gmail.com).
