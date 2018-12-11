const api = require('./api');
const Models = require('../models');
const Trends = {
  read: (req, res, next) => {
    const {
      query: { indices },
    } = req;
    api
      .get(
        `/indicesSVC.aspx?indices=${indices}&yAxes=0%2C0%2C0%2C0%2C0%2C0&xAxes=0%2C0%2C0%2C0%2C0%2C0&colors=%2523DA8238%2C%252348A4E7%2C%25237FA6B0%2C%25233C86AA%2C%2523C1BEC0%2C%25233667A6&dashes=Solid%2CSolid%2CSolid%2CShortDash%2CShortDash%2CShortDash&chartTypes=line%2Cline%2Cline%2Cline%2Cline%2Cline&period=Q&currency=USD&currencySymbol=%24&priceFloor=10&priceCeiling=-1&augmentCapRate=true&augmentPPU=false&chartID=214726&_=1543333551623`,
      )
      .then(response =>
        res.status(200).send(response.data.map(r => new Models.Trend(r))),
      )
      .catch(err => next(err));
  },
};

module.exports = Trends;
