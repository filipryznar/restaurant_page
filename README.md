# Restaurant Page

This project is a dynamically rendered restaurant homepage built as part of a learning exercise. The primary objective was to gain hands-on experience with **Webpack** and understand how to bundle JavaScript, styles, and other assets effectively for a modern web development workflow.

## Features

- **Dynamic Content Rendering:** The page content is generated using JavaScript, where each section is created dynamically and appended to the DOM.
- **Modular Structure:** The project follows a modular approach, with each page or feature split into its own JavaScript module.
- **Styling:** CSS is managed separately and imported into the JavaScript files using Webpack.
- **Navigation:** A simple navigation bar allows switching between "Home" and "Menu" pages, with the content dynamically updated.

## How the Page Was Built

1. **HTML Template:**
   - A base HTML file (`template.html`) was created with a `<header>` and an empty `<div>` with an `id` of `content`.
   - The `#content` div is populated dynamically using JavaScript.

2. **JavaScript Modules:**
   - `loadContent.js`: Handles the creation and rendering of the homepage.
   - `menuPage.js`: Handles the creation and rendering of the menu page.
   - `index.js`: Acts as the entry point for the application, managing navigation and dynamic content updates.

3. **Webpack Configuration:**
   - Webpack was configured to bundle JavaScript, styles, and other assets.
   - The project utilizes Webpack's `style-loader` and `css-loader` to handle CSS imports directly in JavaScript files.

4. **CSS Styling:**
   - Styles for the homepage and menu are managed in separate CSS files (`style.css` and `styleMenu.css`) and are imported into their respective JavaScript modules.

5. **Event Listeners for Navigation:**
   - Event listeners were added to the navigation items to dynamically load the appropriate content when a menu item is clicked.
   - A `current` class highlights the active menu item.

6. **Goal of the Project:**
   - The main goal was to understand and apply Webpack's capabilities to bundle JavaScript, manage dependencies, and optimize assets for deployment.

## View the Completed Page

You can view the finished page here: [LINK](https://filipryznar.github.io/restaurant_page/)

