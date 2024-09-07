
# Recipe App

This is a simple React application built to understand the workflow of **React-Redux** and **React Thunk**. The app allows users to browse recipes fetched from an external API and mark their favorite recipes for easy access later.

## Features

- Fetch and display recipe data from an API
- Add recipes to a favorites list
- View the favorite recipes in a dedicated section
- Learn and implement **Redux Toolkit** for state management
- Utilize **Redux Thunk** for async API calls
- Hide sensitive information using environment variables
- **Responsive UI** built with **Tailwind CSS**

## Technologies Used

- **React.js**: Library for building user interfaces
- **Vite**: Fast and optimized build tool for React
- **Tailwind CSS**: Utility-first CSS framework for styling
- **React Redux**: State management library for React
- **Redux Thunk**: Middleware for handling asynchronous logic
- **Environment Variables**: Used to hide sensitive API keys

## Setup Instructions

To get the project up and running on your local machine:

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/recipe-app.git
   cd recipe-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Add your environment variables:
   - Create a `.env` file in the root of your project and add your API key:

   ```bash
   VITE_REACT_API_KEY=your_api_key_here
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. The application should now be running at `http://localhost:5173/`.

## Live Demo

Check out the live version of the app here:

[RECIPE APP](https://prashantswaroop001.github.io/FOOD-RECIPE-APP/)

## Folder Structure

```bash
├── public
├── src
│   ├── components    # Reusable UI components
│   ├── features      # Redux slices and thunk logic
│   ├── pages         # Page components (e.g. Home, Favorites)
│   ├── App.jsx       # Main App component
│   ├── main.jsx      # Entry point
├── .env              # Environment variables
├── package.json      # Project dependencies and scripts
├── tailwind.config.js# Tailwind CSS configuration
└── vite.config.js    # Vite configuration
```

## Learning Highlights

- **React Redux**: Used to manage global state efficiently.
- **Redux Thunk**: Handled asynchronous API calls and integrated them into the app's workflow.
- **Environment Variables**: Secured sensitive data such as API keys by using `.env` files, keeping them out of version control.
  
## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
