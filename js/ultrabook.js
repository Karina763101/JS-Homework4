function Ultrabook(title, ram, year, cpu, cores, lapCase, weight){
    Laptop.call(this, title, ram, year, cpu, cores, lapCase, weight);
}

Ultrabook.prototype = Object.create(Laptop.prototype);


