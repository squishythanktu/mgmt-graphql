import { Link } from "react-router-dom";
import logo from "src/assets/logo.png";
import PATH from "../../constants/path.constant";

export default function Header() {
  return (
    <nav className="navbar bg-slate-50 mb-4 p-0 py-2 px-4">
      <div className="container">
        <Link to={PATH.home} className="navbar-brand">
          <div className="flex items-center">
            <img src={logo} alt="logo" className="mr-2 w-[50px]" />
            <h3 className="text-2xl text-pink-600">Mgmt GraphQL</h3>
          </div>
        </Link>
      </div>
    </nav>
  );
}
