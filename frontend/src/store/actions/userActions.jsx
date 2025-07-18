import axios from "../../api/axiosconfig";
import { loaduser, removeuser } from "../reducers/userSlice";

export const asyncCurrentUser = () => async(dispatch , getstatus) => {
    try {
        const user = JSON.parse(localStorage.getItem("user"));
        if(user) dispatch(loaduser(user));
    } catch (error) {
        console.log(error);
    }
};


export const asyncLogoutUser = () => async(dispatch , getstatus) => {
    try {
        localStorage.removeItem("user");
        dispatch(removeuser());
    } catch (error) {
        console.log(error);
    }
};


export const asyncLoginUser = (user) => async(dispatch , getstatus) => {
    try {
        const { data } = await axios.get(
            `/users?email=${user.email}&password=${user.password}`
        );
        localStorage.setItem("user", JSON.stringify(data[0]));
        dispatch(asyncCurrentUser());
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

export const asyncUpdateUser = (id, user) => async(dispatch , getState) => {
    try {
        const { data } = await axios.patch("/users/" + id , user);
        localStorage.setItem("user", JSON.stringify(data));
        dispatch(asyncCurrentUser());
    } catch (error) {
        console.log(error);
    }
};

export const asyncDeleteUser = (id) => async (dispatch , getState) => {
    try {
        await axios.delete("/users/"+ id);
        dispatch(asyncLogoutUser());
    } catch (error) {
        console.log(error);
    }
};