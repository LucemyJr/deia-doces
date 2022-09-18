const modal = document.getElementById('modal-promocao')
const btn = document.getElementById('btn-modal')
const container = document.getElementById('modal-promocao')

function fechaModal(){
    modal.classList.add('show')
}

btn.addEventListener('click', fechaModal)
container.addEventListener('click', fechaModal)
