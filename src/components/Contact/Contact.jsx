import React from "react";
import ContactUs from "../Home/ContactUS";
import Banner from "../../components/Banner";

const Contact = () => {
  return (
    <>
      <Banner
        title="Contact Us"
        subtitle="We'd love to hear from you!"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Contact Us", href: "/contact-us" },
        ]}
      />
      <ContactUs />
    </>
  );
};

export default Contact;