import Score from 'models/Score';

export default async (req, res) => {
  const score = await Score.create({
    yo: 123,
  });
  console.log('score:', score);
  const scores = await Score.findAll();
  console.log('scores:', scores);
  res.status(200).json({ scores });
};
