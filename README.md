# Norkart API Documentation

This is our collection of developer documentation, examples and tutorials for several of our public API offerings. See https://www.norkart.no/dataoganalyse/ for product listings, API-keys, contact and support. 

See [code and tutorials](code_and_tutorials) for complete list of code-snippets, examples and tutorials.

## Documented API's:

* [API-maptiles](API-maptiles)
* [API-fritekstsok](API-fritekstsok)
* [API-matrikkelkart](API-matrikkelkart)
* [API-datavarehus](API-datavarehus)

## About API's
Norkarts services are mostly ```REST-services``` which support data-exchange in JSON, XML and ServiceStack CSV-format. Where ```JSON is the reccomendation```.

All API's have the following charachteristics:
- Metadata enpoint: ```{url}/metadata```. Example: [Fritekstsok-Metadata](https://fritekstsok.api.norkart.no/metadata)
- Swagger endpoint: ```{url}/swagger-ui```. Example:  [Fritekstsok-Swagger](https://fritekstsok.api.norkart.no/swagger-ui/)
- Postman endpoint: ```{url}/postman```. Example:  [Fritekstsok-Postman](https://fritekstsok.api.norkart.no/postman)

## About Map Services
There are two types of map services:
- Tile Map Service (```TMS```):
- Web Map Service (```WMS```)

Read more about [API-maptiles](API-maptiles)
Read more about [Web-Map-Services-(WMS)](WMS)


## Authentication / API key 
Authentication works in the same way for all services. 
- Example: ```https://fritekstsok.api.norkart.no/suggest/matrikkel/adresse?Query=Oslovei&api_key={{YOUR_API_KEY}}```

Request API access [here](https://www.norkart.no/dataoganalyse/).

## Live Demos
- [Norkart API Demo](https://mango-flower-0fd4d4b03.azurestaticapps.net/): Here you can see a minimalistic map application that uses maptiles, fritekstsøk and matrikkelkart APIs. 




