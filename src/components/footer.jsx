import { useState } from "react";

export const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const onFormSubmit = () => {
    console.log("Prudhvi", document.getElementById("dropdown").value);
  };

  return (
    <>
      <div className="footer-container pd-tb-80-rl-40">
        <h3 className="text-align-c font-color-white">
          INTERIOR DESIGN SERVICES IN TELANGANA
        </h3>
        <p className="mr-tb-30 text-align-c font-color-white">
          Designing your newly-bought home has never been this simple before.
        </p>

        <div className="address-container">
          <div className="address-landmark font-color-white">

            <p className="mr-b-15">
              Leading Interior Decorators and Interior designers in Hyderabad, started by a group of passionate interior designers, interior decorators, interior architects. With more than 15+ years of interior desiging expertise.
            </p>

            <p className="mr-b-15">
              Follow Us  &nbsp;&nbsp;&nbsp;
              <i class="fa fa-facebook-official follow-icons" aria-hidden="true"></i>
              <i class="fa fa-instagram follow-icons" aria-hidden="true"></i>
              <i class="fa fa-twitter-square follow-icons" aria-hidden="true"></i>

            </p>



            <p className="mr-b-15">
              <i className="fa fa-map-marker prim-color" aria-hidden="true"></i>&nbsp;Sunshine Residency, B-Block, Flat No: 204, Janardhan Hills, Gachibowli, Hyderabad - 500081
            </p>
          </div>

          <div className="address-map">




            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15225.886622657352!2d78.35081355177586!3d17.437125222590282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93eee0b0e2df%3A0x6a99f427594b5058!2sSunshine%20Residency!5e0!3m2!1sen!2sin!4v1737707599228!5m2!1sen!2sin"
              width="300"
              height="300"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="google-map-timesSquareInteriors"
              title="google-map-ts"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="contact-form-container">
        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal-content">
              {/* Close button */}

              <button className="close-btn" onClick={toggleModal}>
                &times;
              </button>

              <h2 className="text-align-c font-color-white fw-100 mr-b-30">
                Book A Consultation
              </h2>

              <div className="contactForm-container">
                <form action="#" class="contact-form">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name *"
                    required
                  />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email *"
                    required
                  />
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    placeholder="Your Mobile Number *"
                    required
                  />

                  <input
                    type="text"
                    id="property"
                    name="property"
                    placeholder="Property Name *"
                    required
                  />


                  <select id="dropdown" name="dropdown">
                    <option value="Office Space">Office Space</option>
                    <option value="1 BHK">1 BHK</option>
                    <option value="2 BHK">2 BHK</option>
                    <option value="3 BHK">3 BHK</option>
                    <option value="4 BHK">4 BHK</option>
                    <option value="4+ BHK">4+ BHK</option>

                  </select>
                  <select id="location" name="location">
                    <option value="HYDERABAD">HYDERABAD</option>
                    <option value="ANATAPUR">ANANTAPUR</option>
                  </select>
                  <select id="possession" name="possession">
                    <option value="Already have Possession">Already have Possession</option>
                    <option value="0-3 Months">In 0 - 3 Months</option>
                    <option value="3-6 Months">In 3 - 6 Months</option>
                    <option value="6 + Months">More than 6 Months</option>

                  </select>
                  <button type="submit" onClick={onFormSubmit}>
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="contactUs-container">
        <button onClick={toggleModal}>BOOK A CONSULTION WITH US </button>
      </div>
    </>
  );
};
