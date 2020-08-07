const userRole = require('../model/userRole');
const passport = require('../passport')
const bcrypt = require('bcrypt');
const atob = require('atob');
const jwt = require('jsonwebtoken')
const security = require('../security/securitySetup')
exports.getSub = (req, res) => {

    if (req.session.passport) {
        res.status(200).json(req.session.passport.user)
    } else {
        res.status(403).json({ msg: "session expired" })
    }
};

exports.signup = (req, res, next) => {
    passport.authenticate('login', (error, user, info) => {
        if (error) {
            return res.status(500).json({
                error: "we could not find",
                msg: error
            })
        }
        let responseDate = {
            email: user.email,
            name: user.name,
            id: user._id
        }
        req.logIn(responseDate, (error) => {
            if (error) {
                return res.status(500).json({
                    error: "we could not find",
                    msg: error
                })
            }

            return res.status(200).json({
                msg: 'User Created Successfully',
                responseDate
            })
        })
    })(req, res, next)
}
exports.signin = (req, res, next) => {
    passport.authenticate('signin', (error, user, info) => {
        if (error) {
            return res.status(500).json({
                error: "we could not find",
                msg: error
            })
        }
        let responseDate = {
            email: user.email,
            name: user.name,
            id: user._id
        }
        req.logIn(responseDate, (error) => {
            if (error) {
                return res.status(500).json({
                    error: "we could not find",
                    msg: error
                })
            }

            return res.status(200).json({
                msg: 'User Created Successfully',
                responseDate
            })
        })
    })(req, res, next)
}