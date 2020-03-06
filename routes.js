const passport = require("passport");
const express = require("express");
const router = express.Router();
const db = require("./models");
var isAuthenticated = require("./config/middleware/isAuthenticated");


// Add new inventory item
router.post("/api/products", isAuthenticated, function (req, res) {
    req.body.userid = req.user._id
    db.Product.create(req.body)
        .then(data => res.json(data))
        .catch(err => res.status(422).json(err));
});

// Get all inventory items
router.get("/api/products", isAuthenticated, function (req, res) {
    db.Product.find({userid: req.user._id}).sort({brand: 1})
        .then(data => res.json(data))
        .catch(err => res.status(422).json(err));
});

// Filter table by type
router.get("/api/products/filter/type", isAuthenticated, function (req, res) {
    db.Product.find({userid: req.user._id}).sort({type: 1})
        .then(data => res.json(data))
        .catch(err => res.status(422).json(err));
});

// Filter table by product name
router.get("/api/products/filter/product", isAuthenticated, function (req, res) {
    db.Product.find({userid: req.user._id}).sort({product: 1})
        .then(data => res.json(data))
        .catch(err => res.status(422).json(err));
});

// Filter table by count
router.get("/api/products/filter/count", isAuthenticated, function (req, res) {
    db.Product.find({userid: req.user._id}).sort({count: 1})
        .then(data => res.json(data))
        .catch(err => res.status(422).json(err));
});

// Filter table by par
router.get("/api/products/filter/par", isAuthenticated, function (req, res) {
    db.Product.find({userid: req.user._id}).sort({par: 1})
        .then(data => res.json(data))
        .catch(err => res.status(422).json(err));
});

// Filter table by last updated
router.get("/api/products/filter/updated", isAuthenticated, function (req, res) {
    db.Product.find({userid: req.user._id}).sort({updated: 1})
        .then(data => res.json(data))
        .catch(err => res.status(422).json(err));
});

// Get individual inventory item
router.get("/api/products/:id", isAuthenticated, function (req, res) {
    db.Product.findById(req.params.id)
        .then(data => res.json(data))
        .catch(err => res.status(422).json(err));
});


// Update inventory item on Update page
router.put("/api/products/:id", isAuthenticated, function (req, res) {
    db.Product.findByIdAndUpdate(req.params.id, req.body)
        .then(data => res.json(data))
        .catch(err => res.status(422).json(err));
})

// Get low inventory items
router.get("/api/lowinventory", isAuthenticated, function (req, res) {
    db.Product.find({ userid: req.user._id,
        $where: function () {
            return (this.par > this.count);
        }
    }).sort({brand: 1})
        .then(data => res.json(data))
        .catch(err => res.status(422).json(err));
});

// Add item to order list
router.put("/api/orderlist/:id", isAuthenticated, function (req, res) {
    db.Product.findByIdAndUpdate(req.params.id, req.body)
        .then(data => res.json(data))
        .catch(err => res.status(422).json(err));
});

// Get order list items
router.get("/api/orderlist", isAuthenticated, function (req, res) {
    db.Product.find({ userid: req.user._id, isOrdered: true }).sort({brand: 1})
        .then(data => res.json(data))
        .catch(err => res.status(422).json(err));
});

// Clear order list
router.put("/api/orderlist", isAuthenticated, function (req, res) {
    db.Product.updateMany({ userid: req.user._id, isOrdered: true }, { isOrdered: false })
        .then(data => res.json(data))
        .catch(err => res.status(422).json(err));
});

// Update inventory item on View page
router.put("/api/update/:id", isAuthenticated, function (req, res) {
    db.Product.findByIdAndUpdate(req.params.id, req.body)
        .then(data => res.json(data))
        .catch(err => res.status(422).json(err));
});

// Switch toggleUpdate between false and true
router.put("/api/update", isAuthenticated, function (req, res) {
    db.Product.updateMany({userid: req.user._id}, req.body)
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