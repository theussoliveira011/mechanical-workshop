const criarService = (sequelize, dataTypes) => {

  let columns = {
    
    id:{
      type: dataTypes.INTEGER,
      autoIncrement: true,
    },

    name:{
      type: dataTypes.STRING,
      allowNull: false,
    },

    email:{
      type: dataTypes.STRING,
      allowNull: false
    },
    
    dateCreate:{
      type: dataTypes.DATE
    }
  }

  let config = {
    tableName: 'services',
    timestamps: false
  }

  const Service = sequelize.define('services', columns, config);

  return Service;
};
module.exports = criarService;