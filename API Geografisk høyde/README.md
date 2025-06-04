# WAAPI-hoyde - Geographic Height API

## Introduction
WAAPI-HOYDE provides comprehensive data about heights across Norway. This documentation offers an overview of how developers can integrate with the service.

In practice, the data service has two main functionalities: you can find the height of a geographic point and you can find the height between two or more points to obtain a terrain profile.

The service returns data in JSON format. For geographic information, the GeoJSON standard is used, which can be read in various programs and libraries. GeoJSON uses geographic coordinates in WGS4 (EPSG:4326), but in some cases, the user of the service can specify other input and output coordinate systems.

## Key Endpoints

### 1. Fetch Height Values for Points
- **Endpoint**: `/height`
- **Method**: GET
- **Parameters**: 
  - `Points` (Array): List of points defined by X/Y coordinates.
  - `SRS` (int): Indicates which reference system is used for the geometries.
  
- **Use Case**: Retrieve height values for specific geographic points.

### 2. Fetch Height between Two Points
- **Endpoint**: `/heightsbetweenpoints`
- **Method**: GET
- **Parameters**:
  - `Point1` (Object): Start coordinates.
  - `Point2` (Object): End coordinates.
  - `NumberOfInterpolatedPoints` (int): Number of height points to return.

- **Use Case**: Retrieve height values along an interpolated line between two points.

### 3. Create Height Profile
- **Endpoint**: `/heightprofileforpointlist`
- **Method**: POST
- **Parameters**:
  - `Points` (Array): List of coordinates.
  - `NumberOfHeights` (int): Number of height values in the response including start and end.

- **Use Case**: Generate a height profile based on a list of points.

## Example: Fetch Height Values

**Forespørsel**:
```http
GET https://hoyde.api.norkart.no/hoyde?Punkter=59.908,10.767&api_key={{YOUR_API_KEY}}
````

**Response:**
````http
{
    "PunktHoyder": [
        {
            "X": 59.908,
            "Y": 10.767,
            "Z": 100.5
        }
    ],
    "ResponseStatus": {
        "ErrorCode": null,
        "Message": "Success"
    }
}
````
Replace {{YOUR_API_KEY}} with the API key from Norkart ID.