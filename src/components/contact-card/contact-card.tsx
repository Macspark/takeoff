import React, { FormEvent, useRef, useState } from "react";
import { useAppDispatch } from "../../hooks/useApp";
import { deleteContactAction, editContactAction } from "../../store/api-actions";
import {Contact} from "../../types/contact";

type ContactProps = {
  contact: Contact,
}

function ContactCard({contact}: ContactProps): JSX.Element {
  const dispatch = useAppDispatch();
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const [isEditFormActive, toggleEditForm] = useState(false);

  const handleEditSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    toggleEditForm(false);
    if (nameRef.current !== null && emailRef.current !== null) {
      dispatch(editContactAction({
        id: contact.id,
        name: nameRef.current.value,
        email: emailRef.current.value,
      }));
    }
  }

  const handleDeleteClick = (evt: React.MouseEvent) => {
    evt.preventDefault();
    dispatch(deleteContactAction(contact.id));
  }

  return (
    <li>
      <div
        style={{display: !isEditFormActive ? 'block' : 'none' }}
      >
        <div>
          <h2>{contact.name}</h2>
          <h3>{contact.email}</h3>
        </div>
        <div>
          <button onClick={() => toggleEditForm(true)} type="button">Edit</button>
          <button onClick={handleDeleteClick} type="button">Delete</button>
        </div>
      </div>
      <form
        style={{display: isEditFormActive ? 'block' : 'none' }}
        className="contact__form"
        action=""
        onSubmit={handleEditSubmit}
      >
        <div className="contact__input-wrapper">
          <label className="visually-hidden">Name</label>
          <input
            ref={nameRef}
            className="input"
            type="text"
            name="name"
            placeholder="Name"
            defaultValue={contact.name}
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
            defaultValue={contact.email}
          />
        </div>
        <button className="contact__submit" type="submit">Save</button>
      </form>
    </li>
  )
}

export default ContactCard;
