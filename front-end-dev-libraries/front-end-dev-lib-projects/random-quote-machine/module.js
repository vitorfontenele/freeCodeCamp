$(document).ready(function(){
    let quotes = [
        {text: "Those who cannot remember the past are condemned to repeat it.", author: "George Santayana"},
        {text: "If the brain were so simple we could understand it, we would be so simple we couldn't.", author: "Lyall Watson"},
        {text: "The only thing that saves us from the bureaucracy is its inefficiency.", author: "Eugene McCarthy"},
        {text: "Any man who can drive safely while kissing a pretty girl is simply not giving the kiss the attention it deserves.", author: "Albert Einstein"},
        {text: "I find the great thing in this world is not so much where we stand, as in what direction we are moving.", author: "Oliver Wendell Holmes"},
        {text: "Computers are like Old Testament gods: lots of rules and no mercy.", author: "Joseph Campbell"},
        {text: "Education is the best provision for old age.", author: "Aristotle"},
        {text: "The nation that destroys its soil destroys itself.", author: "Franklin Delano Roosevelt"},
        {text: "There never was a good knife made of bad steel.", author: "Benjamin Franklin"},
        {text: "In nothing do men more nearly approach the gods than in giving health to men.", author: "Cicero"},
    ];

    function fillQuote(){
        //Current quote
        let currentQuoteText = $("#text").text();

        //New quote to be displayed
        let newQuotes = quotes.filter(quote => quote.text !== currentQuoteText);
        let randomIndex = Math.floor(Math.random() * newQuotes.length);
        let randomQuoteText = newQuotes[randomIndex].text;
        let randomQuoteAuthor = newQuotes[randomIndex].author;
        
        $("#text").text(`${randomQuoteText}`);
        $("#author").text(`--${randomQuoteAuthor}`);
        
    }
    fillQuote();

    $("#new-quote").click(function(){
        fillQuote();
    });
});