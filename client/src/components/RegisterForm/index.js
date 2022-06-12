import Button from "../Elements/Button";
import Input from "../Elements/Input";

const RegisterForm = () => {
  return (
    <div className="bg-white w-1/3 shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
      <Input
        id={"firstName"}
        name={"firstName"}
        type={"text"}
        label={"First Name"}
        placeholder={""}
      />
      <Input
        id={"lastName"}
        name={"lastName"}
        type={"text"}
        label={"Last Name"}
        placeholder={""}
      />
      <Input
        id={"email"}
        name={"email"}
        type={"email"}
        label={"Email"}
        placeholder={""}
      />
      <Input
        id={"password"}
        name={"password"}
        type={"password"}
        label={"Password"}
        placeholder={"********"}
      />
      <div className="flex items-center justify-between">
        <Button
          bgColor={"bg-cyan-500"}
          hoverColor={"hover:bg-cyan-600"}
          text={"Sign up"}
          textColor={"text-white"}
        />
        <p className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-700">
          Already have an account? Log in
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
