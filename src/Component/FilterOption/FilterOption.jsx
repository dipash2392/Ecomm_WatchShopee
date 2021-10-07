import * as React from "react";

export default function SelectVariants({filterProduct}) {
  const [age, setAge] = React.useState("");

    const handleChange = (event) => {
        setAge(event.target.value);
        console.log(event.target.value)
        filterProduct(event.target.value)
    };

  return (
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <select class="form-select filterSelect" aria-label="Default select example" onChange={(e)=>handleChange(e)}>
            <option selected disabled>--- Filter By --- </option>
            <option value="1">Price Lowest to Highest</option>
            <option value="2">Price Highest to Lowest</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
    </div>
  );
}
