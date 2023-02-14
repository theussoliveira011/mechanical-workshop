const criarUserModel = ( sequelize, dataTypes ) => {

  const columns = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },

    nome: {
      type: dataTypes.STRING,
      allowNull: false
    },

    email: {
      type: dataTypes.STRING,
      allowNull: false
    },

    senha: {
      type: dataTypes.STRING,
      allowNull: false
    }
  };

  const options = {
    tableName: 'users',
    timestamps: false
  }


  const User = sequelize.define('User', columns, options);
  return User;
};

module.exports = criarUserModel;