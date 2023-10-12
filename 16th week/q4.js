function checkYear(books) {
    let YearCheck = books.filter(book => book.year = 2010);

    YearCheck = YearCheck.map(book => {
        return {
            title: book.title,
            author: book.author.toUpperCase(),
            year: book.year
        };
    });

    return YearCheck
};




let books = [{ title: 'Book1', author: 'Author 1', year: 2012 },
{ title: 'Book2', author: 'Author 2', year: 2010 },
{ title: 'Book3', author: 'Author 3', year: 2008 },
{ title: 'Book4', author: 'Author 4', year: 2011 },
{ title: 'Book5', author: 'Author 5', year: 2001 },
{ title: 'Book6', author: 'Author 6', year: 2009 },
];

console.log(checkYear(books));