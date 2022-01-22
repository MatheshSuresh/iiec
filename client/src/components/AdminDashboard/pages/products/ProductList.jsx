import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./productLists.css";
import { Link, useHistory } from "react-router-dom";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { serviceRows } from "../../DummyData";
import { getProducts, deleteProduct } from "../../../../actions/productActions";
import Product from "../../../../components/Product_depricated";
import { Col, Row, Container, Image } from "react-bootstrap";
import Loading from "../../../Loading";
import Message from "../../../Message";
import DeleteProduct from "../../../modals/DeleteUser";

const AdminProductList = () => {
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
  const productList = useSelector((state) => state.productList);
  const { error, loading, products } = productList;

  const productDelete = useSelector((state) => state.productDelete);
  const { loading: loadingDelete, error: errorDelete, success } = productDelete;

  const productCreate = useSelector((state) => state.productCreate);
  const { success: successCreate } = productCreate;

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch, success, successCreate]);

  // const handleEdit = (id) => {
  //   console.log(id);
  //   // history.push("/");
  //   history.push(`/admin/product-list/${id}`);
  // };

  const columnsnew = [
    {
      field: "id",
      headerName: "ID",
      width: 120,
    },
    {
      field: "name",
      headerName: "Name",
      width: 300,
      renderCell: (params) => {
        return (
          <div className='admin_service_list'>
            <img
              className='admin_service_list_img'
              src={params.data.image}
              alt=''
            />
            {params.data.name}
          </div>
        );
      },
    },
    {
      field: "brand",
      headerName: "Brand",
      width: 200,
    },
    {
      field: "price",
      headerName: "Price",
      width: 130,
    },
    {
      field: "rating",
      headerName: "rating",
      width: 120,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      width: 160,
    },
    {
      field: "user",
      headerName: "Created By",
      width: 160,
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
            <Link to={`/admin/product-list/${params.data.id}`}>
              <div className='admin_service_list_edit btn'>Edit</div>
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
              onClick={() => deleteHandler(params)}
            />
          </div>
        );
      },
    },
  ];

  const deleteHandler = (data) => {
    setProductName(data.data.name);
    setProductId(data.data.id);

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
        <Link to='/admin/create-product'>
          <button className='create_new_product_btn my-3 mb-5'>
            Create New Product
          </button>
        </Link>
        {loading && <Loading></Loading>}

        {loadingDelete && <Loading></Loading>}
        {error && <Message variant='danger'>{error}</Message>}
        {errorDelete && <Message variant='danger'>{errorDelete}</Message>}
        {success && <Message>{"Product Was Deleted Successfully"}</Message>}
        <div style={{ height: 780, width: "100%", fontFamily: "Open Sans" }}>
          <DataGrid
            rows={products}
            disableSelectionOnClick
            columns={columnsnew}
            pageSize={12}
            checkboxSelection
          />
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

export default AdminProductList;
