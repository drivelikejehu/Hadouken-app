module.exports = (sequelize, DataTypes) => {
  const Character = sequelize.define("Character", {
    characterName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    charURL: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    charType: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
  Character.associate = (models) => {
    Character.belongsToMany(models.Combo, {
      through: "characterCombo",
      foreignKey: "characterId"
    });
    Character.belongsTo(models.Game);
    Character.belongsToMany(models.User, 
      {
        through: "userCharacter",
        foreignKey: "userId"
    });
  };

  return Character;
};


