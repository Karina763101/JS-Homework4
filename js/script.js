document.querySelector('#laptop').addEventListener('submit', function(event){
    var title = document.querySelector('#title').value;
    var ram = document.querySelector('#ram').value;
    var year  = document.querySelector('#year').value;
    var cpu = document.querySelector('#cpu').value;
    var cores = document.querySelector('#cores').value;
    var lapCase  = document.querySelector('#lapCase').value;
    var weight = document.querySelector('#weight').value;

    var laptop = new Laptop(title, ram, year, cpu, cores, lapCase, weight);
    var viewLaptop = new ViewLaptop();

    if(title.trim() === '' || year.trim() === '' || ram.trim() === '' || cpu.trim() === '' || cores.trim() === '' || lapCase.trim() === '' || weight.trim() === ''){
        viewLaptop.getMessage('Ошибка! Заполните все поля!', 'no_success');
    } else {
        if(viewLaptop.checkWeight() !== 1){
            viewLaptop.addLaptop(laptop);
            viewLaptop.getMessage('Ура! Добавили новый ноут!', 'success');
            viewLaptop.clearInput();
            viewLaptop.deleteLaptop();
            viewLaptop.getInfo(laptop);
        }
    }

    event.preventDefault();
});

document.querySelector('#ultrabook').addEventListener('submit', function(event){
    var title = document.querySelector('#title2').value;
    var ram = document.querySelector('#ram2').value;
    var year  = document.querySelector('#year2').value;
    var cpu = document.querySelector('#cpu2').value;
    var cores = document.querySelector('#cores2').value;
    var lapCase  = document.querySelector('#lapCase2').value;
    var weight = document.querySelector('#weight2').value;

    var ultrabook = new Ultrabook(title, ram, year, cpu, cores, lapCase, weight);
    var viewUltrabook = new ViewUltrabook();

    if(title.trim() === '' || year.trim() === '' || ram.trim() === '' || cpu.trim() === '' || cores.trim() === '' || lapCase.trim() === '' || weight.trim() === ''){
        viewUltrabook.getMessage('Ошибка! Заполните все поля!', 'no_success');
    } else {
        if(viewUltrabook.checkWeight() !== 1){
            viewUltrabook.addLaptop(ultrabook);
            viewUltrabook.getMessage('Ура! Добавили новый ноут!', 'success');
            viewUltrabook.clearInput();
            viewUltrabook.deleteLaptop();
            viewUltrabook.getInfo(ultrabook);
        }
    }

    event.preventDefault();
});