import { useDispatch } from "react-redux";
import { FormUserProps } from "../../../../interface.model";
import { RootState } from "../../../app/store";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, GenderSelect, Input } from "../../atom";
import {
  setEmail,
  setFullname,
  setGender,
  setPassword,
} from "../../../features/userSlice/userSlice";
import { useEffect } from "react";

const FormUser = ({ type, onSubmit }: FormUserProps) => {
  const dispatch = useDispatch();
  const fullname = useSelector((state: RootState) => state.user.fullname);
  const email = useSelector((state: RootState) => state.user.email);
  const password = useSelector((state: RootState) => state.user.password);
  const gender = useSelector((state: RootState) => state.user.gender);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id } = e.currentTarget;
    if (id === "fullname") {
      dispatch(setFullname(e.currentTarget.value));
    } else if (id === "email") {
      dispatch(setEmail(e.currentTarget.value));
    } else if (id === "password") {
      dispatch(setPassword(e.currentTarget.value));
    }
  };
  const handleGender = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setGender(e.target.value));
  };

  useEffect(() => {
    dispatch(setEmail(""));
    dispatch(setFullname(""));
    dispatch(setGender(""));
    dispatch(setPassword(""));
  }, [type]);

  return (
    <form onSubmit={onSubmit} className="flex w-full flex-col gap-2">
      {type === "register" ? (
        <Input
          id="fullname"
          label="Fullname"
          type="text"
          placeholder="Enter your name"
          value={fullname}
          onChange={handleChange}
        />
      ) : null}
      <Input
        id="email"
        label="Email"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={handleChange}
      />
      {type === "register" ? (
        <GenderSelect value={gender} onChange={handleGender} />
      ) : null}
      <Input
        id="password"
        label="Password"
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={handleChange}
      />
      <div className="button mx-auto mt-8">
        <Button type="submit">
          {type === "register" ? "Register" : "Login"}
        </Button>
      </div>
      <div className="switch mt-6 text-base font-normal">
        {type === "register" ? (
          <p>
            Don't have an Account?{" "}
            <Link to="/login" className="cursor-pointer text-merah">
              Login
            </Link>
          </p>
        ) : (
          <p>
            Have an Account?{" "}
            <Link to="/register" className="cursor-pointer text-merah">
              Register
            </Link>
          </p>
        )}
      </div>
    </form>
  );
};

export default FormUser;
