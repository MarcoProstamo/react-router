import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./assets/pages/HomePage";
import AboutUsPage from "./assets/pages/AboutUsPage";
import PostsPage from "./assets/pages/PostsPage";
import defaultLayout from "./assets/layout/DefaultLayout";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={defaultLayout}>
            <Route index Component={HomePage} />
            <Route path="/aboutus" Component={AboutUsPage} />
            <Route path="/posts" Component={PostsPage} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
