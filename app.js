let movies = [
  {
    title: "Incredibles 2",
    rating: 4.7,
    hasWatched: true
  },

  {
    title: "Robin Hood",
    rating: 4.0,
    hasWatched: true
  },

  {
    title: "Mad Max Fury Road",
    rating: 5,
    hasWatched: true
  },

  {
    title: "Les Miserables",
    rating: 3.5,
    hasWatched: false
  }
]

//*** My solution ***

// for (var i = 0; i < movies.length; i++) {
//   if (movies[i].hasWatched === true) {
//     console.log("You have watched " + "\"" + movies[i].title + "\" - " + movies[i].rating.toFixed(1));
//   } else {
//     console.log("You have not seen " + "\"" + movies[i].title + "\" - " + movies[i].rating.toFixed(1));
//   }
// }


//*** His solution ***

function buildString(movie) {
  let result = "You have ";
  if (movie.hasWatched) {
    result += "watched ";
  } else {
    result += "not seen ";
  }
  result += "\"" + movie.title + "\" - ";
  result += movie.rating.toFixed(1);
  return result;
}

movies.forEach(function(movie) {
  console.log(buildString(movie));
})
