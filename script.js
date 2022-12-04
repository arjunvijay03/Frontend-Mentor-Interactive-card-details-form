
const cardNumber = document.getElementById("card-number");
const cardNumberDisplay = document.getElementById("card-number-dis");
const cardNumberAlert = document.getElementById("card-number-warning");


const cardHolderName = document.getElementById("card-holder-name");
const cardNameDisplay = document.getElementById("card-name");
const cardHolderNameAlert = document.getElementById("card-holder-name-warning")

const expMonth = document.getElementById("month");
const expMonthDisplay = document.getElementById("card-month");

const expYear = document.getElementById("year");
const expYearDisplay = document.getElementById("card-year");
const expDateAlert = document.getElementById("card-date-warning");

const cvcInput = document.getElementById("cvc-input");
const cvcDisplay = document.getElementById("cvc");
const cvcAlert = document.getElementById("cvc-warning");

const span = document.querySelectorAll("span");
const confirmBtn = document.getElementById("confirm-btn");

const beforeSubmit = document.getElementById("before-submit");
const afterSubmit = document.getElementById("after-submit");
const continueButton = document.getElementById("continue");


let cardNumberValue = "";
cardNumber.addEventListener("keyup", (e) =>{

    cardNumberDisplay.innerHTML = format(cardNumber.value)
})

const format = (s) => {
    return s.toString().replace(/\d{4}(?=.)/g, "$& ");
  }



cardHolderName.addEventListener("keyup", (e) =>{
    cardNameDisplay.innerHTML = cardHolderName.value
})

expMonth.addEventListener("keyup", () => {
    expMonthDisplay.innerHTML = expMonth.value;
})

expYear.addEventListener("keyup", () => {
    expYearDisplay.innerHTML =  expYear.value;
})

cvcInput.addEventListener("keyup", ()=>{
    cvcDisplay.innerHTML = cvcInput.value;
})


confirmBtn.addEventListener("click", () =>{
        let cardNumberString = cardNumber.value.toString();
        
        if(cardHolderName.value === ""){
            span.forEach((x) =>{
                x.innerHTML = "";
            })
            cardHolderName.style.borderColor = "red"
            cardHolderNameAlert.innerHTML = "Name can't be blank"
        }
        else if(cardNumberString.length !== 16 || cardNumberString == ""){
            span.forEach((x) =>{
                x.innerHTML = "";
            })
            cardNumber.style.borderColor = "red";
            cardNumberAlert.innerHTML = "Enter correct card number";
        }
        else if(expMonth.value > 12 ){
            span.forEach((x) =>{
                x.innerHTML = "";
            })
            expMonth.style.borderColor = "red";
           expDateAlert.innerHTML = "Wrong format";
        }
        else if( !expMonth.value){
            span.forEach((x) =>{
                x.innerHTML = "";
            })
            expMonth.style.borderColor = "red";
            expDateAlert.innerHTML = "Can't be blank"
        }
        else if(!expYear.value){
            span.forEach((x) =>{
                x.innerHTML = "";
            })
            expYear.style.borderColor = "red";
            expDateAlert.innerHTML = "Can't be blank"
        }
        else if(!cvcInput.value ){
            span.forEach((x) =>{
                x.innerHTML = "";
            })
            cvcInput.style.borderColor = "red";
           cvcAlert.innerHTML = "Can't be blank"
        }
        else if(cvcInput.value < 100){
            span.forEach((x) =>{
                x.innerHTML = "";
            })
            cvcInput.style.borderColor = "red";
            cvcAlert.innerHTML = "Wrong format"
        }
        else {
            beforeSubmit.style.display = "none"
            afterSubmit.style.display = "flex"
        }
    
        
    })

   
