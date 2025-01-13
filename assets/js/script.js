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
const state = document.getAttribute("data-state")
const expo = document.getAttribute("onclick")

// Castle Image Boxes here///////////

function chambord(event){
    document.getElementById("chambord").innerHTML = "<img src='./assets/images/Chambord (1).jpg' alt='Château de Chambord' style='width: 300px; height: 300px; padding: -9px;'/>"
    const element = event.target
    if (state === "hidden"){
        element.content = element.expo  //BECAUSE I AM NOT USING A CUSTOM ATTRIBUTE, I DID NOT USE THE DATASET METHOD, INSTEAD OPTING TO USE THE VARIABLE I CREATED FROM THE ONCLICK ATTRIBUTE IN THE HTML. LESSON20 WEB APIS... I BELIEVE THE DATASET TARGETS THE CUSTOM ATTRIBUTE
        // element.expo.state = "visible" //THIS IS THE NEW STATE FOR THE CUSTOM ELEMENT - ONCE YOU CLICK ON THE BOX, THE STATE SHOULD CHANGE FROM HIDDEN TO VISIBLE NOW.
    
    } else {
        element.textContent = ""
        element.setAttribute('data-state', 'hidden')
    }
}

// boxEl.addEventListener('click', function(event){
//     element = event.target
//     if (state === "hidden"){
//         element.innerHTML = element.expo
//         element.dataset.state = 'visible'
//     } else{
//         element.textContent = ""
//         element.setAttribute("data-state", "hidden")
//     }

// })

function chenonceau(){
 document.getElementById("chenonceau").innerHTML = "<img src='./assets/images/Chenonceau (1).jpg' alt='Château de Chenonceau' style='width: 300px; height: 300px; padding: -9px;'/>"
}

function bretagne (){
   document.getElementById("bretagne").innerHTML = "<img src='./assets/images/Bretagne (1).jpg' alt='Château des Ducs de Bretagne' style='width: 300px; height: 300px; padding: -9px;'/>"
}
function foix (){
    document.getElementById("foix").innerHTML = "<img src='./assets/images/Foix (1).jpg' alt='Château de Foix' style='width: 300px; height: 300px; padding: -9px;'/>"
 }

 function tours (){
    document.getElementById("tours").innerHTML = "<img src='./assets/images/Tours.jpg' alt='Château de Tours' style='width: 300px; height: 300px; padding: -9px;'/>"
 }
 function versailles (){
    document.getElementById("versailles").innerHTML = "<img src='./assets/images/palace.jpg' alt='Palace de Versailles' style='width: 300px; height: 300px; padding: -9px;'/>"
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
boxEl