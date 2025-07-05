import './App.css'
import TodoInput from "./components/TodoInput.tsx";
import FilterTabs from "./components/FilterTabs.tsx";
import TodoList from "./components/TodoList.tsx";

function App() {

  return (
    <>
      <h1>Todo App</h1>
      <div className="card">
          <TodoInput/>
          <FilterTabs/>
          <TodoList/>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
