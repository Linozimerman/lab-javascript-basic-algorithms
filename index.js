// Iteration 1: Names and Input

/* let hacker1 = "John"
let hacker2 = "yyy"

console.log(`The driver's name is ${hacker1}`)
console.log(`The driver's name is ${hacker2}`) 
*/

// Iteration 2: Conditionals

/*if (hacker1.length> hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if(hacker2.length> hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)

} 
*/




// Iteration 3: Loops

///// J O H N

/*let uppercased = hacker1.toUpperCase();
let final = ""

for (let i=0; i < hacker1.length; i++ ) {
    
    final += uppercased [i] + "<br>";

}
console.log(final)

*/



/////reversed nhoJ

/*let reversed = ""

for (let i=hacker1.length-1; i >= 0; i-- ) {
    
    reversed +=hacker1[i];

}

// console.log(reversed)
*/

/////lexicographic order

/*let hacker1 = "aaab"
let hacker2 = "aaac"


let orden = hacker1.localeCompare(hacker2)

if (orden > 0) {
    console.log("The driver's name goes first.")

}
else if(orden <0){
    console.log("Yo, the navigator goes first, definitely.")

} 
else {
    console.log('What?! You both have the same name?')
    
}

*/










///BONUS


/*let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu arcu vel felis consectetur efficitur. Nullam aliquet massa nec convallis fermentum. In hac habitasse platea dictumst. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis sit amet convallis risus. Mauris et maximus ligula, vel vehicula risus. Nunc pretium feugiat diam id gravida. Cras dictum at velit vel posuere. Nullam vehicula diam ante, id tristique sapien sollicitudin sit amet. Vivamus ultricies leo sed enim tempus, quis ullamcorper libero vehicula. Suspendisse mollis vel nisi a tincidunt. In commodo sit amet est ut volutpat. Integer bibendum laoreet posuere. Pellentesque fermentum rutrum bibendum. Phasellus ut porttitor tellus. Sed at sagittis eros, et eleifend turpis. Sed condimentum egestas dui. Nulla eget orci eu quam scelerisque scelerisque vel at odio. Morbi molestie laoreet tempus. Pellentesque at elementum massa. Fusce sagittis ac enim vitae suscipit. Mauris semper rhoncus ipsum, in convallis mauris euismod eu. Ut lobortis tellus ac velit consequat, feugiat blandit est finibus. Ut porttitor, leo et euismod fermentum, augue arcu dapibus odio, id posuere ligula turpis a orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus lobortis ultricies mollis. Nunc elementum elit sed erat tincidunt, sed tincidunt nunc pharetra. Praesent eu imperdiet risus, id ultrices diam. Sed et maximus odio. Pellentesque tincidunt justo velit, sed aliquet ex venenatis ac. Nunc odio arcu, condimentum vitae dapibus quis, fermentum non erat. Nam eu vestibulum lacus, at ultricies lacus. Vestibulum erat velit, rhoncus at malesuada quis, consectetur eget magna. Integer dui ligula, aliquet eu fermentum a, condimentum ac nunc. Sed sed orci in tellus posuere lobortis. Morbi vulputate consequat urna vehicula luctus. Mauris auctor posuere tortor sit amet suscipit. Proin vitae volutpat lorem. Phasellus viverra, ipsum vel vulputate laoreet, tortor enim malesuada justo, eget cursus lacus nisl eu leo."
let counter = 0;

for( let i=0; i<longText.length;  i++){
    
    console.log(i);
}
*/

/// Bonus2

/* let phraseToCheck = "Race car"
let reversedPalindrome = ""

for(let i=phraseToCheck.length-1; i>=0; i--){

    reversedPalindrome += phraseToCheck[i]
    
}

console.log(reversedPalindrome)


    if(phraseToCheck == reversedPalindrome){
        console.log('Its a palindrome')
    } else {
        console.log('Its not a palindrome')
    }

*/


