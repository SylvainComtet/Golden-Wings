
/*
 * Authenticator
 */

exports.login = function(req, res){
  if (req.session.member) {
    res.redirect('/');
  } else{
    res.render('authenticator/login');
  };
};

exports.logout = function(req, res){
  req.session.destroy();
  res.redirect('/');
};

exports.loginHandler = function(req, res){
  if (req.session.member) {
    res.redirect('/');
  } else{
    //.... FAKE DATA : TODO
    if (req.body.email == 'pass' && req.body.password == 'pass') {
      req.session.member = true;
      res.redirect('/');
    } else {
      res.redirect('/login'); //.... Render login page with error : TODO
    }
  };
};

exports.loginRequired = function(req, res, next){
  if (req.session.member) {
    next();
  } else {
    res.redirect('/login');
  }
};
