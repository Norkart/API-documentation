# Norkart API Documentation

This is our collection of developer documentation, examples and tutorials for some of our public API offerings. See https://www.norkart.no/dataoganalyse/ for product listings, API-keys, contact and support. 

See [code and tutorials](code_and_tutorials) for complete list of code-snippets, examples and tutorials.

## Documented API's at github:

* [API Adresse- og eiendomssøk](API_Adresse-_og_eiendomssøk/README.md)
* [API Bakgrunnskart](API_Bakgrunnskart/README.md)
* [API Eiendomsdata](API_Eiendomsdata/README.md)
* [API Takgeometri og solinnstråling](API_Takgeometri_og_solinnstråling/README-md)
* [API Datavarehus](API_Datavarehus/README.md)

## About API's
Norkarts services are mostly ```REST-services``` which support data-exchange in JSON. 

## About Map Services
There are two types of map services:
- [Tile-Map-Services](API-maptiles) (```TMS```):
- [Web-Map-Services](WMS) (```WMS```) 


## Authentication / API key 
Authentication works in the same way for all services. 
- Example: ```https://fritekstsok.api.norkart.no/suggest/matrikkel/adresse?Query=Oslovei&api_key={{YOUR_API_KEY}}```

## Live Demos
- [Norkart API Demo](https://mango-flower-0fd4d4b03.azurestaticapps.net/): Here you can see a minimalistic map application that uses maptiles, fritekstsøk and matrikkelkart APIs. 

Request API access [here](https://www.norkart.no/dataoganalyse/).



