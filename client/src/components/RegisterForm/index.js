import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Elements/Button";
import Input from "../Elements/Input";
import { register, reset } from "../../redux/features/authSlice";
import { toast } from "react-toastify";
import { validEmail, validPassword } from "../../utils/Regex";
import Verify from "../Verification/verify";

const RegisterForm = () => {
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [emailSent, setEmailSent] = useState(false);

  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  const navigate = useNavigate()

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (user) {
      navigate("/")
    }

    if (isSuccess) {
      setEmailSent(true);
      toast.success("Registered successfully!")
    }

    return () => dispatch(reset)
  }, [user, isError, message, isSuccess]);

  // console.log(newUser?.password);

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    // console.log(e);
    setNewUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // console.log(newUser);

  const handleSubmit = () => {
    if (newUser.firstName === "") {
      toast.error("First Name Field is empty!");
      return;
    }
    if (newUser.lastName === "") {
      toast.error("Last Name Field is empty!");
      return;
    }
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
    dispatch(register(newUser));
  };

  return (
    <>
      {emailSent ? <Verify /> : (<div className="bg-white w-1/3 shadow-md rounded px-8 pt-6 pb-8 flex flex-col mb-20">
        <Input
          id={"firstName"}
          name={"firstName"}
          type={"text"}
          label={"First Name"}
          placeholder={""}
          onChange={handleInputChange}
          value={newUser?.firstName}
          required={true}
        />
        <Input
          id={"lastName"}
          name={"lastName"}
          type={"text"}
          label={"Last Name"}
          placeholder={""}
          onChange={handleInputChange}
          value={newUser?.lastName}
          required={true}

        />
        <Input
          id={"email"}
          name={"email"}
          type={"email"}
          label={"Email"}
          placeholder={""}
          onChange={handleInputChange}
          value={newUser?.email}
          required={true}

        />
        <Input
          id={"password"}
          name={"password"}
          type={"password"}
          label={"Password"}
          placeholder={"********"}
          onChange={handleInputChange}
          value={newUser?.password}
          required={true}

        />
        <div className="flex items-center justify-between">
          <Button
            bgColor={"bg-cyan-500"}
            hoverColor={"hover:bg-cyan-600"}
            text={"Sign up"}
            textColor={"text-white"}
            type={"button"}
            onClick={handleSubmit}
            disabled={isLoading}
          />
          <Link to="/login">
            <p className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-700">
              Already have an account? Log in
            </p>
          </Link>
        </div>
      </div>)}
    </>
  );
};

export default RegisterForm;
