# geocode-api
An API that does forward and reverse geocoding using Google Geocoding API.

<br/>

**Forward geocode** converts an address into lat,lng coordinates.<br>
**Reverse geocode** converts lat,lng coordinates into an address.

\
API is live at:<br>
https://rapidapi.com/NovusAPI/api/geocode-forward-and-reverse

\
**Request query parameters:**

\
Forward Geocode:
|Parameter||Description|Example|
|-|-|-|-|
|**address**|*Required*|The street address or plus code that you want to geocode. Specify addresses in accordance with the format used by the national postal service of the country concerned. Additional address elements such as business names and unit, suite or floor numbers should be avoided. Street address elements should be delimited by spaces (shown here as url-escaped to %20)|<code>"2795 Hastings St, Vancouver, BC V5K 1Z8"</code>|

Reverse Geocode:
|Parameter||Description|Example|
|-|-|-|-|
|**lat**|*Required*|Latitude|<code>49.2813458</code>|
|**lng**|*Required*|Longitude|<code>-123.0470199</code>|

\
\
**Response data object properties:**
|Property|Description|Example|
|-|-|-|
|**address**|Postal address|<code>"2795 Hastings St, Vancouver, BC V5K 1Z8"</code>|
|**location**|Object with properties for latitude and longitude|<code>{ "lat":49.2813458, "lng":-123.0470199 }</code>|
|**place_id**|*For future update. Not currently useful*|<code>"ChIJr9qJ9yBxhlQRVydHPfGaK6U"</code>|
