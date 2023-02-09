const ServiceController = {
  
  index: (req, res)=> {
    res.render('services', {title: 'Services'});
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