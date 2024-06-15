//https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies

import { countryList } from "./codes";
import './style.css'  ;
// Initializing Variables
const selectionFrom=document.querySelector(".selection .from");

const selectionTo=document.querySelector(".selection .to");

const selectOfFrom=selectionFrom.querySelector("select");

const selectOfTo=selectionTo.querySelector("select");

const output=document.querySelector("h4");

const inputNumber = document.querySelector("input[type='number']");



// Applying Option Funcitonality for from

for (const key in countryList) {

    let newOpt=document.createElement("option");
    
    newOpt.value=key;

    newOpt.innerText=key;

    selectOfFrom.appendChild(newOpt);
    if(selectOfFrom.name=="from" && key=="USD"){
        newOpt.setAttribute("selected","selected");
    }
    
flagChangeOfFrom();
    
}

// Applying Option Funcitonality for To
for (const key in countryList) {

    let newOpt=document.createElement("option");
    
    newOpt.value=key;

    newOpt.innerText=key;

    selectOfTo.appendChild(newOpt);
    if(selectOfTo.name=="to" && key=="PKR"){
        newOpt.setAttribute("selected","selected");
    }

    flagChangeOfTo();
    
}

// Applying Option flag change Funcitonality for from
function flagChangeOfFrom(){

let key=selectOfFrom.value;

let img=document.getElementById('from');

img.src=`https://flagsapi.com/${countryList[key]}/flat/64.png`;

}


// Applying Option flag change Funcitonality for from

function flagChangeOfTo(){
    let key=selectOfTo.value;
    let img=document.getElementById('to');
    
    img.src=`https://flagsapi.com/${countryList[key]}/flat/64.png`;
    

}

// Function to fetch currency data based on selected country
async function fetchCurrencyData() {


    const currencycode = selectOfFrom.value;
    const toCurrencyCode = selectOfTo.value;
    const parsedValue=parseFloat(inputNumber.value);
    if(inputNumber.value!=""|| inputNumber.value>0){
    try {
     

        const response = await fetch(`https://open.er-api.com/v6/latest/${currencycode}`)
        
        const data = await response.json();

        // No need to parse data again since response.json() already returns a parsed object
        console.log(data);

        
        // There was object inside an object 
       let exchangerate=data['rates'][toCurrencyCode];
       output.textContent=`${parsedValue} "${currencycode}" = ${((parsedValue)*(exchangerate)).toFixed(3)} "${toCurrencyCode}" `;
}
        // Example: Accessing specific currency info using bracket notation
        
     catch (error) {
        console.error('Error fetching currency data:', error);
    }}
 
    else{
        inputNumber.value=1;

        alert("Kindly, Write Correctly");
    }
}




// All the Events are here........
document.querySelector("button").addEventListener("click",(event)=>{
  
    event.preventDefault();

    fetchCurrencyData();
})

inputNumber.addEventListener("input", (event) => {
    const inputValue = parseFloat(event.target.value);

    // Check if the input value is negative
    if (inputValue < 0) {
        event.target.value = Math.abs(inputValue);
        alert("Negative values are not allowed. Input must be a positive number.");
    }
});
selectOfTo.addEventListener("change",()=>{
    flagChangeOfTo();    
    
    fetchCurrencyData();
});
selectOfFrom.addEventListener("change",()=>{
    flagChangeOfFrom();
    fetchCurrencyData();
});

document.addEventListener("DOMContentLoaded",()=>{
    flagChangeOfFrom();
    flagChangeOfTo();
    fetchCurrencyData();
})

inputNumber.addEventListener("change",()=>{
    fetchCurrencyData();
})