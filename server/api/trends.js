const api = require('./api');
const Models = require('../models');
const Trends = {
  read: (req, res, next) => {
    api
      .get(
        '/indicesSVC.aspx?indices=VO2_NYCMET_OFF%2CVO2_BOSMET_OFF&yAxes=0%2C0&xAxes=0%2C0&colors=%2523EA7517%2C%25232567ab&dashes=Solid%2CSolid&chartTypes=line%2Cline&period=Q&currency=USD&currencySymbol=%24&priceFloor=2.5&priceCeiling=-1&augmentCapRate=true&augmentPPU=false&chartID=214726&_=1543333551623',
      )
      .then(response =>
        res.status(200).send(response.data.map(r => new Models.Trend(r))),
      )
      .catch(err => next(err));
  },
};

module.exports = Trends;
