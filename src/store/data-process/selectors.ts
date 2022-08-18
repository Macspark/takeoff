import {NameSpace} from '../../const';
import {Contact} from '../../types/contact';
import {State} from '../../types/state';

export const getContacts = (state: State): Contact[] => state[NameSpace.Data].contacts;
