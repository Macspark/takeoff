import {AuthorizationStatus} from '../const.js';
import {store} from '../store/index.js';
import {Contact} from './contact.js';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
  authorizationStatus: AuthorizationStatus,
};

export type DataProcess = {
  contacts: Contact[],
}