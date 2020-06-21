function ViewUltrabook(){
    
};

ViewUltrabook.prototype = Object.create(ViewLaptop.prototype);

ViewUltrabook.prototype.clearInput = function(){
    document.querySelector('#title2').value = '';
    document.querySelector('#ram2').value = '';
    document.querySelector('#year2').value = '';
    document.querySelector('#cpu2').value = '';
    document.querySelector('#cores2').value = '';
    document.querySelector('#lapCase2').value = '';
    document.querySelector('#weight2').value = '';
};

ViewUltrabook.prototype.checkWeight = function(){
    if(document.querySelector('#weight2').value > 1.5){
        alert('Вес у Ultrabook не должен привышать 1.5кг!');
        document.querySelector('#weight2').value = '';
        return 1;
    }
};

ViewUltrabook.prototype.getInfo = function(obj){
    var btnsInfo = document.getElementsByClassName('info');
    for(let btnInfo of btnsInfo){
        btnInfo.addEventListener('click', function(){
            alert('Вес: ' + obj.getWeight() + '\nЦвет корпуса: ' + obj.getLapCase() + '\nГод выпуска: ' + obj.getYear());
            event.preventDefault();
        });
    }
};