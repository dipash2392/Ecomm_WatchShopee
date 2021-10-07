import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import watch_1 from "../../assets/watch_1.jpeg";
import watch_2 from "../../assets/watch_2.jpeg";
import "./product.css";
import Rating from "../Ratings/Ratings";

export default function Products({ data, showProductDetails }) {
  return (
    <Card
      sx={{ maxWidth: 345}}
      key={data.id}
      className="productCardHover"
      onClick={() => showProductDetails(data)}
    >
      <div className="text-center">
        <img
          className="productImg"
          src={data.id % 2 === 0 ? watch_1 : watch_2}
          alt={data.productName}
        ></img>
      </div>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" data-testid={`productName-${data.id}`}>
          {data.productName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <div className="ratingCss">
            <Rating
              emptySymbol={<i className="fa fa-star" aria-hidden="true"></i>}
              fullSymbol={
                <i
                  style={{
                    color: "orange",
                  }}
                  className="fa fa-star"
                  aria-hidden="true"
                ></i>
              }
              initialRating={data.ratings}
            />
            <span className="ml-2">{data.ratings} ratings</span>
          </div>
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          &#8377; {data.price}.00
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Save extra with No Cost EMI
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy Now</Button>
        <Button size="small">Add To Cart</Button>
      </CardActions>
    </Card>
  );
}
