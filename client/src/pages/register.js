import FormTitle from "../components/Elements/FormTitle";
import RegisterForm from "../components/RegisterForm";

function register() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center ">
      <FormTitle title={"Create an account"} />
      <RegisterForm />
    </div>
  );
}

export default register;
