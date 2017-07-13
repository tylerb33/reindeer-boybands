console.log("this works")

var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];

let currentColor="";
let currentReindeer="";
let hohohoElement ="";
let insert = document.getElementById("reindeer");

for (let i = 0; i < reindeer.length; i++) {
	hohohoElement += `<ul class="ul-prop"><li class="li-prop">${colors[i] + " "} ${reindeer[i]}</li></ul>`
}

insert.innerHTML = `<h1>Boy Band Reindeer!</h1> ${hohohoElement}`





// Your task is to loop through all the reindeer in the array, and add the name of the reindeer to the single HTML <div> element provided. The name of the reindeer should be prepended with the corresponding color from the other array.