var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test' , {
  useMongoClient: true,
});

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var itemSchema = mongoose.Schema({
  universityName: String,
  type: String,
  ranking: Number
});

var Item = mongoose.model('Item', itemSchema);

Item.create({universityName:'University of Jordan', type: 'governmental', ranking:'1548'})
Item.create({universityName:'Philadelphia', type: 'private', ranking:'4068'})
Item.create({universityName:'Al-Isra', type: 'private', ranking:'5216'})
Item.create({universityName:'Amman Arab', type: 'private', ranking:'5484'})
Item.create({universityName:'Arab Open', type: 'private', ranking:'5129'})
Item.create({universityName:'Middle East', type: 'private', ranking:'4124'})
Item.create({universityName:'Applied Science', type: 'private', ranking:'3951'})
Item.create({universityName:'Al-Zaytoonah', type: 'governmental', ranking:'3649'})
Item.create({universityName:'Jordan University of Science and Technology', type: 'governmental', ranking:'1466'})
Item.create({universityName:'Yarmouk University', type: 'governmental', ranking:'1548'})


var selectAll = function(key1, callback) {
  console.log(key1);
  Item.find({type: key1}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

module.exports.selectAll = selectAll;