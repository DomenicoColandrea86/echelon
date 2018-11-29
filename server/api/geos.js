const axios = require('axios');

const Geos = {
  read: (req, res, next) => {
    axios
      .get(
        'http://trendtrackersvc-test.rcanalytics.local/TrendtrackerService/criteriaList?table=box2',
      )
      .then(response => res.status(200).send(response.data))
      .catch(err => next(err));
  },
};

module.exports = Geos;
