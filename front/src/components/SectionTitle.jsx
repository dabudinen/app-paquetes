import React from "react";

export default function SectionTitle({secctionTitle, sectionDescription}) {

  return (
    <div className="text-center mb-5">
      <h1 className="fw-bolder">{secctionTitle}</h1>
      <p className="lead fw-normal text-muted mb-0">
        {sectionDescription}
      </p>
    </div>
  );
}
