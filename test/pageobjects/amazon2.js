// import { $, $$ } from "@wdio/globals";

// class AmazonPage {
    
//     get searchInput() { return $("#twotabsearchtextbox"); }
//     get searchButton() { return $("input.nav-input[type='submit']"); }
//     get categoryDropdown() { return $("#searchDropdownBox"); }
//     get firstPrimeProduct() { return $$('span.a-badge-label-text')[0]; }
//     get addToCartButton() { return $("#add-to-cart-button"); }
//     get cartIcon() { return $("#nav-cart"); }
//     get cartItems() { return $$(".sc-list-item"); }
//     get deleteItemButton() { return $("input[value='Delete']"); }
    
//     async launchUrl() {
//         await browser.url("https://www.amazon.com");
//     }
    
//     async verifyHomePage() {
//         return (await this.searchInput.isDisplayed());
//     }
    
//     async selectDropdown() {
//         await this.categoryDropdown.selectByVisibleText("Electronics");
//     }
    
//     async getSelectedDropdown() {
//         return await this.categoryDropdown.getValue();
//     }
    
//     async searchProduct(productName) {
//         await this.searchInput.setValue(productName);
//         await this.searchButton.click();
//     }
    
//     async getSearchResults() {
//         return await $$(".s-main-slot .s-result-item");
//     }
    
//     async selectFirstPrimeProduct() {
//         await this.firstPrimeProduct.click();
//     }
    
//     async verifyProductPage() {
//         return await this.addToCartButton.isDisplayed();
//     }
    
//     async addToCart() {
//         await this.addToCartButton.click();
//     }
    
//     async verifyProductInCart() {
//         await this.cartIcon.click();
//         return (await this.cartItems.length) > 0;
//     }
    
//     async deleteProduct() {
//         await this.cartIcon.click();
//         await this.deleteItemButton.click();
//     }
    
//     async verifyCartEmpty() {
//         return (await this.cartItems.length) === 0;
//     }
// }

// export default new AmazonPage();
