import { FormUser } from "../../components";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import { useLoginMutation } from "../../services/userApi/userApi";
import { RootState } from "../../app/store";
import { useEffect, useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [cookies, setCookies] = useCookies(["token", "user"]);
  const [alert, setAlert] = useState("");
  const [login, { isSuccess, isLoading, error, data }] = useLoginMutation();
  const email = useSelector((state: RootState) => state.user.email);
  const password = useSelector((state: RootState) => state.user.password);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body = {
      email,
      password,
    };
    await login(body);
  };
  useEffect(() => {
    if (error && "status" in error) {
      if (error.status === 403) {
        setAlert("Email or password is wrong!");
      }
    }
  }, [error]);
  useEffect(() => {
    if (isSuccess) {
      setCookies("token", data?.token, { path: "/" });
      setCookies("user", data?.uid, { path: "/" });
      navigate("/");
    }
  }, [isSuccess]);

  return (
    <div className="w-screen h-screen bg-black bg-opacity-30 flex items-center justify-center px-4">
      <div className="card p-8 lg:max-w-1/3 bg-white rounded flex flex-col gap-8 w-full">
        <div className="title">
          <h1 className="text-4xl font-medium">Login</h1>
          {alert && (
            <p className="alert px-4 py-2 bg-merah rounded text-white mt-2">
              {alert}
            </p>
          )}
        </div>
        {isLoading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <FormUser type="login" onSubmit={handleSubmit} />
        )}
      </div>
    </div>
  );
};

export default Login;
