import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useGetUserQuery } from "../../../services/productApi/productApi";
import { Avatar } from "../../../assets";

const Header = () => {
  const navigate = useNavigate();
  const [cookies, setCookies, removeCookies] = useCookies(["user", "token"]);
  const uid = cookies.user;
  const { data } = useGetUserQuery(uid);

  const handleLogout = () => {
    removeCookies("token");
    removeCookies("user");
    navigate("/");
  };

  return (
    <header className="px-4 md:px-20 py-2 md:py-4 border-b border-b-tipis flex justify-between items-center">
      <div className="left">
        <p className="text-2xl font-semibold">Pasar Online</p>
      </div>
      <div className="right text-lg font-normal text-biru-2 flex gap-4 items-center">
        <div
          className="avatar cursor pointer w-12 h-12 rounded-full"
          onClick={() => navigate(`/profile/${uid}`)}
        >
          <img
            src={data ? data.data.profilePicture : Avatar}
            alt="avatar"
            className="object-cover object-center cursor-pointer active:translate-t-1 transform transition duration-300 ease-in-out"
          />
        </div>
        {!uid ? (
          <Link to="/login">Masuk</Link>
        ) : (
          <p className="cursor-pointer" onClick={handleLogout}>
            Keluar
          </p>
        )}
      </div>
    </header>
  );
};

export default Header;
