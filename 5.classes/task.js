class PrintEditionItem {
        constructor(name, releaseDate, pagesCount, state = 100, type = null) {
               this.name = name;
               this.releaseDate = releaseDate;
               this.pagesCount = pagesCount;
               this.state = state;
               this.type = type;
        };

        fix() {
          this._state = this._state * 1.5; 
          };

get state() {

       return this._state;
    };
  
set state(newState) {
        if (newState < 0) {
                this._state = 0;
        } else if (newState > 100) {
                this._state = 100;
        }
        else {
                this._state = newState;
        };
   };
  
  };


class Magazine extends PrintEditionItem {
        constructor(name, releaseDate, pagesCount) {
          super(name, releaseDate, pagesCount);
          this.type = 'magazine';
        }
      };
      class Book extends PrintEditionItem {
        constructor(author, name, releaseDate, pagesCount) {
          super(name, releaseDate, pagesCount);
          this.author = author;
          this.type = "book";
        }
      }; 
      class NovelBook extends Book {
        constructor(author, name, releaseDate, pagesCount) {
          super(author, name, releaseDate, pagesCount);
          this.type = 'novel';
        }
      };
      class FantasticBook extends Book {
        constructor(author, name, releaseDate, pagesCount) {
          super(author, name, releaseDate, pagesCount);
          this.type = 'fantastic';
        }
      };
      class DetectiveBook extends Book {
        constructor(author, name, releaseDate, pagesCount) {
          super(author, name, releaseDate, pagesCount);
          this.type = 'detective';
        }
      };

      class Library {
        constructor(name, books = []) {
          this.name = name;
          this.books = books;
        }
        addBook(book) {
          if (book.state > 30) {

            this.books.push(book);
          };
        };
        findBookBy (type, value) {
                let findBook = this.books.find(key => key[type] === value);

                if(findBook) {
                        return findBook;
                } else {
                        return null;
        };
      };
      giveBookByName (bookName) {

        let index = this.books.findIndex(key => key.name === bookName);

        if (index > -1) {
            return this.books.splice(index, 1)[0];
        } else {
            return null;
        };
    };
    
     };