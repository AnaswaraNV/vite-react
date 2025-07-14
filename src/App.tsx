import './App.css'
import {NavLink, Outlet} from "react-router-dom";

function App() {

  return (
    <>
        <h1 className="text-3xl font-bold mb-6">MultiApp</h1>

        <div className="cards p-6 bg-gray-50 rounded-lg shadow-md">
            <nav className="m-6 flex space-x-6 text-lg">
                <NavLink
                    to=""
                    end
                    className={({ isActive }) =>
                        isActive
                            ? "text-blue-600 font-semibold underline"
                            : "text-gray-700 hover:text-blue-500 m-10"
                    }
                >
                    Dashboard
                </NavLink>
                <NavLink
                    to="/todo"
                    className={({ isActive }) =>
                        isActive
                            ? "text-blue-600 font-semibold underline"
                            : "text-gray-700 hover:text-blue-500 m-10"
                    }
                >
                    TodoApp
                </NavLink>
                <NavLink
                    to="/fibonacci"
                    className={({ isActive }) =>
                        isActive
                            ? "text-blue-600 font-semibold underline"
                            : "text-gray-700 hover:text-blue-500 m-10"
                    }
                >
                    FibonacciApp
                </NavLink>
            </nav>

            <Outlet /> {/* nested routes render here */}
        </div>

    </>
  )
}

export default App
