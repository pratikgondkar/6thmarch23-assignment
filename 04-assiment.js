// Filtering and Capitalizing: Books Published After 2010 with Author Names.

const books = [
    {title: "Books1", author: "author1", year: 2005},
    {title: "Books2", author: "author2", year: 2015},
    {title: "Books3", author: "author3", year: 2008},
];

function capitalize(str) {
    return str.replace(/\b\w/g, (char) =>  char.toUpperCase());
}

const filteredBooks = books 
    .filter(book => book.year > 2010)
    .map(book => ({ title: book.title, author: capitalize(book.author), year: book.year}));

console.log("filtered and capitalized books:", filteredBooks);