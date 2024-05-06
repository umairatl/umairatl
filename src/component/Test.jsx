import { ContentSize } from "./shared/ContentSize";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Assuming you are using Font Awesome for icons
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export const Skills2 = () => {
  const skills = [
    { img: "", type: "JavaScript" },
    { img: "", type: "TypeScript" },
    { img: "", type: "ReactJs" },
    { img: "", type: "NextJs" },
    { img: "", type: "Angular" },
  ];
  return (
    <ContentSize>
      <div
        style={{
          position: "relative",
          overflowX: "auto",
          whiteSpace: "nowrap",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            style={{ display: "inline-block", marginRight: "10px" }}
          >
            {/* Your card component here */}
            <div
              style={{
                width: "300px",
                height: "200px",
                backgroundColor: "lightgray",
              }}
            >
              {skill.type}
            </div>
          </div>
        ))}
        {/* Left Arrow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "0",
            transform: "translateY(-50%)",
            zIndex: "1",
          }}
        >
          <ChevronLeftIcon />
        </div>
        {/* Right Arrow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            right: "0",
            transform: "translateY(-50%)",
            zIndex: "1",
          }}
        >
          <ChevronRightIcon />
        </div>
      </div>
    </ContentSize>
  );
};
