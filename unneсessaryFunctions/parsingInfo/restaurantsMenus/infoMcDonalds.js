const axios = require('axios');
const cheerio = require('cheerio');

const parse__McDonalds = async ()=> {
    try{
        const getHTML = async (url)=> {
            const { data } = await axios.get(url);
            return cheerio.load(data);
        }
        const $ = await getHTML('https://www.mcdonalds.com/us/en-us/full-menu.html');
        
        const menu = [];
        //  Check that all pictures are unique
        const uniqueImages = new Set();

        $('.cmp-category__item').each((i, element) => {
            const dishesName = $(element).find('div.cmp-category__item-name').text().toLowerCase();
            const dishesImageUrl = $(element).find('img').attr('src');  
            const randomNumber = (min, max) => Math.round(Math.random() * (max - min) + min);

            if(!uniqueImages.has(dishesImageUrl) && dishesImageUrl !== undefined){
                uniqueImages.add(dishesImageUrl);

                const menu__dish = {
                    id: i,
                    dishesName: dishesName,
                    price: randomNumber(30, 120),
                    weight: randomNumber(200, 400),
                    image: dishesImageUrl,
                    available: Boolean(randomNumber(0, 1))
                };
                menu.push(menu__dish);
            }
        })
        console.log(menu);
        return menu;
    } catch(e) {
        console.log(e);
    }
}
module.exports = parse__McDonalds;