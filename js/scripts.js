$(document).ready(function() {
  $("form#vowelremove").submit(function(){
    var sentence = $("input#sentenceinput").val();

    var splitSentence = sentence.split("");

    for(var index = 0; index < splitSentence.length; index += 1) {
      if (splitSentence[index] === "a" || splitSentence[index] === "e" || splitSentence[index] === "i" || splitSentence [index] === "o" || splitSentence[index] === "u") {
        splitSentence.splice(index, 1, "-")
      }
    }

    var finalSentenceNoVowels = splitSentence.join("");


    console.log(finalSentenceNoVowels);

    $("#novowelsentence").text(finalSentenceNoVowels)

    $("form#vowelremove").hide();

    $("#output").show();

    event.preventDefault();

  })
})
