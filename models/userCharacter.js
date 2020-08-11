module.exports = function (sequelize, DataTypes) {
    const UserCharacter = sequelize.define(
      "UserCharacter",
      {
        characterId: DataTypes.INTEGER,
        USerId: DataTypes.INTEGER,
      },
    );
    UserCharacter.associate = function (models) {
      UserCharacter.belongsTo(models.Character, {foreignKey: "characterId"});
      UserCharacter.belongsTo(models.User, {foreignKey: "userId"});
    };
    return UserCharacter;
  };
  