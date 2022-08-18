export enum AppRoute {
  Root = '/',
  Contacts = '/contacts',
}

export enum APIRoute {
  Contacts = '/contacts',
  Login = '/login',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
}

export const BACKEND_URL = 'http://localhost:3000';
export const REQUEST_TIMEOUT = 5000;

export enum NameSpace {
  Data = 'DATA',
  User = 'USER',
  Site = 'SITE',
}
