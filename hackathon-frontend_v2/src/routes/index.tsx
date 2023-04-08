import { RouterProvider } from "react-router-dom";
import { UserRoutes } from "./userRoutes";

export function AppRoutes() {
  return <RouterProvider router={UserRoutes} />;
}
