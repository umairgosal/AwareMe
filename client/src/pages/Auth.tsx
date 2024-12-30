import { Link } from "react-router-dom";
import { LoginForm } from "../components/auth/LoginForm";
import { RegisterForm } from "../components/auth/RegisterForm";

export function Auth({ mode }: { mode: "login" | "register" }) {
  return (
    <div className="relative min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      {/* Black overlay with transparency */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhka4Xb636Y-t-u0YVkA7kxG9p0QjRyYfQ4Rf6X_xts7WAgdCRvURpKItM1S6-qpGJMJN8Q3HWYXziAPD8jp_qyMiK0rXnd_EsOIgwCAUwT0DeWDb296aHJz1nDKAmjOs5moZHKia72OYTz/s320/290x230-Pakistani-women.jpg')`,
        }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content Wrapper */}
      <div className="relative sm:max-w-md sm:w-auto ml-8">
        <div className="bg-white rounded-lg shadow-lg py-8 px-4 sm:px-10">
          <h2 className="text-center text-4xl font-extrabold text-gray-900">
            {mode === "login"
              ? "Sign in to your account"
              : "Create your account"}
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            {mode === "login" ? (
              <>
                Or{" "}
                <Link
                  to="/register"
                  className="font-medium text-cyan-600 hover:text-cyan-500"
                >
                  create a new account
                </Link>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-medium text-cyan-600 hover:text-cyan-500"
                >
                  Sign in
                </Link>
              </>
            )}
          </p>
        </div>

        <div className="mt-8">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            {mode === "login" ? <LoginForm /> : <RegisterForm />}
          </div>
        </div>
      </div>
    </div>
  );
}
