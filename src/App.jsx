import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { Suspense } from "react";

const Loading = lazy(() => import("./assets/Components/Loading/Loading"));
const Layout = lazy(() => import("./assets/Components/Layout/Layout"));
const Login = lazy(() => import("./Pages/Login/Login"));
const Home = lazy(() => import("./Pages/Home/Home"));
const Searching = lazy(() => import("./Pages/Searching/Searching"));
const Product = lazy(() => import("./Pages/Product/Product"));
const NotFount = lazy(() => import("./Pages/NotFount/NotFount"));

function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Login />} />
            <Route path="home" element={<Home />} />
            <Route path="searching/:search_name" element={<Searching />} />
            <Route path="product/:product_name" element={<Product />} />
            <Route path="*" element={<NotFount />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
