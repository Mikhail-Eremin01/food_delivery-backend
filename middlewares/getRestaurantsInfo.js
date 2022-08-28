const getRestaurantsInfo = function(model, Rest_id){
    try{
        return model.findOne({_id: Rest_id}, {name: 1, address: 1, image: 1, telephone: 1,});
    } catch(error) {
        console.log(error);
    }
}
module.exports = getRestaurantsInfo