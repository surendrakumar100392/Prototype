let myName = "Surendra     "

console.log(myName.trim().length);


let myHero = ["Thor", "Spiderman"]

let heroPower = {
    Thor : "hammer",
    Spiderman : "sling",

    getSpiderPower : function(){
        console.log(`Spidy power is ${this.Spiderman}`);

        
    }
}

Object.prototype.surendra = function(){
    console.log(`Surendra is present in all object`);
}

Array.prototype.heySurendra = function(){
    console.log(`Surendra says Hello`);
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : 'JS Assignment',
    fullTime : true
    __proto__: TeachingSupport

}

Teacher.__proto__