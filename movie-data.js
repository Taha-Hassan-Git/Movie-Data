let movieData = {
    "The Darjeeling Limited": {
      plot: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
      cast: ["Jason Schwartzman", "Owen Wilson", "Adrien Brody"],
      runtime: 151,
      rating: 7.2,
      year: 2007,
    },
    "The Royal Tenenbaums": {
      plot: "The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons",
      rating: 7.6,
      year: 2001,
      cast: ["Gene Hackman", "Gwnyeth Paltrow", "Anjelica Huston"],
      runtime: 170,
    },
    "Fantastic Mr. Fox": {
      year: 2009,
      plot: "An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation.",
      cast: [
        "George Clooney",
        "Meryl Streep",
        "Bill Murray",
        "Jason Schwartzman",
      ],
      runtime: 147,
      rating: 7.9,
    },
    "The Grand Budapest Hotel": {
      rating: 8.1,
      runtime: 159,
      year: 2014,
      plot: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
      cast: ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric"],
    },
  };

function objectMapping() {
  for (const movie in movieData){
    //creating elements we need
    const newCard = document.createElement("card");
    const newTitle = document.createElement("h1");
    const newSummary = document.createElement("p");
    const newCast = document.createElement("p");
    const newRuntime = document.createElement("p");
    const newRating = document.createElement("p");
    const newYear = document.createElement("p");
    const newButton = document.createElement("button");
    //putting in class and id fields
    //Class fields
    const elementsArray = [newTitle, newSummary, newCast, newRuntime, newRating, newYear, newButton];
    newCard.classList.add("card");
    for (const i in elementsArray){
      addingClass(elementsArray[i], movie)
    }
    //id fields
    //the card is getting the movie title as its id because it's not accepting it as a class for some reason.
    newCard.id = movie.replace(/\s/g, '')
    newTitle.id = "Title";
    newSummary.id = "plot";
    newCast.id = "cast";
    newRuntime.id = "runtime";
    newRating.id = "rating";
    newYear.id = "year";
    newButton.id = "edit";
    newButton.name = movie;
    //adds onclick function to button
    newButton.setAttribute("onclick","editButton(this)");
    //setting the content of the elements
    const title = movie;
    newTitle.innerHTML = title;
    newSummary.innerHTML = movieData[movie].plot;
    newCast.innerHTML = movieData[movie].cast;
    newRuntime.innerHTML = movieData[movie].runtime;
    newRating.innerHTML = movieData[movie].rating;
    newYear.innerHTML = movieData[movie].year;
    newButton.innerHTML = "Edit";
    //appending elements to div
    for (const i in elementsArray){
      newCard.appendChild(elementsArray[i])
    }
    //appending to document
    const movieSection = document.getElementById("moviesection");
    const movies = document.getElementById("movies");
    movieSection.insertBefore(newCard, movies);
  }
}
objectMapping();

function addingClass(element, movie) {
  //adds the title of the movie to the classlist without spaces
  element.classList.add(movie.replace(/\s/g, ''))
}

function editButton(card) {
  //transforms to edit mode
  console.log(card.name)
}