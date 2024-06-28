import { graphqlHTTP } from "express-graphql";
import schema from "./schema/schema";
const express = require("express");
require("dotenv").config();
const port = process.env.PORT || 5000;

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(port, () => {
  console.log(`Server run on port ${port}`);
});
