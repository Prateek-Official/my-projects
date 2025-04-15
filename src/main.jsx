import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MovieApp from "./components/Movie App/components/MovieApp.jsx";
import MovieDetail from "./components/Movie App/components/MovieDetail";
import MoviesContainer from './components/Movie App/components/MoviesContainer';
// import OtpContainer from './components/OTP_INPUT/OtpConatiner';
import OtpContainer from "./components/OTP_INPUT/OtpContainer.jsx";
import ProductsContainer from "./components/Products_Pagination/components/ProductsContainer.jsx";
import TodoHome from "./components/Todo_List_App/components/TodoHome.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/movieapp",
    element: <MovieApp />,
    children: [
      {
        path: "/movieapp",
        element: <MoviesContainer />
      },
      {
        path: "movie/:movieID",
        element: <MovieDetail />,
      },
    ],
  },
  {
    path: "/otpcontainer",
    element: <OtpContainer />
  },
  {
    path: "/productspagination",
    element: <ProductsContainer />
  },
  {
    path:"/todoapp",
    element: <TodoHome />
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);
