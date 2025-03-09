class DeleteCart{
    constructor()
    {
        this.$deletecart=()=>$(`//span[@class="sc-quantity-stepper"]//*[@data-a-selector="decrement-icon"]`)
        this.$deletelogo=()=>$(`//span[@class="sc-quantity-stepper"]//*[@data-a-selector="decrement-icon"]`)
    }
    async deleteProduct()
    {
        await this.$deletecart().click();
        await browser.pause(1000);
    }
}

export default new DeleteCart()