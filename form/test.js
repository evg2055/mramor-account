let datalistListSetMaterial = document.getElementById("listSetMaterial");
let optionMaterialsList = document.querySelectorAll('#listSetMaterial option');
let inputMaterials = document.getElementById("setMaterial");
let ButtonAddMaterialsList = document.querySelector('#ButtonAddMaterialsList');
// let fieldsetNewOption = document.querySelector('#fieldsetNewOption');

let modalContainer = document.querySelector('#modalContainer');
let ButtonModalAdd = document.querySelector('#modalAdd');
let ButtonModalClose = document.querySelector('#modalClose');

let datalistListJobs = document.getElementById('listSetJobs');
let optionJobsList = document.querySelectorAll('#listSetJobs option');
let inputSetJobs = document.getElementById("setJobs");
let ButtonAddJobsList = document.querySelector('#ButtonAddJobsList');


let doneButton = document.querySelector('#doneButton');

let materialsObj = {};
let jobsObj = {};

buttonOnclick(jobsObj, datalistListJobs, ButtonAddJobsList)
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

    console() {
        console.log('test');
    }
}

let mramor = new Option('imperiador', 200, 'м/кв');
mramor.addInObj(materialsObj);
let granite = new Option('black', 300, 'м/кв');
granite.addInObj(materialsObj);


function renderOption(obj, parentOption ){
    parentOption.innerHTML = '';
    for(let key in obj){
    let newOption = document.createElement('option');
    newOption.value = obj[key].name;
    parentOption.appendChild(newOption);
    }}

    
// done.addEventListener('click', () => {
//     console.log(materialsObj[inputMaterials.value].price)
// }) ;

function addOption (obj, parentOption) {
    ButtonModalAdd.onclick = () => {
    modalContainer.classList.toggle('modal__Container_isOpen');

    let inputNameValue = document.querySelector('#inputName').value;
    let inputPriceValue = document.querySelector('#inputPrice').value;
    let inputPcsValue = document.querySelector('#inputPcs').value;

    let newOption = new Option(inputNameValue, inputPriceValue, inputPcsValue);
    newOption.addInObj(obj);

    renderOption(obj, parentOption);
    
    // fieldsetNewOption.classList.toggle('fieldsetNewOption');   
    }
}

function buttonOnclick (obj, parentOption, button) {
        button.onclick = (event) => {
        modalContainer.classList.add('modal__Container_isOpen');
        event.preventDefault();
        addOption(obj,parentOption);
        ButtonModalClose.onclick = () => {
            modalContainer.classList.remove('modal__Container_isOpen');
            console.log(parentOption)
        }
    }
};

buttonOnclick(materialsObj, datalistListSetMaterial, ButtonAddMaterialsList);
// ButtonAddMaterialsList.addEventListener ('click',(event) => {
//     modalContainer.classList.add('modal__Container_isOpen');
//     event.preventDefault();
//     addOption(materialsObj, datalistListSetMaterial);
//     ButtonModalClose.onclick = () => {
//         modalContainer.classList.remove('modal__Container_isOpen');
//     }
// })
