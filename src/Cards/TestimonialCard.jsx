import React from "react";

const TestimonialCard = ({ img, name, job, country, description, theme }) => {
  return (
    <div className="testimonial-card md:h-80 md:w-[70vw] top-2 bg-transparent shadow-lg rounded-lg flex flex-col md:flex-row w-[80vw] justify-center items-center">
      <div className=" md:w-1/4 flex flex-col justify-center items-center p-4">
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
            {job}, {country}
          </h2>
        </div>
      </div>
      <div className="card-body flex justify-center items-center w-full md:w-3/4 text-lg ">
        <p className={`mt-4 p-6 scroll ${theme === "dark" ? "text-slate-600" : "text-slate-600"}`}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;