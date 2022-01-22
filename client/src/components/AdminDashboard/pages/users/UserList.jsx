import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { listUsers, deleteUser } from "../../../../actions/userAction";
import { DataGrid, GridRowsProp, GridColDef } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../DummyData";

import DeleteModal from "../../../modals/DeleteUser";
import Loading from "../../../Loading";
import Message from "../../../Message";

import "./userList.css";

const UserList = () => {
  let history = useHistory();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userDelete = useSelector((state) => state.userDelete);
  const { loadingDelete, erorr, success } = userDelete;

  if (!userInfo) {
    history.push("/");
  } else {
    const { isAdmin } = userInfo;
    if (!isAdmin) {
      history.push("/");
    }
  }

  const dispatch = useDispatch();
  const userList = useSelector((state) => state.userList);
  const { loading, users, error } = userList;
  const [data, setData] = useState();
  const [name, setName] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    dispatch(listUsers());
  }, [dispatch, success]);

  const deleteHandler = (name, id) => {
    setName(name);
    setUserId(id);

    document.getElementById("user-modal").style.display = "block";

    // if (window.confirm("Are You Sure?")) {
    // }
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 150,
    },
    {
      field: "name",
      headerName: "User Name",

      width: 200,
      renderCell: (params) => {
        return (
          <div className='admin_user_list_user'>
            <img
              className='admin_user_list_img'
              src={params.data.image}
              alt=''
            />
            {params.data.name}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 220,
    },

    {
      field: "action",
      headerName: "Actions",
      width: 250,
      renderCell: (params) => {
        return (
          <div sx={{
            display: 'flex',
            flexDirection: 'row',
            p: 1,
            m: 1,
            bgcolor: 'background.paper',
            borderRadius: 1,
          }}>
            <Link to={`/admin/users/${params.data.id}`}>
              <div className='admin_user_list_edit btn'>Edit</div>
            </Link>

            <DeleteOutline
              className='admin_user_list_delete'
              onClick={() => deleteHandler(params.data.name, params.data.id)}
            />
          </div>
        );
      },
    },
  ];
  // Confirm Delete button
  const confirmDelete = () => {
    dispatch(deleteUser(userId));
    document.getElementById("user-modal").style.display = "none";
  };
  const hideModal = () => {
    document.getElementById("user-modal").style.display = "none";
  };

  // Modal Action Buttons
  const actions = (
    <>
      <button onClick={confirmDelete} className='ui button negative'>
        Delete
      </button>
      <button
        onClick={() =>
          (document.getElementById("user-modal").style.display = "none")
        }
        className='ui button'
      >
        Cancel
      </button>
    </>
  );


  return (
    <>
      <div className='admin_userList'>
        {loading && <Loading></Loading>}

        {loadingDelete && <Loading></Loading>}
        {error && <Message variant='danger'>{error}</Message>}
        {success && <Message>{"User Was Deleted Successfully"}</Message>}
        <div style={{ display: "flex", justifyContent: "space-between" }}></div>
        <div style={{ height: 780, width: "100%" }}>
          {users && (
            <DataGrid
              rows={users}
              disableSelectionOnClick
              columns={columns}
              pageSize={12}
              checkboxSelection
            />

          )}
        </div>
      </div>
      <DeleteModal
        title='Delete Stream'
        content={`Are you sure you want to delete this user  ${name}`}
        actions={actions}
        onDismiss={hideModal}
      ></DeleteModal>
    </>
  );
};

export default UserList;
