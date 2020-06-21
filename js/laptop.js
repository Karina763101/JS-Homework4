function Laptop(title, ram, year, cpu, cores, lapCase, weight){
    this.title = title;
    this.ram = ram;
    this.year = year;
    this.cpu = cpu;
    this.cores = cores;
    this.lapCase = lapCase;
    this.weight = weight;
}

Laptop.prototype.getWeight = function(){
    return this.weight;
}

Laptop.prototype.getLapCase = function(){
    return this.lapCase;
}

Laptop.prototype.getYear = function(){
    return this.year;
}

//при нажатии происходит: var obj1 = new laptop('123', '12', 122);

