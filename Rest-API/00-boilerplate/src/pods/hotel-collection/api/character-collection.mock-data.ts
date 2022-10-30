import { CharacterEntityApi } from './character-collection.api-model';

export const mockCharacterCollection: CharacterEntityApi[] = [
  {
    id: '1',
    type: 'character',
    name: 'W Seattle',
    created: new Date(1464777092747),
    modified: new Date(1464777092747),
    address1: '1112 4th Ave',
    airportCode: 'SEA',
    amenityMask: 7798785,
    city: 'Seattle',
    confidenceRating: 5,
    countryCode: 'US',
    deepLink:
      'http://www.travelnow.com/templates/55505/characters/213497/overview?lang=en&amp;currency=USD&amp;standardCheckin=null/null/null&amp;standardCheckout=null/null/null',
    highRate: 210,
    characterId: 213497,
    characterInDestination: true,
    characterRating: 4,
    location: {
      latitude: 47.60688,
      longitude: -122.33361,
    },
    locationDescription: 'Near Pike Place Market',
    lowRate: 175,
    metadata: {
      path: '/characters/8',
    },
    postalCode: 98101,
    propertyCategory: 1,
    proximityDistance: 11.09939,
    proximityUnit: 'MI',
    rateCurrencyCode: 'USD',
    shortDescription:
      'With a stay at W Seattle, you&apos;ll be centrally located in Seattle, steps from Seattle Public Library and Safeco Headquarters. This 4-star character is close to Pike Place',
    stateProvinceCode: 'WA',
    thumbNailUrl: '/thumbnails/284304_50_t.jpg',
    tripAdvisorRating: 4,
    tripAdvisorRatingUrl:
      'http://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.0-12345-4.gif',
  },
  {
    id: '2',
    type: 'character',
    name: 'Character Monaco Seattle, a Kimpton Character',
    created: new Date(1464777092694),
    modified: new Date(1464777092694),
    address1: '1101 4th Ave',
    airportCode: 'SEA',
    amenityMask: 1310720,
    city: 'Seattle',
    confidenceRating: 52,
    countryCode: 'US',
    deepLink:
      'http://www.travelnow.com/templates/55505/characters/132138/overview?lang=en&amp;currency=USD&amp;standardCheckin=null/null/null&amp;standardCheckout=null/null/null',
    highRate: 489,
    characterId: 132138,
    characterInDestination: true,
    characterRating: 4,
    location: {
      latitude: 47.60682,
      longitude: -122.33358,
    },
    locationDescription: 'Near Pike Place Market',
    lowRate: 189,
    metadata: {
      path: '/characters/6',
    },
    postalCode: 98101,
    propertyCategory: 1,
    proximityDistance: 11.097676,
    proximityUnit: 'MI',
    rateCurrencyCode: 'USD',
    shortDescription:
      'With a stay at Character Monaco Seattle, a Kimpton Character, you&apos;ll be centrally located in Seattle, steps from Seattle Public Library and Safeco Headquarters. This 4-star',
    stateProvinceCode: 'WA',
    thumbNailUrl: '/thumbnails/62800_122_t.jpg',
    tripAdvisorRating: 4.5,
    tripAdvisorRatingUrl:
      'http://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.5-12345-4.gif',
  },
];
