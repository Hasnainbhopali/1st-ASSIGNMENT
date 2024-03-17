// Define the Car interface
interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any; // Allow additional arbitrary properties
}

// Function to store information about a car
function store_car(manufacturer: string, model: string, ...args: [string, any][]): Car {
    let car: Car = { manufacturer, model };

    // Assign additional properties
    args.forEach(([key, value]) => {
        car[key] = value;
    });

    return car;
}

// Main program

// Call the function with required information and additional properties
let myCar = store_car("Toyota", "Corolla", ["color", "blue"], ["year", 2023]);

// Print the returned object
console.log(myCar);