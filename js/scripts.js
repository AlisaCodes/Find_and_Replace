

var findAndReplace = function(string, searchWord, replaceWord) {
var wordArray = string.toUpperCase().split(" ");
var searchWord = searchWord.toUpperCase()
var replaceWord = replaceWord.toUpperCase()

  for(var i = 0; i < wordArray.length; i++) {
    if (wordArray[i] === searchWord) {
      wordArray[i] = replaceWord;
    };
  };
    return wordArray.join(" ");
};


$(document).ready(function() {
  $("form#find-and-replace").submit(function(event) {
    var sentence = ($("input#sentence").val());
    var find = ($("input#find").val());
    var replace = ($("input#replace").val());
    var result = findAndReplace(sentence, find, replace);

    $(".result").text(result);

    $("#result").show();
    event.preventDefault();
  })
})
