import { Outlet } from "react-router-dom";
export const Home = () => {
  return (
    <div>
      <Outlet />
      <p>Hola</p>
    </div>
  );
};
