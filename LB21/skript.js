// Завдання 1: Деструктуризація 
console.log(" Завдання 1 ");

const car = {
    brand: "Toyota",  
    model: "Camry",   
    year: 2023        
};

// Використовуємо деструктуризацію 
const { brand, model, year } = car;

console.log(`Авто: ${brand}, Модель: ${model}, Рік: ${year}`);


//  Завдання 2: Оператор Rest (сума аргументів) 
console.log("\n Завдання 2 ");


function sum(...numbers) {
    return numbers.reduce((total, current) => total + current, 0);
}

console.log("Сума (10, 20):", sum(10, 20));          
console.log("Сума (1, 2, 3, 4, 5):", sum(1, 2, 3, 4, 5)); 


// Завдання 3: Оператор Spread (об'єднання об'єктів) 
console.log("\n Завдання 3 ");

const person = {
    name: "Костя",
    age: 20
};

const jobInfo = {
    position: "Web Developer",
    experience: "Junior"
};

// Створюємо новий об'єкт 
const fullProfile = { ...person, ...jobInfo };

console.log(fullProfile);