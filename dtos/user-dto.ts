export default class UserDto {
    user: any;
    id;
    isActivated;
    email: any;
    constructor(model:any) {
        this.email = model.email;
        this.id = model._id;
        this.isActivated = model.isActivated;
    }
};
