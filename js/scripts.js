$(document).ready(function(){
  $('#formOne').submit(function(){
    let input = $('#userString').val(); // do not remove
    var numbers = [];
    let keyNumbers = [];
    let spliceArray = [];
    var primeArray = [];

    for(var k = 2; k <= input; k++ ){
      numbers.push(k);
    } 

    keyNumbers.push(2);
    numbers.forEach(function(number) {
      if(number % 2 !== 0){
        keyNumbers.push(number);
      }
    });

   for(let i = 0; i < keyNumbers.length; i++) {
     for (let j = 0; j < numbers.length; j++) {
          if((numbers[j] % keyNumbers[i] === 0) && (numbers[j] !== keyNumbers[i]) && ($.inArray(numbers[j], spliceArray) === -1) ) {
            spliceArray.push(numbers[j]);
          }
      }
    }   
    for (var m = 0; m< numbers.length; m++) {
      if($.inArray(numbers[m], spliceArray) === -1){
        primeArray.push(numbers[m]);
      }
    }
    // console.log(`Key Numbers at end: ${keyNumbers}`);
    // console.log(`Numbers at end: ${numbers}`);
    // console.log(`spliceArray at end: ${spliceArray}`);
    console.log(`primeArray at end: ${primeArray}`);

    $("#limit").empty().append(input);
    $("#story").show();
    $("#puzzle").empty().prepend(primeArray.join(", "));

    event.preventDefault(); 
  });
});
