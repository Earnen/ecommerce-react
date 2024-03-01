import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "../pages/login";
import ProtectedRoute from "../components/common/routes/protectedroutes";
import { Main } from "../pages/main";
import { Product } from "../pages/product";
import { Cart } from "../pages/cart";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/main" element={<ProtectedRoute component={Main} />} />
      <Route
        path="/:productId"
        element={<ProtectedRoute component={Product} />}
      />
      <Route path="/cart" element={<ProtectedRoute component={Cart} />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
