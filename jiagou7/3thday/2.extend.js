class Animal{
    constructor(name){
        this.name = name;
    }
    say(){
        console.log(this.name);
    }
    static eat(){
        console.log('eat');
    }
}
class Tiger extends Animal {
    constructor(name){
        super(name);
    }
}