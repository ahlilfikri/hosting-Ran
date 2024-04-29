import { createBrowserRouter } from "react-router-dom";
import Home from './LandingPage/pages/Home';
import Produk from './LandingPage/pages/product';
import DetailProduk from './LandingPage/pages/DetailProduk';
import Kegiatan from './LandingPage/pages/Kegiatan';
import DetailKegiatan from './LandingPage/pages/DetailKegiatan';
import DashboardCms from "./CmsPage/pages/Dashboard/Dashboard";
import KategoriCms from "./CmsPage/pages/Kategori/Kategori";
import ProductCms from "./CmsPage/pages/Product/Product";
import BannerCms from "./CmsPage/pages/Banner/Banner";
import ProductPerPage from "./CmsPage/pages/Product/ProductPerPage";
import KegitanKami from "./CmsPage/pages/KegitanKami/KegiatanKami";
import Mitra from "./CmsPage/pages/Mitra/Mitra";
import KegiatanPerPage from "./CmsPage/pages/KegitanKami/KegiatanPerPage";
import Login from "./CmsPage/pages/loginregister/login"
import Register from "./CmsPage/pages/loginregister/register"


import App from "./App";

const Routing = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/produk",
        element: <Produk />,
      },
      {
        path: "/detail-produk/:id",
        element: <DetailProduk />,
      },
      {
        path: "/kegiatan",
        element: <Kegiatan />,
      },
      {
        path: "/detail-kegiatan",
        element: <DetailKegiatan />,
      },
      {
        path : "/dashboard",
        element : <DashboardCms/>,
      },
      {
        path : "/product/CMS",
        element : <ProductCms/>,
      },
      {
        path : "/kategori/CMS",
        element : <KategoriCms/>,
      },
      {
        path : "/banner/CMS",
        element : <BannerCms/>,
      },
      {
        path: "/product/:id",
        element: <ProductPerPage />,
      },
      {
        path: "/kegiatan/:id",
        element: <KegiatanPerPage />,
      },
      {
        path: "/kegiatan/CMS",
        element: <KegitanKami />,
      },
      {
        path: "/mitra/CMS",
        element: <Mitra />,
      },
      {
        path: "/login/cms",
        element: <Login />,
      },
      {
        path: "/register/cms",
        element: <Register />,
      },
    ],
  },
]);

export default Routing;
