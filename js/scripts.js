

var findAndReplace = function(string, searchWord, replaceWord) {
var wordArray = string.toLowerCase().split(" ");

  for(var i = 0; i < wordArray.length; i++) {
      // debugger;
    if (wordArray[i] === searchWord) {
      wordArray[i] = replaceWord;
    };
  };
    return wordArray.join(" ");
};


// $(document).ready(function() {
//   $("form#pig-latin").submit(function(event) {
//     var sentence = ($("input#sentence").val());
//     var result = pigLatin(sentence);
//
//     $(".sentence").text(sentence);
//     $(".result").text(result);
//
//     $("#result").show();
//     event.preventDefault();
//   })
// })
