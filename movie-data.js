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

function objectMapping(movie, obj, appendDiv) {
  //creating elements we need
  const newCard = document.createElement("card");
  const newTitle = document.createElement("h1");
  const newSummary = document.createElement("p");
  const newCast = document.createElement("p");
  const newRuntime = document.createElement("p");
  const newRating = document.createElement("p");
  const newYear = document.createElement("p");
  const newEditButton = document.createElement("button");
  const newSeenButton = document.createElement("input");
  const newLabel = document.createElement("label");
  //putting in class and id fields
  
  //Class fields
  //
  //the card is getting the movie title as its id and not class because we select all other elements for removal when editing
  newCard.classList.add("card");

  const elementsArray = [newTitle, newSummary, newCast, newRuntime, newRating, newYear, newEditButton, newSeenButton, newLabel];

  for (const i in elementsArray){
      addingClass(elementsArray[i], movie.replace(/\s/g, ''))
  }

  // Adding id, name and for fields
  newCard.id = movie.replace(/\s/g, '');
  newTitle.id = "Title";
  newSummary.id = "plot";
  newCast.id = "cast";
  newRuntime.id = "runtime";
  newRating.id = "rating";
  newYear.id = "year";
  newEditButton.id = "edit" + movie;
  newEditButton.name = movie;
  newSeenButton.id = "seen" + movie;
  newSeenButton.name = movie;
  newSeenButton.type = "checkbox";
  newLabel.for = "seen" + movie;

  //adding onclick function to button and checkbox
  newEditButton.setAttribute("onclick","editButton(this)");
  newSeenButton.setAttribute("onclick", "isSeen(this)");

  //setting the content of the elements
  const title = movie;
  newTitle.innerHTML = title;
  newSummary.innerHTML = obj[movie].plot;
  newCast.innerHTML = obj[movie].cast;
  newRuntime.innerHTML = obj[movie].runtime;
  newRating.innerHTML = obj[movie].rating;
  newYear.innerHTML = obj[movie].year;
  newEditButton.innerHTML = "Edit";
  newLabel.innerHTML = "Seen";

  //appending elements to div
  for (const i in elementsArray){
    newCard.appendChild(elementsArray[i])
  }
  //appending to document
  const movieSection = document.getElementById("moviesection");
  const movies = document.getElementById(appendDiv);
  movieSection.insertBefore(newCard, movies);
}

for (movie in movieData){
  objectMapping(movie, movieData, "movies");
}

function addingClass(element, movie) {
  //adds the title of the movie to the classlist without spaces
  //called by objectMapping
  element.classList.add(movie.replace(/\s/g, ''))
}


function editButton(card) {
  //transforms to edit mode
  //called by clicking the edit button on a card
  const button = document.getElementById("edit" + card.name);
  const editCard = document.getElementById(button.classList);
  const oldElements = document.getElementsByClassName(editCard.id);
  //generate new input fields and submit button
  //I need to also add a cancel/back button
  const newForm = document.createElement("form"); 
  const submitButton = document.createElement("button");
  const cancelButton = document.createElement("button");

  for (let i = 0; i < 6; i++){
    inputNameArray = ["title", "plot", "cast", "runtime", "rating", "year"]
    if (inputNameArray[i] === "plot" ||  inputNameArray[i] === "cast"){
      newInput = document.createElement("textarea");
    } else {
      newInput = document.createElement("input");
    }
    label = document.createElement("label");
    br = document.createElement("br");
    label.for = inputNameArray[i];
    label.innerHTML = inputNameArray[i].charAt(0).toUpperCase() + inputNameArray[i].slice(1);
    newInput.value = oldElements[i].innerHTML;
    newInput.name = card.name;
    newInput.classList.add("input");
    newInput.id = inputNameArray[i];
    newForm.appendChild(label);
    newForm.appendChild(newInput);
    newForm.appendChild(br)
  }
  //remove old elements
  while (oldElements.length >0) oldElements[0].remove();
  //populate with data and append to card
  cancelButton.innerHTML = "Cancel";
  submitButton.innerHTML = "Submit";
  cancelButton.type = "cancel";
  submitButton.type = "submit";
  cancelButton.id = card.name;
  
  newForm.appendChild(submitButton);
  
  newForm.addEventListener("submit", handleSubmit);
  cancelButton.addEventListener("click", handleCancel);
  newForm.classList.add("form");

  editCard.appendChild(newForm);
  editCard.appendChild(cancelButton);
  
}

function handleSubmit(e) {
  e.preventDefault();
  const allInputs = e.target;
  const allInputsArray = []
  let filmTitle = ""
  for (let i = allInputs.length-1; i>= 0; i--){
    if (allInputs[i].classList == "input"){
      allInputsArray.push(allInputs[i].value)
      filmTitle = allInputs[i].name;
    }
  }
  let newKey = allInputsArray[5];
  
  //hacky fix for the function not working if you keep the title
  //the same. fix properly later.
  if (newKey === filmTitle && newKey.charAt(newKey.length-1) !== " "){
    newKey += " ";
  } else if (newKey.endsWith(" ")) {
    newKey = newKey.slice(0, -1);
  }
  //loop this
  movieData[filmTitle]["year"]= allInputsArray[0];
  movieData[filmTitle]["rating"]= allInputsArray[1];
  movieData[filmTitle]["runtime"]= allInputsArray[2];
  movieData[filmTitle]["cast"]= allInputsArray[3];
  movieData[filmTitle]["plot"]= allInputsArray[4];
  movieData[newKey] = movieData[filmTitle];
  delete movieData[filmTitle];

  
  appendCard = filmTitle.replace(/\s/g, '');

  removeCard = document.getElementById(filmTitle.replace(/\s/g, ''))

  let submitMovieDataObj = {};

  submitMovieDataObj[newKey] = movieData[newKey];
  
  for (newMovie in submitMovieDataObj){
    objectMapping(newMovie, submitMovieDataObj, appendCard);
  }
  // add a function to delete old elements
  removeCard.remove();
}

function handleCancel(e) {
  button = e.target;
  cancelAppend = button.id.replace(/\s/g, '');
  cancelCard = document.getElementById(button.id.replace(/\s/g, ''))
  let cancelMovieDataObj = {};
  cancelMovieDataObj[button.id] = movieData[button.id];
  console.log(cancelMovieDataObj);
  for (cancelMovie in cancelMovieDataObj){
    objectMapping(cancelMovie, cancelMovieDataObj, cancelAppend);
  }
  cancelCard.remove();
}

function isSeen(seenBox) {
  //function for changing the display when a film has been seen
  //called by clicking the "seen" checkbox on a card
  
  //identifies the correct checkbox by using the button's name field
  const seenButton = document.getElementById("seen" + seenBox.name);
  //identifies the corresponding card by using the checkbox's class field
  const seenCard = document.getElementById(seenButton.classList);
  //changes the background colour depending on whether the box is checked
  if (seenButton.checked == true){
    seenCard.style.backgroundColor = "var(--color2)";
  } else {
    seenCard.style.backgroundColor = "var(--color1)";
  }
}