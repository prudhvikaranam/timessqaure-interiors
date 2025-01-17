import { useState } from "react";

export const OurWork = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const onFormSubmit = () => {
    console.log("Prudhvi", document.getElementById("dropdown").value);
  };

  return (
    <>
      <div className="ourword-main-container">
        <h1 className="font-size-24 fw-100 mr-b-30 we-work">HOW WE WORK</h1>

        <p className="font-size-14 fw-100 mr-b-30">
          Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum
          perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret
          expetendis his, te elit voluptua dignissim per, habeo iusto primis ea
          eam.
        </p>

        <div class="work-timeline timeline">
          <div class="container right">
            <div class="content">
              <h2 className="font-size-14 prim-color">WE DESIGN</h2>
              <p className="font-size-12 mr-tb-20">
                Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
                quis iuvaret expetendis his, te elit voluptua dignissim per,
                habeo iusto primis ea eam.
              </p>
            </div>
          </div>
          <div class="container right">
            <div class="content">
              <h2 className="font-size-14 prim-color">YOU VISUALIZE</h2>
              <p className="font-size-12 mr-tb-20">
                Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
                quis iuvaret expetendis his, te elit voluptua dignissim per,
                habeo iusto primis ea eam.
              </p>
            </div>
          </div>
          <div class="container right">
            <div class="content">
              <h2 className="font-size-14 prim-color">WE IMPLEMENT</h2>
              <p className="font-size-12 mr-tb-20">
                Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
                quis iuvaret expetendis his, te elit voluptua dignissim per,
                habeo iusto primis ea eam.
              </p>
            </div>
          </div>
          <div class="container right">
            <div class="content">
              <h2 className="font-size-14 prim-color">Take over</h2>
              <p className="font-size-12 mr-tb-20">
                Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
                quis iuvaret expetendis his, te elit voluptua dignissim per,
                habeo iusto primis ea eam.
              </p>
            </div>
          </div>
        </div>
      </div>




      <div className="footer-container pd-tb-80-rl-40">
          <h3 className="text-align-c font-color-white">
            INTERIOR DESIGN SERVICES IN TELANGANA & ANDHRA PRADESH
          </h3>
          <p className="mr-tb-30 text-align-c font-color-white">
            Designing your newly-bought home has never been this simple before.
          </p>

          <div className="address-container">
            <div className="address-landmark font-color-white">
              Lorem ipsum dolor sit, .<br /> Facere atque maxime, <br />
              adipisci praesentium ratione
            </div>

            <div className="address-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.366718522326!2d78.37460807331928!3d17.44215340122879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93001b75ba2b%3A0x72aef5ac3f2e4e9a!2sRaidurg%20Metro%20Station!5e0!3m2!1sen!2sin!4v1736965273881!5m2!1sen!2sin"
                width="600"
                height="450"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                className="google-map-timesSquareInteriors"
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

                <h2 className="text-align-c font-color-white fw-100">
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
