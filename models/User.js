module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define("User", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      // validate: { is: /^[a-zA-Z]{2,13}$/}
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      // validate: { is: /^[a-zA-Z]{2,13}$/}
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: { isEmail: true },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      // validate: { is: /^(?=.*[0-9])(?=.*[a-zA-Z])^(?!.*').{6,}$/g },
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      // validate: { is: /^[a-z0-9_-]{3,15}$/ },
    },
    birthday: {
        type: DataTypes.DATE,
        allowNull: true,       
    },
    picURL:{
        type: DataTypes.STRING,
        allowNull: true
    },
  });
  User.associate = (models) => {
    User.belongsToMany(models.Combo, 
      {
        through: "ComboUser",
        foreignKey: "userId"
      });
    User.belongsToMany(models.Character,  {
      through: "userCharacter",
      foreignKey: "userId"
  })
  };
  return User;
};

