import { Link } from "react-router-dom";
import SignUpForm from "../components/signUpForm";

function SignUp() {
  return (
    <div className="flex justify-center flex-col items-center   p-2">
      <h2 className="flex items-center space-x-2 text-2xl mb-6">
        <img src="/favicon.ico" alt="logo" width={22} />
        <span>24__gram</span>
      </h2>
      <p className="font-bold text-xl">Create a new account</p>
      <p className="text-light-3 text-sm font-semibold">
        to use 24__gram , please enter your details
      </p>
      <SignUpForm />
      <p className="mt-3 text-sm text-light-2 ">
        already have an account?{" "}
        <Link to="/sign-in" className="font-bold text-light-3">
          sign in
        </Link>
      </p>
    </div>
  );
}

export default SignUp;
