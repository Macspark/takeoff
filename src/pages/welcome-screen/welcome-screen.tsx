import {FormEvent, useEffect, useRef} from 'react';
import {useNavigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import {useAppDispatch, useAppSelector} from '../../hooks/useApp';
import { loginAction } from '../../store/api-actions';
import {getAuthStatus} from '../../store/user-process/selectors';

function WelcomeScreen(): JSX.Element {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const authorizationStatus = useAppSelector(getAuthStatus);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      navigate(AppRoute.Contacts);
    }
  }, [authorizationStatus, navigate]);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (emailRef.current !== null && passwordRef.current !== null) {
      dispatch(loginAction({
        login: emailRef.current.value,
        password: passwordRef.current.value,
      }))
    }
  };

  return (
    <div>
      <section className="login">
        <h1 className="login__title">Sign in</h1>
        <form
          className="login__form"
          action=""
          onSubmit={handleSubmit}
        >
          <div className="login__input-wrapper">
            <label className="visually-hidden">E-mail</label>
            <input
              ref={emailRef}
              className="login__input"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="login__input-wrapper">
            <label className="visually-hidden">Password</label>
            <input
              ref={passwordRef}
              className="login__input"
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </div>
          <button className="login__submit" type="submit">Sign in</button>
        </form>
      </section>
    </div>
  );
}


export default WelcomeScreen;
