const jwt = require('jsonwebtoken')
const moment = require('moment');

const bcrypt = require('bcrypt-nodejs');

const User = require('../models/user');
const UserPost = require('../models/postUser');

const secret =  'mitoken'



module.exports = {
    index(req, res) {
        User.find({}, (err, users) => {
            return res.status(200).send({result: users});
        }).exec()
    },
    indexUser(req, res, next) {
        const email = req.body.email;

        User.findOne({ email: email })
            .then(user => {
                if(!user) {
                    return res.status(200).send({
                        success: false,
                        message: 'Usuario inexistente'
                    });
                }
                if(req.body.pass !== user._doc.pass) {
               // const result = bcrypt.compare(req.body.pass, user._doc.pass);

                    return res.status(200).send({
                        success: false,
                        message: 'Contraseña incorrecta'
                    });
                }

                const token = jwt.sign({ _id: user._doc.email }, secret, {
                    expiresIn: 2
                })

                return res.status(200).send({
                    success: true,
                    token
                });
            });
    },
    store(req, res, next) {
        const createUser = new User(req.body);
        createUser.save((err, createUser) => {
            if (err) {
                return res.status(400).send(err);
            }
            res.status(200).send({result: createUser});
        })
    },
    storetoken(req, res, next) {
        const token = req.body.token || req.query.token || req.headers['x-access-token'];
        if(token) {
            jwt.verify(token, app.get('phrase'), (err, decoded) => {
                if(err) {
                    return res.json({
                        success: false,
                        message: 'Token inválido.'
                    });
                }
                request.decoded = decoded;
                next();
            })
        } else {
            return res.json({
                success: false,
                message: 'No hay un token asociado a esta petición'
            });
        }
    },
}
