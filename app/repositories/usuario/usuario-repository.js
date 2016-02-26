
function UsuarioRepository() {
}

function getUsuarioData(id) {
  return { id: id };
}

UsuarioRepository.prototype = {
    getUsuarioData: getUsuarioData
};

var usuarioRepository = new UsuarioRepository();

module.exports = usuarioRepository;
