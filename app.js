/**
 * Alright, we have a serial killer which does not sound so fun but, let's do it (or at least try),
 * Ismet is going to have customer list and then each customer will have victims in their list,
 * Victims will be shown with their addresses,
 * Ismet should be able to click on his customers and see their victims,
 * There is a button which one can check and state that the chosen victim is gone,
 * After choosing a victim dead, its name should appear lighter (means already dead).
 */

class Manager {
    constructor(){
        this.appName = "katil-ismet";
        this.db = new Database(this.appName);
    }
}
const manager = new Manager();
new Submit();