import fetchApiCryptoList from '../apis/coinsgecko';

const initialConf = {
  url: null,
  currency: 'usd',
  filter: 'market_cap_desc',
  result: '200',
  page: '1',
};

const errorCallConf = {
  url: 'https://api.coingecko.com/',
  currency: 'usd',
  filter: 'market_cap_desc',
  results: '200',
  page: '1',
};

