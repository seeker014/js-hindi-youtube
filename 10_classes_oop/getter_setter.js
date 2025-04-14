// get used to get the value
// set used to change or set the value 

class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){       
        return this._email.toUpperCase()    // returns email in uppercase , but value is stored normally
    }
    set email(value){
        this._email = value
    }

    get password(){     
        return `${this._password}hitesh`   // password is stored as abc but returned as abchitesh
    }

    set password(value){    // both constructor and set password are trying to set value of password
                            // so change name of variable to _password
        this._password = value
    }
}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.email); // H@HITESH.AI