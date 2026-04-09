import './App.css'
import { createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "./router/protectedRouter";
import { RouterProvider } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { MyPage } from "./pages/MyPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/my",
    element: (
      <ProtectedRoute>
        <MyPage />
      </ProtectedRoute>

    ),
  },
]);
function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App

