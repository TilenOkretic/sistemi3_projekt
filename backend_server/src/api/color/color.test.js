const supertest = require('supertest');

const app = require('../../app');

describe('GET /api/deckColor', () => {
    it('should respond with an array of deck colors', async () => {
        const response = await supertest(app)
            .get('/api/color')
            .expect('Content-Type', /json/)
            .expect(200);

        expect(response.body.length).toEqual(7); 
    });
});
