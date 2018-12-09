const api = require('./api');

const PropTypes = {
  read: (req, res, next) => {
    const {
      query: { geos },
    } = req;
    api
      .get(
        `/propertyTypeMenuSVC.aspx?ticker=${geos}&accountUser_id=86491&_=1541533101114`,
      )
      .then(response => res.status(200).send(response.data))
      .catch(err => next(err));
  },
};

module.exports = PropTypes;
