import Button from "../Elements/Button";
import Input from "../Elements/Input";
const LoginForm = () => {
  return (
    <div className="bg-white w-1/3 shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
      <Input
        id={"email"}
        name={"email"}
        type={"email"}
        label={"Email"}
        placeholder={"Email"}
      />
      <Input
        id={"password"}
        name={"password"}
        label={"Password"}
        type={"password"}
        placeholder={"***********"}
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
        />
        <p className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-700">
          Forgot Password?
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
