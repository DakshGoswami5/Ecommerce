import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Products = lazy(() => import("../pages/Products"));
const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));
const CreateProduct = lazy(() => import("../pages/admin/CreateProduct"));
const ProductDetails = lazy(() => import("../pages/admin/ProductDetails"));
const UserProfile = lazy(() => import("../pages/user/UserProfile"));
const PageNotFound = lazy(() => import("../pages/PageNotFound"));
const UnAuthWrapper = lazy(() => import("./UnAuthWrapper"));
const AuthWrapper = lazy(() => import("./AuthWrapper"));
const Cart = lazy(() => import("../pages/Cart"));


const Mainroutes = () => {


  return (
    <Routes>
      <Route path="/" element={<Products/>}></Route>

      <Route path="/login" element={
        <UnAuthWrapper>
          <Login/>
        </UnAuthWrapper>}>
      </Route>
      <Route path="/register" element={
        <UnAuthWrapper>
          <Register/>
        </UnAuthWrapper>}>
      </Route>

      <Route path="/admin/create-product" element={
        <AuthWrapper>
          <CreateProduct/>
        </AuthWrapper>}>
      </Route>
      <Route path="/admin/user-profile" element={
        <AuthWrapper>
          <UserProfile/>
        </AuthWrapper>}>
      </Route>
      <Route path="/product/:id" element={
        <AuthWrapper>
          <ProductDetails/>
        </AuthWrapper>}>
      </Route>
      <Route path="/cart" element={
        <AuthWrapper>
          <Cart/>
        </AuthWrapper>}>
      </Route>

      <Route path="*" element={<PageNotFound/>}></Route>
    </Routes>
  )
}

export default Mainroutes