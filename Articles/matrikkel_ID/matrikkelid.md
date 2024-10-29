# Matrikkelidentifikator

The matrikkelidentifikator is a 20-digit string, constructed in the following manner

`KKKKGGGGGBBBBFFFFSSS`

Where:
* KKKK is kommune(municipality)-number padded with zeroes to be 4 characters wide
* GGGGG is gårdsnummer, padded with zeroes to be 5 characters wide
* BBBB is brukssnummer, padded with zeroes to be 4 characters wide
* FFFF is festenummer, padded with zeroes to be 4 characters wide. This is optional, and set to 0000 if not present
* SSS is seksjonsnummer, padded with zeroes to be 3 characters wide. This is optional, and set to 000 if not present

## Example

We have an eiendom:
* kommune: 0301
* gårdsnummer: 31
* bruksnummer: 472
* festenummer: null
* seksjonsnummer: null

This becomes: `03010003104720000000`
