const axios = require('axios');

const create = (baseURL = 'https://app.rcanalytics.com/trendtracker/AJAX') => {
  // Ideally these Cookies should be set by an authentication step,
  // but for the sake of this demo they will be hard coded
  const SESSION_ID = 'kykhbewm0hjrnbadjqtdkmqd';
  const ACCOUNT_USER_ID = 'YckEND57WjA$';
  return axios.create({
    baseURL,
    headers: {
      Cookie: `ASP.NET_SessionId=${SESSION_ID};TrendTrackerCookie=accountUser_id=${ACCOUNT_USER_ID};TrendTrackerSessionCookie=session_id=${SESSION_ID};`,
    },
    timeout: 10000,
    withCredentials: true,
  });
};

const api = create();

module.exports = api;
