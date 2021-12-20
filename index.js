const express = require("express");
const app = express();

const PORT = process.env.port || 3000;

require("./src/app/app")(app);

app.listen(PORT, (error) => {
  if (error) throw error;
  console.log(`Server start listening on port:${PORT}`);
});
