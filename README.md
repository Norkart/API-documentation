# Norkart API Documentation

This is our collection of developer documentation, examples and tutorials for several of our public API offerings. See https://norkart.no/dataoganalyse and https://developer.norkart.no for product listings, API-keys, contact and support. 

See [code and tutorials](code_and_tutorials) for complete list of code-snippets, examples and tutorials.

## Documented API's:

* [API-maptiles](API-maptiles)
* [API-fritekstsok](API-fritekstsok)
* [~~API-matrikkelkart~~](API-matrikkelkart)

## About API's
Norkarts services are mostly ```REST-services``` which support data-exchange in JSON, XML and ServiceStack CSV-format. Where ```JSON is the reccomendation```.

All API's have the following charachteristics:
- Metadata enpoint: ```{url}/metadata```. Example: [Fritekstsok-Metadata](https://www.webatlas.no/WAAPI-FritekstSok/metadata)
- Swagger endpoint: ```{url}/swagger-ui```. Example:  [Fritekstsok-Swagger](https://www.webatlas.no/WAAPI-FritekstSok/swagger-ui/)
- Postman endpoint: ```{url}/postman```. Example:  [Fritekstsok-Postman](https://www.webatlas.no/WAAPI-FritekstSok/postman)

## About Map Services
There are two types of map services:
- Tile Map Service (```TMS```):
- Web Map Service (```WMS```)

Read more at [API-maptiles](API-maptiles)


## Authentication / API key 
Authentication works in the same way for all services. 
- Example: ```https://www.webatlas.no/WAAPI-FritekstSok/suggest/matrikkel/adresse?Query=Oslovei&api_key={{YOUR_API_KEY}}```

Get a free trial key by logging in with your github account at [https://developer.norkart.no/](https://developer.norkart.no/)

## Live Demos
- [Norkart API Demo](https://mango-flower-0fd4d4b03.azurestaticapps.net/): Here you can see a minimalistic map application that uses maptiles, fritekstsøk and matrikkelkart APIs. 




