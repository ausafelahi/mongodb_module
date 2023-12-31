const express = require("express");
const Tests = require("./models/Todo.model");
const dbConnection = require("./config/db_Config");
const app = express();
app.use(express.json());

dbConnection();
// const uri =
//   "mongodb+srv://ausafelahi8:MKdfvtrhRoOhNgWU@cluster0.myifcln.mongodb.net/?retryWrites=true&w=majority";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log(
//       "Pinged your deployment. You successfully connected to MongoDB!"
//     );
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

// get todos

app.get("/allTodo", async (req, res) => {
  const allTodos = await Tests.find({});
  res.json({
    data: allTodos,
  });
});

// post todos
app.post("/createTodo", async (req, res) => {
  const { todo } = req.body;
  console.log(req.body);
  const createTodo = await Tests.create({
    todoInput: todo,
  });
  res.json({
    data: createTodo,
  });
});

app.listen(4000);
