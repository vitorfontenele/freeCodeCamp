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

    $("#new-quote").click(function(){
        $("#text").fadeOut("slow");
        $("#text").promise().done(function(){
            //Current quote
            let currentQuoteText = $("#text").text();

            //Let's make sure the new quote is at least different from the previous one
            let newQuotes = quotes.filter(quote => quote.text !== currentQuoteText);

            //New quote to be displayed
            let randomIndex = randomArrIndex(newQuotes);
            let randomQuoteText = newQuotes[randomIndex].text;
            let randomQuoteAuthor = newQuotes[randomIndex].author;
            
            //Placing changes in the page
            $("#text").text(`${randomQuoteText}`);
            $("#author").text(`--${randomQuoteAuthor}`)
            $("#text").fadeIn('slow')

            //Updating 'href' attribute from the Twitter anchor
            let urlQuoteText = generateUrlText(randomQuoteText);
            let urlQuoteAuthor = generateUrlText(randomQuoteAuthor);
            let urlQuote = `${urlQuoteText}%20--${urlQuoteAuthor}`;
            $("#tweet-quote").attr("href", `http://twitter.com/intent/tweet?text=${urlQuote}`);
        });
    });

    //Random index from a given array
    function randomArrIndex(arr) {return Math.floor(Math.random() * arr.length)};
    //In the 'text' url attribute, spaces are replaced by '%20'
    function generateUrlText(str) {return str.split(" ").join("%20")};
});

//https://stackoverflow.com/questions/18213701/running-jquery-functions-with-effects-in-a-specific-order