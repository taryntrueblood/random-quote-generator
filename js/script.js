//create an array of objects to hold the quotes
var quotes = [
  {
    quote: "Not everything that can be counted counts, and not everything that counts can be counted.",
    source: "Albert Einsten"
  },
  {
    quote: "In the End, we will remember not the words of our enemies, but the silence of our friends.",
    source: "Martin Luther King Jr"
  },
  {
    quote: "Good people do not need laws to tell them to act responsibly, while bad people will find a way around the laws.",
    source: "Plato"
  },
  {
    quote: "When you do the common things in life in an uncommon way, you will command the attention of the world.",
    source: "George Washington Carver"
  },
  {
    quote:"A lie gets halfway around the world before the truth has a chance to get its pants on.",
    source: "Sir Winston Churchill"
  }
];

var output = "";
//create a function named getRandomQuote
function getRandomQuote() {
  //select a random quote from the quotes array
  var random = Math.floor(Math.random() * quotes.length);
  return quotes[random];
 }

//create a function called printQuote
function printQuote(){
   //call function getRandomQuote and assign it to a variable
    var randomQuote = getRandomQuote();

   //access objects properties and put them into a string
      output = "<p class='quote'>"+ randomQuote.quote + "</p>";
      output += "<p class='source'>"+ randomQuote.source + "</p>";

      document.getElementById('quote-box').innerHTML = output;
}


// event listener to respond to clicks on the page
// when user clicks anywhere on the page, the "makeQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
