import firebase, { db } from "./firebase";

const escapeHTML = function (unsafe) {
  return unsafe.replace(/[&<"']/g, function (m) {
    switch (m) {
      case "&":
        return "&amp;";
      case "<":
        return "&lt;";
      case '"':
        return "&quot;";
      default:
        return "&#039;";
    }
  });
};

export const addScore = (name, score) => {
  db.collection("scores")
    .add({
      date: Date.now(),
      name: escapeHTML(name),
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
  const d = new Date();
  db.collection("scores")
    .where("date", ">", d.setDate(d.getDate() - 1))
    .orderBy("date", "desc")
    .orderBy("score", "desc")
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
          document.createTextNode(
            new String(doc.data()["score"]).substring(0, 10)
          )
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

export const getLastAll5Scores = () => {
  db.collection("scores")
    .orderBy("score", "desc")
    .orderBy("date", "desc")
    .limit(5)
    .get()
    .then((querySnapshot) => {
      const ul = document.getElementById("last5all");
      querySnapshot.forEach((doc) => {
        const li = document.createElement("li");

        const span1 = document.createElement("span");
        span1.setAttribute("class", "user");
        span1.appendChild(document.createTextNode(doc.data()["name"]));

        const span2 = document.createElement("span");
        span2.setAttribute("class", "result");
        span2.appendChild(
          document.createTextNode(
            new String(doc.data()["score"]).substring(0, 10)
          )
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

export const addNewRecord = (key) => {
  const increment = firebase.firestore.FieldValue.increment(1);
  const recordsRef = db.collection("records").doc(key);
  recordsRef.update({ cnt: increment });
};

export const getRecords = () => {
  return db.collection("records").orderBy("id", "asc").get();
};
