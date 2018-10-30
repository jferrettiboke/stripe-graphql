const { Query } = require("./Query");
const { Platform } = require("./Platform");
const { Customer } = require("./Customer");
const { ConnectedAccount } = require("./ConnectedAccount");
const { Card } = require("./Card");
const { BankAccount } = require("./BankAccount");

const resolvers = {
  Query,
  Platform,
  Customer,
  ConnectedAccount,
  Card,
  BankAccount
};

module.exports = { resolvers };
