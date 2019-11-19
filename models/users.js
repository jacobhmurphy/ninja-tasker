// creating a model for our tasks

// exporting model to our index

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("Users", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return User;
};
