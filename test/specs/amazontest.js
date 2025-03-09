import allureReporter from "@wdio/allure-reporter";
import AmazonHomePage from "../pageobjects/AmazonHomePage";
import AmazonPrimeProduct from "../pageobjects/AmazonPrimeProduct";
import AmazonCheckCart from "../pageobjects/AmazonCheckCart";
import AmazonDeleteCart from "../pageobjects/AmazonDeleteCart";
import AmazonSearchProduct from "../pageobjects/AmazonSearchProduct";
describe('Product Adding to the cart', function(){
    it('Check that amazon page is launched',async ()=>{
        await AmazonHomePage.launchUrl()
        allureReporter.addStep("Launching Amazon");
        await expect(await AmazonHomePage.$amazonLogo()).toBeDisplayed()
        
    })
    it('Check that dropdown is selected', async ()=>{
        await AmazonHomePage.selectDropdown()
        const selectedValue = await AmazonHomePage.$Dropbox().getValue();
        expect(selectedValue).toContain('search-alias=electronics')
        allureReporter.addStep("Selecting Electronics category");
    });
  
    it('Check that a product is searched', async ()=>{
        await AmazonSearchProduct.searchProduct()
        const searchValue = await AmazonSearchProduct.$search().getValue()
        expect(searchValue).toContain('apple')
        allureReporter.addStep("Searching a product");
    })
    it('Check that a prime product is selected',async ()=>{

        await expect(await AmazonPrimeProduct.$addcart()).toBeDisplayed()
        await expect(await AmazonPrimeProduct.$addcart()).toBeClickable()
        await AmazonPrimeProduct.selectFirstPrimeProduct();
        allureReporter.addStep("Selecting a prime product in the search results");
    })
    it('Check that a prime product is added to the cart',async ()=>{
        await AmazonCheckCart.checkProduct()
        await expect(await AmazonCheckCart.checkProduct()).toBeDisplayed()
        allureReporter.addStep("Added prime product to the cart");
    })
    it('Check that selected product can be deleted from the cart',async ()=>{
        await expect(await AmazonDeleteCart.$deletelogo()).toBeDisplayed()
        await AmazonDeleteCart.deleteProduct()
        allureReporter.addStep("Deleting a product in the cart");

        
    })
})