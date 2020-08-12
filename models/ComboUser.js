module.exports = (sequelize, DataTypes) => {
  const ComboUser = sequelize.define("ComboUser", {
    comboId: DataTypes.INTEGER,
    user: DataTypes.INTEGER,
  });
  ComboUser.associate = function (models) {
    ComboUser.belongsTo(models.User, { foreignKey: "userId" });
    ComboUser.belongsTo(models.Combo, { foreignKey: "comboId" });
  };
  return ComboUser;
};
