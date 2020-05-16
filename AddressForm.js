class CustomerForm {
    constructor(){
        this.customerInput = document.querySelector("#idCustomer");
    }

    getCustomer(){
        return new Customer(this.customerInput.value);
    }
}

class VictimForm {
    constructor(){
        this.victimInput = document.querySelector("#idVictim");
    }

    getVictim(){
        return new Victim(this.victimInput.value);
    }
}

class AddressForm {
    constructor(){
        this.streetInput = document.querySelector('#street');
        this.zipInput = document.querySelector('#zip');
        this.cityInput = document.querySelector('#city');
    }
    
    getAddress(){
        return new Address(this.streetInput.value, this.zipInput.value, this.cityInput.value)
    }
}
