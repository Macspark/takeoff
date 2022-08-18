import React from "react";
import ContactCard from "../../components/contact-card/contact-card";
import NewContact from "../../components/new-contact/new-contact";
import {useAppSelector} from "../../hooks/useApp";
import {getContacts} from "../../store/data-process/selectors";

function ContactsScreen(): JSX.Element {
  const contacts = useAppSelector(getContacts);
  console.log('re')

  return (
    <>
      <ul>
        {
          contacts.map((contact, index) => {
            const key = `${contact.id}-${index}`;
            return ( 
              <ContactCard contact={contact} key={key} />
            )
          })
        }
      </ul>
      <NewContact />
    </>
  );
}

export default React.memo(ContactsScreen);
