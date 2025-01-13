import staircase from "../assets/images/staircase.png";
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
import { useEffect, useRef } from "react";

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
      <div className="body-container">
        <h1>Homes Designed For Tomorrow</h1>
        <img src={staircase} alt="body-icon" className="body-icon mr-tb-30" />
      </div>

      <div className="sections-container">
        <div className="our-work-container pd-tb-80-rl-40" id="ourWork">
          <h3 className=" text-align-c">HOW WE WORK</h3>
          <p className="mr-tb-30 text-align-c">
            Designing your newly-bought home has never been this simple before.
          </p>
          <div className="work-cards">
            <div className="work-card">
              <p>WE DESIGN FOR YOU.</p>

              <img src={workDesign} alt="work-icon" className="work-icon" />
              <p>
                Book a design consultation with some of Hyderabad's best
                designers. Get your home designed for the dreams of tomorrow
              </p>
            </div>
            <div className="work-card">
              <p>YOU VISUALIZE OUR DESIGN.</p>

              <img src={workDesign} alt="work-icon" className="work-icon" />
              <p>
                See your home in every angle and “try before you buy” furniture,
                using our Virtual Reality walkthrough
              </p>
            </div>
            <div className="work-card">
              <p>WE IMPLEMENT THE DESIGN</p>
              <img src={workDesign} alt="work-icon" className="work-icon" />
              <p>
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
          <h3 className="text-align-c">WHY US</h3>
          <p className="mr-tb-30 text-align-c">
            Designing your newly-bought home has never been this simple before.
          </p>

          <div className="whyUs-Details-container">
            <div className="container">
              <img src={whyus} alt="" />
              <h4 className="heading-section">Personal Designer</h4>
              <p>
                Will transform your every need into functional & aesthetic
                design, and help you plan your space intelligently
              </p>
            </div>

            <div className="container">
              <img src={whyus} alt="" />
              <h4 className="heading-section">VR Experience</h4>
              <p>
                Will transform your every need into functional & aesthetic
                design, and help you plan your space intelligently
              </p>
            </div>

            <div className="container">
              <img src={whyus} alt="" />
              <h4 className="heading-section">Impeccable Implementation</h4>
              <p>
                Will transform your every need into functional & aesthetic
                design, and help you plan your space intelligently
              </p>
            </div>

            <div className="container">
              <img src={whyus} alt="" />
              <h4 className="heading-section">Reputed Partners</h4>
              <p>
                Will transform your every need into functional & aesthetic
                design, and help you plan your space intelligently
              </p>
            </div>

            <div className="container">
              <img src={whyus} alt="" />
              <h4 className="heading-section">Personal Designer</h4>
              <p>
                Will transform your every need into functional & aesthetic
                design, and help you plan your space intelligently
              </p>
            </div>

            <div className="container">
              <img src={whyus} alt="" />
              <h4 className="heading-section">VR Experience</h4>
              <p>
                Will transform your every need into functional & aesthetic
                design, and help you plan your space intelligently
              </p>
            </div>

            <div className="container">
              <img src={whyus} alt="" />
              <h4 className="heading-section">Impeccable Implementation</h4>
              <p>
                Will transform your every need into functional & aesthetic
                design, and help you plan your space intelligently
              </p>
            </div>

            <div className="container">
              <img src={whyus} alt="" />
              <h4 className="heading-section">Reputed Partners</h4>
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
      </div>
    </>
  );
};
