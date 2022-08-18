import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute} from '../../const';
import WelcomeScreen from '../../pages/welcome-screen/welcome-screen';
import ContactsScreen from '../../pages/contacts/contacts';
import PrivateRoute from '../private-route/private-route';
import {useAppSelector} from '../../hooks/useApp';
import {getAuthStatus} from '../../store/user-process/selectors';

function App(): JSX.Element {
  const authStatus = useAppSelector(getAuthStatus);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<WelcomeScreen />}
        />
        <Route
          path={AppRoute.Contacts}
          element={
            <PrivateRoute
              authorizationStatus={authStatus}
            >
              <ContactsScreen />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
