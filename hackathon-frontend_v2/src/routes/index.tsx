import { RouterProvider } from "react-router-dom";
import { AuthenticatedRoutes } from "./authenticatedRoutes";

export function AppRoutes() {
  return (
    <RouterProvider
      router={AuthenticatedRoutes}
    />
  );
}
