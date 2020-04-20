const userCtrl = require('../controllers/userCtrl');

module.exports = (app) => {
    // User
    app.get('/api/users', userCtrl.index);
    app.post('/api/user', userCtrl.store);
    app.post('/api/systemuser', userCtrl.indexUser);
    app.get('api/admin', userCtrl.storetoken);
};

