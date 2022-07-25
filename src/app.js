require("./db/connection");
const yargs = require("yargs");
const mongoose = require("mongoose");
const {
  createMovie,
  readMovie,
  deleteMovie,
  updateMovie,
  filterMovie,
} = require("./movie/functions");

const app = async (yargsObj) => {
  if (yargsObj.create) {
    console.log("C");
    await createMovie({
      title: yargsObj.title,
      actor: yargsObj.actor,
      rating: yargsObj.rating,
    });
    //add movie to DB
  } else if (yargsObj.read) {
    console.log("R");
    await readMovie();
    //list all movies from DB
  } else if (yargsObj.update) {
    console.log("U");
    await updateMovie({
      title: yargsObj.title,
      newTitle: yargsObj.newTitle,
      actor: yargsObj.actor,
      newActor: yargsObj.newActor,
    });
    //update one movie from DB
  } else if (yargsObj.delete) {
    console.log("D");
    await deleteMovie({ title: yargsObj.title });
    //delete one movie from DB
  } else if (yargsObj.filter) {
    console.log("F");
    await filterMovie({
      title: yargsObj.title,
      actor: yargsObj.actor,
      rating: yargsObj.rating,
    });
  } else {
    console.log("Incorrect command");
  }
  await mongoose.disconnect();
};

app(yargs.argv);
