import { useEffect, useRef } from "react";
import project_1 from "../assets/images/project-1.jpeg";
import project_2 from "../assets/images/project-2.jpeg";
import project_3 from "../assets/images/project-3.jpeg";

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
              <img src={project_1} alt="project" className="image image-1" />
            </div>
            <div className="right-container">
              <img src={project_2} alt="project" className="image image-2" />
              <div className="image-text-overflow">
                <img src={project_3} alt="project" className="image image-3" />
                <span>View 7 More</span>
              </div>
            </div>

            <div className="hidden-images">
              <img src={project_1} alt="project" className="image image-1" />
              <img src={project_1} alt="project" className="image image-1" />
              <img src={project_1} alt="project" className="image image-1" />
              <img src={project_1} alt="project" className="image image-1" />
              <img src={project_1} alt="project" className="image image-1" />
              <img src={project_1} alt="project" className="image image-1" />
              <img src={project_1} alt="project" className="image image-1" />
              <img src={project_1} alt="project" className="image image-1" />
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
