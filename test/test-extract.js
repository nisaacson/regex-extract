var should = require('should');
var extract = require('../index');
describe('regex extract', function() {

  it('should extract text from valid parameters', function(done) {
    var pattern = /file (.*?) is/;
    var text = 'lorem file 123456 is the test';
    extract(text, pattern, function (err, reply) {
      should.not.exist(err, 'error extracting text, error: ' + err);
      should.exist(reply, 'error extracting text, no reply returned');
      reply.should.eql('123456', 'extract reply is wrong');
      done();
    });
  });
});