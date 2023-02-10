const IndexController = {
  index: function(req, res, next) {
    res.render('index', { 
      title: 'Oficina',
      css1: '/stylesheets/style.css' 
    });
  }
};

module.exports = IndexController;