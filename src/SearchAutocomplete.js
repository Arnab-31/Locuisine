import React from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

const Autocomplete = () => (
  <div>
    <GooglePlacesAutocomplete
      apiKey="AIzaSyCTOD1Und52oU9unc9TRWlR0UOXqCEyFc8"
      selectProps={{
        placeholder: 'Enter postal code...'
      }}
      onPress={(data, details = null) => {
        console.log(details);
        console.log(data);
        console.log("data.description",data.description.split(','));

      }}
    />
  </div>
);

export default Autocomplete;
