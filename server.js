const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const UserSchema = require("./schema/schema");

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: UserSchema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("Listening...");
});
