
describe('UsuarioRepository Tests', function() {

  var usuarioRepository;

  beforeEach(function() {
    usuarioRepository = require('../../../../app/repositories/usuario/usuario-repository');
  });

  describe('getUsuarioData()', function() {

    it('should be a function', function(done) {
      expect(usuarioRepository.getUsuarioData).to.be.a('function');
      done();
    });

  });
});
