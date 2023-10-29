import { Outlet, Navigate } from "react-router-dom";

function AuthLayout() {
  const isAuth = false;
  return (
    <>
      {isAuth ? (
        <Navigate to="/" />
      ) : (
        <section className="flex items-center">
          <div className="w-full  md:w-1/2 flex items-center justify-center h-screen">
            <Outlet />
          </div>
          <div className="hidden md:block md:w-1/2  ">
            <img
              src="assets/images/side-img.svg"
              className="w-full h-screen object-cover "
            />
          </div>
        </section>
      )}
    </>
  );
}

export default AuthLayout;
