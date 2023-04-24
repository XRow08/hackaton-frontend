import { RouterProvider } from "react-router-dom";
import { UserRoutes } from "./userRoutes";
import { EnterpriseRoutes } from "./enterpriseRoutes";

export function AppRoutes() {
  const user = false;
  return <RouterProvider router={user ? UserRoutes : EnterpriseRoutes} />;
}
