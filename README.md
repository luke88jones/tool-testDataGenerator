# Test Data Generator
Generates data based on files included in models folder. Fakerjs included for data generation.

## Usage
- Clone the repository
- Run `npm install` to restore packages
- Run `node index.js` with the following positional paramters 

    1. `<number of iteractions>`
    2. `<relative path to output file>` 
    3. `<name of the model to use relative to the models directory>`
    
E.g. 
```
    node index.js 100 ./TestData.xlsx solr-patient
```    

## Development 
- Run `tsd install`\* to restore type definitions

\* If you don't have tsd installed run `npm install tsd -g` 
    