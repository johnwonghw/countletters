function countLetters(str) {
  var output = {}
  var noSpaces = str.split(" ").join("").toLowerCase();
  for (var i = 0; i < noSpaces.length; i++) {
      var currentLetter = noSpaces[i]
    if (output[currentLetter] === undefined) {
      output[currentLetter] = 1
      } else {
        output[currentLetter] = output[currentLetter] + 1
      }
    }





//if (output[currentLetter] === undefined) {
    //  output[currentLetter] = 1
        console.log(output)


  }

countLetters("lighthouse in the house")



//output[l] =


//JSON.stringify(variable)

//output[key] === undefined

//output[key] = 1
//output[key] = output[key] + 1
//output[key]++
//output.key

//dog.breed

//dog.name

//output.l ++
//output["l"]

//var breed = "breed"
//dog[breed]


/* need to create an object within an object using output[currentLetter].
//output[currentLetter] === undefined




countLetters("lighthouse in the house")
/*
remove spaces
start adding letters from the array to black object ->
if current letter is same as previous, add it into the blank object
if current letter is the same as previous, go to next letter






function that counts each letter
if letter matches any of the group, create oject that adds 1 every time a letter is counted
*/




