import FormTitle from "../components/Elements/FormTitle";
import LoginForm from "../components/LoginForm";

function Login() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center ">
      <FormTitle title={"Log in"} />
      <LoginForm />
    </div>
  );
}

export default Login;
