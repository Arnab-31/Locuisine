import React from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

const Autocomplete = () => (
  <div>
    <GooglePlacesAutocomplete
      apiKey="AIzaSyCTOD1Und52oU9unc9TRWlR0UOXqCEyFc8"
      selectProps={{
        placeholder: 'Enter postal code...'
      }}
    />
  </div>
);

export default Autocomplete;
