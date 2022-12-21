import React, { useEffect, useState } from "react";

const Home = () => {
  const [order, setOrder] = useState("");
  useEffect(() => {
    if (localStorage.getItem("orderdata") === null) {
      setOrder("");
    } else {
      let data = JSON.parse(localStorage.getItem("orderdata"));
      setOrder(data);
    }
  }, []);


  return (
    <div className="container-fluid">
      <div className="row my-3">
        <div className="col-6"></div>
        <div className="col-6 text-right">
          <a href="/add-order" className="btn btn-success">
            Add Order
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <table className="table table-bordered">
            <thead>
              <tr>
                <td>Order Id</td>
                <td>SKU - Product Name (Product Category)</td>
                <td>Qty</td>
                <td>Shipping Type</td>
                <td>Total Amount</td>
                <td>Customer Name</td>
                <td>DOB</td>
                <td>Phone</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(order) && order.length > 0
                ? order.map((item, index) => (
                    <tr key={index}>
                      <td>{index+1}</td>
                      <td>{item.sku} - {item.product} ({item.category})</td>
                      <td>{item.qty}</td>
                      <td>{item.shippingtype}</td>
                      <td>{item.totalamount}</td>
                      <td>{item.name}</td>
                      <td>{item.dob}</td>
                      <td>{item.mobile}</td>
                      <td>
                        <button
                          className="btn btn-info mx-1"
                          title="Edit Order"
                        >
                          <i className="fa fa-edit"></i>
                        </button>
                        <button
                          className="btn btn-danger mx-1"
                          title="Remove Order"
                        >
                          <i className="fa fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                )): null}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
