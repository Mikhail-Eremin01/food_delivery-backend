const getRestaurantsInfo = function(model: { findOne: (arg0: { _id: any; }, arg1: { name: number; address: number; image: number; telephone: number; }) => any; }, Rest_id: string){
    try{
        return model.findOne({_id: Rest_id}, {name: 1, address: 1, image: 1, telephone: 1,});
    } catch(error) {
        console.log(error);
    }
}
export default getRestaurantsInfo