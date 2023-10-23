import homeReducer, { fetchCities } from '../redux/home/homeSlice';

describe('testing homeReducer', () => {
  it('should set status to succeeded and contents to the fetched data when fetchCities.fulfilled is called', () => {
    const initialState = {
      data: [],
      status: 'idle',
      error: null,
    };

    const Apidata = [{
      coord: [{
        lon: '55',
        lat: '25',
      }],
      weather: [{
        main: 'Clear',
        description: 'clear sky',
      }],
      main: [{
        temp: 305.16,
        temp_min: 303.37,
        temp_max: 305.17,
        pressure: 1013,
        humidity: 62,
      }],
      visibility: 10000,
      wind: [{
        speed: 3.6,
        deg: 320,
      }],
    }];

    const action = { type: fetchCities.fulfilled.type, payload: Apidata };

    const expectedState = {
      data: Apidata,
      status: 'succeeded',
      error: null,
    };
    expect(homeReducer(initialState, action)).toEqual(expectedState);
  });
});
