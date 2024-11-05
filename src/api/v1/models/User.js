module.exports = (sequelize, DataTypes) => {

  const User = sequelize.define('user', {
    id: { type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
 primaryKey: true },
    name: DataTypes.STRING,
    email: { type: DataTypes.STRING, unique: true },
    password: DataTypes.STRING,
    isPremium: DataTypes.BOOLEAN,
    last_join: DataTypes.DATE,
  });

  return User;
}