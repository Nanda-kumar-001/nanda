class HomePage{
    constructor(){
        this.$selectoption=()=>$(`//*[@id="searchDropdownBox"]`)
        
        this.$Dropbox=()=>$(`//*[@id="searchDropdownBox"]`)
        this.$amazonLogo=()=>$(`//*[@id="nav-logo-sprites"]`)
    }
     async launchUrl() 
        {
            await browser.url('https://www.amazon.in/');
            await browser.maximizeWindow();
            await browser.pause(2000);
        }

        async selectDropdown() {
            await this.$selectoption().click();
            await browser.pause(2000);
            await this.$selectoption().selectByVisibleText('Electronics');
            await browser.pause(2000);
            await this.$selectoption().waitForDisplayed({ timeout: 5000 });
            await this.$selectoption().waitForEnabled({ timeout: 5000 });
    }
}
export default new HomePage()