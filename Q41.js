"use strict";
//41: Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magicians(magicianss) {
    for (let magician of magicianss) {
        console.log(magician);
    }
}
const magicianss = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
show_magicians(magicianss);
