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
          <Route path="/adauga-produs">
            <AddProduct />
          </Route>
          <Route path="/editeaza-produs">
            <EditProduct />
          </Route>
          <Route path="/sterge-produs">
          <DeleteProduct/>
          </Route>

          <Route path="/medicamente">
          <ProductListing/>
          </Route>
          <Route path="/" exact>
         
          </Route>

        </Switch>


        {/* <Footer /> */}
      </AuthContext.Provider>
    </>
  );
}

export default App;
