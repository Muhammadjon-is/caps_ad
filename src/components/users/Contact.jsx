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
            <th scope="col" className="text-white">
              Date
            </th>
          </tr>
        </thead>
        <tbody className="forWhite">
          {contacts.map((contact) => (
            <tr key={contact._id}>
              <td className="border">
                <div class="col-sm-12 col-md-6 col-lg-4 ">
                  <p> {contact.name}</p>
                </div>
              </td>
              <td className="border">
                <div class="col-sm-12 col-md-6 col-lg-4 ">
                  <p>
                    <a className="text-yellow" href={`mailto:${contact.email}`}>
                      {contact.email}
                    </a>
                  </p>
                </div>
              </td>
              <td className="border">
                <div class="col-sm-12 col-md-12 col-lg-4">
                  <p> {contact.message}</p>
                </div>
              </td>
              <td className="border forDate">
                <div class="col-sm-12 col-md-12 col-lg-4 forDate">
                  <p>
                    {" "}
                    {new Date(contact.createdAt).toLocaleDateString("en-US", {
                      year: "2-digit",
                      month: "2-digit",
                      day: "2-digit",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                
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
