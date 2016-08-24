var mongoose = require('mongoose'),
    crypto = require('crypto');

module.exports = function(){
  mongoose.connect('mongodb://localhost:27017/meandemo');
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error...'));
  db.once('open', function callback(){
    console.log('Mongo open...');
  });

  var userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    username: String,
    salt: String,
    hashed: String,
    roles: [String]
  });

  userSchema.methods = {
    authenticate: function(passwordMatch){
      return hashPwd(this.salt, passwordMatch) === this.hashed;
    }
  }

  var User = mongoose.model('User', userSchema);

  User.find({}).exec(function(err, collection){
    if(collection.length === 0){
      var salt, hash;
      salt = createSalt();
      hash = hashPwd(salt, 'yash');
      User.create({firstName: 'Yash', lastName: 'Thakkar', username: 'yash', salt: salt, hashed: hash, roles:['admin']});
      salt = createSalt();
      hash = hashPwd(salt, 'dhruv');
      User.create({firstName: 'Dhruv', lastName: 'Thakkar', username: 'dhruv', salt: salt, hashed: hash, roles:[]}); 
      salt = createSalt();
      hash = hashPwd(salt, 'savan');
      User.create({firstName: 'savan', lastName: 'Thakkar', username: 'savan', salt: salt, hashed: hash});
    }
  })
}

function createSalt(){
  return crypto.randomBytes(128).toString('base64');
}

function hashPwd(salt, pwd){
  var hmac = crypto.createHmac('sha1', salt);
  hmac.setEncoding('hex');
  hmac.write(pwd);
  hmac.end();
  return hmac.read();
  // return hmac.update(pwd).digest('hex');
}
