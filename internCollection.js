const internsCollection = db => {
  return db.collection("interns", () =>
    console.log("Interns Collection created")
  );
};

module.exports = internsCollection;
