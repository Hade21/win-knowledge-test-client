import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { InputProps } from "../../../../interface.model";

const Input = ({
  id,
  label,
  value,
  onChange,
  placeholder,
  type,
}: InputProps) => {
  const [show, setShow] = useState(false);
  const [inputType, setInputType] = useState(type);
  const handleShow = () => {
    if (inputType === "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
    setShow(!show);
  };

  return (
    <div className="relative flex w-full flex-col items-start justify-center gap-2">
      <label htmlFor={id} className="text-base font-normal">
        {label}
      </label>
      <input
        id={id}
        type={inputType}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full rounded border border-input-border px-3 py-2 text-lg font-normal text-black placeholder:text-placeholder focus:border-2 focus:border-sky-500 focus:outline-none"
        required
      />
      {type === "password" ? (
        <div className="view-pass absolute top-12 right-6 cursor-pointer text-2xl">
          {show ? (
            <AiFillEyeInvisible onClick={handleShow} />
          ) : (
            <AiFillEye onClick={handleShow} />
          )}
        </div>
      ) : null}
    </div>
  );
};

export default Input;
