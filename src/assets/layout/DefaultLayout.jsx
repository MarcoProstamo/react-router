import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export default function defaultLayout() {
  return (
    <>
      <div className="wrapper" data-bs-theme="dark">
        <header>
          <Navbar />
        </header>
        <main className="container p-3">
          <Outlet />
        </main>
        <footer></footer>
      </div>
    </>
  );
}
