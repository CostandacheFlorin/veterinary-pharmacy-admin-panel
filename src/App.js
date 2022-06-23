import { Route, Switch, Redirect } from "react-router-dom";

import "./App.css";

import { AuthContext } from "./context/auth-context";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Footer from "./components/Sections/Footer/Footer";
import { useAuth } from "./hooks/auth-hook";
import MainNavigation from "./components/MainNavigation/MainNavigation";
import AddProduct from "./pages/Products/AddProduct/AddProduct";
import EditProduct from "./pages/Products/EditProduct/EditProduct";
import DeleteProduct from "./pages/Products/DeleteProduct/DeleteProduct";

function App() {
  const { token, login, logout, userId } = useAuth();

  return (
    <>
      <AuthContext.Provider
        value={{
          isLoggedIn: !!token,
          token: token,
          userId,
          login: login,
          logout: logout,
        }}
      >
        <MainNavigation />
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

        </Switch>

        {/* <Footer /> */}
      </AuthContext.Provider>
    </>
  );
}

export default App;
