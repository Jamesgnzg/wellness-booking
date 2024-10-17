import { ReactElement } from "react";
import { Helmet } from "react-helmet-async";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import MainLayout from "./layouts/mainLayout";
import { BOOKING } from "./routes/paths";
import { privateRoutes } from "./routes/routes";
import { getTitleFromRoute } from "./utils/docTitle";

const App: React.FC = (): ReactElement => {
  const { pathname } = useLocation();

  return (
    <>
      <Helmet>
        <title>{getTitleFromRoute(pathname)}</title>
      </Helmet>
      <Routes>
        <Route element={<MainLayout />}>
          {privateRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Route>
        <Route key="/*" path="/*" element={<Navigate to={BOOKING} />} />
      </Routes>
    </>
  );
};

export default App;
