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
      Combo.belongsTo(models.Character, {as: "ComboID"})
    };
    return Combo;
  };
  
  