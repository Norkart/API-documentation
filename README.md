# Norkart API Documentation

Welcome to the Norkart API documentation. This repository contains developer documentation, examples, and tutorials for some of our public API offerings. For product listings, API keys, contact, and support, visit [Norkart Data and Analysis](https://www.norkart.no/dataoganalyse/).

## Available Documentation

### Code Examples and Tutorials
Explore our [code examples and tutorials](<code and tutorials/README.md>) to see practical implementations and learn how to use our APIs effectively.

### API Documentation
We provide detailed documentation for the following APIs:

* [API Bakgrunnskart](<API Bakgrunnskart/README.md>)
* [API Adresse- og eiendomssøk](<API Adresse- og eiendomssøk/README.md>)
* [API Eiendomsdata](<API Eiendomsdata/README.md>)
* [API Datavarehus](<API Datavarehus/README.md>)
* [API Takgeometri og solinstråling](<API Takgeometri og solinnstråling/README.md>)

## About Our APIs
Norkart's services are primarily RESTful APIs that support data exchange in JSON format.

### Map Services
We offer two types of map services:
- [Tile Map Services (TMS)](Articles/TMS/README.md)
- [Web Map Services (WMS)](Articles/WMS/README.md)

## Authentication / API Key
Authentication is consistent across all services. Include your API key as a URL parameter in your requests. For example:
```bash
https://fritekstsok.api.norkart.no/suggest/matrikkel/adresse?Query=Oslovei&api_key={{YOUR_API_KEY}}
```

## Live Demos
Check out our [Norkart API Demo](https://mango-flower-0fd4d4b03.azurestaticapps.net/) to see a minimalistic map application that uses API Bakgrunnskart, API Adresse- og eiendomssøk, and API Eiendomsdata.

## Request API Access
To request API access, visit [Norkart Data and Analysis](https://www.norkart.no/dataoganalyse/).