import React from "react";

export interface ITodaysHighlightsCard {
  className?: string;
  title: string;
  number: number | string;
  measurement: string;
}

export const TodaysHighlightsCard: React.FC<ITodaysHighlightsCard> = ({
  children,
  className = "",
  title,
  number,
  measurement,
}) => {
  return (
    <div
      className={`${className} px-12 py-8 bg-primary flex flex-col items-center justify-center shadow-lg`}
    >
      <span>{title}</span>
      <span className="text-6xl">
        {number}
        <span className="text-3xl">{measurement}</span>
      </span>
      {children}
    </div>
  );
};
