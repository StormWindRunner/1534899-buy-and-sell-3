const {Router} = require(`express`);
const {getMockData} = require(`../lib/get-mock-data`);
const category = require(`./category`);
const offers = require(`./offers`);
const search = require(`./search`);
const comments = require(`./comments`);



const {
  CategoryService,
  OffersService,
  SearchService,
  CommentService,
} = require(`../data-service/`);

const app = new Router();

(async () => {
  const mockData = await getMockData();
  category(app, new CategoryService(mockData));
  offers(app, new OffersService(mockData));
  search(app, new SearchService(mockData));
  comments(app, new CommentService(mockData));
})();

module.exports = app;