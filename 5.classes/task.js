class PrintEditionItem {
        constructor(name, releaseDate, pagesCount, state = 100, type = null) {
               this.name = name;
               this.releaseDate = releaseDate;
               this.pagesCount = pagesCount;
               this.state = state;
               this.type = type;
        }
  
  fix() {
      this.state = state * 1.5; 
}
  
set state(number) {
        if (number < 0) {
                this.number === 0;
        } else if (number > 100) {
                this.number === 100;
        }
        else {
                this.number = number;
        }
}
  
  get state() {
        return this._state;
}

}

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