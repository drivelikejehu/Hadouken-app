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
    Character.hasMany(models.Combo);
    Character.belongsTo(models.Game);
  };

  return Character;
};


