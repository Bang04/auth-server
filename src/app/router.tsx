import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { MyPage } from "../pages/MyPage";
import { ProtectedRoute } from "../auth/protectedRouter";
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