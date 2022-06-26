import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "../../redux/features/authSlice";
import { validEmail, validPassword } from "../../utils/Regex";
import Button from "../Elements/Button";
import Input from "../Elements/Input";
const LoginForm = () => {

  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate()

  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (user || isSuccess) {
      if (user.userType === "admin") navigate("/admin_dashboard")
      else navigate("/")
    }

    return () => dispatch(reset())
  }, [isError, message, isSuccess]);


  const handleInputChange = (e) => {
    // console.log(e);
    setNewUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    if (newUser.email === "") {
      toast.error("Email Field is empty!");
      return;
    }
    if (newUser.password === "") {
      toast.error("Password Field is empty!");
      return;
    }
    if (!validEmail.test(newUser.email)) {
      toast.error("Email is not valid!");
      return;
    }
    if (!validPassword.test(newUser.password)) {
      toast.error(
        "Password should be at least 6 characters long with alphabets!"
      );
      return;
    }
    dispatch(login(newUser));
  };

  return (
    <div className="bg-white w-1/3 shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
      <Input
        id={"email"}
        name={"email"}
        type={"email"}
        label={"Email"}
        placeholder={"Email"}
        onChange={handleInputChange}
        value={newUser?.email}
        required={true}
      />
      <Input
        id={"password"}
        name={"password"}
        label={"Password"}
        type={"password"}
        placeholder={"***********"}
        onChange={handleInputChange}
        value={newUser?.password}
        required={true}
      />
      <div className="mb-6">
        <p className="text-red-600 text-xs italic">Please choose a password.</p>
      </div>
      <div className="flex items-center justify-between">
        <Button
          text={"Sign in"}
          bgColor={"bg-blue-500"}
          hoverColor={"bg-blue-600"}
          textColor={"text-white"}
          type={"button"}
          onClick={handleSubmit}
          disabled={isLoading}
        />
        <p className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-700">
          Forgot Password?
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
