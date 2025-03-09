// describe("Working with frames", () => {
//   it('should find the text "Middle" in the bottom middle frame', async () => {
//     await browser.url(
//       "https://www.lambdatest.com/selenium-playground/nested-frames/"
//     );
//     await browser.maximizeWindow();

//     // Switch to the bottom frame
//     const bottomFrame = await $('frame[name="frame-bottom"]');
//     await browser.switchFrame(bottomFrame);

//     // Switch to the middle frame within the bottom frame
//     const middleFrame = await $('frame[name="frame-middle"]');
//     await browser.switchFrame(middleFrame);

//     // Find the text "Middle" in the bottom middle frame
//     let text = await $("body").getText();
//     expect(text).toBe("Middle");

//     // Switch to default frame
//     await browser.switchFrame(null);

//     const topFrame = await $('frame[name="frame-top"]');
//     await browser.switchFrame(topFrame);

//     // Find the text "Top" in the top frame
//     text = await $("body").getText();
//     expect(text).toBe("Top");
//   });
describe("Working with frames", () => {
  it("should click a menu item within an iframe", async () => {
      await browser.url("https://practice-automation.com/iframes/");
      await browser.maximizeWindow();

      // Wait for the iframe to be available and switch to it
      const topIframe = await $("#iframe-1");
      await topIframe.waitForExist({ timeout: 5000 });
      await topIframe.scrollIntoView();
      await browser.switchFrame(topIframe);

      // Wait for 'Docs' to be clickable and click it
      const docs = await $(`//a[text()="Docs"]`);
      await docs.waitForDisplayed({ timeout: 5000 });
      await docs.click();

      // Verify title inside iframe
      const title = await $('h2[id="introduction"]');
      await title.waitForExist({ timeout: 5000 });

      // Extract and validate the title text
      const actualTitle = await title.getText();
      expect(actualTitle).toBe("Introduction");

       // Switch back to the main document
       await browser.switchToParentFrame();
    });

      
  it ('should click second menu in the frame',async()=>{
    const top2frame = await $('#iframe-2')
    await top2frame.scrollIntoView({block:'center'})
    await browser.switchFrame(top2frame)

    const down = await $(`//*[@id="main_navbar"]/ul/li[2]/a`)
    await down.waitForDisplayed({ timeout: 5000 });
    await down.click()
     
    const dtitle = await $(`//h1[text()="Downloads"]`)
    await dtitle.waitForDisplayed({timeout:5000})
    const Actitle = await dtitle.getText()
    expect(Actitle).tobe("Downloads")
      // Switch back to the main document
      await browser.switchToParentFrame();
    })
});

