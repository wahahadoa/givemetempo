
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Give me Tempo' })
};

exports.controll = function(req, res){
  res.render('controll', { title: 'Give me a tempo', key: req.params.key })
};