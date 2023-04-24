import { createBrowserRouter } from "react-router-dom";
import {
  Home,
  NotFoundPage,
  Event,
  PerfilUsuario,
  Login,
  RegisterUser,
} from "../pages";

export const UserRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/register",
    element: <RegisterUser />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/perfil",
    element: <PerfilUsuario />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/event",
    element: <Event />,
    errorElement: <NotFoundPage />,
  },
]);
