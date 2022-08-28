const puppeteer = require('puppeteer');
const { scrollPageToBottom } = require('puppeteer-autoscroll-down')

const parse__Sharkys = async ()=> {
    try{
        const browser = await puppeteer.launch({
            debug: false,
            headless: false,
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        })
        let page = await browser.newPage();
        await page.goto('https://order.sharkys.com/menu/sharkys-blue-diamond-decatur', {waitUntil: "domcontentloaded"});
        await page.waitForSelector('._image_r609vr', { timeout: 10000 })
        await scrollPageToBottom(page, {
            size: 450,
            delay: 600
        });

        const randomNumber = (min, max) => {
            return Math.round(Math.random() * (max - min) + min);
        }

        let allImg = await page.$$('._menu_r609vr');

        let menu = [];
        //  Check that all pictures are unique
        const set = new Set();

        for (let i = 0; i < allImg.length; i++){
            const img = await allImg[i].$("img");
            //  If cart hasn't got img don't add this dish
            if(!img) return menu;

            const name = await allImg[i].$('div._productInfo_r609vr > h3 > button');

            const gameName = await page.evaluate(name => name.innerText.trim().toLowerCase(), name);
            const gameImg = await page.evaluate(img => img.src, img);

            if(set.has(gameImg)) continue;
            set.add(gameImg);

            const menu__dish = {
                id: i,
                dishesName: gameName,
                price: randomNumber(30, 120),
                weight: randomNumber(200, 400),
                image: gameImg,
                available: Boolean(randomNumber(0, 1))
            };
            menu.push(menu__dish);
        }
        
        await browser.close();
        return menu;
    } catch(err){
        console.log(err);
    }
}
module.exports = parse__Sharkys;