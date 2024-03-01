import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./components/common/context/authcontext";
import { ProductsContextProvider } from "./components/common/context/productcontext";
import { UsersContextProvider } from "./components/common/context/usercontext";
import AppRoutes from "./approuter/Approuter";

function App() {
  return (
    <>
      <UsersContextProvider>
        <ProductsContextProvider>
          <AuthProvider>
            <BrowserRouter>
              <AppRoutes />
            </BrowserRouter>
          </AuthProvider>
        </ProductsContextProvider>
      </UsersContextProvider>
    </>
  );
}

export default App;
