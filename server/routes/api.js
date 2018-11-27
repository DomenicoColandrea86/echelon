/* eslint-disable no-unused-vars */
const express = require('express');
const API = require('../api');

// API routes
const APIRouter = middleware => {
  // create router instance
  const router = express.Router();
  // routes
  router.get('/trends', API.Trends.list);
  return router;
};

module.exports = APIRouter;
