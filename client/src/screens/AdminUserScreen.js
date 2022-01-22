import React from "react";
import { DataGrid } from "@material-ui/data-grid";
import "../css/AdminUserScreen.css";
const AdminUserScreen = () => {
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 70,
    },
    {
      field: "username",
      headerName: "Username",
      width: 130,
    },
    {
      field: "email",
      headerName: "Email",
      width: 130,
    },
    {
      field: "status",
      headerName: "Status",
      width: 90,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 90,
    },
  ];

  const rows = [
    {
      id: 1,
      username: "Snow",
      avatar:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdepositphotos.com%2Fvector-images%2Ffemale-avatar.html&psig=AOvVaw1zW9CmVhj27ALQ1oOf39nL&ust=1629851724726000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIjF8vu0yPICFQAAAAAdAAAAABAD",
      email: "jon@gmail.com",
      status: "active",
      transaction: "$244",
    },
    {
      id: 2,
      username: "Snow",
      avatar:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdepositphotos.com%2Fvector-images%2Ffemale-avatar.html&psig=AOvVaw1zW9CmVhj27ALQ1oOf39nL&ust=1629851724726000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIjF8vu0yPICFQAAAAAdAAAAABAD",
      email: "jon@gmail.com",
      status: "active",
      transaction: "$244",
    },
    {
      id: 3,
      username: "Snow",
      avatar:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdepositphotos.com%2Fvector-images%2Ffemale-avatar.html&psig=AOvVaw1zW9CmVhj27ALQ1oOf39nL&ust=1629851724726000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIjF8vu0yPICFQAAAAAdAAAAABAD",
      email: "jon@gmail.com",
      status: "active",
      transaction: "$244",
    },
    {
      id: 4,
      username: "Snow",
      avatar:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdepositphotos.com%2Fvector-images%2Ffemale-avatar.html&psig=AOvVaw1zW9CmVhj27ALQ1oOf39nL&ust=1629851724726000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIjF8vu0yPICFQAAAAAdAAAAABAD",
      email: "jon@gmail.com",
      status: "active",
      transaction: "$244",
    },
    {
      id: 5,
      username: "Snow",
      avatar:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdepositphotos.com%2Fvector-images%2Ffemale-avatar.html&psig=AOvVaw1zW9CmVhj27ALQ1oOf39nL&ust=1629851724726000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIjF8vu0yPICFQAAAAAdAAAAABAD",
      email: "jon@gmail.com",
      status: "active",
      transaction: "$244",
    },
  ];
  return (
    <div className='admin_user_screen'>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </div>
  );
};

export default AdminUserScreen;
