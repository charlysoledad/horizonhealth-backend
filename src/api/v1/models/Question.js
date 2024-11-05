module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('question',{})

  return Question;
}