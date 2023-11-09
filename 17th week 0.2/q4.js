const books = [
    {
        title: "He Catcher in the Rye",
        author: "J.D. Salinger",
        year: 1951
    },
    {
        title: "Brave New World",
        author: "Aldous Huxley",
        year: 1932
    },
    {
        title: "Moby-Dick",
        author: "Herman Melville",
        year: 1851
    },
    {
        title: "One Hundred Years of Solitude",
        author: "Gabriel García Márquez",
        year: 1967
    },
    {
        title: "Lord of the Rings",
        author: "J.R.R. Tolkien",
        year: 1954
    },
    {
        title: "The Chronicles of Narnia",
        author: "C.S. Lewis",
        year: 1950,
    }
]
function Title(books, callback) {
    const titles = books.map((book) => book.title);
    callback(titles);
}

Title(books, (titles) => {
    titles.sort();
    console.log(titles.join("  ,  "))
});