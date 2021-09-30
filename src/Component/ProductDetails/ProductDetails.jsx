import React, { useState } from "react";
import "./productDetails.css";
import NavBar from "../NavBar/NavBar";
import watch_1 from "../../assets/watch_1.jpeg";
import watch_2 from "../../assets/watch_2.jpeg";
import Rating from "../Ratings/Ratings";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import Products from '../Products/Products'
import AppBar from "@mui/material/AppBar";



export default function ProductDetails(history) {
  const [productDetails, setProductDetails] = useState(
    history.location.state.productDetail
  );
  const [productList, setProductList] = useState(history.location.state.productList);


  console.log(history.location.state.detail);
  return (
    <div>
     <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <NavBar />
      </AppBar>
      <div class="container mainContainer">
        <div className="row">
          <div className="col-md-6 text-center productImgCss">
            <img data-image="red" class="mb-5" src={productDetails.id%2===0?watch_1:watch_2} alt="" />
            <div className="container ">
              <div className="row">
                <div className="col-md-3">
                  <img
                    data-image="red"
                    className="miniImg"
                    src={watch_1}
                    alt=""
                  />
                </div>
                <div className="col-md-3">
                  <img
                    data-image="red"
                    className="miniImg"
                    src={watch_1}
                    alt=""
                  />
                </div>
                <div className="col-md-3">
                  <img
                    data-image="red"
                    className="miniImg"
                    src={watch_1}
                    alt=""
                  />
                </div>
                <div className="col-md-3">
                  <img
                    data-image="red"
                    className="miniImg"
                    src={watch_1}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="container mt-5">
              <div className="row">
                <div className="col-md-6">
                  <button className="btn btn-success w-100"><FlashOnIcon/> BUY NOW</button>
                </div>
                <div className="col-md-6">
                  <button className="btn btn-warning w-100" style={{color:"white"}}><ShoppingCartIcon /> ADD TO CART</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div>
              <span></span>
              <h2>{productDetails.productName}</h2>
              <div className="ratingCss">
                <Rating
                  emptySymbol={
                    <i
                      className="fa fa-star"
                      aria-hidden="true"
                      style={{
                        color: "gray",
                      }}
                    ></i>
                  }
                  fullSymbol={
                    <i
                      style={{
                        color: "orange",
                      }}
                      className="fa fa-star"
                      aria-hidden="true"
                    ></i>
                  }
                  initialRating={productDetails.ratings}
                />
                <span className="ml-2">{productDetails.ratings} ratings</span>
              </div>
              <div className="mt-2">
                <span className="specialPriceCss">Special Price</span>
                <h4> &#8377;  {productDetails.price}.00</h4>
              </div>
              <div className="highlightContainer mt-3">
                <div>
                  <span className="productDescriptionTitle">Description</span>
                </div>
                <div className="ml-3">
                  <span className="productDescription">
                  {productDetails.description}
                  </span>
                </div>
              </div>
              <div className="highlightContainer mt-3">
                <div>
                  <span className="productDescriptionTitle">Highlights</span>
                </div>
                <div>
                  <span className="productDescription">
                    {productDetails.highlights
                      .replace(/([.?!])\s*(?=[A-Z])/g, "$1|")
                      .split("|")
                      .map((sentence) => (
                        <ul>
                          <li>{sentence}</li>
                        </ul>
                      ))}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h3 className="mt-5 mb-5">Related Products</h3>
          <div className="container">
            <div className="row">
              {productList.map((product) => (
                <div className="col-md-3 mb-5">
                  <Products
                    data={product}
                  />
                </div>
              ))}
            </div>
          </div>
      </div>
    </div>
  );
}
