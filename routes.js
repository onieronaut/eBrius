const passport = require("passport");
const express = require("express");
const router = express.Router();
const db = require("./models");
var isAuthenticated = require("./config/middleware/isAuthenticated");

router.post("/api/products", function (req,res) {
    db.Product.create(req.body)
                .then(data => res.json(data))
                .catch(err => res.status(422).json(err));
});

router.get("/api/products", function (req,res) {
    db.Product.find({})
                .then(data => res.json(data))
                .catch(err => res.status(422).json(err));
})

router.get("/api/products/:id", function (req,res) {
    db.Product.findById(req.params.id)
                .then(data => res.json(data))
                .catch(err => res.status(422).json(err));
})

router.put("/api/products/:id", function (req,res) {
    db.Product.findByIdAndUpdate(req.params.id, req.body)
    .then(data => res.json(data))
    .catch(err => res.status(422).json(err));
})

router.post("/api/orderlist", function (req,res) {
    db.OrderList.create(req.body)
        .then(data => res.json(data))
        .catch(err => res.status(422).json(err));
});

router.post("/api/register", function (req, res) {
    console.log("registering user");

    db.User.register(
        new db.User({ username: req.body.username, email: req.body.email }),
        req.body.password,
        function (err, user) {
            if (err) {
                console.log(err);
                return res.json(err);
            }
            passport.authenticate("local")(req, res, function (data) {
                res.json(req.user);
            });
        }
    );
});

router.post("/api/login", function (req, res, next) {
    passport.authenticate("local", function (err, user, info) {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.json(info);
        }
        req.logIn(user, function (err) {
            if (err) {
                return next(err);
            }
            return res.json(user);
        });
    })(req, res, next);
});

router.get("/api/logout", function (req, res) {
    req.logout();
    res.json({ message: "logged out" });
});

router.get("/api/authorized", isAuthenticated, function (req, res) {
    res.json(req.user);
});

module.exports = router;