import React from "react";
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  Tabs,
  Tab,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { authActions } from "../store";

const Header = () => {
  const dispatch=useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const [value, setValue] = useState();
  return (
    <AppBar
      position="sticky"
      sx={{
        background:
          "radial-gradient(circle, rgba(245,11,210,1) 14%, rgba(14,132,227,1) 100%)",
      }}
    >
      <Toolbar>
        <Typography variant="h4">BlogsApp</Typography>

        {isLoggedIn && (
          <Box display="flex" marginLeft={"auto"} marginRight={"auto"}>
            <Tabs
              textColor="inherit"
              value={value}
              onChange={(e, val) => setValue(val)}
            >
              <Tab  LinkComponent={Link} to="/blogs" label="All Blogs" />
              <Tab   LinkComponent={Link} to="/myBlogs" label="My Blogs" />
              <Tab   LinkComponent={Link} to="/blogs/add" label="Add Blog" />
            </Tabs>
          </Box>
        )}

        <Box display="flex" marginLeft="auto">
          
          {!isLoggedIn && (
            <>
              {" "}
              <Button
                LinkComponent={Link}
                to="/auth"
                variant="content"
                color="warning"
                sx={{ margin: "1", borderRadius: 10 }}
              >
                Login
              </Button>
              <Button
                LinkComponent={Link}
                to="/auth"
                variant="content"
                color="warning"
                sx={{ margin: "1", borderRadius: 10 }}
              >
                Signup
              </Button>
            </>
          )}

          {isLoggedIn && (
            <Button
              onClick={()=>dispatch(authActions.logout())}
              LinkComponent={Link}
              to="/auth"
              variant="content"
              color="warning"
              sx={{ margin: "1", borderRadius: 10 }}
            >
              Logout
            </Button>
          )}

        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
