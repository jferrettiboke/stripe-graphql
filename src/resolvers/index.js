const { Query } = require("./Query");
const { Customer } = require("./Customer");
const { ConnectedAccount } = require("./ConnectedAccount");
const { Card } = require("./Card");
const { BankAccount } = require("./BankAccount");

const resolvers = {
  Query,
  Customer,
  ConnectedAccount,
  Card,
  BankAccount
};

module.exports = { resolvers };
