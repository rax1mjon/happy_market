import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import NotFount from "./Components/NotFount/NotFount";
import { Suspense } from "react";
import Loading from "./assets/Components/Loading/Loading";

const Layout = lazy(() => import("./assets/Components/Layout/Layout"));
const Login = lazy(() => import("./Components/Login/Login"));
const Home = lazy(() => import("./Components/Home/Home"));
const Searching = lazy(() => import("./Components/Searching/Searching"));
const Product = lazy(() => import("./Components/Product/Product"));

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
