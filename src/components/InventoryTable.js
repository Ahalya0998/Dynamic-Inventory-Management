
import React, { useState } from "react";

const InventoryTable = () => {
  const [inventory, setInventory] = useState([]);
  const [newItem, setNewItem] = useState({ name: "", category: "", quantity: "" });
  const [filterCategory, setFilterCategory] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc"); // Default sort order

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const addItem = () => {
    if (newItem.name && newItem.category && newItem.quantity) {
      setInventory([...inventory, { ...newItem, quantity: parseInt(newItem.quantity) }]);
      setNewItem({ name: "", category: "", quantity: "" });
    }
  };

  const editItem = (index) => {
    setIsEditing(true);
    setEditingIndex(index);
    setNewItem(inventory[index]);
  };

  const updateItem = () => {
    const updatedInventory = [...inventory];
    updatedInventory[editingIndex] = { ...newItem, quantity: parseInt(newItem.quantity) };
    setInventory(updatedInventory);
    setNewItem({ name: "", category: "", quantity: "" });
    setIsEditing(false);
    setEditingIndex(null);
  };

  const deleteItem = (index) => {
    setInventory(inventory.filter((_, i) => i !== index));
  };

  const filteredInventory = filterCategory
    ? inventory.filter((item) => item.category.toLowerCase() === filterCategory.toLowerCase())
    : inventory;

  const sortedInventory = [...filteredInventory].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.quantity - b.quantity;
    } else {
      return b.quantity - a.quantity;
    }
  });

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  // Inline styles
  const styles = {
    container: { padding: "20px" },
    heading: { textAlign: "center", marginBottom: "20px" },
    inputGroup: { display: "flex", gap: "10px", marginBottom: "20px" },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      marginTop: "20px",
    },
    th: {
      border: "1px solid #ddd",
      padding: "8px",
      textAlign: "left",
      backgroundColor: "#f2f2f2",
    },
    td: {
      border: "1px solid #ddd",
      padding: "8px",
      textAlign: "left",
    },
    trEven: {
      backgroundColor: "#f9f9f9",
    },
    lowStock: {
      backgroundColor: "lightcoral",
    },
    button: {
      marginLeft: "5px",
      padding: "5px 10px",
      fontSize: "14px",
    },
    sortButton: {
      marginTop: "10px",
      padding: "8px 12px",
      cursor: "pointer",
      fontSize: "14px",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Dynamic Inventory Management Table</h1>

      {/* Input Form */}
      <div style={styles.inputGroup}>
        <input
          type="text"
          name="name"
          placeholder="Item Name"
          value={newItem.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={newItem.category}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={newItem.quantity}
          onChange={handleInputChange}
        />
        {isEditing ? (
          <button style={styles.button} onClick={updateItem}>
            Update Item
          </button>
        ) : (
          <button style={styles.button} onClick={addItem}>
            Add Item
          </button>
        )}
      </div>

      {/* Filter */}
      <div>
        <input
          type="text"
          placeholder="Filter by Category"
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        />
      </div>

      {/* Sort Button */}
      <div>
        <button style={styles.sortButton} onClick={toggleSortOrder}>
          Sort by Quantity ({sortOrder === "asc" ? "Ascending" : "Descending"})
        </button>
      </div>

      {/* Table */}
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Item Name</th>
            <th style={styles.th}>Category</th>
            <th style={styles.th}>Quantity</th>
            <th style={styles.th}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sortedInventory.map((item, index) => (
            <tr
              key={index}
              style={
                item.quantity < 10
                  ? { ...styles.td, ...styles.lowStock }
                  : index % 2 === 0
                  ? styles.trEven
                  : {}
              }
            >
              <td style={styles.td}>{item.name}</td>
              <td style={styles.td}>{item.category}</td>
              <td style={styles.td}>{item.quantity}</td>
              <td style={styles.td}>
                <button style={styles.button} onClick={() => editItem(index)}>
                  Edit
                </button>
                <button style={styles.button} onClick={() => deleteItem(index)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryTable;
