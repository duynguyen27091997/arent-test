/* eslint-disable @typescript-eslint/no-var-requires */
const express = require("express");
const apiMocker = require("connect-api-mocker");
const cors = require("cors");

const app = express();
const port = 8080;

app.use(cors({ origin: "http://localhost:3000" }));

app.use("/api", apiMocker("mock-api"));

console.log(`Mock API Server is up and running at: http://localhost:${port}`);

app.listen(port);
