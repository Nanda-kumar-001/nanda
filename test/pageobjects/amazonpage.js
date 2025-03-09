import { expect } from "chai";
class amazonpage {
    constructor() {
        this.$selectoption=()=>$(`//*[@id="searchDropdownBox"]`)
        this.$search=()=>$(`//input[@type="text"]`)
        this.$searchsubmit=()=>$(`//input[@type="submit"]`)
        this.$addcart=()=>$(`//span[@id="a-autoid-1"]`)
        this.$checkcart=()=>$(`//div[@id="nav-cart-count-container"]//span[@id="nav-cart-count"]`)
        this.$deletecart=()=>$(`//span[@class="sc-quantity-stepper"]//*[@data-a-selector="decrement-icon"]`)
        this.$primeProducts = () => $$(`//i[contains(@class, "a-icon-prime")]`);
        this.$dropBox=()=>$(`#searchDropdownBox`)
    }

    async launchUrl() {
        await browser.url('https://www.amazon.in/');
        await browser.maximizeWindow();
        await browser.pause(2000);
    }
    async isPageLoaded() {
        return (await browser.getTitle()).includes("Amazon");
    }
    async searchDropBox()
    {
        await expect(await $('#searchDropdownBox')).withContext('Expected Electronics category to be selected').toHaveValue('search-alias=electronics-intl-ship');
    
    }

    async selectDropdown() {
        await this.$selectoption().click();
        await browser.pause(2000);
        await this.$selectoption().selectByVisibleText('Electronics');
        await browser.pause(2000);
        await this.$selectoption().waitForDisplayed({ timeout: 5000 });
        await this.$selectoption().waitForEnabled({ timeout: 5000 });

    }
    async searchProduct(){
        await this.$search().setValue('apple');
        await this.$searchsubmit().click();
        await browser.pause(2000);
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

    async checkProduct(){
        await this.$checkcart().click();
        await browser.pause(1500);
    }
    async deleteProduct(){
        await this.$deletecart().click();
        await browser.pause(1000);
    }
}

export default new amazonpage();