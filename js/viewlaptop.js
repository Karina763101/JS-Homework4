function ViewLaptop(){

};

ViewLaptop.prototype.addLaptop = function(obj){
    var block = document.querySelector('#list-laptops');
    var ulList = document.createElement('ul');

    ulList.innerHTML = '<li>' + obj.title + '</li>' +
    '<li>' + obj.ram + '</li>' +
    '<li>' + obj.year + '</li>' +
    '<li>' + obj.cpu + '</li>' +
    '<li>' + obj.cores + '</li>' +
    '<li>' + obj.lapCase + '</li>' +
    '<li>' + obj.weight + '</li>' +
    '<li><button class="delete">Удалить</button><button class="info">Общая информация</button></li>';
    
    block.appendChild(ulList);
};

ViewLaptop.prototype.getMessage = function(message, nameCl){
    var cont = document.querySelector('.container');
    var form = document.querySelector('#laptop');

    var infoBlock = document.createElement('div');
    infoBlock.className = nameCl;
    infoBlock.innerText = message;

    cont.insertBefore(infoBlock, form);
}; 

ViewLaptop.prototype.clearInput = function(){
    document.querySelector('#title').value = '';
    document.querySelector('#ram').value = '';
    document.querySelector('#year').value = '';
    document.querySelector('#cpu').value = '';
    document.querySelector('#cores').value = '';
    document.querySelector('#lapCase').value = '';
    document.querySelector('#weight').value = '';
};

ViewLaptop.prototype.checkWeight = function(){
    if(document.querySelector('#weight').value > 3){
        alert('Вес у laptop не должен привышать 3кг!');
        document.querySelector('#weight').value = '';
        return 1;
    }
};

// ViewLaptop.prototype.deleteLaptop = function(){
//     var btnsDelete = document.getElementsByClassName('delete');
//     for(let btnDelete of btnsDelete){
//         btnDelete.addEventListener('click', function(){
//             btnDelete.parentElement.parentElement.remove();
//             event.preventDefault();
//         });
//     }
// }

ViewLaptop.prototype.deleteLaptop = function(){
    var btnsDelete = document.getElementsByClassName('delete');
    for(let btnDelete of btnsDelete){
        btnDelete.addEventListener('click', function(){
            while(btnDelete.tagName !== 'UL'){
                btnDelete = btnDelete.parentElement;
            }
            btnDelete.remove();
            event.preventDefault();
        });
    }
};

ViewLaptop.prototype.getInfo = function(obj){
    var btnsInfo = document.getElementsByClassName('info');
    for(let btnInfo of btnsInfo){
        btnInfo.addEventListener('click', function(){
            alert('Вес: ' + obj.getWeight() + '\nМатериал корпуса: ' + obj.getLapCase() + '\nГод выпуска: ' + obj.getYear());
            event.preventDefault();
        });
    }
};
