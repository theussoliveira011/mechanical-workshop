const { Service } = require('../database/models/');
const { Op } = require('sequelize');

const ServiceController = {
  
  indexService: async (req, res) => {
    let { search } = req.query;

    let services = await Service.findAll({
      where: search ? {nome: {[Op.like]: `%${search}%`}} : null
    });
    
    res.render('services', {
      title: 'Services',
      services
    });
  },

  formService: async (req, res) => {
    let service;
    
    let { id } = req.params;

    if (id) service = await Service.findByPk(id);

    res.render('adicionar-service', { service });

  },

  createService: async (req, res) => {
    const { nome, price } = req.body;

    await Service.create({ nome, price });

    res.redirect('/services');
  },

  editService: async (req, res) => {
    let { id } = req.params;

    let { nome, price } = req.body;

    Service.update({ nome, price }, {
      where: { id }
    });

    res.redirect('/services');
  },
  
  deleteService: async (req, res) => {
    let { id } = req.params;

    await Service.destroy( 
      {
        where: { id }
      });
    res.redirect('/services');
  }
};

module.exports = ServiceController;