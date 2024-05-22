import React from "react";

const TestimonialCard = ({ img, name, country, date, description, theme }) => {
  return (
    <div className="testimonial-card w-full h-80 m-4 top-2 items-center bg-transparent shadow-lg rounded-lg flex">
      <div className=" w1/4 flex flex-col justify-center items-center p-4">
        {img && typeof img === "string" ? (
          <img className="mr-3 rounded-full h-16 w-16" src={img} alt="img" />
        ) : img ? (
          <img.type
            className="mr-3 rounded-full h-8 w-8"
            {...img.props}
            fill={theme === "dark" ? "" : ""}
          />
        ) : null}
        <div className="flex justify-center p-2 font-bold">
          <h2 className={`text-sm text-center ${theme === "dark" ? "text-slate-500" : "text-slate-500"}`}>
            {name}
          </h2>
        </div>
        <div className="flex justify-center p-2">
          <h2 className={`text-sm text-center ${theme === "dark" ? "text-slate-500" : "text-slate-500"}`}>
            {country}, {date}
          </h2>
        </div>
      </div>
      <div className="card-body flex justify-center start-center w-3/4 h-[90%] text-sm border-2">
        <p className={` p-6  scroll ${theme === "dark" ? "text-slate-600" : "text-slate-600"}`}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;