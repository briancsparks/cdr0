
const createError   = require('http-errors');

module.exports = function(app, express) {

  // catch 404 and forward to error handler
  app.use(_404);

  // error handler
  app.use(errorHandler);

};


// -------------------------------------------------------------------------------------------------------------------
// functions

function _404(req, res, next) {
  next(createError(404));
}

function errorHandler(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
}

