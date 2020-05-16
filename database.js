class Database{
    constructor(appName){
        this.db = localStorage;
        this.appName = appName;
    }

    setItem(key, value){
        value = JSON.stringify(value);
        this.db.setItem(key, value);
    }

    getItem(key){
        const data = this.db.getItem(key);
        return JSON.parse(data);
    }

    saveCustomer(pCustomer){
        let list = this.getItem(this.appName) || []
        list = list.filter(customer => customer.name != pCustomer.name);
        list.push(pCustomer);
        this.setItem(this.appName, list);
    }
}