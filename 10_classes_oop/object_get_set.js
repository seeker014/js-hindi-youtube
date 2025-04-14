const User = {
    _email: 'h@hc.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);  // but we have defined _email , we can return the manipulated _email in uppercase -> H@HC.COM
// .email is just a property we have accessed , doesn't matter in which variable we store it ( _email )