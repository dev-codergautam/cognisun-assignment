import React, { useState } from "react";
import { categoryData, filteredProduct } from "../../request/request";
import TermCondition from "./TermCondition";

const AddOrder = () => {
  let categoryList = categoryData;
  const [product, setProduct] = useState("");
  const [category, setCategory] = useState("");
  const [productName, setProductName] = useState("");
  const [sku, setSku] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [netprice, setNetPrice] = useState("");
  const [tax, setTax] = useState("");
  const [qty, setQty] = useState("");
  const [shippingtype, setShippingType] = useState("");
  const [shippingday, setShippingDay] = useState("");
  const [shippingprice, setShippingPrice] = useState("");
  const [totalamount, setTotalAmount] = useState("");
  const [estimateddelivery, setEstimatedDelivery] = useState("");
  const [statusupdate, setStatusUpdate] = useState("");
  const [Signaturerequired, setSignatureRequired] = useState("");
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [mobile, setMobile] = useState("");

  const [showModal, setShowModal] = useState(false);

  const productList = (cat) => {
    setCategory(cat);
    if(cat === "Electronics"){
        setTax(15)
    } else if(cat === "Cosmetics"){
        setTax(10)
    } else if(cat === "Clothing") {
        setTax(5)
    } else if(cat === "Medicines") {
        setTax(18)
    } else{
        setTax(0)
    }
    const list = filteredProduct(cat);
    console.log("list", list);
    setProduct(list);
  };

  const fetchProduct = (prod) => {
    const fetchedData1 = product.filter((item) => item.product === prod);
    const fetchedData = fetchedData1[0];
    let {sku, description, price, discount} = fetchedData;
    let np = (price - price * discount / 100).toFixed(2);
    if (fetchedData) {
      setSku(sku);
      setDescription(description);
      setPrice(price);
      setDiscount(discount);
      setNetPrice(np)
      setProductName(prod)
      setCategory(category)
    } else {
      setSku("");
      setDescription("");
      setPrice("");
      setDiscount("");
      setNetPrice("");
      setProductName("")
      setCategory("")
    }
    console.log("fetchProduct", fetchedData);
  };

  const calcshippingDay = (data) => {
    setShippingType(data)
   
    if(data === "standard"){
        setShippingDay(5)
        setShippingPrice(5)
        let myDate = new Date(new Date(). getTime()+(5*24*60*60*1000));
        let fdate = `${myDate.getDate()}-${myDate.getMonth()}-${myDate.getFullYear()}`;
        setEstimatedDelivery(fdate);
        let total = parseFloat(netprice) * parseInt(qty) + parseFloat(netprice) * parseInt(qty) * parseFloat(tax) / 100 + parseInt(5);
        setTotalAmount(total.toFixed(2))
    } else if(data === "twodays"){
        let myDate = new Date(new Date(). getTime()+(2*24*60*60*1000));
        let fdate = `${myDate.getDate()}-${myDate.getMonth()}-${myDate.getFullYear()}`;
        setEstimatedDelivery(fdate);
        setShippingDay(2)
        setShippingPrice(10)
        let total = parseFloat(netprice) * parseInt(qty) + parseFloat(netprice) * parseInt(qty) * parseFloat(tax) / 100 + parseInt(2);
        setTotalAmount(total.toFixed(2))
    } else if(data === "nextdays"){
        let myDate = new Date(new Date(). getTime()+(1*24*60*60*1000));
        let fdate = `${myDate.getDate()}-${myDate.getMonth()}-${myDate.getFullYear()}`;
        setEstimatedDelivery(fdate);
        setShippingDay(1)
        setShippingPrice(15)
        let total = parseFloat(netprice) * parseInt(qty) + parseFloat(netprice) * parseInt(qty) * parseFloat(tax) / 100 + parseInt(1);
        setTotalAmount(total.toFixed(2))

    }else{
        setShippingDay("")
        setShippingPrice("")
        setEstimatedDelivery("")
        setTotalAmount("")
    }
  }

  const submit = () => {
    let data = {
        product: productName,
        category: category,
        sku: sku,
        description: description,
        price: price,
        discount: discount,
        netprice: netprice,
        tax: tax,
        qty: qty,
        shippingtype: shippingtype,
        shippingprice: shippingprice,
        totalamount: totalamount,
        estimateddelivery: estimateddelivery,
        name: name,
        dob: dob,
        mobile: mobile
    }
    let orderdata =  []
    orderdata.push(data)
    console.log(localStorage.getItem('orderdata'))
    if(localStorage.getItem('orderdata') === null) {
        localStorage.setItem('orderdata',JSON.stringify(orderdata)) 
    }
    else{
        let oldData = JSON.parse(localStorage.getItem('orderdata'))
        let newData = [...oldData, ...orderdata]
        localStorage.setItem('orderdata',JSON.stringify(newData)) 
    }
  }

  const agreeTerm = () => {
    let check = document.getElementById("statusupdate").value;
    console.log("agree term", check);
    if (check.checked === true) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-8">
          <div className="card">
            <div className="card-body">
              <div className="row justify-content-center">
                <div className="col-md-4 col-12">
                  <div className="form-group">
                    <label className="label" htmlFor="category">
                      Category
                    </label>
                    <select
                      className="form-control"
                      name="category"
                      id="category"
                      onChange={(e) => productList(e.target.value)}
                    >
                      <option value="">Select Category</option>
                      {Array.isArray(categoryList) &&
                        categoryList.length > 0 &&
                        categoryList.map((item, index) => (
                          <option value={item} key={index}>
                            {item}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>
                <div className="col-md-4 col-12">
                  <div className="form-group">
                    <label className="label" htmlFor="category">
                      Product
                    </label>
                    <select
                      className="form-control"
                      name="product"
                      id="product"
                      onChange={(e) => fetchProduct(e.target.value)}
                    >
                      <option value="">Select product</option>
                      {Array.isArray(product) &&
                        product.length > 0 &&
                        product.map((item, index) => (
                          <option value={item.product} key={index}>
                            {item.product}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>
                <div className="col-md-4 col-12">
                  <div className="form-group">
                    <label className="label" htmlFor="category">
                      SKU
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="SKU"
                      readOnly
                      defaultValue={sku}
                    />
                  </div>
                </div>
                <div className="col-md-12 col-12">
                  <div className="form-group">
                    <label className="label" htmlFor="description">
                      Description
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      placeholder="Description"
                      readOnly
                      defaultValue={description}
                    ></textarea>
                  </div>
                </div>
                <div className="col-md-4 col-12">
                  <div className="form-group">
                    <label className="label" htmlFor="price">
                      price
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="price"
                      readOnly
                      defaultValue={price}
                    />
                  </div>
                </div>
                <div className="col-md-4 col-12">
                  <div className="form-group">
                    <label className="label" htmlFor="discount">
                      discount
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="discount"
                      readOnly
                      defaultValue={discount}
                    />
                  </div>
                </div>

                <div className="col-md-4 col-12">
                  <div className="form-group">
                    <label className="label" htmlFor="netprice">
                      Net price
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Net price"
                      readOnly
                      defaultValue={netprice}
                    />
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <label className="label" htmlFor="tax">
                      tax
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="tax"
                      readOnly
                      defaultValue={tax}
                    />
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <label className="label" htmlFor="qty">
                      Quantity
                    </label>
                    <select className="form-control" placeholder="Quantity" onChange={(e) => setQty(e.target.value)}>
                      <option value="">Select Quantity</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <label className="label" htmlFor="shippingtype">
                      Shipping Type
                    </label>
                    <select
                      className="form-control"
                      placeholder="Shipping Type"
                      onChange={(e) => calcshippingDay(e.target.value)}
                    >
                      <option value="">Select Shipping type</option>
                      <option value="standard">Standard</option>
                      <option value="twodays">Two days</option>
                      <option value="nextdays">Next days</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <label className="label" htmlFor="shippingcharge">
                      Shipping Charge
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Shipping Charge"
                      readOnly
                      defaultValue={shippingprice}
                    />
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <label className="label" htmlFor="totalamount">
                      Total amount charged
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Total amount charged"
                      readOnly
                      defaultValue={totalamount}
                    />
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <label className="label" htmlFor="estimateddelivery">
                      Estimated Delivery
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Estimated Delivery"
                      readOnly
                      defaultValue={estimateddelivery}
                    />
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="statusupdate"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="statusupdate"
                      >
                        Receive Status Updates
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <label htmlFor="" className="mr-3">
                      {" "}
                      Delivery Signature Required?
                    </label>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="yes"
                        value="yes"
                      />
                      <label className="form-check-label" htmlFor="yes">
                        Yes
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="no"
                        value="no"
                      />
                      <label className="form-check-label" htmlFor="no">
                        No
                      </label>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 col-12">
                  <div className="form-group">
                    <label htmlFor="" className="label">
                      Customer Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="form-control"
                      placeholder="Customer Name"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-4 col-12">
                  <div className="form-group">
                    <label htmlFor="" className="label">
                      Customer DOB
                    </label>
                    <input
                      type="date"
                      name="dob"
                      id="dob"
                      className="form-control"
                      placeholder="Customer DOB"
                      onChange={(e) => setDob(e.target.value)}

                    />
                  </div>
                </div>
                <div className="col-md-4 col-12">
                  <div className="form-group">
                    <label htmlFor="" className="label">
                      Customer Mobile No.
                    </label>
                    <input
                      type="number"
                      name="mobile"
                      id="mobile"
                      className="form-control"
                      placeholder="Customer mobile"
                      onChange={(e) => setMobile(e.target.value)}
                    />
                  </div>
                </div>
                {/* <div className="col-12">
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="agree"
                        id="statusupdate"
                        onChange={(e) => console.log(e.target.value)}
                      />
                      <label className="form-check-label" htmlFor="statusupdate">
                        I agree with terms and conditions.
                      </label>
                    </div>
                  </div>
                    <TermCondition showModal={showModal} />
                </div> */}

                <div className="col-6 text-center">
                  <button className="btn btn-success" onClick={submit}>Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddOrder;
