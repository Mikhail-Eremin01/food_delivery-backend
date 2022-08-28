const puppeteer = require('puppeteer');
const { scrollPageToBottom } = require('puppeteer-autoscroll-down')


const parse__KFC = async ()=> {
    try{
        const browser = await puppeteer.launch({
            debug: false,
            headless: true,
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        })
        let page = await browser.newPage();
        await page.goto('https://www.kfc-ukraine.com/en/menu');

        await scrollPageToBottom(page, {
            size: 200,
            delay: 800
        });
        const randomNumber = (min, max) => Math.round(Math.random() * (max - min) + min);

        let dishesImageUrls = await page.evaluate(()=> {
            let allImg = document.querySelectorAll('.cat-img');

            let imgUrl = Object.values(allImg).map(elem => elem.src)
            return imgUrl;
        })

        const dishesNames = await page.$$eval("h3.cat-title", (imgs) =>
            imgs.map((img) => img.innerHTML.trim().toLowerCase())
        );

        const menu = [];
        for(let i = 0; i < dishesNames.length; i++){
            const menu__dish = {
                id: i,
                dishesName: dishesNames[i],
                price: randomNumber(30, 120),
                weight: randomNumber(200, 400),
                image: dishesImageUrls[i],
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

module.exports = parse__KFC;