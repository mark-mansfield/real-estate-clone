##authenticate
We use the client_credentials auth type
To use the API we must get an access token first using our secret and client ID
@param clientId: the id of the project created  the domain developer account
@param secret: a secret set up for this project

```javascript
const DOMAIN_PROJECT_CLIENT_ID = 'client_5709bdf41500dd4426e9a2bba8dc791d';


const DOMAIN_PROJECT_SECRET = 'secret_42e45d9ac28d57752ec22ac4929ca135';

getAccessToken(clientId, secret) {
 // build a string of creds
    // basic auth needs to use base64 encoding on creds
    const data = querystring.stringify({
      grant_type: 'client_credentials',
      scope: 'api_agencies_read api_listings_read'
    });

    return axios
      .post('https://auth.domain.com.au/v1/connect/token', data, {
        headers: {
          Authorization: `Basic ${base64(`${clientId}:${secret}`)}`,
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(result => {
        setHasToken(true);
        setSuccess(true);
        localStorage.setItem('_nekot', result.data.access_token);
      })
      .catch(err => {
        setError(true);
        console.error(err.response.data);
      });
}
```

```javascript
// do a simple query of listing for rent


```


##Search query params model taken from live api docs

[https://developer.domain.com.au/docs/live/#/Listings/Listings_DetailedResidentialSearch](go to api)

```
listingType	string
Enum:
Array [ 5 ]
propertyTypes	[string
Enum:
[ AcreageSemiRural, ApartmentUnitFlat, Aquaculture, BlockOfUnits, CarSpace, DairyFarming, DevelopmentSite, Duplex, Farm, FishingForestry, NewHomeDesigns, House, NewHouseLand, IrrigationServices, NewLand, Livestock, NewApartments, Penthouse, RetirementVillage, Rural, SemiDetached, SpecialistFarm, Studio, Terrace, Townhouse, VacantLand, Villa, Cropping, Viticulture, MixedFarming, Grazing, Horticulture, Equine, Farmlet, Orchard, RuralLifestyle ]
]
propertyFeatures	[string]
Enum:
[ AirConditioning, BuiltInWardrobes, CableOrSatellite, Ensuite, Floorboards, Gas, InternalLaundry, PetsAllowed, SecureParking, SwimmingPool, Furnished, GroundFloor, WaterViews, NorthFacing, CityViews, IndoorSpa, Gym, AlarmSystem, Intercom, BroadbandInternetAccess, Bath, Fireplace, SeparateDiningRoom, Heating, Dishwasher, Study, TennisCourt, Shed, FullyFenced, BalconyDeck, GardenCourtyard, OutdoorSpa, DoubleGlazedWindows, EnergyEfficientAppliances, WaterEfficientAppliances, WallCeilingInsulation, RainwaterStorageTank, GreywaterSystem, WaterEfficientFixtures, SolarHotWater, SolarPanels ]
]
listingAttributes	[string
Enum:
[ HasPhotos, HasPrice, NotUpForAuction, NotUnderContract, MarkedAsNew ]
]
propertyEstablishedType	string
Enum:
[ Any, New, Established ]
minBedrooms	number($float)
maxBedrooms	number($float)
minBathrooms	number($float)
maxBathrooms	number($float)
minCarspaces	integer($int32)
maxCarspaces	integer($int32)
minPrice	integer($int32)
maxPrice	integer($int32)
minLandArea	integer($int32)
maxLandArea	integer($int32)
advertiserIds	[integer($int32)]
adIds	[integer($int32)]
excludeAdIds	[integer($int32)]
locations	[Domain.SearchService.v2.Model.DomainSearchWebApiV2ModelsSearchLocation{...}]
locationTerms	string
keywords	[string]
newDevOnly	boolean
inspectionFrom	string($date-time)
inspectionTo	string($date-time)
auctionFrom	string($date-time)
auctionTo	string($date-time)
ruralOnly	boolean
excludePriceWithheld	boolean
sort	Domain.SearchService.v2.Model.SystemNullableDomainSearchWebApiV2ModelsSortBy{...}
page	integer($int32)
pageSize	integer($int32)
geoWindow	Domain.SearchService.v2.Model.DomainSearchWebApiV2ModelsGeoWindow{...}
updatedSince	string($date-time)```

