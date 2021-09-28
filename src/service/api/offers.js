const {Router} = require(`express`);
const {HttpCode} = require(`../constants`);
const offerValidator = require(`../middlewares/offerValidator`);
const commentValidator = require(`../middlewares/commentValidator`);
const offerExist = require(`../middlewares/offerExist`);
const {offerService} = require(`../data-service`);

const route = new Router();

module.exports = (app, service) => {
  app.use(`/offers`, route);

  route.get(`/`, (req, res) => {
    const offers = service.findAll();
  
    if(!offers){
      return res.status(HttpCode.NOT_FOUND)
        .send(`There are no offers!`);
    }

    return res.status(HttpCode.OK)
      .json(offers);
  });

  route.get(`/:offerId`, (req, res) => {
    const {offerId} = req.params;
    const offer = service.findOne(offerId);
  
    if (!offer) {
      return res.status(HttpCode.NOT_FOUND)
        .send(`Not found with ${offerId}`);
    }
  
    return res.status(HttpCode.OK)
      .json(offer);
  });

  route.post(`/`, offerValidator, (req, res) => {
    const offer = offerService.create(req.body);
  
    return res.status(HttpCode.CREATED)
      .json(offer);
  });


  route.put(`/:offerId`, (req, res) => {
    const {offerId} = req.params;
    const offer = service.findOne(offerId);

    const updatedOffer = service.update(offerId, offer);
  
    if (!updatedOffer) {
      return res.status(HttpCode.NOT_FOUND)
        .send(`Not updated with ${offerId}`);
    }
  
    return res.status(HttpCode.OK)
      .json(updatedOffer);
  });

  route.delete(`/:offerId`, (req, res) => {
    const {offerId} = req.params;
    const offer = service.findOne(offerId);

    const deletedOffer = service.update(offerId, offer);
  
    if (!deletedOffer) {
      return res.status(HttpCode.NOT_FOUND)
        .send(`Not deleted with ${offerId}`);
    }
  
    return res.status(HttpCode.OK)
      .json(deletedOffer);
  });

  route.get(`/:offerId/comments`, [offerExist(offerService), commentValidator], (req, res) => {
    console.log('>>>>OF', res.locals);
    const {offer} = res.locals;
    res.send('Route offer commment');
    // Остальной код
    // return null;
  });

  route.delete(`/:offerId/comments/:commentId`, (req, res) => {
    const {offerId, commentId} = req.params;
    const offer = service.findOne(offerId);

    // const deletedOffer = service.update(offerId, offer);
  
    // if (!deletedOffer) {
    //   return res.status(HttpCode.NOT_FOUND)
    //     .send(`Not deleted with ${offerId}`);
    // }
  
    // return res.status(HttpCode.OK)
    //   .json(deletedOffer);
  });

  route.post(`/:offerId/comments/`, (req, res) => {
    // const offer = offerService.create(req.body);
  
    // return res.status(HttpCode.CREATED)
    //   .json(offer);
  });
};