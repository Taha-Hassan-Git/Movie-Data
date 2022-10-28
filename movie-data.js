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
    const newCard = document.createElement("div");
    const newTitle = document.createElement("h1");
    const newSummary = document.createElement("p");
    const newCast = document.createElement("p");
    const newRuntime = document.createElement("p");
    const newRating = document.createElement("p");
    const newYear = document.createElement("p");
    //setting the content of the elements
    const title = movie
    
    newTitle.innerHTML = title;
    newSummary.innerHTML = movieData[movie].plot;
    newCast.innerHTML = movieData[movie].cast;
    newRuntime.innerHTML = movieData[movie].runtime;
    newRating.innerHTML = movieData[movie].rating;
    newYear.innerHTML = movieData[movie].year;
    //putting in class and id fields
    newCard.classList.add("card");
    //appending elements to div
    newCard.appendChild(newTitle);
    newCard.appendChild(newSummary);
    newCard.appendChild(newCast);
    newCard.appendChild(newRuntime);
    newCard.appendChild(newRating);
    newCard.appendChild(newYear);
    //appending to document
    const movieSection = document.getElementById("moviesection");
    const movies = document.getElementById("movies");
    movieSection.insertBefore(newCard, movies);
  }
}
objectMapping();