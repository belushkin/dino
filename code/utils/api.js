import { db } from "./firebase";

export const addScore = (name, score) => {
  db.collection("scores")
    .add({
      date: Date.now(),
      name: name,
      score: score,
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
};

export const getLast5Scores = () => {
  db.collection("scores")
    .orderBy("date", "desc")
    .limit(5)
    .get()
    .then((querySnapshot) => {
      const ul = document.getElementById("last5");
      querySnapshot.forEach((doc) => {
        const li = document.createElement("li");

        const span1 = document.createElement("span");
        span1.setAttribute("class", "user");
        span1.appendChild(document.createTextNode(doc.data()["name"]));

        const span2 = document.createElement("span");
        span2.setAttribute("class", "result");
        span2.appendChild(
          document.createTextNode(new String(doc.data()["score"]).substring(0, 10))
        );

        li.appendChild(span1);
        li.appendChild(span2);

        ul.appendChild(li);
      });
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });
};
