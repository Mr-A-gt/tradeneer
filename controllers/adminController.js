const Admin = require('../models/admin');
const bcrypt = require('bcryptjs');

exports.getLogin = (req, res) => {
    res.render('login');
};

exports.postLogin = async (req, res) => {
    const { username, password } = req.body;
    const admin = await Admin.findOne({ username });

    if (admin && await bcrypt.compare(password, admin.password)) {
        req.session.isAdmin = true;
        res.redirect('/dashboard');
    } else {
        res.redirect('/login');
    }
};

exports.getDashboard = (req, res) => {
    res.render('dashboard');
};

exports.getProducts = (req, res) => {
    res.render('products');
};


exports.logout = (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.redirect('/dashboard');
        }
        res.redirect('/login');
    });
};
