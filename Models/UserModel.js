const dynamoose = require('dynamoose');

const schema = new dynamoose.Schema(
  {
    id: {
      type: String,
      hashKey: true,
    },
    name: String,
    age: Number,
  },
  {
    timestamps: true,
  }
);

const UsersModel = dynamoose.model('userstable', schema, {
  create: true,
  throughput: {
    read: 5,
    write: 5,
  },
});
module.exports = { UsersModel };
