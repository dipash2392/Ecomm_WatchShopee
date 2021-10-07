import { render, screen, cleanup } from "@testing-library/react";
import { Provider } from "react-redux";
import HomePage from "../HomePage";
import store from "../../../Redux/store";
import { act } from "react-dom/test-utils";
import ReactDOM from "react-dom";
import axios from "axios";
import Products from "../../Services/homePageService";
let container;

// global.fetch = jest.fn(() =>
//   Promise.resolve({
//     json: () =>
//       resolve({
//         id: 1,
//         productImg: "watch_1",
//         productName: "JYSHVI ENTERPRISES Smart watch",
//         price: 899,
//         ratings: 2,
//         highlights: "With Call Function. Touchscreen. Fitness and outdoor.",
//         description: "Description",
//       }),
//   })
// );

const MockHome = () => {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
};

jest.mock("axios");

test("should fetch Products", () => {
  const products = [
    {
      id: 1,
      productImg: "watch_1",
      productName: "JYSHVI ENTERPRISES Smart watch",
      price: 899,
      ratings: 2,
      highlights: "With Call Function. Touchscreen. Fitness and outdoor.",
      description: "Description",
    },
  ];
  const resp = { data: products };
  axios.get.mockResolvedValue(resp);
  return Products().then((data) => {
    expect(data).toEqual(products);
    expect(data.length).toEqual(1)
  });
});
