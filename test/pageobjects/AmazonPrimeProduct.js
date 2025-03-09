class PrimeProduct{
    constructor(){

        this.$primeProducts = () => $$(`//i[contains(@class, "a-icon-prime")]`);
        this.$addcart=()=>$(`//span[@id="a-autoid-1"]`)

    }
    async selectFirstPrimeProduct() {
        const products = await $$('//div[@data-component-type="s-search-result"]');
        for (let product of products) {
        const primeIcon = await product.$('.a-icon.a-icon-prime.a-icon-medium');
        if (await primeIcon.isExisting()) {
        const addToCartButton = await product.$('//button[contains(text(), "Add to cart")]');
        if (await addToCartButton.isExisting()) {
        await product.scrollIntoView();
        await browser.pause(3000);
        await this.$addcart().click();
        await browser.pause(4000);
         break;
                }
            }
        }
    }
}
export default new PrimeProduct() 