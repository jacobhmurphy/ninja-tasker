// middleware that restricts user access

module.exports = function(req, res, next) {
  // if there's a user allow them to access the route that they are haeding
  if (req.user || req.session.user) {
    return next();
  }
  // if there is no user logged in redirect them to login
  return res.redirect("/user/login");
};
