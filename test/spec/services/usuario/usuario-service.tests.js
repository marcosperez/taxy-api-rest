
describe('UsuarioService Tests', function() {

  var usuarioService;

  beforeEach(function() {
    usuarioService = require('../../../../app/services/usuario/usuario-service');
  });

  describe('lookupUsuario', function() {

    it('should be a function', function(done) {
      expect(usuarioService.lookupUsuario).to.be.a('function');
      done();
    });

  });
});
