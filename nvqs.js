const jsonfile = [
  {
    name: "naveen",
    email: "naveen@gmail.com",
    data_grid: [
      {
        technology: "node",
        exp: "1",
      },
      {
        technology: "js",
        exp: "2",
      },
    ],
  },
  {
    name: "naveen1",
    email: "naveen1@gmail.com",
    data_grid: [
      {
        technology: "react",
        exp: "1",
      },
      {
        technology: "angular",
        exp: "2",
      },
    ],
  },
];

console.log(Array.isArray(jsonfile[0].data_grid));
