# easy-web3

> Middleware for calling blockchain functions via javascript

## Install

```sh
npm install easy-web3
```

## Usage

```js
import { mint } from 'easy-web3';

mint({name:'My New Token', symbol:'MNT', supply: 1,000,000});
//=> '0x1234...' deployed token address
```

## API

### mint(tokenObject, options?)

#### input

Type: `object`

Fields in the tokenObject vary according to the type of token you are minting.  Current supported tokens are:
```
standard: 'erc20',
name:'My New Token',
symbol:'MNT',
supply: 1,000,000
```
```
standard: 'erc721',
name:'My NFT Factory',
symbol:'MNF'
```

#### options

Type: `object`

```
provider: the wallet provider of account that will be minting tokens
onSuccess: function to call on success
onError: function to call on error
```
