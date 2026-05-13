function addComment() {
    const input = document.getElementById('comment');
    const text = input.value.trim();
    if (!text) return;

    //crear nuevo comentario en la pagina
    const fechaHora = getDateTime();

    const item = document.createElement('div');
    item.className = 'comment-item';
    item.innerHTML = `
    <p class="meta">Tú · ${fechaHora}</p>
    <p>${text}</p>
    <button onclick="deleteComment(this)">Eliminar</button>
  `;
    //agregarlo a la pagina
    document.getElementById('commentList').prepend(item);

    //limpia input despues de agregarlo
    input.value = '';
}

function getDateTime() {
    const now = new Date();
    const fecha = now.toLocaleDateString('es-MX', { day: '2-digit', month: 'short', year: 'numeric' });
    const hora = now.toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' });
    return `${fecha} · ${hora}`;
}

function deleteComment(btn) {
  const item = btn.closest('.comment-item'); // sube al div padre
  item.remove();                             // lo elimina del DOM
}

document.getElementById('miFormulario').addEventListener('submit', function(e) {
  e.preventDefault(); //evita la recarga
  addComment();
});