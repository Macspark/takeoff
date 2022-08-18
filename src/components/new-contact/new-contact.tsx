import { FormEvent, useRef, useState } from "react";
import {useAppDispatch} from '../../hooks/useApp'
import { addContactAction } from "../../store/api-actions";

function NewContact(): JSX.Element {
  const [isFormActive, toggleForm] = useState(false);
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (nameRef.current !== null && emailRef.current !== null) {
      dispatch(addContactAction({
        'name': nameRef.current.value,
        'email': emailRef.current.value,
      }));
    }
  }

  return (
    <div>
      <button type="button" onClick={() => toggleForm(!isFormActive)}>{isFormActive ? '-- New Contact' : '++ New Contact'}</button>
      <form
        style={{display: isFormActive ? 'block' : 'none' }}
        className="contact__form"
        action=""
        onSubmit={handleSubmit}
      >
        <div className="contact__input-wrapper">
          <label className="visually-hidden">Name</label>
          <input
            ref={nameRef}
            className="input"
            type="text"
            name="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="contact__input-wrapper">
          <label className="visually-hidden">Email</label>
          <input
            ref={emailRef}
            className="input"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
        </div>
        <button className="contact__submit" type="submit">Add Contact</button>
      </form>
    </div>
  );
}

export default NewContact;
