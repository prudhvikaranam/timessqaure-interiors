import workDesign from "../assets/images/work-design.png";
import project_1 from "../assets/images/project-1.jpeg";
import project_2 from "../assets/images/project-2.jpeg";
import project_3 from "../assets/images/project-3.jpeg";
import project_4 from "../assets/images/project-4.jpeg";
import project_5 from "../assets/images/project-5.jpeg";
import user1 from "../assets/images/user1.png";
import user2 from "../assets/images/user2.jpg";
import whyus from "../assets/images/whyus.png";
import { useEffect, useRef } from "react";
import { Footer } from "./footer";
import { Link } from "react-router-dom";
import whatsApp from "../assets/images/whatsApp.png";
import theme1 from "../assets/images/project-6.jpeg";
import theme2 from "../assets/images/bedroom_1_3.jpeg";
import theme3 from "../assets/images/bedroom_1_9.jpeg";
import theme4 from "../assets/images/bedroom_1_12.jpeg";

export const BodyComponent = () => {
  const designer1galleryRef = useRef(null);
  const designer2galleryRef = useRef(null);

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

  return (
    <>
      {/* <div className="main-body-container"> */}
      <div className="body-container">
        <h1>Transforming Spaces, Elevating Lifestyles</h1>
        {/* <h1>Spaces Crafted for the Future</h1> */}
    
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

      </div>


      <div className="contact-whatsApp">
        <img src={whatsApp} alt="whatsApps-icon" className="whatsApp-image" />
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
              <p className="font-size-16">
                <span className="prim-color font-b font-size-20">01.</span>&nbsp;
                Book a design consultation with some of Hyderabad's best
                designers. Get your home designed for the dreams of tomorrow
              </p>
            </div>
            <div className="work-card">
              <p className="font-size-20 ">YOU VISUALIZE</p>&nbsp;

              <img src={workDesign} alt="work-icon" className="work-icon" />
              <p className="font-size-16">
                <span className="prim-color font-b  font-size-20">02.</span>&nbsp;See your home in
                every angle and “try before you buy” furniture, using our
                Virtual Reality walkthrough
              </p>
            </div>
            <div className="work-card">
              <p className="font-size-20 ">WE IMPLEMENT</p>&nbsp;
              <img src={workDesign} alt="work-icon" className="work-icon" />
              <p className="font-size-16">
                <span className="prim-color font-b  font-size-20">03.</span>&nbsp;
                Sit back & Relax. In just 60 days, an army of experts will make
                the Virtual Reality a glorious reality
              </p>
            </div>
          </div>
        </div>


        <div
          className="our-themes-container pd-tb-80-rl-40"
          id="designThemes"
        >
          <h3 className="text-align-c clg-pri"> DESIGN THEMES</h3>
          <p className="mr-tb-30 text-align-c">
            Designing your newly-bought home has never been this simple before.
          </p>


          <div className="themes-images-container mr-tb-40">
            <div className="image-container">
              <img src={theme1} alt='themes-image' />
              <p className="theme-name">THEME ONE</p>
            </div>
            <div className="image-container">

              <img src={theme2} alt='themes-image' />
              <p className="theme-name">THEME TWO</p>
            </div>
            <div className="image-container">

              <img src={theme3} alt='themes-image' />
              <p className="theme-name">THEME THREE</p>
            </div>
            <div className="image-container">
              <img src={theme4} alt='themes-image' />
              <p className="theme-name">THEME FOUR</p>
            </div>
          </div>
          <button>
            <Link to={"/themes"}>View More</Link>
          </button>
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

          <button>
            <Link to={"/projects"}>View More</Link>
          </button>
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

        <Footer />
      </div>

      {/* </div> */}
    </>
  );
};
