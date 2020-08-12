module.exports = function (sequelize, DataTypes) {
    const UserCharacter = sequelize.define(
      "UserCharacter",
      {
        characterId: DataTypes.INTEGER,
        UserId: DataTypes.INTEGER,
      },
    );
    UserCharacter.associate = function (models) {
      UserCharacter.belongsTo(models.Character, {foreignKey: "CharacterId"});
      UserCharacter.belongsTo(models.User, {foreignKey: "UserId"});
    };
    return UserCharacter;
  };
  