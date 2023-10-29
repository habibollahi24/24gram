import { Routes, Route } from "react-router-dom";
import AuthLayout from "./auth/auth-layout";
import SignIn from "./auth/pages/signin-page";
import SignUp from "./auth/pages/signup-page";
import RootLayout from "./root/root-layout";
import Home from "./root/pages/home-page";

function App() {
  return (
    <main>
      <Routes>
        {/* public routes */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Route>

        {/* protect routes */}
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
