interface Currency {
  name: string;
  decimals: number;
}

interface Currencies {
  [key: string]: Currency;
}

export const currencies: Currencies = {
  AED: {
    name: "UAE Dirham",
    decimals: 2,
  },
  ALL: {
    name: "Albanian Lek",
    decimals: 2,
  },
  AMD: {
    name: "Armenian Dram",
    decimals: 2,
  },
  ANG: {
    name: "Antillian Guilder",
    decimals: 2,
  },
  AOA: {
    name: "Angolan Kwanza",
    decimals: 2,
  },
  ARS: {
    name: "Argentine Peso",
    decimals: 2,
  },
  AUD: {
    name: "Australian Dollar",
    decimals: 2,
  },
  AWG: {
    name: "Aruban Guilder",
    decimals: 2,
  },
  AZN: {
    name: "Azerbaijani manat",
    decimals: 2,
  },
  BAM: {
    name: "Bosnia and Herzegovina Convertible Marks",
    decimals: 2,
  },
  BBD: {
    name: "Barbados Dollar",
    decimals: 2,
  },
  BDT: {
    name: "Bangladesh Taka",
    decimals: 2,
  },
  BGN: {
    name: "New Bulgarian Lev",
    decimals: 2,
  },
  BHD: {
    name: "Bahraini Dinar",
    decimals: 3,
  },
  BMD: {
    name: "Bermudian Dollar",
    decimals: 2,
  },
  BND: {
    name: "Brunei Dollar",
    decimals: 2,
  },
  BOB: {
    name: "Bolivia Boliviano",
    decimals: 2,
  },
  BRL: {
    name: "Brazilian Real",
    decimals: 2,
  },
  BSD: {
    name: "Bahamian Dollar",
    decimals: 2,
  },
  BWP: {
    name: "Botswana Pula",
    decimals: 2,
  },
  BYN: {
    name: "New Belarusian Ruble",
    decimals: 2,
  },
  BZD: {
    name: "Belize Dollar",
    decimals: 2,
  },
  CAD: {
    name: "Canadian Dollar",
    decimals: 2,
  },
  CHF: {
    name: "Swiss Franc",
    decimals: 2,
  },
  CLP: {
    name: "Chilean Peso",
    decimals: 2,
  },
  CNY: {
    name: "Yuan Renminbi",
    decimals: 2,
  },
  COP: {
    name: "Colombian Peso",
    decimals: 2,
  },
  CRC: {
    name: "Costa Rican Colon",
    decimals: 2,
  },
  CUP: {
    name: "Cuban Peso",
    decimals: 2,
  },
  CVE: {
    name: "Cape Verdi Escudo",
    decimals: 0,
  },
  CZK: {
    name: "Czech Koruna",
    decimals: 2,
  },
  DJF: {
    name: "Djibouti Franc",
    decimals: 0,
  },
  DKK: {
    name: "Danish Krone",
    decimals: 2,
  },
  DOP: {
    name: "Dominican Republic Peso",
    decimals: 2,
  },
  DZD: {
    name: "Algerian Dinar",
    decimals: 2,
  },
  EGP: {
    name: "Egyptian Pound",
    decimals: 2,
  },
  ETB: {
    name: "Ethiopian Birr",
    decimals: 2,
  },
  EUR: {
    name: "Euro",
    decimals: 2,
  },
  FJD: {
    name: "Fiji Dollar",
    decimals: 2,
  },
  FKP: {
    name: "Falkland Islands Pound",
    decimals: 2,
  },
  GBP: {
    name: "Pound Sterling",
    decimals: 2,
  },
  GEL: {
    name: "Georgian Lari",
    decimals: 2,
  },
  GHS: {
    name: "Ghanaian Cedi (3rd)",
    decimals: 2,
  },
  GIP: {
    name: "Gibraltar Pound",
    decimals: 2,
  },
  GMD: {
    name: "Gambia Delasi",
    decimals: 2,
  },
  GNF: {
    name: "Guinea Franc",
    decimals: 0,
  },
  GTQ: {
    name: "Guatemala Quetzal",
    decimals: 2,
  },
  GYD: {
    name: "Guyanese Dollar",
    decimals: 2,
  },
  HKD: {
    name: "Hong Kong Dollar",
    decimals: 2,
  },
  HNL: {
    name: "Honduras Lempira",
    decimals: 2,
  },
  HRK: {
    name: "Croatia Kuna",
    decimals: 2,
  },
  HTG: {
    name: "Haitian Gourde",
    decimals: 2,
  },
  HUF: {
    name: "Hungarian Forint",
    decimals: 2,
  },
  IDR: {
    name: "Indonesian Rupiah",
    decimals: 0,
  },
  ILS: {
    name: "New Israeli Scheqel",
    decimals: 2,
  },
  INR: {
    name: "Indian Rupee",
    decimals: 2,
  },
  ISK: {
    name: "Iceland Krona",
    decimals: 2,
  },
  JMD: {
    name: "Jamaican Dollar",
    decimals: 2,
  },
  JOD: {
    name: "Jordanian Dinar",
    decimals: 3,
  },
  JPY: {
    name: "Japanese Yen",
    decimals: 0,
  },
  KES: {
    name: "Kenyan Shilling",
    decimals: 2,
  },
  KGS: {
    name: "Kyrgyzstan Som",
    decimals: 2,
  },
  KHR: {
    name: "Cambodia Riel",
    decimals: 2,
  },
  KMF: {
    name: "Comoro Franc",
    decimals: 0,
  },
  KRW: {
    name: "South-Korean Won",
    decimals: 0,
  },
  KWD: {
    name: "Kuwaiti Dinar",
    decimals: 3,
  },
  KYD: {
    name: "Cayman Islands Dollar",
    decimals: 2,
  },
  KZT: {
    name: "Kazakhstani Tenge",
    decimals: 2,
  },
  LAK: {
    name: "Laos Kip",
    decimals: 2,
  },
  LBP: {
    name: "Lebanese Pound",
    decimals: 2,
  },
  LKR: {
    name: "Sri Lanka Rupee",
    decimals: 2,
  },
  LYD: {
    name: "Libyan Dinar",
    decimals: 3,
  },
  MAD: {
    name: "Moroccan Dirham",
    decimals: 2,
  },
  MDL: {
    name: "Moldovia Leu",
    decimals: 2,
  },
  MKD: {
    name: "Macedonian Denar",
    decimals: 2,
  },
  MMK: {
    name: "Myanmar (Burma), Kyat",
    decimals: 2,
  },
  MNT: {
    name: "Mongolia Tugrik",
    decimals: 2,
  },
  MOP: {
    name: "Macau Pataca",
    decimals: 2,
  },
  MRU: {
    name: "Mauritania Ouguiya",
    decimals: 2,
  },
  MUR: {
    name: "Mauritius Rupee",
    decimals: 2,
  },
  MVR: {
    name: "Maldives Rufiyaa",
    decimals: 2,
  },
  MWK: {
    name: "Malawi Kwacha",
    decimals: 2,
  },
  MXN: {
    name: "Mexican Peso",
    decimals: 2,
  },
  MYR: {
    name: "Malaysian Ringgit",
    decimals: 2,
  },
  MZN: {
    name: "Mozambique, Metical",
    decimals: 2,
  },
  NAD: {
    name: "Namibian Dollar",
    decimals: 2,
  },
  NGN: {
    name: "Nigerian Naira",
    decimals: 2,
  },
  NIO: {
    name: "Nicaragua Cordoba Oro",
    decimals: 2,
  },
  NOK: {
    name: "Norwegian Krone",
    decimals: 2,
  },
  NPR: {
    name: "Nepalese Rupee",
    decimals: 2,
  },
  NZD: {
    name: "New Zealand Dollar",
    decimals: 2,
  },
  OMR: {
    name: "Rial Omani",
    decimals: 3,
  },
  PAB: {
    name: "Panamanian Balboa",
    decimals: 2,
  },
  PEN: {
    name: "Peruvian Nuevo Sol",
    decimals: 2,
  },
  PGK: {
    name: "New Guinea Kina",
    decimals: 2,
  },
  PHP: {
    name: "Philippine Peso",
    decimals: 2,
  },
  PKR: {
    name: "Pakistan Rupee",
    decimals: 2,
  },
  PLN: {
    name: "New Polish Zloty",
    decimals: 2,
  },
  PYG: {
    name: "Paraguay Guarani",
    decimals: 0,
  },
  QAR: {
    name: "Qatari Rial",
    decimals: 2,
  },
  RON: {
    name: "New Romanian Lei",
    decimals: 2,
  },
  RSD: {
    name: "Serbian Dinar",
    decimals: 2,
  },
  RUB: {
    name: "Russian Ruble",
    decimals: 2,
  },
  RWF: {
    name: "Rwanda Franc",
    decimals: 0,
  },
  SAR: {
    name: "Saudi Riyal",
    decimals: 2,
  },
  SBD: {
    name: "Solomon Island Dollar",
    decimals: 2,
  },
  SCR: {
    name: "Seychelles Rupee",
    decimals: 2,
  },
  SEK: {
    name: "Swedish Krone",
    decimals: 2,
  },
  SGD: {
    name: "Singapore Dollar",
    decimals: 2,
  },
  SHP: {
    name: "St. Helena Pound",
    decimals: 2,
  },
  SLL: {
    name: "Sierra Leone",
    decimals: 2,
  },
  SOS: {
    name: "Somalia Shilling",
    decimals: 2,
  },
  STN: {
    name: "Sao Tome & Principe Dobra",
    decimals: 2,
  },
  SVC: {
    name: "El Salvador Colón",
    decimals: 2,
  },
  SZL: {
    name: "Swaziland Lilangeni",
    decimals: 2,
  },
  THB: {
    name: "Thai Baht",
    decimals: 2,
  },
  TND: {
    name: "Tunisian Dinar",
    decimals: 3,
  },
  TOP: {
    name: "Tonga Pa'anga",
    decimals: 2,
  },
  TRY: {
    name: "New Turkish Lira",
    decimals: 2,
  },
  TTD: {
    name: "Trinidad & Tobago Dollar",
    decimals: 2,
  },
  TWD: {
    name: "New Taiwan Dollar",
    decimals: 2,
  },
  TZS: {
    name: "Tanzanian Shilling",
    decimals: 2,
  },
  UAH: {
    name: "Ukraine Hryvnia",
    decimals: 2,
  },
  UGX: {
    name: "Uganda Shilling",
    decimals: 0,
  },
  USD: {
    name: "US Dollars",
    decimals: 2,
  },
  UYU: {
    name: "Peso Uruguayo",
    decimals: 2,
  },
  UZS: {
    name: "Uzbekistani Som",
    decimals: 2,
  },
  VEF: {
    name: "Venezuelan Bolívar",
    decimals: 2,
  },
  VND: {
    name: "Vietnamese New Dong",
    decimals: 0,
  },
  VUV: {
    name: "Vanuatu Vatu",
    decimals: 0,
  },
  WST: {
    name: "Samoan Tala",
    decimals: 2,
  },
  XAF: {
    name: "CFA Franc BEAC",
    decimals: 0,
  },
  XCD: {
    name: "East Carribean Dollar",
    decimals: 2,
  },
  XOF: {
    name: "CFA Franc BCEAO",
    decimals: 0,
  },
  XPF: {
    name: "CFP Franc",
    decimals: 0,
  },
  YER: {
    name: "Yemeni Rial",
    decimals: 2,
  },
  ZAR: {
    name: "South African Rand",
    decimals: 2,
  },
  ZMW: {
    name: "Zambia Kwacha",
    decimals: 2,
  },
};

