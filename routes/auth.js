const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');
dotenv.config({path: './.env'});
const { auth, requiresAuth } = require('express-openid-connect');

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'GM0C-x7V_GVvAZVEZKG8HalKkJwbKS_ojqzOnVGC8ivYMDRDN028MDPoQtNAds4X',
  baseURL: 'https://antonio-david-tejada-villalon-l05.onrender.com',
  clientID: '2XjrbwiPEQuVVfzcLD7sXWJ4If0YEC3I',
  issuerBaseURL: 'https://dev-638e88h17iojguvl.us.auth0.com'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
router.use(auth(config));

// req.isAuthenticated is provided from the auth router
router.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

router.get('/profile', requiresAuth(), (req, res) => {
    res.send(JSON.stringify(req.oidc.user));
})

module.exports = router;