import { BrowserRouter, Routes, Route } from "react-router-dom";

import defaultLayout from "./assets/layout/DefaultLayout";

import HomePage from "./assets/pages/HomePage";
import AboutUsPage from "./assets/pages/AboutUsPage";
import PostsPage from "./assets/pages/PostsPage";
import ShowPostPage from "./assets/pages/ShowPostPage";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={defaultLayout}>
            <Route index Component={HomePage} />
            <Route path="/aboutus" Component={AboutUsPage} />
            <Route path="/posts">
              <Route index Component={PostsPage} />
              <Route path=":id" Component={ShowPostPage} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
