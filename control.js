const formulario = document.getElementById('formulario');
const usuario = document.getElementById('usuario');
const clave = document.getElementById('clave');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    if (usuario.value === '' || clave.value === '') {
        return alert('los campos non deben ser vacios');
    }
    if (!usuario.value.includes('@')) {
        return alert('El usuario no es valido, debe contener un @');
    }
    formulario.submit();
});