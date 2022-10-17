export default class UserDto {
    id:string;
    isActivated:boolean;
    email: string;
    constructor(model:any) {
        this.email = model.email;
        this.id = model._id;
        this.isActivated = model.isActivated;
    }
};
