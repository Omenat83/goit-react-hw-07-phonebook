import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getContactsThunk,
  addContactsThunk,
  deleteContactsThunk,
} from './thunks';

const arrThunk = [getContactsThunk, addContactsThunk, deleteContactsThunk];

const createThunks = type => arrThunk.map(el => el[type]);

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: '',
};

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = state => {
  state.isLoading = false;
  state.error = '';
};

const handleFulfilledGet = (state, { payload }) => {
  state.items = payload;
};
const handleFulfilledAdd = (state, { payload }) => {
  state.items.push(payload);
};
const handleFulfilledDelete = (state, { payload }) => {
  state.items = state.items.filter(el => el.id !== payload.id);
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.fulfilled, handleFulfilledGet)
      .addCase(addContactsThunk.fulfilled, handleFulfilledAdd)
      .addCase(deleteContactsThunk.fulfilled, handleFulfilledDelete)
      .addMatcher(isAnyOf(...createThunks('pending')), handlePending)
      .addMatcher(isAnyOf(...createThunks('rejected')), handleRejected)
      .addMatcher(isAnyOf(...createThunks('fulfilled')), handleFulfilled);
  },
});

export const contactsReducer = contactsSlice.reducer;
