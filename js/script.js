//create an array of objects to hold the quotes
var quotes = [
  {
    quote: "Not everything that can be counted counts, and not everything that counts can be counted.",
    source: "Albert Einsten"
  },
  {
    quote: "In the End, we will remember not the words of our enemies, but the silence of our friends.",
    source: "Martin Luther King Jr."
  },
  {
    quote: "Good people do not need laws to tell them to act responsibly, while bad people will find a way around the laws.",
    source: "Plato"
  },
  {
    quote: "When you do the common things in life in an uncommon way, you will command the attention of the world.",
    source: "George Washington Carver"
  }
];


//create a function named getRandomQuote
function getRandomQuote() {
  //select a random quote from the quotes array
  var random = Math.floor(Math.random() * quotes.length);
  for(var prop in quotes[random]){
     document.getElementById('quote-box').innerHTML = quotes[random][prop];
   }
 }

//create a function called printQuote
function printQuote(){
    var randomQuote = getRandomQuote();

    var quote = "<p class='quote'>"+ "</p>";
        quote += "<p class='source'>" + "</p>";
     document.getElementById('quote-box').innerHTML = quote;
     return randomQuote;
}


// event listener to respond to clicks on the page
// when user clicks anywhere on the page, the "makeQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
