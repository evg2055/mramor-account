let inputMaterialsList = document.getElementById("listSetMaterial");
let optionMaterialsList = document.querySelectorAll('#listSetMaterial option');
let inputMaterials = document.getElementById("setMaterial");
let done = document.getElementById('doneButton')

let materialsObj = {};

class Option {
    name;
    price;
    pcs;

    constructor(name, price, pcs) {
        this.name = name;
        this.price = price;
        this.pcs = pcs;
    }

    addInArr(obj) {
        obj[this.name] = this;
    }
}

let mramor = new Option('imperiador', 200, 'м/кв');
mramor.addInArr(materialsObj);
let granite = new Option('black', 300, 'м/кв');
granite.addInArr(materialsObj);

// for(let elem of materialsArr) {
//     console.log(elem);
//     for(let key in elem) {
//         console.log(key)
//     }
// }

function renderOption(obj, parentOption){
    for(let key in obj){
    let newOption = document.createElement('option');
    newOption.value = obj[key].name;
    parentOption.appendChild(newOption);
    }}

    renderOption(materialsObj, inputMaterialsList);
done.addEventListener('click', () => {
    console.log(materialsObj[inputMaterials.value].price)
}) ;
// done.addEventListener('click', () => {
//     renderOption(materialsObj, inputMaterialsList)
// }) ;

