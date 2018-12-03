/* eslint-disable no-unused-vars */
const express = require('express');
const Api = require('../api');

// API routes
const APIRouter = middleware => {
  // create router instance
  const router = express.Router();
  // routes
  router.get('/geos', Api.Geos.read);
  router.get('/indices', Api.Indices.read);
  router.get('/trends', Api.Trends.read);
  router.get('/propTypes', Api.PropTypes.read);

  return router;
};

module.exports = APIRouter;
