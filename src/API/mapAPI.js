export const getPlaceDetails = (data) => {
  return new Promise((resolve, reject) => {
    const { id, placeService } = data;

    var request = {
      placeId: id,
      fields: ["name", "rating", "formatted_phone_number", "geometry"],
    };
    placeService.getDetails(request, (place, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        if (!place.geometry || !place.geometry.location) {
          reject("NO VIEWPORT NOT LOCATION");
        } else {
          resolve(place.geometry);
        }
      }
    });
  });
};

export const getPlacePredictions = (data) => {
  return new Promise((resolve, reject) => {
    const { input, placeService } = data;

    placeService.getQueryPredictions({ input }, (predictions, status) => {
      if (
        status !== window.google.maps.places.PlacesServiceStatus.OK ||
        !predictions
      ) {
        reject(`getQueryPredictions failed with status: ${status}`);
      } else {
        let options = [];

        predictions.forEach((prediction) => {
          const option = {
            name: prediction.description,
            id: prediction.place_id,
          };
          options.push(option);
        });
        resolve(options);
      }
    });
  });
};
