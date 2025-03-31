import React, { useState } from "react";

const TodoItem = ({ todo, onDelete, onToggle, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (newText.trim() !== "") {
      onEdit(todo.id, newText);
      setIsEditing(false);
    }
  };

  return (
    <li
      style={{
        textDecoration: todo.completed ? "line-through" : "none",
        cursor: "pointer",
      }}
    >
      {isEditing ? (
        <>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button onClick={handleSave}>💾 Save</button>
        </>
      ) : (
        <>
          <span onClick={() => onToggle(todo.id)}>{todo.text}</span>
          <button onClick={handleEdit}>✏️ Edit</button>
          <button onClick={() => onDelete(todo.id)}>❌ Delete</button>
        </>
      )}
    </li>
  );
};

export default TodoItem;
