// Element variables from html/////////////
const contactModalEl = document.getElementById('contactModal');
const contactBtnEl = document.getElementById('contactBtn');
const contCloseBtnEl = document.getElementById('contCloseBtn');
const contSendBtnEl = document.getElementById('contSendBtn');
const contNameEl = document.getElementById('contNameInput')
const contEmailEl = document.getElementById('contEmailInput');
const contMessageEl = document.getElementById('contactMessageInput');
const contFormEl = document.getElementById('contactForm');
const refModalEl = document.getElementById('refModal');
const refBtnEl = document.getElementById('refBtn');
const addResBtnEl = document.getElementById('addResBtn')
const addResModalEl = document.getElementById('addResModalEl')
<<<<<<< HEAD

=======
// const state = document.getAttribute("data-state")
// const expo = document.getAttribute("onclick")
>>>>>>> 1d24ac309516f5aad61fba5ab63f7f77f683afcc



function chambord() {
    document.getElementById("chambord").innerHTML = "<img src='./assets/images/Chambord (1).jpg' alt='Château de Chambord' style='width: 300px; height: 300px; padding: -9px;'/>"
}

<<<<<<< HEAD
function chenonceau() {
    document.getElementById("chenonceau").innerHTML = "<img src='./assets/images/Chenonceau (1).jpg' alt='Château de Chenonceau' style='width: 300px; height: 300px; padding: -9px;'/>"
=======
boxEl.addEventListener('click', function(event){
    element = event.target
    if (state === "hidden"){
        element.innerHTML = element.expo
        element.dataset.state = 'visible'
    } else{
        element.textContent = ""
        element.setAttribute("data-state", "hidden")
    }

})


function chenonceau(){document.getElementById("chenonceau").innerHTML = "<img src='./assets/images/Chenonceau (1).jpg' alt='Château de Chenonceau' style='width: 300px; height: 300px; padding: -9px;'/>"
}

function bretagne (){document.getElementById("bretagne").innerHTML = "<img src='./assets/images/Bretagne (1).jpg' alt='Château des Ducs de Bretagne' style='width: 300px; height: 300px; padding: -9px;'/>"
}
function foix (){document.getElementById("foix").innerHTML = "<img src='./assets/images/Foix (1).jpg' alt='Château de Foix' style='width: 300px; height: 300px; padding: -9px;'/>"}

function chenonceau(){ document.getElementById("chenonceau").innerHTML = "<img src='./assets/images/Chenonceau (1).jpg' alt='Château de Chenonceau' style='width: 300px; height: 300px; padding: -9px;'/>"
>>>>>>> 1d24ac309516f5aad61fba5ab63f7f77f683afcc
}

function bretagne() {
    document.getElementById("bretagne").innerHTML = "<img src='./assets/images/Bretagne (1).jpg' alt='Château des Ducs de Bretagne' style='width: 300px; height: 300px; padding: -9px;'/>"
}
<<<<<<< HEAD
function foix() {
    document.getElementById("foix").innerHTML = "<img src='./assets/images/Foix (1).jpg' alt='Château de Foix' style='width: 300px; height: 300px; padding: -9px;'/>"
}
function tours() {
=======
function foix (){ document.getElementById("foix").innerHTML = "<img src='./assets/images/Foix (1).jpg' alt='Château de Foix' style='width: 300px; height: 300px; padding: -9px;'/>"

 }
 function tours (){
>>>>>>> 1d24ac309516f5aad61fba5ab63f7f77f683afcc
    document.getElementById("tours").innerHTML = "<img src='./assets/images/Tours.jpg' alt='Château de Tours' style='width: 300px; height: 300px; padding: -9px;'/>"
}
function versailles() {
    document.getElementById("versailles").innerHTML = "<img src='./assets/images/palace.jpg' alt='Palace de Versailles' style='width: 300px; height: 300px; padding: -9px;'/>"
}

// This is where the Modals scripts are grouped/////////////

// This is the beginning of script for the contact form modal///////////

// contactBtnEl.addEventListener('click', handleContact);

// let handleContact = function () {
//     contactModalEl.style.display = 'block';
// }

// contCloseBtnEl.addEventListener('click', cancelContact);

// let cancelContact = function () {
//    contactModalEl.style.display = 'hide'; 
// };
// this will reset array on load, create function

const messageArray = [];
console.log("Wehave a console!")
<<<<<<< HEAD
const visitorMessageEl = {
    Name: contNameEl.value.trim(),
    Email: contEmailEl.value.trim(),
    Message: contMessageEl.value.trim(),
};
=======

>>>>>>> 1d24ac309516f5aad61fba5ab63f7f77f683afcc

const handleSubmit = function (event) {
    console.log("handleSubmit success")
    event.preventDefault();
    const visitorMessageEl = {
        Name: contNameEl.value.trim(),
        Email: contEmailEl.value.trim(),
        Message: contMessageEl.value.trim(),
        };
    if (contEmailEl.value.trim() === "") {
        alertError();
    } if (contMessageEl.value.trim() === "") {
        alertError();
    } if (contNameEl.value.trim() === "") {
        alertError();
    } else {
        console.log(visitorMessageEl);
        messageArray.push(visitorMessageEl);
        localStorage.setItem("messages", JSON.stringify(messageArray));
        console.log("You have received a new message!");
    };
};

const alertError = function () {
    const errorEl = document.createElement('p');
    contFormEl.appendChild(errorEl);
    errorEl.textContent = "Please complete the form.";
}

<<<<<<< HEAD
contSendBtnEl.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("sendbtn works")
})
=======
contFormEl.addEventListener('submit', handleSubmit)
>>>>>>> 1d24ac309516f5aad61fba5ab63f7f77f683afcc


// (e)=>{handleSubmit(e)}
// localStorage.setItem('messages', JSON.stringify('visitorMessageEl'));
// const visitorMessage = JSON.parse(localStorage.getItem('visitorMessageEl'));
// 
// const renderVisitorMessage = function () {}
// const visitorMessageEl = {
//     Name: contNameEl.value.trim(),
//     Email: contEmailEl.value.trim(),
//     Message: contMessageEl.value.trim(),
// }


// This is the bottom of the script for the contact form modal////////

// This is the beginning of script for the reference list modal///////
const handleRef = function () {
    refModalEl.style.display = 'block';
}

refBtnEl.addEventListener('click', handleRef);

// This is the beginning of the script for the additional resources list modal///////
const handleAddRes = function () {
    resModalEl.style.display = 'block';
}

addResBtnEl.addEventListener('click', handleAddRes);


// // This is the bottom of the modals grouping//////////
