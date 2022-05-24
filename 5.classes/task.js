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
}
  
set state(number) {
        if (number < 0) {
                this._state = 0;
        } else if (number > 100) {
                this._state = 100;
        }
        else {
                this._state = number;
        };
   };
  
  get state() {

        return this._state;
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
        constructor(name, books) {
          this.name = name;
          this.books = []
        }
        addBook(book) {
          if (this.state > 30) {
            this.state.push(books);
          }
        }
        findBookBy(type, value) {
                let findBook = this.books.find(key => key.type === value);

                if(findBook) {
                        return findBook;
                } else {
                        return null;
        };
      };
    

        giveBookByName(bookName) {
                let item = this.books.findKey(key => key.name === bookName);

                if (key > -1 ) {
                        return this.books.splice(key, 1)[0];
                } else {
                        return null;
                };
          };
     };