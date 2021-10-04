import {
  render,
  screen,
  act,
  cleanup,
  waitFor} from "@testing-library/react";
// import "jest-dom/extend-expect";
import { Provider } from "react-redux";
import HomePage from "../HomePage";
import store from "../../../Redux/store";
import Product from "../../Products/Products";
import mockAxios from "../../../__mocks__/axiosMock"

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        id: 1,
        productImg: "watch_1",
        productName: "JYSHVI ENTERPRISES Smart watch",
        price: 899,
        ratings: 2,
        highlights: "With Call Function. Touchscreen. Fitness and outdoor.",
        description: "Description",
      }),
  })
);

const MockHome = () => {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
};

afterEach(cleanup);
// Describe Block: Use this block to group Common test
describe("HomePage", () => {
  it("renders", () => {
    let wrapper =  act(() => {
        render(<MockHome />);
    });
    expect(wrapper).not.toBeNull();
  });

  test("component renders correctly", () => {
    const { queryByTestId } = render(<MockHome />);
    expect(queryByTestId("nav-bar")).toBeTruthy();
    expect(queryByTestId("side-bar")).toBeTruthy();
  });

  test("renders Today's Deals heading", () => {
    act(() => {
        render(<MockHome />);
    });
    const headingElement = screen.getByText(/Today's Deals/i);
    expect(headingElement).toBeInTheDocument();
  });

  test("async axios request", async() => {
 mockAxios.get.mockResolvedValue({data:{
    id: 1,
    productImg: "watch_1",
    productName: "JYSHVI ENTERPRISES Smart watch",
    price: 899,
    ratings: 2,
    highlights: "With Call Function. Touchscreen. Fitness and outdoor.",
    description: "Description",
  }})
  await act(async()=>{
      await waitFor(()=>render(<MockHome />))
  })
  
//   const resolveElement = await waitForElement(()=>getByText("productList"))
  expect(mockAxios.get).toHaveBeenCalledTimes(1)
  });


  it("get data passed correctly to the product", async () => {
    const mockData = {
      id: 1,
      productImg: "watch_1",
      productName: "JYSHVI ENTERPRISES Smart watch",
      price: 899,
      ratings: 2,
      highlights: "With Call Function. Touchscreen. Fitness and outdoor.",
      description: "Description",
    };
    act(() => {
        render(<Product data={mockData} />);
    });
    // render(<Product data={mockData} />);
    const text = screen.queryAllByText("JYSHVI ENTERPRISES Smart watch")[0]
      .innerHTML;

    expect(text).toBe("JYSHVI ENTERPRISES Smart watch");
  });
});
