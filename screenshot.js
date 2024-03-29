// taking screen shot
const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch( {headless:false}); 
    //const browser = await puppeteer.launch();  // do without UI
    const page = await browser.newPage();
    await page.setViewport({
        width: 1200,    
        height: 800    
    });
    await page.goto('https://www.google.com');
    await page.screenshot({path: 'google.png'});
    browser.close();
})();
