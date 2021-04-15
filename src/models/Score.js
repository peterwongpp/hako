// ref: https://googleapis.dev/nodejs/firestore/latest/index.html

const {Firestore} = require('@google-cloud/firestore');

const firestore = new Firestore();

class Score {
  static async findAll() {
    const querySnapshot = await Score.collection.get();
    return querySnapshot.docs;
  }

  static async create(params) {
    const docRef = Score.collection.doc();
    await docRef.create(params);
    return docRef.get();
  }
}

Score.kind = 'Score';
Score.collection = firestore.collection(Score.kind);

export default Score;
