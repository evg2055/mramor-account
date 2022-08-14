// let materials = {'imperiador':{'price': 200, 'pcs' : 'м/кв'}, 'imperiador':{'price': 300, 'pcs' : 'м/кв'}, 'daina':{'price': 200, 'pcs' : 'м/кв'}};

// console.log(materials.imperiador.price)

let inputMaterialsList = document.getElementById("listSetMaterial");
let optionMaterialsList = document.querySelectorAll('#listSetMaterial option')
let inputMaterials = document.getElementById("setMaterial")
// inputMaterials.addEventListener('click', function() {
//  for(let elem of materialsArr){
//      let newOption = document.createElement('option');
// if (! materialsArr.has(newOption.value)){ newOption.value = elem.name;
//  console.log(materialsArr)
//  inputMaterialsList.appendChild(newOption);}}
// })

for(let elem of optionMaterialsList) {
    console.log(elem.value);
}
let materialsArr = new Set;

class Materials {
    name;
    price;
    pcs;

    constructor(name, price, pcs) {
        this.name = name;
        this.price = price;
        this.pcs = pcs;
    }

    addInArr() {
        materialsArr.add(this);
    }
}

let mramor = new Materials('imperiador', 200, 'м/кв');
mramor.addInArr();
let granite = new Materials('black', 300, 'м/кв');
granite.addInArr();

for(let elem of materialsArr) {
    let newOption = document.createElement('option');
    newOption.value = elem.name;

    inputMaterialsList.appendChild(newOption);
}



