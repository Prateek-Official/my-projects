import user from "../assets/user.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-blue-950 text-white flex items-center justify-between">
      <Link to="/movieapp">
        <div className="flex items-center">
          <img src={user} alt="logo" className="w-10" />
          <h1 className="ml-2">Movie App</h1>
        </div>
      </Link>

      <div>
        <Link to="/">My Projects Page</Link>
      </div>
    </div>
  );
};

export default Header;
