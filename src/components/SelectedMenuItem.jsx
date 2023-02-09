import React, { useState } from "react";

export const SelectedMenuItem = ({ id, title, url, i }) => {
  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [updatedUrl, setUpdatedUrl] = useState(url);
  return (
    <>
      <div className="accordion-item" key={id}>
        <h5 className="accordion-header">
          <div className="d-flex jsb aic">
            <span>{title}</span>
            <div className="d-flex aic ">
              <div
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse-${i}-${i}`}
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                <i className="fa fa-edit mx-2"></i>
              </div>
              <i className="fa fa-trash mx-2"></i>
            </div>
          </div>
        </h5>
        <div
          id={`collapse-${i}-${i}`}
          className="accordion-collapse collapse"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body d-flex f-d-c">
            <div>
              <label htmlFor="">Title : </label>
              <input type="text" value={updatedTitle} />
            </div>
            <div>
              <label htmlFor="">Url : .</label>
              <input type="text" value={updatedUrl} onChange={(e) => set} />
            </div>
            <button>Done</button>
          </div>
        </div>
      </div>
    </>
  );
};
