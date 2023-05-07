import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Blogs from "./components/Blogs";
import UserBlogs from "./components/UserBlogs";
import BlogDetail from "./components/BlogDetail";
import AddBlog from "./components/AddBlog";
import Auth from "./components/Auth";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store";
// import Footer from "./components/footer";

function App() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);
  const dispatch=useDispatch();
  useEffect(()=>{
      if(localStorage.getItem("userId")){
           dispatch(authActions.login());
      }
  },[dispatch]);
  return (
    <React.Fragment>
      <header>
        <Header></Header>
      </header>
      <main>
        <Routes>
          (!isLoggedIn ? (
          <Route path="/auth" element={<Auth />} />) :
          <>
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/add" element={<AddBlog />} />
            <Route path="/myBlogs" element={<UserBlogs />} />
            <Route path="/myBlogs/:id" element={<BlogDetail />} />
          </>
          )
        </Routes>
      </main>
      {/* <footer> */}
        {/* <Footer ></Footer> */}
      {/* </footer> */}
    </React.Fragment>
  );
}

export default App;
