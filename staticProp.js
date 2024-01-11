class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }
    static createId(){
        return `123`
}


}

const surendra = new User('Surendra')
//console.log(surendra.createId());

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iPhone = new Teacher('iphone', 'i@phone.com')
iPhone.logMe();