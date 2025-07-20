import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asyncDeleteUser, asyncLogoutUser, asyncUpdateUser } from "../../store/actions/userActions";


const UserProfile = () => {


  const { users } = useSelector((state) => state.userReducer);


    const { register , reset, handleSubmit } = useForm({
      defaultValues: {
        username: users?.username,
        email: users?.email,
        password: users?.password,
      }
    });
    const navigate =  useNavigate();
    const dispatch = useDispatch();

    const UpdateUserHandler = (user) => {
        dispatch(asyncUpdateUser(users.id, user));

    };

    const LogoutHandler = () => {
        dispatch(asyncLogoutUser())
      navigate("/login");
    };

    const DeleteHandler = () => {
        dispatch(asyncDeleteUser(users.id))
      navigate("/login");
    };


  return users ? (
    <div className="w-full min-h-screen flex items-center justify-center px-4 bg-neutral-950 text-white">
      <div className="w-full max-w-screen-sm bg-neutral-900 p-6 rounded-2xl shadow-md border border-neutral-800">
        <h1 className="text-3xl font-semibold text-white mb-2">{users.username}</h1>
        <p className="text-neutral-400 text-sm mb-6">{users.email}</p>
        
        <form 
        onSubmit={handleSubmit(UpdateUserHandler)} 
        className="flex flex-col gap-4">
        <input 
        {...register("username")}
        className="w-full p-3 rounded-xl bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        placeholder="John Doe"
        />
        <input 
        {...register("email")}
        className="w-full p-3 rounded-xl bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="email"
        placeholder="john@doe.com"
        />
        <input 
        {...register("password")}
        className="w-full p-3 rounded-xl bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="password"
        placeholder="******"
        />
        <button 
        className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold transition duration-200">
          Update User
        </button>

        <button 
        type="button" 
        onClick={LogoutHandler} 
        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl font-semibold transition duration-200"
        >
        Logout User
        </button>

        <button 
        type="button" 
        onClick={DeleteHandler} 
        className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-semibold transition duration-200"
        >
        Delete User
        </button>
      </form>
    </div>
  </div>
  ) : (
    <div className="text-white flex justify-center items-center h-screen">
      Loading...
    </div>
    );
};

export default UserProfile;