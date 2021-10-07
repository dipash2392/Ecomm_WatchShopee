const fakeData = [
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
export default async () => {
  const response = await new Promise((response) => {
    resolve(fakeData);
  });
};
