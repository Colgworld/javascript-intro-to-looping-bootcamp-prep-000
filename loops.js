array = [];

// function forLoop(array) {
//     for (let i = 0; i < 25; i++) {
//       if (i === 1) {
//         array.push('I am 1 strange loop.')
//       } else {
//         array.push('I am ${i} strange loops.')
//       }
//     }
//   return array;
// }


function forLoop(array) {
    //var string1 = "I am 1 strange loop.";
    //var stringOther = "I am ${i} strange loops.";
    for(var i = 0; i < 25; i++) {
     var string1 = "I am 1 strange loop.";
     var stringOther = "I am " + i + " strange loops.";
      if (i === 1) {
      array.push(string1);
    }
     else {
      array.push(stringOther);
    }
 }
 return array;
}

function whileLoop(n) {
  let countdown = n
  let done = 'done!';

  while (countdown > 0) {
    console.log(--countdown)
  }
return done
}

function doWhileLoop(n) {

}
