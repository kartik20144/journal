import { useEffect, useState, useRef } from "react";
import "./Hero.css";

const Hero = () => {
  const sliderRef = useRef(null);
  const [direction, setDirection] = useState("");
  const [sliderItems, setSliderItems] = useState([
    {
      src: "https://images.unsplash.com/photo-1529243856184-fd5465488984?q=80&w=1492&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "MAGIC SLIDER",
      type: "JOURNAL-1",
      description:
        "",
    },
    {
      src: "https://images.unsplash.com/photo-1623039405147-547794f92e9e?q=80&w=1426&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "MAGIC SLIDER",
      type: "JOURNAL-2",
      description:
        "",
    },
    {
      src: "https://images.unsplash.com/photo-1631297203225-16d8f3084dbc?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "MAGIC SLIDER",
      type: "JOURNAL-3",
      description:
        "",
    },
    {
      src: "https://images.unsplash.com/photo-1543324398-0ad1d3ed0366?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "MAGIC SLIDER",
      type: "JOURNAL-4",
      description:
        "",
    },
  ]);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleAnimationEnd = () => {
      if (direction === "next") {
        setSliderItems((prevItems) => {
          const [first, ...rest] = prevItems;
          return [...rest, first];
        });
      } else if (direction === "prev") {
        setSliderItems((prevItems) => {
          const last = prevItems[prevItems.length - 1];
          return [last, ...prevItems.slice(0, prevItems.length - 1)];
        });
      }
      slider.classList.remove("next", "prev");
      setDirection("");
    };

    slider.addEventListener("animationend", handleAnimationEnd);

    return () => {
      slider.removeEventListener("animationend", handleAnimationEnd);
    };
  }, [direction]);

  useEffect(() => {
    const interval = setInterval(() => {
      moveSlider("next");
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const moveSlider = (direction) => {
    setDirection(direction);
    const slider = sliderRef.current;
    if (slider) {
      slider.classList.add(direction);
    }
  };

  return (
    <div>
      <div
        className="slider h-[600px]   w-[100%] overflow-hidden relative conntainer"
        ref={sliderRef}
      >
        <div className="list">
          {sliderItems.map((item, index) => (
            <div
              key={index}
              className="item w-full h-full absolute inset-0 z-[1] "
            >
              <img
                className="w-full h-full bg-fixed object-cover filter brightness-50"
                src={item.src}
                alt=""
              />
              <div className="content absolute top-20 md:top-32 w-[1140px] max-w-[80%] left-1/2 transform -translate-x-1/2 pr-[30%] box-border text-white text-shadow-[0_5px_10px_#0004]">
                <div className="title text-[5em] font-bold leading-[1.3em]">
                  {item.title}
                </div>
                <div className="type text-[3rem] lg:text-[5rem] font-bold leading-[1.3em] text-[#14ff72cb]">
                  {item.type}
                </div>
                <div className="description">{item.description}</div>
                <div className="button grid grid-cols-[repeat(2,130px)] grid-rows-[40px] gap-[5px] mt-[20px]">
                  <button className="border-none bg-[#eee] text-black font-medium cursor-pointer transition-all duration-300 tracking-wider hover:tracking-[3px]">
                    SEE MORE
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="thumbnail absolute bottom-[30px] left-1/2 w-max z-[100] flex gap-[20px]">
          {sliderItems.map((item, index) => (
            <div
              key={index}
              className="item w-[150px] md:h-[220px] h-[148px] flex-shrink-0 relative"
            >
              <img
                className="w-full h-full object-cover rounded-[20px] shadow-[5px_0_15px_rgba(0,0,0,0.3)]"
                src={item.src}
                alt=""
              />
            </div>
          ))}
        </div>

        <div className="nextPrevArrows absolute top-[80%] right-[52%] z-[100] w-[300px] max-w-[30%] flex gap-[10px] items-center">
          <button
            className="prev w-[40px] h-[40px] rounded-full bg-[#14ff72cb] border-none text-white font-mono font-bold transition duration-[500ms] cursor-pointer hover:bg-white hover:text-black"
            onClick={() => moveSlider("prev")}
          >
            &lt;
          </button>
          <button
            className="next w-[40px] h-[40px] rounded-full bg-[#14ff72cb] border-none text-white font-mono font-bold transition duration-[500ms] cursor-pointer hover:bg-white hover:text-black"
            onClick={() => moveSlider("next")}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
