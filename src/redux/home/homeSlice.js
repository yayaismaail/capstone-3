import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCities = createAsyncThunk(
  'cities/fetchCities',
  async () => {
    try {
      const response = await fetch(
        'https://api.openweathermap.org/data/2.5/weather?lat=25.21490645&lon=55.174787069501136&appid=21aebf13ffa527bf0b5a8674bc387578',
      );
      const data = await response.json();
      return data;
    } catch (error) {
      throw Error('Unable to fetch weather data');
    }
  },
);

const initialState = {
  data: [],
  status: 'idle',
  error: null,
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCities.pending, (state) => {
        // eslint-disable-next-line no-param-reassign
        state.status = 'loading';
      })
      .addCase(fetchCities.fulfilled, (state, action) => ({
        ...state,
        status: 'succeeded',
        data: action.payload,
      }))
      .addCase(fetchCities.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }));
  },
});

export default homeSlice.reducer;
