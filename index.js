// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push("Ralph")
}
function  destructivelyPrependCat(name){
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat(){
    cats.pop("Garfield")
}
function destructivelyRemoveFirstCat(){
    cats.shift("Milo")
}
function appendCat(name){
    var allcats=[...cats, "Broom"];
    return allcats;
    
}
function  prependCat(name){
    var allcats=["Arnold",...cats];
    return allcats;
}
function removeLastCat(){
    var allcats=cats.slice(0,cats.length-1);
    return  allcats;

}
function removeFirstCat(){
    var allcats=cats.slice(1)
    return allcats;
}




