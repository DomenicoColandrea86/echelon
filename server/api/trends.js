const axios = require('axios');
const Models = require('../models');
const Trends = {
  list: (req, res, next) => {
    // Ideally these Cookies should be set by an authentication step,
    // but for the sake of this demo they will be hard coded
    const SESSION_ID = 'kykhbewm0hjrnbadjqtdkmqd';
    const ACCOUNT_USER_ID = 'YckEND57WjA$';
    axios
      .get(
        'https://app.rcanalytics.com/trendtracker/AJAX/indicesSVC.aspx?indices=VO2_NYCMET_OFF%2CVO2_BOSMET_OFF&yAxes=0%2C0&xAxes=0%2C0&colors=%2523EA7517%2C%25232567ab&dashes=Solid%2CSolid&chartTypes=line%2Cline&period=Q&currency=USD&currencySymbol=%24&priceFloor=2.5&priceCeiling=-1&augmentCapRate=true&augmentPPU=false&chartID=214726&_=1543333551623',
        {
          headers: {
            Cookie: `ASP.NET_SessionId=${SESSION_ID};TrendTrackerCookie=accountUser_id=${ACCOUNT_USER_ID};TrendTrackerSessionCookie=session_id=${SESSION_ID};`,
          },
          withCredentials: true,
        },
      )
      .then(response =>
        res.status(200).send(response.data.map(r => new Models.Trend(r))),
      )
      .catch(err => next(err));
  },
};

module.exports = Trends;
