export default {
  "__schema": {
    "types": [
      {
        "name": "Query",
        "kind": "OBJECT",
        "fields": [
          {
            "name": "platform",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Account",
                "ofType": null
              }
            }
          },
          {
            "name": "accounts",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Account",
                    "ofType": null
                  }
                }
              }
            }
          },
          {
            "name": "account",
            "type": {
              "name": "Account",
              "kind": "OBJECT",
              "ofType": null
            }
          },
          {
            "name": "charges",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Charge",
                    "ofType": null
                  }
                }
              }
            }
          },
          {
            "name": "charge",
            "type": {
              "name": "Charge",
              "kind": "OBJECT",
              "ofType": null
            }
          },
          {
            "name": "countrySpecs",
            "type": {
              "name": "CountrySpec",
              "kind": "OBJECT",
              "ofType": null
            }
          },
          {
            "name": "customers",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Customer",
                    "ofType": null
                  }
                }
              }
            }
          },
          {
            "name": "customer",
            "type": {
              "name": "Customer",
              "kind": "OBJECT",
              "ofType": null
            }
          },
          {
            "name": "invoices",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Invoice",
                    "ofType": null
                  }
                }
              }
            }
          },
          {
            "name": "invoice",
            "type": {
              "name": "Invoice",
              "kind": "OBJECT",
              "ofType": null
            }
          },
          {
            "name": "upcomingInvoice",
            "type": {
              "name": "Invoice",
              "kind": "OBJECT",
              "ofType": null
            }
          },
          {
            "name": "plans",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Plan",
                    "ofType": null
                  }
                }
              }
            }
          },
          {
            "name": "plan",
            "type": {
              "name": "Plan",
              "kind": "OBJECT",
              "ofType": null
            }
          },
          {
            "name": "products",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Product",
                    "ofType": null
                  }
                }
              }
            }
          },
          {
            "name": "product",
            "type": {
              "name": "Product",
              "kind": "OBJECT",
              "ofType": null
            }
          },
          {
            "name": "subscriptions",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "_Subscription",
                    "ofType": null
                  }
                }
              }
            }
          },
          {
            "name": "subscription",
            "type": {
              "name": "_Subscription",
              "kind": "OBJECT",
              "ofType": null
            }
          }
        ]
      },
      {
        "name": "Account",
        "kind": "OBJECT",
        "fields": [
          {
            "name": "id",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            }
          },
          {
            "name": "object",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "country",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "legal_entity",
            "type": {
              "name": "LegalEntity",
              "kind": "OBJECT",
              "ofType": null
            }
          },
          {
            "name": "verification",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "AccountVerification",
                "ofType": null
              }
            }
          },
          {
            "name": "balance",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Balance",
                "ofType": null
              }
            }
          },
          {
            "name": "balanceTransactions",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "BalanceTransaction",
                    "ofType": null
                  }
                }
              }
            }
          },
          {
            "name": "bankAccounts",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "BankAccount",
                    "ofType": null
                  }
                }
              }
            }
          },
          {
            "name": "cards",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Card",
                    "ofType": null
                  }
                }
              }
            }
          }
        ]
      },
      {
        "name": "Node",
        "kind": "INTERFACE",
        "fields": [
          {
            "name": "id",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            }
          },
          {
            "name": "object",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "name": "ID",
        "kind": "SCALAR",
        "fields": null
      },
      {
        "name": "String",
        "kind": "SCALAR",
        "fields": null
      },
      {
        "name": "LegalEntity",
        "kind": "OBJECT",
        "fields": [
          {
            "name": "type",
            "type": {
              "name": "LEGAL_ENTITY_TYPE",
              "kind": "ENUM",
              "ofType": null
            }
          },
          {
            "name": "additional_owners",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "AdditionalOwner",
                    "ofType": null
                  }
                }
              }
            }
          },
          {
            "name": "address",
            "type": {
              "name": "Address",
              "kind": "OBJECT",
              "ofType": null
            }
          },
          {
            "name": "dob",
            "type": {
              "name": "Dob",
              "kind": "OBJECT",
              "ofType": null
            }
          },
          {
            "name": "first_name",
            "type": {
              "name": "String",
              "kind": "SCALAR",
              "ofType": null
            }
          },
          {
            "name": "last_name",
            "type": {
              "name": "String",
              "kind": "SCALAR",
              "ofType": null
            }
          },
          {
            "name": "maiden_name",
            "type": {
              "name": "String",
              "kind": "SCALAR",
              "ofType": null
            }
          },
          {
            "name": "personal_address",
            "type": {
              "name": "Address",
              "kind": "OBJECT",
              "ofType": null
            }
          },
          {
            "name": "personal_id_number_provided",
            "type": {
              "name": "Boolean",
              "kind": "SCALAR",
              "ofType": null
            }
          }
        ]
      },
      {
        "name": "LEGAL_ENTITY_TYPE",
        "kind": "ENUM",
        "fields": null
      },
      {
        "name": "AdditionalOwner",
        "kind": "OBJECT",
        "fields": [
          {
            "name": "address",
            "type": {
              "name": "Address",
              "kind": "OBJECT",
              "ofType": null
            }
          },
          {
            "name": "dob",
            "type": {
              "name": "Dob",
              "kind": "OBJECT",
              "ofType": null
            }
          },
          {
            "name": "first_name",
            "type": {
              "name": "String",
              "kind": "SCALAR",
              "ofType": null
            }
          },
          {
            "name": "last_name",
            "type": {
              "name": "String",
              "kind": "SCALAR",
              "ofType": null
            }
          },
          {
            "name": "maiden_name",
            "type": {
              "name": "String",
              "kind": "SCALAR",
              "ofType": null
            }
          },
          {
            "name": "personal_id_number_provided",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "name": "Address",
        "kind": "OBJECT",
        "fields": [
          {
            "name": "city",
            "type": {
              "name": "String",
              "kind": "SCALAR",
              "ofType": null
            }
          },
          {
            "name": "country",
            "type": {
              "name": "String",
              "kind": "SCALAR",
              "ofType": null
            }
          },
          {
            "name": "line1",
            "type": {
              "name": "String",
              "kind": "SCALAR",
              "ofType": null
            }
          },
          {
            "name": "line2",
            "type": {
              "name": "String",
              "kind": "SCALAR",
              "ofType": null
            }
          },
          {
            "name": "postal_code",
            "type": {
              "name": "String",
              "kind": "SCALAR",
              "ofType": null
            }
          },
          {
            "name": "state",
            "type": {
              "name": "String",
              "kind": "SCALAR",
              "ofType": null
            }
          }
        ]
      },
      {
        "name": "Dob",
        "kind": "OBJECT",
        "fields": [
          {
            "name": "day",
            "type": {
              "name": "Int",
              "kind": "SCALAR",
              "ofType": null
            }
          },
          {
            "name": "month",
            "type": {
              "name": "Int",
              "kind": "SCALAR",
              "ofType": null
            }
          },
          {
            "name": "year",
            "type": {
              "name": "Int",
              "kind": "SCALAR",
              "ofType": null
            }
          }
        ]
      },
      {
        "name": "Int",
        "kind": "SCALAR",
        "fields": null
      },
      {
        "name": "Boolean",
        "kind": "SCALAR",
        "fields": null
      },
      {
        "name": "AccountVerification",
        "kind": "OBJECT",
        "fields": [
          {
            "name": "disabled_reason",
            "type": {
              "name": "String",
              "kind": "SCALAR",
              "ofType": null
            }
          },
          {
            "name": "due_by",
            "type": {
              "name": "Int",
              "kind": "SCALAR",
              "ofType": null
            }
          },
          {
            "name": "fields_needed",
            "type": {
              "name": null,
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "name": "Balance",
        "kind": "OBJECT",
        "fields": [
          {
            "name": "object",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "livemode",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            }
          },
          {
            "name": "available",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "BalanceItem",
                    "ofType": null
                  }
                }
              }
            }
          },
          {
            "name": "pending",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "BalanceItem",
                    "ofType": null
                  }
                }
              }
            }
          }
        ]
      },
      {
        "name": "BalanceItem",
        "kind": "OBJECT",
        "fields": [
          {
            "name": "currency",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "amount",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            }
          },
          {
            "name": "source_types",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "BalanceSourceTypes",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "name": "BalanceSourceTypes",
        "kind": "OBJECT",
        "fields": [
          {
            "name": "bank_account",
            "type": {
              "name": "Int",
              "kind": "SCALAR",
              "ofType": null
            }
          },
          {
            "name": "card",
            "type": {
              "name": "Int",
              "kind": "SCALAR",
              "ofType": null
            }
          }
        ]
      },
      {
        "name": "BalanceTransaction",
        "kind": "OBJECT",
        "fields": [
          {
            "name": "id",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            }
          },
          {
            "name": "object",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "amount",
            "type": {
              "name": "Int",
              "kind": "SCALAR",
              "ofType": null
            }
          },
          {
            "name": "available_on",
            "type": {
              "name": "Int",
              "kind": "SCALAR",
              "ofType": null
            }
          },
          {
            "name": "created",
            "type": {
              "name": "Int",
              "kind": "SCALAR",
              "ofType": null
            }
          },
          {
            "name": "currency",
            "type": {
              "name": "String",
              "kind": "SCALAR",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "name": "String",
              "kind": "SCALAR",
              "ofType": null
            }
          },
          {
            "name": "exchange_rate",
            "type": {
              "name": "Float",
              "kind": "SCALAR",
              "ofType": null
            }
          },
          {
            "name": "fee",
            "type": {
              "name": "Int",
              "kind": "SCALAR",
              "ofType": null
            }
          },
          {
            "name": "fee_details",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "FeeDetails",
                    "ofType": null
                  }
                }
              }
            }
          },
          {
            "name": "net",
            "type": {
              "name": "Int",
              "kind": "SCALAR",
              "ofType": null
            }
          },
          {
            "name": "source",
            "type": {
              "name": "String",
              "kind": "SCALAR",
              "ofType": null
            }
          },
          {
            "name": "status",
            "type": {
              "name": "String",
              "kind": "SCALAR",
              "ofType": null
            }
          },
          {
            "name": "type",
            "type": {
              "name": "String",
              "kind": "SCALAR",
              "ofType": null
            }
          }
        ]
      },
      {
        "name": "Float",
        "kind": "SCALAR",
        "fields": null
      },
      {
        "name": "FeeDetails",
        "kind": "OBJECT",
        "fields": [
          {
            "name": "id",
            "type": {
              "name": "String",
              "kind": "SCALAR",
              "ofType": null
            }
          },
          {
            "name": "amount",
            "type": {
              "name": "Int",
              "kind": "SCALAR",
              "ofType": null
            }
          },
          {
            "name": "application",
            "type": {
              "name": "String",
              "kind": "SCALAR",
              "ofType": null
            }
          },
          {
            "name": "currency",
            "type": {
              "name": "String",
              "kind": "SCALAR",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "name": "String",
              "kind": "SCALAR",
              "ofType": null
            }
          },
          {
            "name": "type",
            "type": {
              "name": "String",
              "kind": "SCALAR",
              "ofType": null
            }
          }
        ]
      },
      {
        "name": "BankAccount",
        "kind": "OBJECT",
        "fields": [
          {
            "name": "id",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            }
          },
          {
            "name": "object",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "account_holder_name",
            "type": {
              "name": "String",
              "kind": "SCALAR",
              "ofType": null
            }
          },
          {
            "name": "account_holder_type",
            "type": {
              "name": "LEGAL_ENTITY_TYPE",
              "kind": "ENUM",
              "ofType": null
            }
          },
          {
            "name": "bank_name",
            "type": {
              "name": "String",
              "kind": "SCALAR",
              "ofType": null
            }
          },
          {
            "name": "country",
            "type": {
              "name": "String",
              "kind": "SCALAR",
              "ofType": null
            }
          },
          {
            "name": "currency",
            "type": {
              "name": "String",
              "kind": "SCALAR",
              "ofType": null
            }
          },
          {
            "name": "customer",
            "type": {
              "name": "String",
              "kind": "SCALAR",
              "ofType": null
            }
          },
          {
            "name": "fingerprint",
            "type": {
              "name": "String",
              "kind": "SCALAR",
              "ofType": null
            }
          },
          {
            "name": "last4",
            "type": {
              "name": "String",
              "kind": "SCALAR",
              "ofType": null
            }
          },
          {
            "name": "routing_number",
            "type": {
              "name": "String",
              "kind": "SCALAR",
              "ofType": null
            }
          },
          {
            "name": "status",
            "type": {
              "name": "String",
              "kind": "SCALAR",
              "ofType": null
            }
          }
        ]
      },
      {
        "name": "Card",
        "kind": "OBJECT",
        "fields": [
          {
            "name": "id",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            }
          },
          {
            "name": "object",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "brand",
            "type": {
              "name": "String",
              "kind": "SCALAR",
              "ofType": null
            }
          },
          {
            "name": "country",
            "type": {
              "name": "String",
              "kind": "SCALAR",
              "ofType": null
            }
          },
          {
            "name": "default_for_currency",
            "type": {
              "name": "Boolean",
              "kind": "SCALAR",
              "ofType": null
            }
          },
          {
            "name": "exp_month",
            "type": {
              "name": "Int",
              "kind": "SCALAR",
              "ofType": null
            }
          },
          {
            "name": "exp_year",
            "type": {
              "name": "Int",
              "kind": "SCALAR",
              "ofType": null
            }
          },
          {
            "name": "funding",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "CARD_FUNDING_TYPE",
                "ofType": null
              }
            }
          },
          {
            "name": "last4",
            "type": {
              "name": "String",
              "kind": "SCALAR",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "name": "String",
              "kind": "SCALAR",
              "ofType": null
            }
          }
        ]
      },
      {
        "name": "CARD_FUNDING_TYPE",
        "kind": "ENUM",
        "fields": null
      },
      {
        "name": "Charge",
        "kind": "OBJECT",
        "fields": [
          {
            "name": "id",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            }
          },
          {
            "name": "object",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "amount",
            "type": {
              "name": "Int",
              "kind": "SCALAR",
              "ofType": null
            }
          },
          {
            "name": "currency",
            "type": {
              "name": "String",
              "kind": "SCALAR",
              "ofType": null
            }
          },
          {
            "name": "status",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "name": "CountrySpec",
        "kind": "OBJECT",
        "fields": [
          {
            "name": "id",
            "type": {
              "name": "String",
              "kind": "SCALAR",
              "ofType": null
            }
          },
          {
            "name": "object",
            "type": {
              "name": "String",
              "kind": "SCALAR",
              "ofType": null
            }
          },
          {
            "name": "defaultCurrency",
            "type": {
              "name": "Currency",
              "kind": "SCALAR",
              "ofType": null
            }
          },
          {
            "name": "verificationFields",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "AccountVerificationFields",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "name": "Currency",
        "kind": "SCALAR",
        "fields": null
      },
      {
        "name": "AccountVerificationFields",
        "kind": "OBJECT",
        "fields": [
          {
            "name": "individual",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "VerificationFields",
                "ofType": null
              }
            }
          },
          {
            "name": "company",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "VerificationFields",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "name": "VerificationFields",
        "kind": "OBJECT",
        "fields": [
          {
            "name": "minimum",
            "type": {
              "name": null,
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "additional",
            "type": {
              "name": null,
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "name": "Customer",
        "kind": "OBJECT",
        "fields": [
          {
            "name": "id",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            }
          },
          {
            "name": "object",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "metadata",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "MetadataType",
                    "ofType": null
                  }
                }
              }
            }
          },
          {
            "name": "email",
            "type": {
              "name": "String",
              "kind": "SCALAR",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            }
          },
          {
            "name": "bankAccounts",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "BankAccount",
                    "ofType": null
                  }
                }
              }
            }
          },
          {
            "name": "cards",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Card",
                    "ofType": null
                  }
                }
              }
            }
          },
          {
            "name": "charges",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Charge",
                    "ofType": null
                  }
                }
              }
            }
          },
          {
            "name": "subscriptions",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "_Subscription",
                    "ofType": null
                  }
                }
              }
            }
          }
        ]
      },
      {
        "name": "Metadata",
        "kind": "INTERFACE",
        "fields": [
          {
            "name": "metadata",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "MetadataType",
                    "ofType": null
                  }
                }
              }
            }
          }
        ]
      },
      {
        "name": "MetadataType",
        "kind": "OBJECT",
        "fields": [
          {
            "name": "key",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "value",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "name": "DateTime",
        "kind": "SCALAR",
        "fields": null
      },
      {
        "name": "_Subscription",
        "kind": "OBJECT",
        "fields": [
          {
            "name": "id",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            }
          },
          {
            "name": "object",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "customer",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Customer",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "name": "Invoice",
        "kind": "OBJECT",
        "fields": [
          {
            "name": "id",
            "type": {
              "name": "ID",
              "kind": "SCALAR",
              "ofType": null
            }
          },
          {
            "name": "amount_due",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            }
          },
          {
            "name": "amount_paid",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            }
          },
          {
            "name": "lines",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "InvoiceLineItem",
                    "ofType": null
                  }
                }
              }
            }
          }
        ]
      },
      {
        "name": "InvoiceLineItem",
        "kind": "OBJECT",
        "fields": [
          {
            "name": "id",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            }
          },
          {
            "name": "object",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "amount",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            }
          },
          {
            "name": "currency",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "quantity",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "name": "Plan",
        "kind": "OBJECT",
        "fields": [
          {
            "name": "id",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            }
          },
          {
            "name": "object",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "amount",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            }
          },
          {
            "name": "currency",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "formattedAmount",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "product",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Product",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "name": "Product",
        "kind": "OBJECT",
        "fields": [
          {
            "name": "id",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            }
          },
          {
            "name": "object",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "type",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "name",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "plans",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Plan",
                    "ofType": null
                  }
                }
              }
            }
          }
        ]
      },
      {
        "name": "__Schema",
        "kind": "OBJECT",
        "fields": [
          {
            "name": "types",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "__Type",
                    "ofType": null
                  }
                }
              }
            }
          },
          {
            "name": "queryType",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "__Type",
                "ofType": null
              }
            }
          },
          {
            "name": "mutationType",
            "type": {
              "name": "__Type",
              "kind": "OBJECT",
              "ofType": null
            }
          },
          {
            "name": "subscriptionType",
            "type": {
              "name": "__Type",
              "kind": "OBJECT",
              "ofType": null
            }
          },
          {
            "name": "directives",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "__Directive",
                    "ofType": null
                  }
                }
              }
            }
          }
        ]
      },
      {
        "name": "__Type",
        "kind": "OBJECT",
        "fields": [
          {
            "name": "kind",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "__TypeKind",
                "ofType": null
              }
            }
          },
          {
            "name": "name",
            "type": {
              "name": "String",
              "kind": "SCALAR",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "name": "String",
              "kind": "SCALAR",
              "ofType": null
            }
          },
          {
            "name": "fields",
            "type": {
              "name": null,
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "__Field",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "interfaces",
            "type": {
              "name": null,
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "__Type",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "possibleTypes",
            "type": {
              "name": null,
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "__Type",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "enumValues",
            "type": {
              "name": null,
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "__EnumValue",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "inputFields",
            "type": {
              "name": null,
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "__InputValue",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "ofType",
            "type": {
              "name": "__Type",
              "kind": "OBJECT",
              "ofType": null
            }
          }
        ]
      },
      {
        "name": "__TypeKind",
        "kind": "ENUM",
        "fields": null
      },
      {
        "name": "__Field",
        "kind": "OBJECT",
        "fields": [
          {
            "name": "name",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "description",
            "type": {
              "name": "String",
              "kind": "SCALAR",
              "ofType": null
            }
          },
          {
            "name": "args",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "__InputValue",
                    "ofType": null
                  }
                }
              }
            }
          },
          {
            "name": "type",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "__Type",
                "ofType": null
              }
            }
          },
          {
            "name": "isDeprecated",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            }
          },
          {
            "name": "deprecationReason",
            "type": {
              "name": "String",
              "kind": "SCALAR",
              "ofType": null
            }
          }
        ]
      },
      {
        "name": "__InputValue",
        "kind": "OBJECT",
        "fields": [
          {
            "name": "name",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "description",
            "type": {
              "name": "String",
              "kind": "SCALAR",
              "ofType": null
            }
          },
          {
            "name": "type",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "__Type",
                "ofType": null
              }
            }
          },
          {
            "name": "defaultValue",
            "type": {
              "name": "String",
              "kind": "SCALAR",
              "ofType": null
            }
          }
        ]
      },
      {
        "name": "__EnumValue",
        "kind": "OBJECT",
        "fields": [
          {
            "name": "name",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "description",
            "type": {
              "name": "String",
              "kind": "SCALAR",
              "ofType": null
            }
          },
          {
            "name": "isDeprecated",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            }
          },
          {
            "name": "deprecationReason",
            "type": {
              "name": "String",
              "kind": "SCALAR",
              "ofType": null
            }
          }
        ]
      },
      {
        "name": "__Directive",
        "kind": "OBJECT",
        "fields": [
          {
            "name": "name",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "description",
            "type": {
              "name": "String",
              "kind": "SCALAR",
              "ofType": null
            }
          },
          {
            "name": "locations",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "ENUM",
                    "name": "__DirectiveLocation",
                    "ofType": null
                  }
                }
              }
            }
          },
          {
            "name": "args",
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "__InputValue",
                    "ofType": null
                  }
                }
              }
            }
          }
        ]
      },
      {
        "name": "__DirectiveLocation",
        "kind": "ENUM",
        "fields": null
      },
      {
        "name": "COUNTRY",
        "kind": "ENUM",
        "fields": null
      },
      {
        "name": "CURRENCY",
        "kind": "ENUM",
        "fields": null
      }
    ]
  }
}