import { useDispatch, useSelector } from "react-redux"
import { NavLink, useNavigate } from "react-router-dom"
import { asyncLogoutUser } from "../store/actions/userActions";

const Nav = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const user = useSelector(state => state.userReducer.users);

  const LogoutHandler = () => {
    dispatch(asyncLogoutUser());
    navigate("/")
  }

  return (
    <nav className="mb-10 flex justify-center items-center gap-x-5 p-15">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Products</NavLink>
      {user ? (
        <>
          <NavLink to="/admin/create-product">Create Product</NavLink>
          <button onClick={LogoutHandler}>Logout</button>
        </>
      ) : (
        <>
      <NavLink to="/login">Login</NavLink>
        </>
      )}
    </nav>
  )
}

export default Nav