// Task 1:
function classifyTriangle(a, b, c) {
    if (
        typeof a !== "number" ||
        isNaN(a) ||
        typeof b !== "number" ||
        isNaN(b) ||
        typeof c !== "number" ||
        isNaN(c)
    )
        return console.log("Please enter a valid number.");
    if (a <= 0 || b <= 0 || c <= 0)
        return console.log("The sides must be greater than 0.");
    if (a + b > c && a + c > b && b + c > a) {
        if (a === b && b === c) {
            console.log("Equilateral triangle");
            return;
        }

        if (a === b || a === c || b === c) {
            console.log("Isosceles triangle");
            return;
        }

        let a2 = a ** 2;
        let b2 = b ** 2;
        let c2 = c ** 2;
        if (a2 === b2 + c2 || b2 === a2 + c2 || c2 === b2 + a2) {
            console.log("Right triangle");
            return;
        } else {
            console.log("General triangle");
            return;
        }
    } else {
        console.log("Not a triangle");
        return;
    }
}

classifyTriangle(2, 2, 2);
classifyTriangle(3, 3, 5);
classifyTriangle(3, 4, 5);
classifyTriangle(3, 4, 2);
classifyTriangle(2, 4, 2);

// Task 2:

function isPerfectSquares(a) {
    if (typeof a !== "number" || isNaN(a))
        return console.log("Please enter a valid number.");
    if (a < 0) return console.log(`${a} is not prefect squares`);

    let squareRoot = a ** 0.5;

    function isInteger(n) {
        return n % 1 === 0;
    }

    if (isInteger(squareRoot)) {
        return console.log(`${a} is prefect squares`);
    } else {
        return console.log(`${a} not prefect squares`);
    }
}

isPerfectSquares(1);
isPerfectSquares(2);
isPerfectSquares(4);
isPerfectSquares(5);
isPerfectSquares(9);
