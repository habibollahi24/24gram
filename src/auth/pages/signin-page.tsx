import SignInForm from "../components/signInForm";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div className="flex justify-center flex-col items-center   p-2">
      <h2 className="flex items-center space-x-2 text-2xl mb-6">
        <img src="/favicon.ico" alt="logo" width={22} />
        <span>24__gram</span>
      </h2>
      <p className="font-bold text-xl">Login to your account</p>
      <p className="text-light-3 text-sm font-semibold">
        welcome back.please enter your details
      </p>
      <SignInForm />
      <p className="mt-3 text-sm text-light-4 ">
        Don't have an account?{" "}
        <Link to="/sign-up" className="font-bold">
          signUp
        </Link>
      </p>
    </div>
  );
}

export default SignIn;
