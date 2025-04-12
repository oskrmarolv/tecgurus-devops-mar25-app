// middlewares/debug.middleware.js

module.exports = async function (req, res, next) {
  const DEFAULT_DATE_OPTIONS = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };

  const REQUEST_TOKEN_ID = Math.floor(Math.random() * 10000);
  const REQUEST_TIMESTAMP = Date.now();
  const DATE_CURRENT = new Date();

  /*  :: debug ::  */
  console.log(`\n> > >  [ ${DATE_CURRENT.toLocaleDateString("en-US", DEFAULT_DATE_OPTIONS)} ]   N E W   R E Q U E S T  ( ${REQUEST_TOKEN_ID} )`);
  console.log("REQUEST");
  console.log("├  req.url =", req.url);
  console.log("├  req.method =", req.method);
  console.log("├  req.cookies =", JSON.stringify(req.cookies));
  console.log("├  req.session =", ( req.session ) ? JSON.stringify(req.session, null, 3) : req.session);
  console.log("├  req.params =", JSON.stringify(req.params));
  console.log("├  req.query =", ( Object.keys(req.query).length ) ? `\n${JSON.stringify(req.query, null, 2)}` : req.query);
  console.log("├  req.body =", ( Object.keys(req.body).length ) ?`\n${JSON.stringify(req.body, null, 2)}` : req.body);
  console.log("└  req.files =", ( req.files ) ? `\n${JSON.stringify(req.files, null, 3)}` : req.files);

  next();
}