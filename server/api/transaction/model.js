const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  amount: {
    type: String
  },
  source: {},
  currency: {
    type: String,
    default: 'usd'
  }
});

module.exports = mongoose.model('Transaction', TransactionSchema);
