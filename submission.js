class Submit{
    constructor(){
        this.appName = "katil-ismet";
        this.db = new Database(this.appName);
        this.customer = null;
        this.victim = null;
        this.customerButton = document.querySelector("#submitCustomer");
        this.victimButton = document.querySelector("#submitVictim");
        this.addressButton = document.querySelector("#submitAddress");
        
        this.setListener();
    }

    setListener(){
        this.customerButton.addEventListener("click", () => {
            this.customer = new CustomerForm().getCustomer();
            this.db.saveCustomer(this.customer);
        });

        this.victimButton.addEventListener("click", () => {
            this.victim = new VictimForm().getVictim();
            this.customer.addVictim(this.victim);
            this.db.saveCustomer(this.customer);
        });
        
        this.addressButton.addEventListener("click", () => {
            this.victim.addAddress(new AddressForm().getAddress());
            this.db.saveCustomer(this.customer);
        });
    }
}