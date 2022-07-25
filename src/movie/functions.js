const Movie = require("./model");

exports.createMovie = async (movieObj) => {
  try {
    const newMovie = await Movie.create(movieObj);
    console.log(newMovie);
  } catch (error) {
    console.log(error);
  }
};

exports.readMovie = async () => {
  try {
    const findMovie = await Movie.find();
    console.log(findMovie);
  } catch (error) {
    console.log(error);
  }
};

exports.updateMovie = async (movieObj) => {
  if (movieObj.title) {
    try {
      const changeMovie = await Movie.updateOne(
        { title: movieObj.title },
        { $set: { title: movieObj.newTitle } }
      );

      console.log(changeMovie);
    } catch (error) {
      console.log(error);
    }
  } else if (movieObj.actor) {
    try {
      const changeActor = await Movie.updateOne(
        { actor: movieObj.actor },
        { $set: { actor: movieObj.newActor } }
      );

      console.log(changeActor);
    } catch (error) {
      console.log(error);
    }
  }
};

exports.deleteMovie = async (movieObj) => {
  try {
    const removedMovie = await Movie.deleteOne(movieObj);
    console.log(removedMovie);
  } catch (error) {
    console.log(error);
  }
};

exports.filterMovie = async (movieObj) => {
  if (movieObj.title) {
    try {
      const foundMovieByTitle = await Movie.find({ title: movieObj.title });
      console.log(foundMovieByTitle);
    } catch (error) {
      console.log(error);
    }
  } else if (movieObj.actor) {
    try {
      const foundMovieByActor = await Movie.find({ actor: movieObj.actor });
      console.log(foundMovieByActor);
    } catch (error) {
      console.log(error);
    }
  } else if (movieObj.rating)
    try {
      const foundMovieByRating = await Movie.find({ rating: movieObj.rating });
      console.log(foundMovieByRating);
    } catch (error) {
      console.log(error);
    }
};
