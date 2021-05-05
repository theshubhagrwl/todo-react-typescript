import React from "react";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const todos = [{ id: "t1", text: "Learnt TS" }];

  return (
    <div className="App">
      <NewTodo />
      <TodoList items={todos} />
    </div>
  );
};

export default App;
