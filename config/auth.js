module.exports = {
    ensureAuthenticated: function (req, res, next) {
        if(req.isAuthenticated()) {
            return next()
        }
        console.log('Please log in to view')
        res.redirect('/login')
    }
}