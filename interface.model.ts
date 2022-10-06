export interface InputProps {
  id: string;
  label: string;
  value: string | number;
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type: "text" | "password" | "email";
}

export interface ButtonProps {
  children: React.ReactNode;
  type: "button" | "submit" | "reset";
}

export interface FormUserProps {
  type: "login" | "register";
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export interface UserStateTypes {
  fullname: string;
  email: string;
  password: string;
  gender: string;
}

export interface SignInBody {
  email: string;
  password: string;
}

export interface SignInResponse {
  uid?: string;
  fullname?: string;
  token?: string;
  status?: number;
  data?: {
    message: string;
  };
}

export interface SignUpBody {
  fullname: string;
  email: string;
  password: string;
  gender: string;
}

export interface GetProfileResponse {
  message: string;
  data: {
    _id: string;
    fullname: string;
    email: string;
    password: string;
    profilePicture: string;
    gender: string;
  };
}

export interface ProductTypes {
  _id: string;
  title: string;
  desc: string;
  price: number;
  creator: string;
  thumbnail: string;
}

export interface GetProductsType {
  message: string;
  data: ProductTypes[];
}
