let datalistListSetMaterial = document.getElementById("listSetMaterial");
let optionMaterialsList = document.querySelectorAll('#listSetMaterial option');
let inputMaterials = document.getElementById("setMaterial");
let ButtonAddMaterialsList = document.querySelector('#ButtonAddMaterialsList');
let materialsObj = {};

let datalistListJobs = document.getElementById('listSetJobs');
let optionJobsList = document.querySelectorAll('#listSetJobs option');
let inputSetJobs = document.getElementById("setJobs");
let ButtonAddJobsList = document.querySelector('#ButtonAddJobsList');
let jobsObj = {};

let modalContainer = document.querySelector('#modalContainer');
let ButtonModalAdd = document.querySelector('#modalAdd');
let ButtonModalClose = document.querySelector('#modalClose');

let datalistsInputs = document.querySelectorAll('.datalistInputs')

let doneButton = document.querySelector('#doneButton');

for(let elem of datalistsInputs) {
    elem.onclick = function() {
        this.value = '';
    }
};

class Option {
    name;
    price;
    pcs;

    constructor(name, price, pcs) {
        this.name = name;
        this.price = price;
        this.pcs = pcs;
    }

    addInObj(obj) {
        obj[this.name] = this;
    }

}

// let mramor = new Option('imperiador', 200, 'м/кв');
// mramor.addInObj(materialsObj);
// let granite = new Option('black', 300, 'м/кв');
// granite.addInObj(materialsObj);

function renderOption(obj, parentOption ){
    parentOption.innerHTML = '';
    for(let key in obj){
    let newOption = document.createElement('option');
    newOption.value = obj[key].name;
    parentOption.appendChild(newOption);
    }}

function addOption (obj, parentOption) {
    ButtonModalAdd.onclick = () => {
    modalContainer.classList.toggle('modal__Container_isOpen');

    let inputNameValue = document.querySelector('#inputName').value;
    let inputPriceValue = document.querySelector('#inputPrice').value;
    let inputPcsValue = document.querySelector('#inputPcs').value;
    let inputAll = document.querySelectorAll('.inputNewOptions');

    let newOption = new Option(inputNameValue, inputPriceValue, inputPcsValue);
    newOption.addInObj(obj);

    renderOption(obj, parentOption);

    for(let elem of inputAll) {
        elem.value = '';
    }
    }
}

function buttonOnclick (obj, parentOption, button) {
        button.onclick = (event) => {
        modalContainer.classList.add('modal__Container_isOpen');
        event.preventDefault();

        addOption(obj,parentOption);

        ButtonModalClose.onclick = () => {
            let inputAll = document.querySelectorAll('.inputNewOptions');

            for(let elem of inputAll) {
                elem.value = '';
            }

            modalContainer.classList.remove('modal__Container_isOpen');
        }
    }
};

buttonOnclick(materialsObj, datalistListSetMaterial, ButtonAddMaterialsList);
buttonOnclick(jobsObj, datalistListJobs, ButtonAddJobsList);

let ButtonAddJobs = document.querySelector('#addJobs');

ButtonAddJobs.onclick = function() {
    
}


 let amountJob = document.querySelector('#amountJob');
 let priceJob = document.querySelector('#priceJob');
 let totalJob = document.querySelector('#totalJob');
 let otherJob = document.querySelector('#otherJob');
 let orderTable = document.querySelector('#orderTable');

 inputSetJobs.onblur = () => {
    // console.log(jobsObj[inputSetJobs.value].price);
    priceJob.value = jobsObj[inputSetJobs.value].price;
}
 ButtonAddJobs.onclick = () => {
    amountJob = document.querySelector('#amountJob');
    priceJob = document.querySelector('#priceJob');
    totalJob = document.querySelector('#totalJob');
    otherJob = document.querySelector('#otherJob');
   
    let objSelected = [setJobs.value, amountJob.value, priceJob.value, totalJob.value, otherJob.value];

    let newTr = document.createElement('tr');

    for(let i = 0; i < 5; i++) {
        let newTd = document.createElement('td');
        newTd.textContent = objSelected[i];
        if(i===4) {
            newTd.colSpan = 2;
        }

        newTr.appendChild(newTd);
    }
    
    orderTable.appendChild(newTr);
 }
 