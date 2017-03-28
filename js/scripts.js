$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();


    var arr = ($("input#user-input").val()).split("");
    // console.log(arr);
    // var vowels =["a","A","e","E","i" ,"I","o","O","u","U"];
    var wordPuzzle = [];

    for(var i=0; i<arr.length; i++){
      // vowels.forEach(function(vowel){
        if((arr[i] === "a") || (arr[i] === "e") || (arr[i] === "i") || (arr[i] === "o") || (arr[i] === "u")){
          wordPuzzle.push('-');
        }  else {
          wordPuzzle.push(arr[i]);
        };

        //  arr.splice(i,1,"-");}
    };
console.log(wordPuzzle)

  });
});
