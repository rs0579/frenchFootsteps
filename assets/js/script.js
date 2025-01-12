// Element variables from html/////////////

const boxEl = document.querySelector('.box')
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

// Castle Image Boxes here///////////

function chambord(){
    document.getElementById("chambord").innerHTML = "<img src='./assets/images/Chambord (1).jpg' alt='Château de Chambord' style='width: 300px; height: 300px; padding: -9px;'/>"
}

function chenonceau(){
 document.getElementById("chenonceau").innerHTML = "<img src='./assets/images/Chenonceau (1).jpg' alt='Château de Chenonceau' style='width: 300px; height: 300px; padding: -9px;'/>"
}

function bretagne (){
   document.getElementById("bretagne").innerHTML = "<img src='./assets/images/Bretagne (1).jpg' alt='Château des Ducs de Bretagne' style='width: 300px; height: 300px; padding: -9px;'/>"
}
// This is where the Modals scripts are grouped/////////////

// This is the beginning of script for the contact form modal///////////

contactBtnEl.addEventListener('click', handleContact);
let handleContact = function () {
    contactModalEl.style.display = 'block';
}

contCloseBtnEl.addEventListener('click', cancelContact);
let cancelContact = function () {
   contactModalEl.style.display = 'hide'; 
}

contSendBtnEl.addEventListener('submit', handleSubmit);

const messageArray = [];

const visitorMessageEl = {
    Name: contNameEl.value.trim(),
    Email: contEmailEl.value.trim(),
    Message: contMessageEl.value.trim(),
}

const alertError = function () {
    const errorEl = document.createElement('p');
    contFormEl.appendChild(errorEl);
    errorEl.textContent = "Please complete the form.";
}

const handleSubmit = function (event){
    event.preventDefault (); 
    document.getElementById("visitorMessageEl");
        if (contEmailEl.value.trim() === "") {
        alertError();
        } if (contMessageEl.value.trim() === "") { 
            alertError();
            } if (contNameEl.value.trim() === ""){
                alertError();
                } else {
                    console.log(visitorMessageEl);
                };
    messageArray.push(visitorMessageEl);
    localStorage.setItem("messages", JSON.stringify(messageArray));
};


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