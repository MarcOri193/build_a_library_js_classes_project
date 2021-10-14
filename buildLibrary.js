// parent class //

class Media {
  constructor(title){
    this._title = title;  // shared property with no default value
    this._isCheckedOut = false; // shared property with 'false' as default value
    this._ratings = [ ]; // shared property with an empty array as default value
  }

  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }

  set isCheckedOut(newCheckOut) {
    this._isCheckOut = newCheckOut;
  }
  // getter and setter shared methods


  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  } // the value comes TRUE (not false) WHEN isCheckedOut has TOGGLED

  getAverageRating() {
    let ratingSum =
    this.ratings.reduce((accumulator, rating) => accumulator + rating);
    return ratingSum / this.ratings.length;
  } // to have average value: SUM / LENGTH

  addRating(value) {
    this.ratings.push(value);
  }
  // shared methods
}


// first child class //

class Book extends Media {
  constructor( title, author, pages ) {
  super(title);
  this._author = author;
  this._pages = pages;
  }

  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }
}


// second child class //

class Movie extends Media {
  constructor( title, director, runTime) {
  super(title);
  this._director = director;
  this._runTime = runTime;
  }

  get director() {
    return this._director;
  }

  get runTime() {
    return this._runTime;
  }
}


// first child class instance //

const historyOfEverything = new Book ('A short History of Nearly Everything', 'Bill Brynson', 544);

historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut); // checking if this shared method works

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating()); // checking if this shared method works


console.log('-----------------------------------------------------')


// second child class instance //

const speed = new Movie ('Speed', 'Jan de Bont', 116);

speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut); // checking if this shared method works

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating()); // checking if this shared method works
