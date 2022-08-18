import {NameSpace} from '../../const';
import {State} from '../../types/state';
import {AuthorizationStatus} from '../../const';

export const getAuthStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
