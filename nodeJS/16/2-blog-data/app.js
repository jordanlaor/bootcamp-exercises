const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "blog-bootcamp-exercise";

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log("Unable to connect to database!");
  }

  const db = client.db(databaseName);

  const idUser1 = new ObjectID();
  const idUser2 = new ObjectID();
  const idPost1 = new ObjectID();
  const idPost2 = new ObjectID();
  const idPost3 = new ObjectID();
  const idComment1 = new ObjectID();
  const idComment2 = new ObjectID();
  const idComment3 = new ObjectID();
  const idComment4 = new ObjectID();

  db.collection("users").insertMany(
    [
      {
        _id: idUser1,
        email: "joe@me.com",
        comments: [
          { $ref: "comments", $id: idComment1 },
          { $ref: "comments", $id: idComment2 },
          { $ref: "comments", $id: idComment3 },
        ],
        posts: [{ $ref: "posts", $id: idPost3 }],
      },
      {
        _id: idUser2,
        email: "mike@mail.com",
        comments: [{ $ref: "comments", $id: idComment4 }],
        posts: [
          { $ref: "posts", $id: idPost1 },
          { $ref: "posts", $id: idPost2 },
        ],
      },
    ],
    (error, result) => {
      if (error) {
        return console.log("Unable to insert tasks!");
      }

      console.log(result.ops);
    }
  );

  db.collection("posts").insertMany(
    [
      {
        _id: idPost1,
        title: "Why me?",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id.",
        user: { $ref: "users", $id: idUser2 },
        comments: [
          { $ref: "comments", $id: idComment1 },
          { $ref: "comments", $id: idComment4 },
        ],
      },
      {
        _id: idPost2,
        title: "Why not?",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet dui sed egestas.",
        user: { $ref: "users", $id: idUser2 },
        comments: [{ $ref: "comments", $id: idComment3 }],
      },
      {
        _id: idPost3,
        title: "Why not?",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt turpis vitae.",
        user: { $ref: "users", $id: idUser1 },
        comments: [{ $ref: "comments", $id: idComment2 }],
      },
    ],
    (error, result) => {
      if (error) {
        return console.log("Unable to insert tasks!");
      }

      console.log(result.ops);
    }
  );

  db.collection("comments").insertMany([
    {
      _id: idComment1,
      title: "that's wrong",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae scelerisque nibh, quis mollis velit. Cras nibh.",
      user: { $ref: "users", $id: idUser1 },
      post: { $ref: "posts", $id: idPost1 },
    },
    {
      _id: idComment2,
      title: "no way!",
      content: "",
      user: { $ref: "users", $id: idUser1 },
      post: { $ref: "posts", $id: idPost3 },
    },
    {
      _id: idComment3,
      title: "That is so true!!!",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin hendrerit turpis at dolor varius maximus. Integer quis nisl augue. Proin.",
      user: { $ref: "users", $id: idUser1 },
      post: { $ref: "posts", $id: idPost2 },
    },
    {
      _id: idComment4,
      title: "What ever...",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris.",
      user: { $ref: "users", $id: idUser2 },
      post: { $ref: "posts", $id: idPost1 },
    },
  ]);
});
