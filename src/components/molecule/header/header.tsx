import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="px-4 md:px-20 py-2 md:py-4 border-b border-b-tipis flex justify-between items-center">
      <div className="left">
        <p className="text-2xl font-semibold">Pasar Online</p>
      </div>
      <div className="right text-lg font-normal text-biru-2">
        <Link to="/login">Login</Link>
      </div>
    </header>
  );
};

export default Header;
