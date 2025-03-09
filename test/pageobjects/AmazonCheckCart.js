class CheckCart{
    constructor()
    {
        this.$checkcart=()=>$(`//div[@id="nav-cart-count-container"]//span[@id="nav-cart-count"]`)
    }
    async checkProduct(){
        await this.$checkcart().click();
        await browser.pause(1500);
    }
}
export default new CheckCart()