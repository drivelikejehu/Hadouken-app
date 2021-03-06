module.exports = function (sequelize, DataTypes) {
    const CharacterCombo = sequelize.define(
      "CharacterCombo",
      {
        characterId: DataTypes.INTEGER,
        comboId: DataTypes.INTEGER,
      },
    );
    CharacterCombo.associate = function (models) {
      CharacterCombo.belongsTo(models.Character, {foreignKey: "characterId"});
      CharacterCombo.belongsTo(models.Combo, {foreignKey: "comboId"});
    };
    return CharacterCombo;
  };
  