const units: number[] = [1, 10, 100, 1000];

// 10.00 EUR => 1000 EUR (cents)
function floatToInt({
  amount,
  currency,
}: {
  amount: number;
  currency: string;
}): number {
  const { decimals } = currencies[currency.toUpperCase()];
  return Number(amount) * units[decimals];
}

// 1000 EUR (cents) => 10.00 EUR
// https://github.com/stripe/stripe-payments-demo/blob/fb3d570a89936f920fffd2f958acb580130e2267/public/javascripts/store.js#L118
export function intToFloat({
  amount,
  currency,
}: {
  amount: number;
  currency: string;
}): number {
  const { decimals } = currencies[currency.toUpperCase()];
  return Number((Number(amount) / units[decimals]).toFixed(decimals));
}

export function formatCurrency({
  amount,
  currency,
}: {
  amount: number;
  currency: string;
}): string {
  return new Intl.NumberFormat(["en-US"], {
    style: "currency",
    currency: currency,
  }).format(intToFloat({ amount, currency }));
}

export function getCurrency({
  amount,
  currency,
}: {
  amount: number;
  currency: string;
}) {
  const formatter = new Intl.NumberFormat(["en-US"], {
    style: "currency",
    currency: currency,
  });
  return formatter
    .formatToParts(amount)
    .find((item) => item.type === "currency")?.value;
}
