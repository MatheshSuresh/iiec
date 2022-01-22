import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./orderList.css";
import { Link, useHistory } from "react-router-dom";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { getProducts, deleteProduct } from "../../../../actions/productActions";
import { orderList } from "../../../../actions/orderActions";
import Loading from "../../../Loading";
import Message from "../../../Message";
import DeleteProduct from "../../../modals/DeleteUser";

const OrderList = () => {
  // Admin Verification or Else redirect to homepage
  let history = useHistory();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const [productName, setProductName] = useState("");
  const [productId, setProductId] = useState("");

  if (!userInfo) {
    history.push("/");
  } else {
    const { isAdmin } = userInfo;
    if (!isAdmin) {
      history.push("/");
    }
  }

  const dispatch = useDispatch();

  const listOrders = useSelector((state) => state.listOrders);
  const { loading, error, order } = listOrders;

  // const productList = useSelector((state) => state.productList);
  // const { error, loading, products } = productList;

  const productDelete = useSelector((state) => state.productDelete);
  const { loading: loadingDelete, error: errorDelete, success } = productDelete;

  // useEffect(() => {
  //   dispatch(getProducts());
  // }, [dispatch, success]);

  useEffect(() => {
    dispatch(orderList());
  }, [dispatch]);

  // const handleEdit = (id) => {
  //   console.log(id);
  //   // history.push("/");
  //   history.push(`/admin/product-list/${id}`);
  // };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 200,
    },
    {
      field: "name",
      headerName: "User Name",
      width: 160,
      renderCell: (params) => {
        return (
          <div className='admin_service_list'>
            <img
              className='admin_service_list_img'
              src={params.data.user.image}
              alt=''
            />
            {params.data.user.name}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 160,
      renderCell: (params) => {
        return (
          <div className='admin_service_list'>{params.data.user.email}</div>
        );
      },
    },
    {
      field: "paymentMethod",
      headerName: "Payment Method",
      width: 180,
      renderCell: (params) => {
        return (
          <div className='admin_service_list'>{params.data.paymentMethod}</div>
        );
      },
    },
    {
      field: "createdAt",
      headerName: "Order Date(yy-mm-dd)",
      width: 200,
      renderCell: (params) => {
        return (
          <div className='admin_service_list'>
            {params.data.createdAt.slice(0, 10)}
          </div>
        );
      },
    },
    {
      field: "isPaid",
      headerName: "Payment",
      width: 130,
      renderCell: (params) => {
        return (
          <div className='admin_service_list'>
            {params.data.isPaid ? "Complete" : "Pending"}
          </div>
        );
      },
    },
    {
      field: "isDelivered",
      headerName: "Delivery",
      width: 130,
      renderCell: (params) => {
        return (
          <div className='admin_service_list'>
            {params.data.isDelivered ? "Complete" : "Pending"}
          </div>
        );
      },
    },

    {
      field: "Order",
      headerName: "Order Status",
      width: 160,
      renderCell: (params) => {
        return (
          <div className='admin_service_list'>
            {params.data.isDelivered && params.data.isDelivered
              ? "Complete"
              : "Not Complete"}
          </div>
        );
      },
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
            <Link to={`/admin/order-list/${params.data.id}`}>
              <div className='admin_service_list_edit btn'>Details</div>
            </Link>
            {/* <div>
              <AdminProductEdit
                id={params.row.id}
                className='admin_service_list_edit btn'
              >
                Edit
              </AdminProductEdit>
            </div> */}

            <DeleteOutline
              className='admin_service_list_delete'
              onClick={() => deleteHandler(params.data.name, params.data.id)}
            />
          </div>
        );
      },
    },
  ];

  const deleteHandler = (name, id) => {
    setProductName(name);
    setProductId(id);

    document.getElementById("user-modal").style.display = "block";

    // if (window.confirm("Are You Sure?")) {
    // }
  };

  // Confirm Delete Button
  const confirmDelete = () => {
    dispatch(deleteProduct(productId));
    document.getElementById("user-modal").style.display = "none";
  };
  // Calling From onDismiss prop
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
      <div className='admin_services'>
        {loading && <Loading></Loading>}

        {loadingDelete && <Loading></Loading>}
        {error && <Message variant='danger'>{error}</Message>}
        {errorDelete && <Message variant='danger'>{errorDelete}</Message>}
        {success && <Message>{"Product Was Deleted Successfully"}</Message>}
        <div style={{ height: 780, width: "100%", fontFamily: "Open Sans" }}>
          {order && (
            <DataGrid
              rows={order}
              disableSelectionOnClick
              columns={columns}
              pageSize={12}
              checkboxSelection
            />
          )}
        </div>
      </div>
      <DeleteProduct
        title='Product Delete'
        content={`Are you sure you want to delete ${productName}`}
        actions={actions}
        onDismiss={hideModal}
      ></DeleteProduct>
    </>
  );
};

export default OrderList;
