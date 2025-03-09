class SearchProduct{
    constructor(){
        this.$search=()=>$(`//input[@type="text"]`)
        this.$Search=()=>$(`//*[@id="twotabsearchtextbox"]`)
        this.$searchsubmit=()=>$(`//input[@type="submit"]`)
    }
    async searchProduct(){
        await this.$search().setValue('apple');
        await this.$searchsubmit().click();
        await browser.pause(2000);
    }
}
export default new SearchProduct()