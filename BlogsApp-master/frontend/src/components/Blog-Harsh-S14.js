// rendering card from material ui
import React from "react";
import axios from "axios";
import {
  Avatar,
  CardContent,
  CardMedia,
  Typography,
  CardHeader,
  Card,
  Box,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

const Blog = ({ title, description, imageURL, userName, isUser, id }) => {

  const navigate = useNavigate();
  const handleEdit = (e) => {
    navigate(`/myBlogs/${id}`);
  };

  const deleteRequest = async () => {
    const res = await axios
      .delete(`http://localhost:5000/api/blog/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const handleDelete = () => {
    deleteRequest()
      .then(() => navigate("/"))
      .then(() => navigate("/blogs"));
  };

  return (
    <div>
      <Card
        sx={{
          width: "40%",
          margin: "auto",
          mt: 2,
          padding: 2,
          boxShadow: "5px 5px 10px #ccc",
          ":hover": { boxShadow: "10px 10px 20px #ccc" },
        }}
      >
        {isUser && (
          <Box display="flex">
            <IconButton onClick={handleEdit} sx={{ marginLeft: "auto" }}>
              <EditIcon color="warning"></EditIcon>
            </IconButton>
            <IconButton onClick={handleDelete}>
              <DeleteIcon color="error"></DeleteIcon>
            </IconButton>
          </Box>
        )}
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor:"red"}} aria-label="recipe">
              {userName}
            </Avatar>
          }
          title={title}
          subheader=""
        />

        <CardMedia
          component="img"
          height="194"
          image={imageURL}
          alt="Blog-Image"
        />

        <CardContent>
          <hr />
          <br />
          <Typography  variant="body2" color="text.secondary">
            <b>{userName}</b>{": "}{description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Blog;
