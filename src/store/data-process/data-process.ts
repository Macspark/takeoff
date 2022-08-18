import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {DataProcess} from '../../types/state';
import {fetchContactsAction} from '../api-actions';

const initialState: DataProcess = {
  contacts: [],
};

export const dataProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchContactsAction.fulfilled, (state, action) => {
        state.contacts = action.payload;
        console.log(action.payload);
      });
  },
});
