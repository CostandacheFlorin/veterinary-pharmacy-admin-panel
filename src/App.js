import { Route, Switch, Redirect } from "react-router-dom";

import "./App.css";
import 'antd/dist/antd.min.css';
import { AuthContext } from "./context/auth-context";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { useAuth } from "./hooks/auth-hook";
import MainNavigation from "./components/MainNavigation/MainNavigation";
import AddProduct from "./pages/Products/AddProduct/AddProduct";
import EditProduct from "./pages/Products/EditProduct/EditProduct";
import DeleteProduct from "./pages/Products/DeleteProduct/DeleteProduct";
import Sidebar from "./components/UIElements/Sidebar/Sidebar";
import ProductListing from "./pages/Products/ProductListing/ProductListing";
import DataSummary from "../src/components/UIElements/DataSummary/DataSummary";
import OrdersListing from "./pages/Orders/OrdersListing/OrdersListing";
import UsersListing from "./pages/Users/UsersListing/UsersListing";
import Charts from "./pages/Charts/Charts";
function App() {
  const { token, login,logout, userId } = useAuth();



  return (
    <>
      <AuthContext.Provider
        value={{
          isLoggedIn: !!token,
          token: token,
          userId,
          login: login,
          logout: logout
        }}
      >

        <MainNavigation />
         <Sidebar/>
        <Switch>
          <Route path="/autentificare">
            <Login />

          </Route>
          <Route path="/inregistrare">
            <Register />
          </Route>
         

          <Route path="/medicamente">
          <ProductListing/>
          </Route>
          <Route path="/date">
          <Charts/>
          </Route>
          <Route path="/utilizatori">
          <UsersListing/>
          </Route>
          <Route path="/comenzi">
          <OrdersListing/>
          </Route>
          <Route path="/" exact>
          <DataSummary />
          </Route>

        </Switch>


        {/* <Footer /> */}
      </AuthContext.Provider>
    </>
  );
}

export default App;
