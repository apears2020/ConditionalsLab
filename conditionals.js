var clicks = 0;

$(document).ready(function () {
    // add the functions as event listeners
    // to the forms in the HTML
    $("#clickCounter").submit(countClick);
    $("#ageValidator").submit(checkAge);
    $("#salesTax").submit(calcSalesTax);
    $("#catFood").submit(recommendFood);

    function countClick(event) {
        event.preventDefault();
        // Increment a variable that tracks the
        // number of button clicks
        clicks++;


        // Print the current number of clicks to the
        // <p> with ID "clickCountOutput"
        $("#clickCountOutput").text(clicks);

        // When the count gets to 10, reset it to 0
        if(clicks === 10)
        {
            clicks = 0;
        }


    }


    function checkAge(event) {
        event.preventDefault();
        // Get the user's birth year from the text
        // box with ID of "birthYear"
        var ageYear = parseInt($("#birthYear").val());
        var age = 2020-ageYear;


        // If they are currently under 18, print "Child"
        // to the <p> with ID of "birthYearOutput"
        if(age < 18)
        {
            $("#birthYearOutput").text("Child");
        }


        // If they are 18 or over, print "Adult" instead
        else
        {
            $("#birthYearOutput").text("Adult");
        }
    }

    function calcSalesTax(event) {
        event.preventDefault();
        // Get the purchase amount from the text
        // box with ID of "purchaseAmount"
        var amount = parseFloat($("#purchaseAmount").val());
        amount.toFixed(2);
        var wiscTaxTotal = amount * 0.05;
        var wiscTotal = amount + wiscTaxTotal;

        var illTaxTotal = amount * 0.08;
        var illTotal = amount + illTaxTotal;

        var minnTaxTotal = amount * 0.075;
        var minnTotal = amount + minnTaxTotal;

        var michTaxTotal = amount * 0.055;
        var michTotal = amount + michTaxTotal;
        // Get the state from the text box with ID "state"
        var getState = $("#state").val();

        // Tax rates are: WI 5%, IL 8%, MN 7.5%, MI 5.5%

        // Calculate the sales tax amount and print to
        // the <p> with ID of "salesTaxOutput"
        if (getState === "WI")
        {
            $("#salesTaxOutput").text(`Your total is $${wiscTotal.toFixed(2)}`);
        }

        else if (getState === "IL")
        {
            $("#salesTaxOutput").text(`Your total is $${illTotal.toFixed(2)}`);
        }

        else if (getState === "MN")
        {
            $("#salesTaxOutput").text(`Your total is $${minnTotal.toFixed(2)}`);
        }

        else if (getState === "MI")
        {
            $("#salesTaxOutput").text(`Your total is $${michTotal.toFixed(2)}`);
        }

        else
        {
            $("#salesTaxOutput").text("Not a valid entry.");
        }




        // If the user enters a state not listed above,
        // print "Error" instead


    }

    function recommendFood(event) {
        event.preventDefault();
        // Get the cat's age from the text box with
        // ID of "catAge"
        var ageCat = parseInt($("#catAge").val());


        // Cats under 2 get "kitten chow", between 2 and 10
        // get "adult chow", and over 10 get "senior chow"
        if (ageCat < 2)
        {
            $("#catAgeOutput").text("Kitten Chow");
        }
        else if (ageCat <= 10)
        {
            $("#catAgeOutput").text("Adult Chow");
        }
        else
        {
            $("#catAgeOutput").text("Senior Chow");
        }


        // Print the food recommendation to the <p> with
        // ID of "catAgeOutput"


    }

    function drawCard() {
        // Generate a random card face value (1 - 13)
        var faceValue = Math.floor(Math.random() * 13) + 1;

        // Generate a random suit (1 - 4)
        var suit = Math.floor(Math.random() * 4) + 1;

        // Create the description of the card, for example
        // "King of Spades" or "2 of Hearts"
        var description;

        // For face values 2 - 10, you can just print the number
        // Face value 1 is "Ace", 11 is "Jack", 12 is "Queen",
        // and 13 is "King"

        // For the suits, 1 is "Clubs", 2 is "Spades",
        // 3 is "Hearts", 4 is "Diamonds"

        // Print the card's description to the <p> with
        // ID of "drawCardOutput"


    }

});