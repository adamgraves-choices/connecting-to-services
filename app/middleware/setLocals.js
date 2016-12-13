const backLinkUtils = require('../lib/backLinkUtils');

function fromRequest(req, res, next) {
  /* eslint-disable no-param-reassign */
  const location = req.query.location || '';
  res.locals.location = location.toLocaleUpperCase();
  res.locals.context = req.query.context || '';

  const backLink = backLinkUtils(req, res);
  res.locals.backLink = {
    href: backLink.url,
    text: backLink.text,
  };
  /* eslint-enable no-param-reassign */
  next();
}

module.exports = {
  fromRequest,
};
