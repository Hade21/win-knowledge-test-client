import { Footer, Header } from "../../components";
import { useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useGetUserQuery } from "../../services/productApi/productApi";
import { Avatar } from "../../assets";

const Profile = () => {
  const params = useParams();
  const [cookies] = useCookies();
  const token = cookies.token;
  const id = params.id as string;
  const { data } = useGetUserQuery({ id, token });
  const profile = data?.data.profilePicture;
  console.log(data);
  return (
    <div className="">
      <Header />
      <div className="main wrapper mt-20 mb-40 px-4 md:px-[17%]">
        <h1 className="text-3xl font-medium mb-8">Profile</h1>
        <div className="detail flex justify-between items-center mt-24">
          <div className="image w-60 h-60 rounded-full">
            <img
              src={profile ? profile : Avatar}
              alt="profile"
              className="object-cover object-center"
            />
          </div>
          <div className="detail text-2xl">
            <h2 className="nama">Nama: {data?.data.fullname}</h2>
            <p className="email">Email: {data?.data.email}</p>
            <p className="gender">Jenis kelamin: {data?.data.gender}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
