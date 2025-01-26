import { useEffect, useRef } from "react";
// import project_3_1 from "../assets/images/projects/projects-3/project_3_1.jpg";
// import project_3_2 from "../assets/images/projects/projects-3/project_3_2.jpg";
// import project_3_3 from "../assets/images/projects/projects-3/project_3_3.jpg";
// import project_3_4 from "../assets/images/projects/projects-3/project_3_4.jpeg";
// import project_3_5 from "../assets/images/projects/projects-3/project_3_5.jpeg";
// import project_3_6 from "../assets/images/projects/projects-3/project_3_6.jpeg";
// import project_3_7 from "../assets/images/projects/projects-3/project_3_7.jpeg";
// import project_3_8 from "../assets/images/projects/projects-3/project_3_8.jpeg";
// import project_3_9 from "../assets/images/projects/projects-3/project_3_9.jpeg";


import project_2_1 from "../assets/images/projects/projects-2/project_2_1.jpeg";
import project_2_2 from "../assets/images/projects/projects-2/project_2_2.jpeg";
import project_2_3 from "../assets/images/projects/projects-2/project_2_3.jpeg";
import project_2_4 from "../assets/images/projects/projects-2/project_2_4.jpeg";
import project_2_5 from "../assets/images/projects/projects-2/project_2_5.jpeg";
import project_2_6 from "../assets/images/projects/projects-2/project_2_6.jpeg";



import project_1_1 from "../assets/images/projects/projects-1/project_1_1.jpeg";
import project_1_2 from "../assets/images/projects/projects-1/project_1_2.jpeg";
import project_1_3 from "../assets/images/projects/projects-1/project_1_3.jpeg";
import project_1_4 from "../assets/images/projects/projects-1/project_1_4.jpeg";
import project_1_5 from "../assets/images/projects/projects-1/project_1_5.jpeg";
import project_1_6 from "../assets/images/projects/projects-1/project_1_6.jpeg";
import project_1_7 from "../assets/images/projects/projects-1/project_1_7.jpeg";
import project_1_8 from "../assets/images/projects/projects-1/project_1_8.jpeg";
import project_1_9 from "../assets/images/projects/projects-1/project_1_9.jpeg";
import project_1_10 from "../assets/images/projects/projects-1/project_1_10.jpeg";
import project_1_11 from "../assets/images/projects/projects-1/project_1_11.jpeg";
import project_1_12 from "../assets/images/projects/projects-1/project_1_12.jpeg";
import project_1_13 from "../assets/images/projects/projects-1/project_1_13.jpeg";
import project_1_14 from "../assets/images/projects/projects-1/project_1_14.jpeg";







export const Projects = () => {
  const designer1galleryRef = useRef(null);

  useEffect(() => {
    if (window.lightGallery) {
      designer1galleryRef.current = window.lightGallery(
        document.getElementById("project1-gallery"),
        {
          download: false,
          selector: "img",
          closeOnOutside: true
        }
      );
    }

    return () => {
      if (designer1galleryRef.current) {
        designer1galleryRef.current.destroy(true);
      }
    };
  }, []);

  return (
    <>
      <div className="our-project-block-container">
        <div className="our-main-projects-container">
          <h1 className="font-size-24 fw-100  we-work mr-b-30">
            RECENT PROJECTS
          </h1>

          <div className="our-projects-images-container" id="project1-gallery">
            <div className="left-container">
              <img
                src={project_1_1}
                alt="project"
                className="image image-4"
              />
            </div>
            <div className="right-container">
              <img src={project_1_2} alt="project" className="image image-2" />
              <div className="image-text-overflow">
                <img
                  src={project_1_3}
                  alt="project"
                  className="image image-1"
                  data-src={project_1_3}
                />
                <span>View All</span>
              </div>
            </div>

            <div className="hidden-images">
              <img
                src={project_1_4}
                alt="project"
                className="image image-3"
              />
              <img
                src={project_1_5}
                alt="project"
                className="image image-5"
              />
              <img
                src={project_1_6}
                alt="project"
                className="image image-6"
              />
              <img
                src={project_1_7}
                alt="project"
                className="image image-6 image-hidden"
              />
              <img
                src={project_1_8}
                alt="project"
                className="image image-6 image-hidden"
              />
              <img
                src={project_1_9}
                alt="project"
                className="image image-6 image-hidden"
              />
              <img
                src={project_1_10}
                alt="project"
                className="image image-6 image-hidden"
              />
              <img
                src={project_1_11}
                alt="project"
                className="image image-6 image-hidden"
              />

              <img
                src={project_1_12}
                alt="project"
                className="image image-6 image-hidden"
              />

              <img
                src={project_1_13}
                alt="project"
                className="image image-6 image-hidden"
              />
              <img
                src={project_1_14}
                alt="project"
                className="image image-6 image-hidden"
              />
            </div>
          </div>

          <div className="our-projects-designer-container mr-t-30">
            <h2 className="fw-100 font-size-20">
              BY <span className="prim-color fw-bold font-size-24">CHANDU</span>{" "}
            </h2>
            <div className="our-project-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              totam dolores atque illum unde laboriosam, dolorum pariatur ipsum
              perspiciatis delectus fugiat, dicta dignissimos, vel tempora
              veritatis quisquam doloremque expedita voluptatum.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
