const port = 8080;

const app = require("./app");

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
