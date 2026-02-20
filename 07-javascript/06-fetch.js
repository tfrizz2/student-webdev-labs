const url = "https://anapioficeandfire.com/api/books/";
const app = document.querySelector("#books");
const loader = document.querySelector("#loading");

const addBook = (book) => {
  const element = document.createElement("div");
  const title = document.createElement("h3");
  const author = document.createElement("p");
  const released = document.createElement("p");
  const pages = document.createElement("p");

  title.textContent = book.name;
  author.textContent = `by ${book.authors[0]}`;
  // show just the year
  released.textContent = new Date(book.released).getFullYear();
  pages.textContent = `${book.numberOfPages} pages`;

  element.append(title, author, released, pages);

  element.style.display = "flex";
  element.style.flexDirection = "column";
  element.style.alignItems = "center";
  element.style.marginTop = "40px";

  app.append(element);
};

const fetchData = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // remove loader once data arrives
      if (loader) loader.remove();

      data.forEach(addBook);
    })
    .catch((error) => {
      console.error(error);

      if (loader) loader.remove();

      const element = document.createElement("div");
      element.textContent = "An error occurred";
      app.append(element);
    });
};

fetchData(url);
