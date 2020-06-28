// module.exports = {
//   googleClientId:
//     '392066281887-uni9ubfc16sp5cdlkhmssm57nu6vv603.apps.googleusercontent.com',
//   googleClientSecret: 'BG13Y_6jwcM-CT7EB2UNUJT-',
//   mongoURI:
//     'mongodb+srv://crhis:pNk7M1kj7uTgSPiR@cluster0-pvwyu.mongodb.net/emaily?retryWrites=true&w=majority',
//   mongoURILocal: 'mongodb://localhost:27017/emaily',
//   cookieKey: 'dasldnkassadsadasdasdklnsdasldnksaldlsadn',
// };
module.exports = {
  googleClientId: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  mongoURI: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY,
  stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  stripeSecretKey: process.env.STRIPE_SECRET_KEY,
};
