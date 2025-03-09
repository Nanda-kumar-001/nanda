import allureReporter from "@wdio/allure-reporter";
import amazonpage from "../pageobjects/amazonpage";
describe('Product Adding to the Cart', function(){
    it('Check that Amazon page is launched', async ()=>{
        await amazonpage.launchUrl();
        allureReporter.addStep("Launching Amazon");
        
        const isHomePageDisplayed = await amazonpage.verifyHomePage();
        expect(isHomePageDisplayed).toBe(true);
        allureReporter.addStep("Amazon homepage is displayed");
    });
    
    it('Check that dropdown is selected', async ()=>{
        await amazonpage.selectDropdown();
        allureReporter.addStep("Selecting Electronics category");
        
        const selectedCategory = await amazonpage.selectDropdown();
        expect(selectedCategory).toBe("Electronics");
        allureReporter.addStep("Dropdown selection verified");
    });
    
    it('Check that a product is searched, selected, and added to the cart', async ()=>{
        await amazonpage.searchProduct("Apple");
        allureReporter.addStep("Searching for 'Apple'");
        
        const searchResults = await amazonpage.getSearchResults();
        expect(searchResults.length).toBeGreaterThan(0);
        allureReporter.addStep("Search results found");
        
        await amazonpage.selectFirstPrimeProduct();
        allureReporter.addStep("Selecting the first Prime product");
        
        const isProductPageDisplayed = await amazonpage.verifyProductPage();
        expect(isProductPageDisplayed).toBe(true);
        allureReporter.addStep("Product page is displayed");
        
        await amazonpage.$addcart();
        allureReporter.addStep("Adding product to the cart");
        
        const isProductAdded = await amazonpage.verifyProductInCart();
        expect(isProductAdded).toBe(true);
        allureReporter.addStep("Product successfully added to the cart");
    });
    
    it('Check that selected product can be deleted from the cart', async ()=>{
        await amazonpage.deleteProduct();
        allureReporter.addStep("Checking cart contents");
        
        const isCartEmpty = await amazonpage.verifyCartEmpty();
        expect(isCartEmpty).toBe(true);
        allureReporter.addStep("Cart is empty after product deletion");
    });
});
