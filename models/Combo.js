module.exports = (sequelize, DataTypes) => {
    const Combo = sequelize.define("Combo", {
      comboName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      comboString: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    });
    Combo.associate = (models) => {
      Combo.belongsToMany(models.User, {
          through: "ComboUser",
          foreignKey: "UserId"
      });
      Combo.belongsToMany(models.Character, 
        {through: "characterCombo",
      foreignKey: "characterId"})
    };
    return Combo;
  };
  
  