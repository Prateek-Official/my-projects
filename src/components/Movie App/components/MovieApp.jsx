import Footer from "./Footer";
import { Link } from "react-router-dom";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../utils/store";

function MovieApp() {
  return (
    <Provider store={store}>
      <div className="bg-blue-800 h-screen">
        <div>
          <Link to="/movieapp">To Movie App</Link>
        </div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </Provider>
  );
}

export default MovieApp;
