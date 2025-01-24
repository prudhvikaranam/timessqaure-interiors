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
              Follow Us<br/>
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
                    placeholder="Your Name"
                    required
                  />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    required
                  />
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    placeholder="Your Mobile Number"
                    required
                  />
                  <select id="dropdown" name="dropdown">
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                  <select id="location" name="location">
                    <option value="city1">City 1</option>
                    <option value="city2">City 2</option>
                    <option value="city3">City 3</option>
                  </select>
                  <select id="possession" name="possession">
                    <option value="own">Own</option>
                    <option value="rent">Rent</option>
                    <option value="lease">Lease</option>
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
