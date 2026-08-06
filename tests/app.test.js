const request = require('supertest');
const express = require('express');
const app = express();
app.get('/', (req, res) => res.status(200).send('OK'));

describe('Unit Tests', () => {
    it('GET / should return 200', (done) => {
        request(app).get('/').expect(200, done);
    });
});
