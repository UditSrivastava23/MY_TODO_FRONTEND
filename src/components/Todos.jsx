/* eslint-disable no-unused-vars */
import React from "react";

// eslint-disable-next-line react/prop-types
function Todos({ todos }) {
  return (
    <div>
      {/* eslint-disable-next-line react/prop-types */}
      {todos.map(function (todo) {
        return (
          // eslint-disable-next-line react/jsx-key
          <div>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button>Mark as Completed</button>
          </div>
        );
      })}
    </div>
  );
}

export default Todos;
