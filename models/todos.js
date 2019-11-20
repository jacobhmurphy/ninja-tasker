// creating a model for our tasks

// exporting model to our index

module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define("Tasks", {
    // defines columns of our table
    taskItem: { type: DataTypes.STRING },
    userID: { type: DataTypes.INTEGER, allowNull: false }
  });
  return Task;
};
