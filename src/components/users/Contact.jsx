import React, { useState, useEffect } from "react";

const Contact = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      const response = await fetch("/api/contact");
      const data = await response.json();
      setContacts(data.contact);
    };

    fetchContacts();
  }, []);
  return (
    <div class="container cart-body border">
      <h4 className="card-title">Messages from Customer</h4>

      <table className="table">
        <thead>
          <tr>
            <th scope="col" className="text-white">
              Name
            </th>
            <th scope="col" className="text-white">
              Email
            </th>
            <th scope="col" className="text-white">
              Message
            </th>
          </tr>
        </thead>
        <tbody className="forWhite">
          {contacts.map((contact) => (
            <tr key={contact._id}>
              <td>
                <div class="col-sm-12 col-md-6 col-lg-4">
                  <p>Name: {contact.name}</p>
                </div>
              </td>
              <td>
                {" "}
                <div class="col-sm-12 col-md-6 col-lg-4">
                  <p>
                    Email:{" "}
                    <a href={`mailto:${contact.email}`}>{contact.email}</a>{" "}
                  </p>
                </div>
              </td>
              <td>
                {" "}
                <div class="col-sm-12 col-md-12 col-lg-4">
                  <p>Message: {contact.message}</p>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Contact;
