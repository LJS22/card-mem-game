const { PORT = 4500 } = process.env;

const app = require("./server");

app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
