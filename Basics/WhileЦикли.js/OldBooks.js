function oldBooks(input) {
    let index = 1; 
    let anysBook = input[0];
    let booksChecked = 0; 
    while (index < input.length) { 
        if (input[index] === "No More Books") {
            console.log(`The book you search is not here!`);
            console.log(`You checked ${booksChecked} books.`);
            return;
        }
        if (anysBook === input[index]) {
            console.log(`You checked ${booksChecked} books and found it.`);
            return; 
        }
        booksChecked++; 
        index++; 
    }
}
oldBooks(["Bourne",
    "True Story",
    "Forever",
    "More Space",
    "The Girl",
    "Spaceship",
    "Strongest",
    "Profit",
    "Tripple",
    "Stella",
    "The Matrix",
    "Bourne"])
    
    

    
    