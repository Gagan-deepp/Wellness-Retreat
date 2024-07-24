# Wellness Retreat Platform

## Project Description
Create a responsive web page for a fictional **Wellness Retreat platform**. The page displays a list of available retreats, allowing users to filter them by date and type.

## Features
- Single Page Layout
- Filter Functionality
- Search Functionality
- Pagination Functionality

## Installation Instructions

1. Fork the GitHub repository.
2. Open the forked repository in your code editor.
3. Run the command `npm install` to install the dependencies.
4. Install Tailwind CSS by running the following command:
    - `npm install tailwindcss postcss autoprefixer`
    - `npx tailwindcss init`
    - Configure your tailwind.config.js file:
        ```javascript
        // tailwind.config.js
        module.exports = {
        content: [
            "./src/**/*.{js,jsx,ts,tsx}",
        ],
        theme: {
            extend: {
                colors: {
                    'blue': '#1b3252',
                    'bg': '#e0d9ce',
                },
            },
        },
        plugins: [],
        }
5. Run the command `npm start` to start the development server.

## Usage

Once the development server is running, open your browser and navigate to `http://localhost:3000`. You should see the main page of the Wellness Retreat Platform.

This project uses **Zustand for global state management**. Initially, the retreats are loaded and stored in the global state.

## Contact Information

If you have any questions or feedback, please open an issue in the GitHub repository.

## Technologies Used

- HTML/CSS
- JavaScript
- React
- Tailwind.css
- Zustand
