const IndexController = {
  index: function(req, res, next) {
    res.render('index', { title: 'Oficina' });
  }
};

module.exports = IndexController;