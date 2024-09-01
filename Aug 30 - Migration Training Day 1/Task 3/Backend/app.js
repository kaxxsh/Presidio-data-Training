import Express from "express";
import cors from "cors";
import dbconnection from "./Connection/dbConnection.js";
import TodoRoute from "./Routers/TodoRouter.js";

const app = Express();

app.use(cors()); 
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
app.use("/api", TodoRoute);

const connect = async () => {
  try {
    dbconnection(
      "mongodb+srv://1234:1234@atlascluster.v7az4yg.mongodb.net/TodoApplicationPresidio?retryWrites=true&w=majority"
    );
    app.listen(3000, () => console.log(`Listening at 3000`));
  } catch (error) {
    console.log(error);
  }
};

connect();
