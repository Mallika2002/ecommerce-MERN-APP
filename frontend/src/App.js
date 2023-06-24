import {BrowserRouter, Routes, Route} from "react-router-dom";

//Components

import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent"

// public pages

import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductListPage from "./pages/ProductListPage";
import RegisterPage from "./pages/RegisterPage";

// protected user pages

import UserCartDetailsPage from "./pages/user/UserCartDetailsPage";
import UserOrderDetailsPage from "./pages/user/UserOrderDetailsPage";
import UserOrdersPage from "./pages/user/UserOrdersPage";
import UserProfilePage from "./pages/user/UserProfilePage";
import ProtectedRoutesComponent from "./components/ProtectedRoutesComponent";

// protected admin pages

import AdminAnalyticsPage from "./pages/admin/AdminAnalyticsPage";
import AdminCreateProductPage from "./pages/admin/AdminCreateProductPage";
import AdminEditUserPage from "./pages/admin/AdminEditUserPage";
import AdminUsersPage from "./pages/admin/AdminUsersPage";
import AdminEditProductPage from "./pages/admin/AdminEditProductPage";
import AdminOrdersPage from "./pages/admin/AdminOrdersPage";
import AdminOrderDetailsPage from "./pages/admin/AdminOrderDetailsPage";
import AdminProductsPage from "./pages/admin/AdminProductsPage";
import ScrollToTop from './utils/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
    <HeaderComponent/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/product-list" element={<ProductListPage/>}/>
      <Route path="/product-details" element={<ProductDetailsPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/cart" element={<CartPage/>}/>
      <Route path="*" element="Page not exists 404"/>

      {/* User Protected Routes */}

      <Route element={<ProtectedRoutesComponent  admin = {false}/>}>
          <Route path="/user" element={<UserProfilePage/>}/>
          <Route path="/user/my-orders" element={<UserOrdersPage/>}/>
          <Route path="/user/cart-details" element={<UserCartDetailsPage/>}/>
          <Route path="/user/order-details" element={<UserOrderDetailsPage/>}/>
      </Route>

      {/* Admin Protected Routes */}
 
      <Route element={<ProtectedRoutesComponent admin = {true} />}>
          <Route path="/admin/users" element={<AdminUsersPage/>}/>
          <Route path="/admin/edit-user" element={<AdminEditUserPage/>}/>
          <Route path="/admin/products" element={<AdminProductsPage/>}/>
          <Route path="/admin/create-new-product" element={<AdminCreateProductPage/>}/>
          <Route path="/admin/edit-product" element={<AdminEditProductPage/>}/>
          <Route path="/admin/orders" element={<AdminOrdersPage/>}/>
          <Route path="/admin/order-details" element={<AdminOrderDetailsPage/>}/>
          <Route path="/admin/analytics" element={<AdminAnalyticsPage/>}/>
      </Route>

    </Routes>
    <FooterComponent/>
    </BrowserRouter>
  );
}

export default App;
