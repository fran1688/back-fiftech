const assert = require('assert');
const request = require('supertest');
const app = require('../app');

describe('Express app', () => {

        it('Must return the 200 status code in the POST of the Api', done => {

            let user = {
                "name":"francisco castillo",
                "email":"fcastillo1688@gmail.com",
                "pass":"1234562",
                "role":[
                    "Admin"
                ]
            }

            request(app)
                .post('/api/user')
                .send(user)
                .expect(201)
                .end((err, response) => {
                    assert(response.body !== '');
                    done();
                });
        });

    it('Must return the 200 status code in the GET of the Api', done => {

        request(app)
            .get('/api/users')
            .expect(200)
            .end((err, response) => {
                console.log(response.body);
                assert(response.body !== '');
                done();
            });
    });
});
