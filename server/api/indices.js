/* eslint-disable react/forbid-foreign-prop-types */
const api = require('./api');

const Indices = {
  read: (req, res, next) => {
    const {
      query: { propTypes },
    } = req;
    api
      .get(
        `/dataTypeMenuSVC.aspx?ticker=${propTypes}&currency_id=1&measurement_id=1&volumeQuality=2&priceQuality=2&feetOrUnits_id=1&accountUser_id=86491&_=1541533101134`,
      )
      .then(response => res.status(200).send(response.data))
      .catch(err => next(err));
  },
};

module.exports = Indices;
