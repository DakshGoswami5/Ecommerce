import axios from "../../api/axiosconfig";
import { loaduser } from "../reducers/userSlice";

export const asyncCurrentUser = () => async(dispatch , getstatus) => {
    try {
        const user = JSON.parse(localStorage.getItem("user"));
        if(user) dispatch(loaduser(user));
        else console.log("User Not Logged in!")
    } catch (error) {
        console.log(error);
    }
};


export const asyncLogoutUser = () => async(dispatch , getstatus) => {
    try {
        localStorage.removeItem("user");
        console.log("User Logged Out!");
    } catch (error) {
        console.log(error);
    }
};


export const asyncLoginUser = (user) => async(dispatch , getstatus) => {
    try {
        const { data } = await axios.get(
            `/users?email=${user.email}&password=${user.password}`
        );
        console.log(data[0]);
        localStorage.setItem("user", JSON.stringify(data[0]));
    } catch (error) {
        console.log(error);
    }
};


export const asyncRegisterUser = (user) => async(dispatch , getState) => {
    try {
        const res = await axios.post("/users" , user);
        console.log(res);
    } catch (error) {
        console.log(error);
    }
};