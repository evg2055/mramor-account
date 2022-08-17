let datalistListSetMaterial = document.getElementById("listSetMaterial");
let optionMaterialsList = document.querySelectorAll('#listSetMaterial option');
let inputMaterials = document.getElementById("setMaterial");

// let datalistListJobs = document.getElementById("listSetJobs");
// let optionJobsList = document.querySelectorAll('#listSetJobs option');
// let inputSetJobs = document.getElementById("setJobs");

// let done = document.getElementById('doneButton');

let materialsObj = {};
// let jobsObj = {};

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
    for(let key in obj){
    let newOption = document.createElement('option');
    newOption.value = obj[key].name;
    parentOption.appendChild(newOption);
    }}

    renderOption(materialsObj, datalistListSetMaterial);
// done.addEventListener('click', () => {
//     console.log(materialsObj[inputMaterials.value].price)
// }) ;

function addOption () {
    let newOption = new Option(inputName, inputPrice, inputPcs);
}

