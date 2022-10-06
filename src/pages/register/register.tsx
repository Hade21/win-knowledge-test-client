import { FormUser } from "../../components";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import { useRegisterMutation } from "../../services/userApi/userApi";
import { RootState } from "../../app/store";
import { useEffect, useState } from "react";

const Register = () => {
  const navigate = useNavigate();
  const [alert, setAlert] = useState("");
  const [register, { isSuccess, isLoading, error, data }] =
    useRegisterMutation();
  const fullname = useSelector((state: RootState) => state.user.fullname);
  const email = useSelector((state: RootState) => state.user.email);
  const password = useSelector((state: RootState) => state.user.password);
  const gender = useSelector((state: RootState) => state.user.gender);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body = {
      fullname,
      email,
      password,
      gender,
    };
    await register(body);
  };
  useEffect(() => {
    if (error && "status" in error) {
      if (error.status === 422) {
        setAlert("Email has been taken!");
      }
    }
  }, [error]);
  useEffect(() => {
    if (isSuccess) {
      navigate("/login");
    }
  }, [isSuccess]);

  return (
    <div className="w-screen h-screen bg-black bg-opacity-30 flex items-center justify-center px-4">
      <div className="card p-8 lg:max-w-1/3 bg-white rounded flex flex-col gap-8 w-full">
        <div className="title">
          <h1 className="text-4xl font-medium">Register</h1>
          {alert && (
            <p className="alert px-4 py-2 bg-merah rounded text-white mt-2">
              {alert}
            </p>
          )}
        </div>
        {isLoading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <FormUser type="register" onSubmit={handleSubmit} />
        )}
      </div>
    </div>
  );
};

export default Register;
