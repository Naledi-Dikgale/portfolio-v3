import React from "react";

const TestimonialCard = ({ img, name, country, date, description, theme }) => {
  return (
    <div className="testimonial-card w-80 h-80 m-4 top-2 items-center bg-white shadow-lg rounded-lg">
      <div className="flex justify-center p-4">
        {img && typeof img === "string" ? (
          <img className="mr-3 rounded-full" src={img} alt="img" />
        ) : img ? (
          <img.type
            className="mr-3 rounded-full"
            {...img.props}
            fill={theme === "dark" ? "" : ""}
          />
        ) : null}
      </div>
      <div className="flex justify-center p-2">
        <h2 className={`text-sm text-center ${theme === "dark" ? "text-slate-500" : "text-slate-500"}`}>
          {name}
        </h2>
      </div>
      <div className="flex justify-center p-2">
        <h2 className={`text-sm text-center ${theme === "dark" ? "text-slate-500" : "text-slate-500"}`}>
          {country}, {date}
        </h2>
      </div>
      <div className="card-body">
        <p className="overflow-auto">{description}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;