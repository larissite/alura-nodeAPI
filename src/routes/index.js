import express from "express";
import livros from "./livrosRoute.js";
import autores from "./autoresRoute.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send({ titulo: "Curso de Node.js" });
  });

  app.use(express.json(), livros, autores);
};

export default routes;
