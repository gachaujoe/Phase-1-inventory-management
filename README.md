### Product Inventory Application

#### Overview

The Product Inventory Application is a single-page web application that allows users to view, filter, search, and sort a list of products. The products are fetched from a local `db.json` file using `json-server` and displayed in a responsive grid layout. This application provides a clean, interactive interface for managing and exploring product data.

#### Features

- **Grid Layout**: Products are displayed in a responsive grid layout, adjusting the number of columns based on the screen size.
- **Search**: Users can search for products by name.
- **Filter by Category**: Users can filter products by category.
- **Sort by Price**: Users can sort products by price in ascending order.
- **Dark/Light Mode**: Users can toggle between dark and light themes for the application.

#### Technologies Used

- **HTML**: Markup language for structuring the application.
- **CSS**: Styling language for designing the layout and appearance.
- **JavaScript**: Scripting language for adding interactivity and handling data.
- **json-server**: Tool for setting up a REST API with a `db.json` file for demonstration purposes.

#### Getting Started

1. **Clone the Repository**

   bash
   git clone https://github.com/gachaujoe/Phase-1-inventory-management.git
   cd product-inventory
   

2. **Install Dependencies**

   Ensure you have `json-server` installed globally. If not, you can install it via npm:

   bash
   npm install -g json-server
   

3. **Start the JSON Server**

   Start the `json-server` to serve the `db.json` file:

   bash
   json-server --watch db.json
   

   This will start a local server at `http://localhost:3000`.

4. **Open the Application**

   Open `public/index.html` in your browser to view the application.

#### File Structure

- **public/**: Contains all static files.
  - **images/**: Folder for product images.
  - **index.html**: Main HTML file.
  - **styles.css**: CSS file for styling.
  - **script.js**: JavaScript file for functionality.
- **db.json**: JSON file containing product data for `json-server`.

#### Customizing

To customize the application:
- Update `db.json` with new product data.
- Add or modify CSS styles in `styles.css`.
- Extend JavaScript functionality in `script.js`.

### Conclusion

This project aims to provide a practical and interactive solution for managing product inventories. It will demonstrate proficiency in front-end development, API integration, and responsive design.
