const request = require('supertest');
var app  = require('./server').app;

it('shourld return hello world.',(done)=>{
    request(app)
        .get('/')
        .expect(404)
        .expect((res)=>{
            expect(res.body).toInclude({
                error:'Page not found.'
            });
        })
        .end(done);
});