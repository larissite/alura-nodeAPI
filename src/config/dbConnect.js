import mongoose from "mongoose";

mongoose.connect("mongodb+srv://larissite:81127228@cluster0.cialy.mongodb.net/alura-node");

let db = mongoose.connection

export default db;