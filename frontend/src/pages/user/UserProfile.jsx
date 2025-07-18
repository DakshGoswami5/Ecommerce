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
    <div>
        <h1 className="font-thin text-5xl text-gray-400">{users.username}</h1>
        <h1 className="font-thin text-xl text-gray-400">{users.email}</h1>
        <hr className="my-10"/>
        <form 
        onSubmit={handleSubmit(UpdateUserHandler)} 
        className="w-full flex flex-col justify-start items-start">
        <input 
        {...register("username")}
        className="mb-3 outline-0 border-b p-2 text-4xl"
        type="text"
        placeholder="John Doe"
        />
        <input 
        {...register("email")}
        className="mb-3 outline-0 border-b p-2 text-4xl"
        type="email"
        placeholder="john@doe.com"
        />
        <input 
        {...register("password")}
        className="mb-3 outline-0 border-b p-2 text-4xl"
        type="password"
        placeholder="******"
        />
        <button className="mt-5 py-2 px-4 bg-green-400 rounded">
          Update User
        </button>

        <button 
        type="button" 
        onClick={LogoutHandler} 
        className="mt-5 py-2 px-4 bg-blue-400 rounded"
        >
        Logout User
        </button>

        <button 
        type="button" 
        onClick={DeleteHandler} 
        className="mt-5 py-2 px-4 bg-red-400 rounded"
        >
        Delete User
        </button>
      </form>
    </div>
  ) : (
    "Loading..."
    );
};

export default UserProfile;