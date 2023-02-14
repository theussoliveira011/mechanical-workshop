const { User } = require('../database/models');
const { Op } = require('sequelize');

const UsersControllers = {
  indexUser: async (req, res) => {
    let { search } = req.query;

    let users = await User.findAll({
      where: search ? {nome:{[Op.like]: `%${search}%`}} : null
    });

    res.render('users', { users });
  },

  formUser: async (req, res) => {
    let user;

    let { id } = req.params;

    if (id) user = await User.findByPk(id);

    res.render('adicionar-user', {user});
  },

  createUser: async (req, res) => {
    let { nome, email, senha } = req.body;
    
    await User.create({nome, email, senha});

    res.redirect('/users');
  },

  editUser: async (req, res) => {
    let { id } = req.params;

    let { nome, email, senha } = req.body;

    await User.update(
      { nome, email, senha },
      { where: { id } }
      );

    res.redirect('/users');
  },

  deleteUser: async (req, res) => {
    let { id } = req.params;

    await User.destroy({where: { id }});

    res.redirect('/users');
  }
};

module.exports = UsersControllers;