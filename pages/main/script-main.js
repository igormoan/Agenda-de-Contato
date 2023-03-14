const btnSignOut = document.querySelector(".sign-out");

const backdrop = document.querySelector(".backdrop");

const iconsRemoveContact = document.querySelectorAll(".action img");

const modalDelete = document.querySelector(".modal-delete");

const btnDelete = document.querySelector(".modal-delete .btn-green");
const btnCancelDelete = document.querySelector(".modal-delete .btn-red");
const closeIconModalDelete = document.querySelector(".modal-delete img");
const btnNewContact = document.querySelector("#btn-new-contact");


const modalAdd = document.querySelector(".modal-add");

const btnAddModalAdd = document.querySelector(".modal-add .btn-green");

const closeIconModalAdd = document.querySelector(".modal-add img");
const btnCancelModalAdd = document.querySelector(".modal-add .btn-red");

btnNewContact.addEventListener("click", () => {
    console.log("ok");
    backdrop.style.visibility = "visible";
    modalAdd.style.visibility = "visible";
});

function closeModalAdd() {
    backdrop.style.visibility = "hidden";
    modalAdd.style.visibility = "hidden";
}

btnAddModalAdd.addEventListener("click", closeModalAdd);
btnCancelModalAdd.addEventListener("click", closeModalAdd);
closeIconModalAdd.addEventListener("click", closeModalAdd);

for (const icon of iconsRemoveContact) {
    icon.addEventListener("click", () => {
        backdrop.style.visibility = "visible";
        modalDelete.style.visibility = "visible";

    });
}

function closeModalDelete() {
    backdrop.style.visibility = "hidden";
    modalDelete.style.visibility = "hidden";


}

btnCancelDelete.addEventListener("click", closeModalDelete);
closeIconModalDelete.addEventListener("click", closeModalDelete);
btnDelete.addEventListener("click", closeModalDelete);

btnSignOut.addEventListener("click", () => {
    window.location = "../sign_in.html";
});

