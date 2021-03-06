var chai = require('chai');
var chaihttp = require('chai-http');
chai.use(chaihttp);
var expect = chai.expect;
var fs = require('fs');
var server = require(__dirname + '/../index.js');


describe('our NLP sever', function() {

  before(function(done) {
    fs.readFile(__dirname + '/../public/index.html', function(err, data) {
      if(err) throw err;
      this.html = data.toString();

      done();

    }.bind(this));
  });

  it('should respond to a GET request with our index page', function(done) {
    chai.request('localhost:3000')
      .get('/')
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res.status).to.eql(200);
        expect(res.text).to.eql(this.html);
        done();
      }.bind(this));
  });

  it('should respond to a POST request to the process URL', function(done){
    chai.request('localhost:3000')
    .post('/process')
    .type('form')
    .send('text=You talking to me?')
    .end(function(err, res){
      expect(err).to.eql(null);
      expect(res.text).to.eql('{"you":1,"talking":1,"to":1,"me":1}')
      done();
    })
  })
});
