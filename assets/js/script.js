const boxEl = document.querySelector('.box')
const contactModalEl = document.getElementById('contactModal');
const contactBtnEl = document.querySelector('contactBtn');
const contCloseBtnEl = document.getElementById('contCloseBtn');
const contSendBtnEl = document.getElementById('contSendBtn');
const contNameEl = document.getElementById('contNameInput')
const contEmailEl = document.getElementById('contactEmailInput');
const contMessageEl = document.getElementById('contactMessageInput');
const errorEl = document.getElementById('errorMessage');
const contFormEl = document.getElementById('contactForm');
const refModalEl = document.getElementById('refModal');
const refBtnEl = document.getElementById('refBtn');
const addResBtnEl = document.getElementById('addResBtn')
const addResModalEl = document.getElementById('addResModalEl')
const state = document.getAttribute("data-state")
const expo = document.getAttribute("onclick")


function chambord(event){
    document.getElementById("chambord").innerHTML = "<img src='./assets/images/Chambord (1).jpg' alt='Château de Chambord' style='width: 300px; height: 300px; padding: -9px;'/>"
    const element = event.target
    if (state === "hidden"){
        element.content = element.expo  //BECAUSE I AM NOT USING A CUSTOM ATTRIBUTE, I DID NOT USE THE DATASET METHOD, INSTEAD OPTING TO USE THE VARIABLE I CREATED FROM THE ONCLICK ATTRIBUTE IN THE HTML. LESSON20 WEB APIS... I BELIEVE THE DATASET TARGETS THE CUSTOM ATTRIBUTE
        element.expo.state = "visible" //THIS IS THE NEW STATE FOR THE CUSTOM ELEMENT - ONCE YOU CLICK ON THE BOX, THE STATE SHOULD CHANGE FROM HIDDEN TO VISIBLE NOW.
    
    } else {
        element.textContent = ""
        element.setAttribute('data-state', 'hidden')
    }
}

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

function chenonceau(){
 document.getElementById("chenonceau").innerHTML = "<img src='./assets/images/Chenonceau (1).jpg' alt='Château de Chenonceau' style='width: 300px; height: 300px; padding: -9px;'/>"
}

function bretagne (){
   document.getElementById("bretagne").innerHTML = "<img src='./assets/images/Bretagne (1).jpg' alt='Château des Ducs de Bretagne' style='width: 300px; height: 300px; padding: -9px;'/>"
}
function foix (){
    document.getElementById("foix").innerHTML = "<img src='./assets/images/Foix (1).jpg' alt='Château de Foix' style='width: 300px; height: 300px; padding: -9px;'/>"
 }

// This is where the Modals scripts are grouped/////////////

// This is the beginning of script for the contact form modal///////////
const handleContact = function () {
    contactModalEl.style.display = 'block';
}

contactBtnEl.addEventListener('click', handleContact);


contCloseBtnEl.addEventListener('click', function() {
    contactModalEl.modal('hide');
});

const visitorMessage = {
    Email: contEmailEl.value.trim(),
    Message: contMessageEl.value.trim(),
};

const messageArray = [];

const handleSubmit = function (){
    // event.preventDefault ();
    if (contEmailEl.value === "") {
        errorEl.textContent = "Please complete the form."
        } else if (contMessageEl.value === "") { 
            errorEl.textContent = "Please complete the form."
            } else {
                return visitorMessage
                }; 
    messageArray.push(visitorMessage);
    localStorage.setItem("messages", JSON.stringify(messageArray));
};

contSendBtnEl.addEventListener('click', handleSubmit);
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