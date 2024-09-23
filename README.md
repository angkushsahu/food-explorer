# Food Explorer

An interactive web application that allows users to explore products from the Open Food Facts API. Built with Next.js, TypeScript, and Tailwind CSS.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Improvements](#improvements)
- [Important Links](#important-links)

## Features

- **Beautiful Hero Section.**
- **Product Listing**: Displays a list of arbitrary products fetched from the API.
- **Filtering**:
  - **Search by Name**: Find products by entering a product name.
  - **Search by Barcode**: Find products by entering their barcode number.
  - **Search by Categories**: Choose from a list of categories available in the API.
  - **Sort Alphabetically**: Sorts products in alphabetical order.
  - **Sort by Nutritional Value**: Sorts products on their nutrient grades (from 'A' to 'E', with 'A' being the best and 'E' being the worst).
  - Latest filter changes overwrite previous ones for enhanced user experience.
  - Removing a filter reverts to the previously applied filter automatically.
- **Sticky Filter Dropdown**: The filter menu sticks to the top during scrolling for better user experience.
- **Load More Functionality**: A "Load More" button fetches additional products based on current filters or arbitrary data if no filters are set.
- **Product Details Page**: Clicking "Know More" link on a product navigates to a page with detailed information about the product.
- **Cart Functionality**:
  - Add products to the cart from any page.
  - Cart state is consistent through the application and updates across all pages.
- **Global State Management**: Implemented using React Context API.
- **Custom Hooks**: Utilized for data fetching.
- **SEO Optimization**: Proper metadata settings using Next.js's built-in techniques for better search engine visibility.

## Technologies Used

![My Skills](https://skillicons.dev/icons?i=ts,react,next,tailwind&theme=dark)

- **TypeScript**
- **React**
- **Next.js 14**
- **Tailwind CSS**
- **Open Food Facts API**

## Installation

```bash
git clone https://github.com/angkushsahu/food-explorer.git
cd food-explorer
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser

## Improvements

- **Data Caching:** Implementation of server state management using frameworks like `@tanstack/react-query` for caching data and reducing API calls.
- **Persistent Cart State:** Storing cart data in `localStorage` to maintain the cart state even after page refreshes or browser restarts.

## Important Links

[![portfolio](https://img.shields.io/badge/my_portfolio-teal?style=for-the-badge&logo=ko-fi&logoColor=white)](https://angkushsahu.vercel.app)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/angkushsahu)
[![mail](https://img.shields.io/badge/Mail-red?style=for-the-badge&logo=gmail&logoColor=white)](https://angkushsahu.vercel.app/contact)
[![github](https://img.shields.io/badge/Github-gray?style=for-the-badge&logo=github&logoColor=white)](https://github.com/angkushsahu)