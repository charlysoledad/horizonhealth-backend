module.exports = (sequelize, DataTypes) => {
  const Test = sequelize.define('test',{})

  return Test;
}