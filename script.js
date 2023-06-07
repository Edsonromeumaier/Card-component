const openModalLink = document.getElementById('openModal');
const modal = document.getElementById('modal');
const confirmBtn = document.getElementById('confirmBtn');
const cancelBtn = document.getElementById('cancelBtn');

// abrir modal

function openModal(){
    modal.style.display = 'block';
}

function closeModal(){
    modal.style.display = 'none';
}

function confirmAction() {

    console.log("Well done!");
    closeModal();
}
//Open modal
openModalLink.addEventListener('click', openModal)

// buttons modal
confirmBtn.addEventListener('click', confirmAction);
cancelBtn.addEventListener('click', closeModal);

