import workDesign from "../assets/images/work-design.png";
import project_1 from "../assets/images/project-1.jpeg";
import project_2 from "../assets/images/project-2.jpeg";
import project_3 from "../assets/images/project-3.jpeg";
import project_4 from "../assets/images/project-4.jpeg";
import project_5 from "../assets/images/project-5.jpeg";
// import project_6 from "../assets/images/project-6.jpeg";
import user1 from "../assets/images/user1.png";
import user2 from "../assets/images/user2.jpg";
import whyus from "../assets/images/whyus.png";
import { useEffect, useRef, useState } from "react";

export const BodyComponent = () => {
  const designer1galleryRef = useRef(null);
  const designer2galleryRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (window.lightGallery) {
      designer1galleryRef.current = window.lightGallery(
        document.getElementById("designer1-gallery"),
        {
          download: false,
          selector: "a",
          closeOnOutside: true
        }
      );

      designer2galleryRef.current = window.lightGallery(
        document.getElementById("designer2-gallery"),
        {
          download: false,
          selector: "a",
          closeOnOutside: true
        }
      );
    }

    return () => {
      if (designer1galleryRef.current) {
        designer1galleryRef.current.destroy(true);
      }

      if (designer2galleryRef.current) {
        designer2galleryRef.current.destroy(true);
      }
    };
  }, []);

  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const onFormSubmit = () => {
    console.log("Prudhvi", document.getElementById("dropdown").value);
  };

  return (
    <>
      {/* <div className="main-body-container"> */}
      <div className="body-container">
        <h1>Homes Designed For Tomorrow</h1>

        <svg
          id="Capa_1"
          x="0px"
          y="0px"
          width="70px"
          height="50px"
          viewBox="0 0 612 612"
          className="drop-down-icon"
        >
          <g transform="matrix(-1.83642e-16 0.9997 -0.9997 -1.83642e-16 611.908 0.0917906)">
            <g>
              {" "}
              <g id="fast_forward">
                {" "}
                <g>
                  {" "}
                  <path
                    d="M325.402,0.296h-57.912L554.088,306L267.491,611.704h57.912L612,306L325.402,0.296z M57.912,0.296H0L286.597,306     L0,611.704h57.912L344.509,306L57.912,0.296z"
                    data-original="#000000"
                    class="active-path"
                    data-old_color="#000000"
                    fill="#FFFFFF"
                  ></path>{" "}
                </g>{" "}
              </g>
            </g>
          </g>{" "}
        </svg>

        {/* <svg
          version="1.1"
          id="Layer_1"

          x="0px"
          y="0px"
          viewBox="0 0 122.88 120.64"
          className="drop-down-icon"
          >
          <g>
            <path d="M108.91,54.03c1.63-1.55,3.74-2.31,5.85-2.28c2.11,0.03,4.2,0.84,5.79,2.44l0.12,0.12c1.5,1.58,2.23,3.6,2.2,5.61 c-0.03,2.01-0.82,4.02-2.37,5.55c-17.66,17.66-35.61,35.13-53.4,52.68c-0.05,0.07-0.1,0.13-0.16,0.19 c-1.63,1.55-3.76,2.31-5.87,2.28c-2.11-0.03-4.21-0.85-5.8-2.45l-0.26-0.27C37.47,100.43,19.87,82.98,2.36,65.46 C0.82,63.93,0.03,61.93,0,59.92c-0.03-2.01,0.7-4.03,2.21-5.61l0.15-0.15c1.58-1.57,3.66-2.38,5.76-2.41 c2.1-0.03,4.22,0.73,5.85,2.28l47.27,47.22L108.91,54.03L108.91,54.03z M106.91,2.26c1.62-1.54,3.73-2.29,5.83-2.26 c2.11,0.03,4.2,0.84,5.79,2.44l0.12,0.12c1.5,1.57,2.23,3.6,2.21,5.61c-0.03,2.01-0.82,4.02-2.37,5.55 C101.2,31.01,84.2,48.87,67.12,66.39c-0.05,0.07-0.11,0.14-0.17,0.21c-1.63,1.55-3.76,2.31-5.87,2.28 c-2.11-0.03-4.21-0.85-5.8-2.45C38.33,48.94,21.44,31.36,4.51,13.83l-0.13-0.12c-1.54-1.53-2.32-3.53-2.35-5.54 C2,6.16,2.73,4.14,4.23,2.56l0.15-0.15C5.96,0.84,8.05,0.03,10.14,0c2.1-0.03,4.22,0.73,5.85,2.28l45.24,47.18L106.91,2.26 L106.91,2.26z" />
          </g>
        </svg> */}
      </div>

      <div className="sections-container">
        <div className="our-work-container pd-tb-80-rl-40" id="ourWork">
          <h3 className=" text-align-c">HOW WE WORK</h3>
          <p className="mr-tb-30 text-align-c">
            Designing your newly-bought home has never been this simple before.
          </p>
          <div className="work-cards">
            <div className="work-card">
              <p className="font-size-20 ">WE DESIGN</p>

              <img src={workDesign} alt="work-icon" className="work-icon" />
              <p>
                <span className="prim-color font-b">01.</span>
                Book a design consultation with some of Hyderabad's best
                designers. Get your home designed for the dreams of tomorrow
              </p>
            </div>
            <div className="work-card">
              <p className="font-size-20 ">YOU VISUALIZE</p>

              <img src={workDesign} alt="work-icon" className="work-icon" />
              <p>
                <span className="prim-color font-b">02.</span>See your home in
                every angle and “try before you buy” furniture, using our
                Virtual Reality walkthrough
              </p>
            </div>
            <div className="work-card">
              <p className="font-size-20 ">WE IMPLEMENT</p>
              <img src={workDesign} alt="work-icon" className="work-icon" />
              <p>
                <span className="prim-color font-b">03.</span>
                Sit back & Relax. In just 60 days, an army of experts will make
                the Virtual Reality a glorious reality
              </p>
            </div>
          </div>
        </div>

        <div
          className="our-projects-container pd-tb-80-rl-40"
          id="recentProjects"
        >
          <h3 className="text-align-c clg-pri">OUR PROJECTS</h3>
          <p className="mr-tb-30 text-align-c">
            Designing your newly-bought home has never been this simple before.
          </p>

          <div className="project-container mr-tb-40">
            <div className="images-container" id="designer1-gallery">
              <div className="right-container">
                <a href={project_1}>
                  <img
                    src={project_1}
                    alt="project"
                    className="image image-1"
                    data-src={project_1}
                  />
                </a>
                <a href={project_2}>
                  <img
                    src={project_2}
                    alt="project"
                    className="image image-2"
                    data-src={project_2}
                  />
                </a>

                <a href={project_3}>
                  <img
                    src={project_3}
                    alt="project"
                    className="image image-3"
                  />
                </a>

                <a href={project_4}>
                  <img
                    src={project_4}
                    alt="project"
                    className="image image-4"
                  />
                </a>
              </div>
              <div className="left-container">
                <a href={project_5}>
                  <img
                    src={project_5}
                    alt="project"
                    className="image image-5"
                  />
                </a>
              </div>
            </div>
            <div className="project-designer mr-tb-40">
              <div className="rt-c">
                <img src={user1} alt="designer" className="mr-tb-10" />
              </div>
              <div className="lt-c">
                <div className="project-designer-about mr-tb-10">
                  <p className="designer-name mr-tb-10">
                    Chandu
                    <br />
                    Interior Designer
                  </p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Consectetur fugiat nobis debitis ipsa dolores aspernatur,
                  natus eveniet voluptates dignissimos ab ipsam delectus sit
                  veniam accusamus minus cum voluptas iste. Repellat!
                </div>
              </div>
            </div>
          </div>

          <div className="divider"></div>

          <div className="project-container mr-tb-40">
            <div className="images-container" id="designer2-gallery">
              <div className="right-container">
                <a href={project_1}>
                  <img
                    src={project_1}
                    alt="project"
                    className="image image-1"
                    data-src={project_1}
                  />
                </a>
                <a href={project_2}>
                  <img
                    src={project_2}
                    alt="project"
                    className="image image-2"
                    data-src={project_2}
                  />
                </a>

                <a href={project_3}>
                  <img
                    src={project_3}
                    alt="project"
                    className="image image-3"
                  />
                </a>

                <a href={project_4}>
                  <img
                    src={project_4}
                    alt="project"
                    className="image image-4"
                  />
                </a>
              </div>
              <div className="left-container">
                <a href={project_5}>
                  <img
                    src={project_5}
                    alt="project"
                    className="image image-5"
                  />
                </a>
              </div>
            </div>
            <div className="project-designer mr-tb-40">
              <div className="rt-c">
                <img src={user2} alt="designer" className="mr-tb-10" />
              </div>
              <div className="lt-c">
                <div className="project-designer-about mr-tb-10">
                  <p className="designer-name mr-tb-10">
                    Swathi
                    <br />
                    Interior Designer
                  </p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Consectetur fugiat nobis debitis ipsa dolores aspernatur,
                  natus eveniet voluptates dignissimos ab ipsam delectus sit
                  veniam accusamus minus cum voluptas iste. Repellat!
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="whyUs-container pd-tb-80-rl-40">
          <h3 className="text-align-c font-color-white">WHY US</h3>
          <p className="mr-tb-30 text-align-c font-color-white">
            Designing your newly-bought home has never been this simple before.
          </p>

          <div className="whyUs-Details-container">
            <div className="container">
              <img src={whyus} alt="" />
              <h4 className="heading-section prim-color mr-tb-20">
                Personal Designer
              </h4>
              <p>
                Will transform your every need into functional & aesthetic
                design, and help you plan your space intelligently
              </p>
            </div>

            <div className="container">
              <img src={whyus} alt="" />
              <h4 className="heading-section prim-color mr-tb-20">
                VR Experience
              </h4>
              <p>
                Will transform your every need into functional & aesthetic
                design, and help you plan your space intelligently
              </p>
            </div>

            <div className="container">
              <img src={whyus} alt="" />
              <h4 className="heading-section prim-color mr-tb-20">
                Impeccable Implementation
              </h4>
              <p>
                Will transform your every need into functional & aesthetic
                design, and help you plan your space intelligently
              </p>
            </div>

            <div className="container">
              <img src={whyus} alt="" />
              <h4 className="heading-section prim-color mr-tb-20">
                Reputed Partners
              </h4>
              <p>
                Will transform your every need into functional & aesthetic
                design, and help you plan your space intelligently
              </p>
            </div>

            <div className="container">
              <img src={whyus} alt="" />
              <h4 className="heading-section prim-color mr-tb-20">
                Personal Designer
              </h4>
              <p>
                Will transform your every need into functional & aesthetic
                design, and help you plan your space intelligently
              </p>
            </div>

            <div className="container">
              <img src={whyus} alt="" />
              <h4 className="heading-section prim-color mr-tb-20">
                VR Experience
              </h4>
              <p>
                Will transform your every need into functional & aesthetic
                design, and help you plan your space intelligently
              </p>
            </div>

            <div className="container">
              <img src={whyus} alt="" />
              <h4 className="heading-section prim-color mr-tb-20">
                Impeccable Implementation
              </h4>
              <p>
                Will transform your every need into functional & aesthetic
                design, and help you plan your space intelligently
              </p>
            </div>

            <div className="container">
              <img src={whyus} alt="" />
              <h4 className="heading-section prim-color mr-tb-20">
                Reputed Partners
              </h4>
              <p>
                Will transform your every need into functional & aesthetic
                design, and help you plan your space intelligently
              </p>
            </div>
          </div>
        </div>

        <div className="customers-container pd-tb-80-rl-40">
          <h3 className="text-align-c  clg-pri">OUR CUSTOMER'S REVIEW</h3>
          <p className="mr-tb-30 text-align-c">
            Designing your newly-bought home has never been this simple before.
          </p>

          <div className="reviews-container">
            <div className="customer-review">
              <div className="review- mr-tb-10">
                <div className="customer-name mr-tb-10">
                  Shiva Ram Reddy
                  <br />
                  Raheja Constructions
                </div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consectetur fugiat nobis debitis ipsa dolores aspernatur, natus
                eveniet voluptates dignissimos ab ipsam delectus sit veniam
                accusamus minus cum voluptas iste. Repellat!
                <br />
                <div className="star-rating">
                  <span className="star filled">&#9733;</span>
                  <span className="star filled">&#9733;</span>
                  <span className="star filled">&#9733;</span>
                  <span className="star filled">&#9733;</span>
                  <span className="star filled">&#9733;</span>
                </div>
              </div>
            </div>

            <div className="customer-review">
              <div className="review- mr-tb-10">
                <div className="customer-name mr-tb-10">
                  Shiva Ram Reddy
                  <br />
                  Prestige Apartments
                </div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consectetur fugiat nobis debitis ipsa dolores aspernatur, natus
                eveniet voluptates dignissimos ab ipsam delectus sit veniam
                accusamus minus cum voluptas iste. Repellat!
                <br />
                <div className="star-rating">
                  <span className="star filled">&#9733;</span>
                  <span className="star filled">&#9733;</span>
                  <span className="star filled">&#9733;</span>
                  <span className="star filled">&#9733;</span>
                  <span className="star filled">&#9733;</span>
                </div>
              </div>
            </div>

            <div className="customer-review">
              <div className="review- mr-tb-10">
                <div className="customer-name mr-tb-10">
                  Shiva Ram Reddy
                  <br />
                  EAPL apartment
                </div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consectetur fugiat nobis debitis ipsa dolores aspernatur, natus
                eveniet voluptates dignissimos ab ipsam delectus sit veniam
                accusamus minus cum voluptas iste. Repellat!
                <br />
                <div className="star-rating">
                  <span className="star filled">&#9733;</span>
                  <span className="star filled">&#9733;</span>
                  <span className="star filled">&#9733;</span>
                  <span className="star filled">&#9733;</span>
                  <span className="star">&#9733;</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ourPartners-container pd-tb-80-rl-40">
          <h3 className="text-align-c  clg-pri">WE ARE PARTNERED WITH</h3>
          <p className="mr-tb-30 text-align-c">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
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
      </div>

      {/* </div> */}
    </>
  );
};
