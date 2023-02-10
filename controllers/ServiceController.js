const Service = require('../database/models/Service');

const ServiceController = {
  
  index: async (req, res)=> {
    const services =  await Service.findAll();

    res.render('services', {
      title: 'Services',
      css1: '/stylesheets/style.css'
    });
  },

  createService:  (req, res) => {
    res.send("Voce criou um usuário");
  },
  
  deleteService: (req, res) => {
    let { id } = req.params;

    res.send(`Você deletou o id: ${id}`);
  }
};

module.exports = ServiceController;