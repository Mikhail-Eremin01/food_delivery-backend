const fs = require('fs');
const path = require('path');
const info__McDonalds = require('./unneсessaryFunctions/parsingInfo/restaurantsMenus/infoMcDonalds');
const info__KFC = require('./unneсessaryFunctions/parsingInfo/restaurantsMenus/infoKFC');
const infoSharkys = require('./unneсessaryFunctions/parsingInfo/restaurantsMenus/infoSharkys');
const { resolve } = require('path');


const getData = async function(request, response, next){

    let arr = [
        {
            id: 1,
            name: 'McDonalds',
            telephone: '+380977155028',
            address: {
            district: 'central',
            street: 'Glinka',
            house: 3
            },
            image: '/mcdonalds.svg',
        },
        {
            id: 2,
            name: 'KFC',
            address: {
            district: 'central',
            street: 'Glinka',
            house: 19
            },
            image: '/kfc.svg',
            telephone: '+380639481148'
        },
        {
            id: 3,
            name: 'Sharky\'s',
            address: {
            district: 'central',
            street: 'Shevchenko',
            house: 6
            },
            image: '/dollar.svg',
            telephone: '+380689488201'
        },
    ]

    //  Parse all info about restaurant's menus
    // arr[0].menu = (await info__McDonalds());
    // arr[1].menu = (await info__KFC());  
    // arr[2].menu = (await infoSharkys());  
    // fs.writeFile(path.join(require.main.path, 'restaurants.json'), JSON.stringify(arr, null, 4),()=> {
    //     console.log('file saved');
    // })

    // Read json file with all restaurants menus
    new Promise((resolve, reject)=> {
        return fs.readFile(path.join(require.main.path, 'restaurants.json'), (err, data)=> {
            if(err) reject(err);
            resolve(data); 
        })
    })
    .then((data)=> response.end(data));
}
module.exports = getData;