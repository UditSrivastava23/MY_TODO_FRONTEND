/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Todos from "./Todos";

const CreateTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="Title"
        style={{
          padding: 10,
          margin: 10,
        }}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <br />
      <input
        type="text"
        placeholder="description"
        style={{
          padding: 10,
          margin: 10,
        }}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <br />
      <button
        style={{
          padding: 10,
          margin: 10,
        }}
        onClick={() => {
          fetch("http://localhost:4000/todo", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              description: description,
            }),
            headers: {
              "content-Type": "application/json",
            },
          });
        }}
      >
        Add a Todo
      </button>
    </div>
  );
};

export default CreateTodo;
