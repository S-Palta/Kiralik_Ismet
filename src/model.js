class Customer{
    constructor(pName){
        this.name = pName;
        this.victims = [];
    }

    addVictim(pVictim){
        this.victims.push(pVictim);
    }
}

class Victim{
    constructor(pName){
        this.name = pName;
        this.addresses = [];
    }

    addAddress(pAddress){
        this.addresses.push(pAddress);
    }
}

class Address{
    constructor(pStreet, pZip, pCity){
        this.street = pStreet;
        this.zip = pZip;
        this.city = pCity;
    }
}