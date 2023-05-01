import React, { useState } from "react";

export function NewToDoForm({ addTodo }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;
    addTodo(newItem);
    setNewItem("");
  }
  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label className="label-new-item">New Item</label>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
}
