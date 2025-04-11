const isSignedIn = (req, res, next) => {
    // If the user has a valid session, proceed
    if (req.session.user) {
        return next();
    }
    // Otherwise, send them to sign in.
    res.redirect("/auth/sign-in");
};
  
module.exports = isSignedIn