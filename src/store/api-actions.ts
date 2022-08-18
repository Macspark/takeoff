import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {APIRoute, AppRoute} from '../const';
import {Contact, ContactPostData} from '../types/contact';
import {AppDispatch, State} from '../types/state';
import {redirectToRoute} from './action';
import {AuthData} from '../types/auth-data';

export const fetchContactsAction = createAsyncThunk<Contact[], undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchContacts',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Contact[]>(APIRoute.Contacts);
    return data;
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({login, password}, {dispatch, extra: api}) => {
    await api.post(APIRoute.Login, {login, password});
    dispatch(redirectToRoute(AppRoute.Contacts));
  },
);

export const addContactAction = createAsyncThunk<void, ContactPostData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/addContact',
  async (formData, {dispatch, extra: api}) => {
    await api.post(APIRoute.Contacts, formData);
    dispatch(fetchContactsAction());
  },
);

export const deleteContactAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/addContact',
  async (contactId, {dispatch, extra: api}) => {
    await api.delete(`${APIRoute.Contacts}/${contactId}`);
    dispatch(fetchContactsAction());
  },
);

export const editContactAction = createAsyncThunk<void, Contact, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/postReview',
  async (contactData, {dispatch, extra: api}) => {
    await api.put(`${APIRoute.Contacts}/${contactData.id}`, contactData);
    console.log(`putting into ${APIRoute.Contacts}/${contactData.id}`)
    console.log(contactData)
    dispatch(fetchContactsAction());
  },
);