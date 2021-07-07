class Ninja {
    constructor(name, health,){
        this.name = name;
        this.health = health;
        this.strength = 3;
        this.speed = 3;
    }

    sayName(){
        console.log('my name is ' + this.name + "!")
    }

    showStats(){

        console.log("------------------------------------" + "\n" + "              -[STATS]-" + "\n" + "Name: " + this.name + "\n" + "Health: " + this.health + "\n" + "Strength: " + this.strength + "\n" + "Speed: "+ this.speed + "\n" +"------------------------------------" )
    }

    drinkSake(){
        this.health += 10
        console.log(this.name+' drinks the Sake. | '+"Health: "+(this.health - 10)+ ' => ' + this.health)
    }
    
}

const ninja1 = new Ninja("Ryu Hyabusa", 10);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();


