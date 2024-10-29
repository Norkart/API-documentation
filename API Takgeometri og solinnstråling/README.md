# WAAPI-Takflater

WAAPI-Takflater provides comprehensive data about rooftops across Norway. This guide gives a brief overview to help developers integrate with this service.

## Getting Started

**React Example**: [React Demo](#) - Dive into a sample React application showcasing the use of WAAPI-Takflater API. *(Note: Please replace the `#` with the actual link to your React demo if available)*.

### Key Endpoints

#### 1. Rooftop Details by Coordinates
- **Endpoint**: `/takflater/punkt`
- **Method**: GET
- **Parameters**: `Y` (North-coordinate), `X` (East-coordinate)
- **Use Case**: Fetching rooftop details using specific geographical coordinates.

#### 2. Extended Rooftop Details by Coordinates
- **Endpoint**: `/takflater/punkt/utvidet`
- **Method**: GET
- **Parameters**: `Y` (North-coordinate), `X` (East-coordinate)
- **Use Case**: Fetching a more detailed view of rooftop data.

### Recommendations

#### Suggest - Autocomplete

While not directly a part of the WAAPI-Takflater, it's essential to use the `/suggest/kommunecustom` endpoint for autocomplete features. This endpoint is fast and optimized for real-time suggestions.

#### Search - Detailed & Fuzzy Logic

For a more detailed view or when you expect the user might have typos or slight variations in their input, use the `/search/kommunecustom` endpoint. It's slower than suggest but offers a 'fuzzy' search logic that's lenient with variations in the input.

### Example: Fetching Rooftop Data by Coordinates

**Request**:
\```http
GET https://waapi-takflater.api.norkart.no/takflater/punkt?Y=59.908&X=10.767&api_key={{YOUR_API_KEY}}
\```

**Response**:
\```json
{
    "Id": 0,
    "Objekttype": "string",
    "ByggId": "string",
    ...
}
\```

Replace `{{YOUR_API_KEY}}` with your actual API key. The response provides a detailed breakdown of the rooftop based on the provided coordinates.

### Further Reading

For an in-depth understanding, refer to the [Swagger Documentation](#). *(Note: Replace `#` with the link to your Swagger docs)*.
