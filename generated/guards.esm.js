
var Amount_possibleTypes = ['Amount']
export var isAmount = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAmount"')
  return Amount_possibleTypes.includes(obj.__typename)
}



var AmountInterface_possibleTypes = ['BalanceFund','BalanceTransaction','Charge','Plan']
export var isAmountInterface = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAmountInterface"')
  return AmountInterface_possibleTypes.includes(obj.__typename)
}



var Balance_possibleTypes = ['Balance']
export var isBalance = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isBalance"')
  return Balance_possibleTypes.includes(obj.__typename)
}



var BalanceFund_possibleTypes = ['BalanceFund']
export var isBalanceFund = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isBalanceFund"')
  return BalanceFund_possibleTypes.includes(obj.__typename)
}



var BalanceFundSourceTypes_possibleTypes = ['BalanceFundSourceTypes']
export var isBalanceFundSourceTypes = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isBalanceFundSourceTypes"')
  return BalanceFundSourceTypes_possibleTypes.includes(obj.__typename)
}



var BalanceTransaction_possibleTypes = ['BalanceTransaction']
export var isBalanceTransaction = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isBalanceTransaction"')
  return BalanceTransaction_possibleTypes.includes(obj.__typename)
}



var BankAccount_possibleTypes = ['BankAccount']
export var isBankAccount = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isBankAccount"')
  return BankAccount_possibleTypes.includes(obj.__typename)
}



var Card_possibleTypes = ['Card']
export var isCard = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCard"')
  return Card_possibleTypes.includes(obj.__typename)
}



var Charge_possibleTypes = ['Charge']
export var isCharge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCharge"')
  return Charge_possibleTypes.includes(obj.__typename)
}



var Currency_possibleTypes = ['Currency']
export var isCurrency = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCurrency"')
  return Currency_possibleTypes.includes(obj.__typename)
}



var CurrencyInterface_possibleTypes = ['BalanceFund','BalanceTransaction','BankAccount','Charge','Plan']
export var isCurrencyInterface = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCurrencyInterface"')
  return CurrencyInterface_possibleTypes.includes(obj.__typename)
}



var Customer_possibleTypes = ['Customer']
export var isCustomer = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCustomer"')
  return Customer_possibleTypes.includes(obj.__typename)
}



var Good_possibleTypes = ['Good']
export var isGood = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isGood"')
  return Good_possibleTypes.includes(obj.__typename)
}



var Metadata_possibleTypes = ['Metadata']
export var isMetadata = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMetadata"')
  return Metadata_possibleTypes.includes(obj.__typename)
}



var MetadataInterface_possibleTypes = ['BankAccount','Card','Customer','Plan']
export var isMetadataInterface = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMetadataInterface"')
  return MetadataInterface_possibleTypes.includes(obj.__typename)
}



var NodeInterface_possibleTypes = ['BalanceTransaction','BankAccount','Card','Charge','Customer','Good','Plan','Service']
export var isNodeInterface = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isNodeInterface"')
  return NodeInterface_possibleTypes.includes(obj.__typename)
}



var PackageDimensions_possibleTypes = ['PackageDimensions']
export var isPackageDimensions = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPackageDimensions"')
  return PackageDimensions_possibleTypes.includes(obj.__typename)
}



var Plan_possibleTypes = ['Plan']
export var isPlan = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPlan"')
  return Plan_possibleTypes.includes(obj.__typename)
}



var ProductInterface_possibleTypes = ['Good','Service']
export var isProductInterface = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isProductInterface"')
  return ProductInterface_possibleTypes.includes(obj.__typename)
}



var Query_possibleTypes = ['Query']
export var isQuery = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isQuery"')
  return Query_possibleTypes.includes(obj.__typename)
}



var Service_possibleTypes = ['Service']
export var isService = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isService"')
  return Service_possibleTypes.includes(obj.__typename)
}



var Tier_possibleTypes = ['Tier']
export var isTier = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTier"')
  return Tier_possibleTypes.includes(obj.__typename)
}



var TransformUsage_possibleTypes = ['TransformUsage']
export var isTransformUsage = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTransformUsage"')
  return TransformUsage_possibleTypes.includes(obj.__typename)
}
