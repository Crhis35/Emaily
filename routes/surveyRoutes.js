const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');

const surveyTemplate = require('../services/email/surveyTemplate');

const Survey = require('../models/Surveys');
const User = require('../models/User');

module.exports = (app) => {
  app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
    const { surveyTitle, subject, body, emails } = req.body.values;
    const surveyNew = await Survey.create({
      title: surveyTitle,
      subject,
      body,
      recipients: emails.split(',').map((email) => ({ email: email.trim() })),
      _user: req.user.id,
      dateSent: Date.now(),
    });
    // Send Email
    try {
      const mailer = new Mailer(surveyNew, surveyTemplate(surveyNew));
      await mailer.send();
      await User.findByIdAndUpdate(req.user.id, { $inc: { credits: -1 } });

      const user = await User.findById(req.user.id);
      console.log(user);
      res.send(user);
    } catch (err) {
      console.log(err);
      res.status(422).send(err);
    }
  });
};
