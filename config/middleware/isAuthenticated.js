module.exports = function(req, res, next) {

    if (req.isAuthenticated()) {
      return next();
    }
  
    res.json({ message: "no auth" });
  };
  