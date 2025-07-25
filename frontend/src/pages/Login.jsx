import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { asyncLoginUser } from "../store/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";


const Login = () => {
    const { register , reset, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector((state) => state.userReducer.users);

    const LoginHandler = (user) => { 
        dispatch(asyncLoginUser(user));
    };

    useEffect(() => {
    if (user?.id) {
      navigate("/");
      reset();
    }
  }, [user]);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#d0d0d0] to-[#4b4b4b] flex justify-center">
    <div className="flex flex-col w-full sm:w-1/2 px-4 py-12 sm:py-32 items-center sm:items-start">
      <form
        onSubmit={handleSubmit(LoginHandler)}
        className="bg-white/70 backdrop-blur-md shadow-2xl rounded-2xl p-10 w-full max-w-md"
      >
        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Login</h2>

        <input
          {...register("email")}
          className="mb-4 w-full outline-none border-b-2 border-gray-400 focus:border-blue-500 bg-transparent p-3 text-lg placeholder-gray-500"
          type="email"
          placeholder="john@doe.com"
          required
        />

        <input
          {...register("password")}
          className="mb-6 w-full outline-none border-b-2 border-gray-400 focus:border-blue-500 bg-transparent p-3 text-lg placeholder-gray-500"
          type="password"
          placeholder="******"
          required
        />

        <button
          type="submit"
          className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold text-lg shadow-lg hover:from-blue-600 hover:to-indigo-600 transition duration-300"
        >
          Login
        </button>

        <p className="mt-6 text-center text-sm text-gray-700">
          Don't have an account?{" "}
          <Link className="text-blue-600 font-medium hover:underline" to="/register">
            Register
          </Link>
        </p>
      </form>
    </div>
    </div>
  )
}

export default Login;