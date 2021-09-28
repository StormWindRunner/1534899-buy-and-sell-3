"use strict";

const chalk = require(`chalk`);
const express = require(`express`);
const fs = require(`fs`).promises;
const {FILE_NAME, HttpCode, COUNT, DEFAULT_PORT, API_PREFIX} = require(`../constants`); // API PREF = /api
const routes = require(`../api`);
const [customPort] = COUNT;
const port = Number.parseInt(customPort, 10) || DEFAULT_PORT;
const app = express();
app.use(express.json());

app.use(API_PREFIX, routes);

app.get(`/offers`, async (req, res) => {
  try {
    const fileContent = await fs.readFile(FILE_NAME);
    const mocks = JSON.parse(fileContent);
    res.json(mocks);
  } catch (_err) {
    res.send([]);
  }
});

app.use((req, res) => res
  .status(HttpCode.NOT_FOUND)
  .send(`Not found`));

module.exports = {
  name: `--server`,
  run() {
    app.listen(port, (err) => {
      if (err) {
        console.log(chalk.red(`Something's going wrong!`));
      }
      console.log(chalk.green(`Server listening at ${port}`));
    });
  },
};
