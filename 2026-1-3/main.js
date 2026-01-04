// Task 1:
function studentScore(num) {
    if (typeof num !== "number" || isNaN(num))
        return console.log("Please enter a valid number.");
    if (num < 0 || num >= 11)
        return console.log("Please enter a number between 0 and 10.");

    if (num >= 9 && num <= 10) {
        console.log("Excellent");
    } else if (num >= 8 && num < 9) {
        console.log("Very Good");
    } else if (num >= 6.5 && num < 8) {
        console.log("Good");
    } else if (num >= 5 && num < 6.5) {
        console.log("Average");
    } else {
        console.log("Weak");
    }
}

studentScore("9");
studentScore(NaN);
studentScore(-1);
studentScore(9);
studentScore(6.4);

// Task 2:
function month(num) {
    if (typeof num !== "number" || isNaN(num))
        return console.log(`Please ${num} a valid number.`);

    switch (true) {
        case num === 1 ||
            num === 3 ||
            num === 5 ||
            num === 7 ||
            num === 8 ||
            num === 10 ||
            num === 12:
            console.log("Have 31 days");
            break;
        case num === 2 || num === 4 || num === 6 || num === 9 || num === 11:
            console.log("Have 30 days");
            break;
        default: {
            console.log(`Please ${num} a number between 1 and 12.`);
        }
    }
}

month(1);
month(2);
month(3);
month(4);

// Task 3:
function evenOddCheck(n) {
    if (typeof n !== "number" || isNaN(n))
        return console.log("Please enter a valid number.");
    return n % 2 === 0 ? console.log("Even") : console.log("Odd");
}

evenOddCheck(10);
evenOddCheck(31);

// Task 4:
function movieTicketPrice(age) {
    if (typeof age !== "number" || isNaN(age))
        return console.log("Please enter a valid number.");

    let ticketPrice = 100;
    ticketPrice = age < 13 ? ticketPrice / 2 : ticketPrice;
    return console.log(`Ticket price is ${ticketPrice} `);
}

movieTicketPrice(13);
movieTicketPrice(12);

// Task 5:
function temperatureConversion(temp) {
    if (typeof temp !== "number" || isNaN(temp))
        return console.log("Please enter a valid number.");
    temp = temp * 1.8 + 32;
    return console.log(`Fahrenheit is ${temp}`);
}

temperatureConversion(6);

// Task 6:
function electricityBillCalc(num) {
    if (typeof num !== "number" || isNaN(num))
        return console.log("Please enter a valid number.");

    if (num <= 0) return console.log("Please enter a number greater than 0.");

    let total = 0;

    if (num <= 50) {
        total = num * 1.678;
    } else if (num > 50 && num <= 100) {
        total += num * 1.734;
    } else if (num > 100 && num <= 200) {
        total += num * 2.014;
    } else {
        total += num * 2.536;
    }

    return console.log(`Amount to pay ${Math.round(total)}VND`);
}

electricityBillCalc(0);
electricityBillCalc(49);
electricityBillCalc(80);
electricityBillCalc(140);
electricityBillCalc(500);
