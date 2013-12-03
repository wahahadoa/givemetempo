
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Tempo Test' })
};

exports.controll = function(req, res){
  res.render('controll', { title: 'Give me a tempo' })
};