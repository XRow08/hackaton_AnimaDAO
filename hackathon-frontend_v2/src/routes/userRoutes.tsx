import { createBrowserRouter } from "react-router-dom";
import { CreateEvent, NotFoundPage } from "../pages";
import Home from "../pages/Home/Home";
import EventSoon from "../pages/event-soon";
import Event from "../pages/event";
import { MyEvent } from "../pages/my-event";
import { CreateTicket } from "../pages/create-ticket";
import Perfil from "../pages/perfil/Perfil";

export const UserRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/create-event",
    element: <CreateEvent />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/event",
    element: <Event />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/perfil",
    element: <Perfil />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/event-soon",
    element: <EventSoon />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/my-event/:name",
    element: <MyEvent />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/create-ticket",
    element: <CreateTicket />,
    errorElement: <NotFoundPage />,
  },
]);
