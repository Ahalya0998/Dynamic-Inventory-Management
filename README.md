# Dynamic Inventory Management Table

A web-based application to manage inventory dynamically, including features for adding, editing, deleting, filtering, and sorting items. This project is built using **React**.

## Features

- **Add Items**: Add new items with a name, category, and quantity.
- **Edit Items**: Update existing inventory details.
- **Delete Items**: Remove items from the inventory.
- **Filter by Category**: Filter inventory based on categories.
- **Sort by Quantity**: Sort items by quantity in ascending or descending order.
- **Low Stock Highlight**: Items with quantity less than 10 are highlighted.

## Technologies Used

- **Frontend**: React, JavaScript, CSS
- **Styling**: Inline styles for simplicity

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Ahalya0998/Dynamic-Inventory-Management.git

2. Navigate to the project directory:
     cd your-repo-name
3. Install dependencies:
    npm install
4. Start the development server:
   npm start

## Usage

- Open the app in your browser at http://localhost:3000.
- Use the input fields to add new inventory items.
- Filter items by entering a category in the filter input box.
- Click the "Sort by Quantity" button to toggle between ascending and descending order.
- Use the edit and delete buttons to manage inventory items.

## Project Structure
```plaintext

├── src
│   ├── components
│   │   └── InventoryTable.js  # Main component
│   ├── App.js                 # Entry point
│   ├── index.js               # Renders the app
│   └── styles.css             # (If applicable for additional styling)
├── public
│   └── index.html
├── package.json
└── README.md

```
