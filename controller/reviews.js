let Player = require("../model/player");

function create(req, res) {
  Player.findById(req.params.id, function (err, player) {
    player.reviews.push(req.body);
    player.save();
    res.redirect(`/players/${player.id}`);
  });
}

module.exports = {
  create,
};
