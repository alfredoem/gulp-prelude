// resources\assets\js\users\UserComponent.js

export class UserComponent {

    constructor() {
        this.username;
        this.pin;
        this.statusCode;
        this.success = false;
        this.message;
    }

    login(username, pin)  {

        if (pin == 1111) {
            this.username = username;
            this.pin = pin;
            this.statusCode = 200;
            this.success = true;
            this.message = `Hi ${this.username}`;
        } else {
            this.statusCode = 401;
            this.message = `The pin ${pin} is invalid`;
        }

        return {
            "success": this.success,
            "message": this.message,
            "statusCode": this.statusCode
        }
    }
}
