const criarService = (sequelize, dataTypes) => {

  let columns = {
    
    id:{
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },

    nome:{
      type: dataTypes.STRING,
      allowNull: false,
    },

    price:{
      type: dataTypes.DOUBLE,
      allowNull: false
    }
  }

  let config = {
    tableName: 'services',
    timestamps: false
  }

  const Service = sequelize.define('Service', columns, config);

  return Service;
};
module.exports = criarService;