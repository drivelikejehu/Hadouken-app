module.exports = (sequelize, DataTypes) => {
  const ComboUser = sequelize.define("ComboUser", {
    ComboId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
  });
  ComboUser.associate = function (models) {
    ComboUser.belongsTo(models.User, { foreignKey: "UserId" });
    ComboUser.belongsTo(models.Combo, { foreignKey: "ComboId" });
  };
  return ComboUser;
};
