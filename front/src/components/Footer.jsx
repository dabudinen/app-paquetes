import React from "react";

export function Footer() {
  return (
    <footer className="bg-secondary py-4 mt-auto">
      <div className="container px-5">
        <div className="row align-items-center justify-content-between flex-column flex-sm-row">
          <div className="col-auto">
            <div className="small m-0 text-white">
              Copyright © InstaYA! 2022
            </div>
          </div>
          <div className="col-auto">
            <a
              className="link-light"
              href="https://github.com/dabudinen/app-paquetes"
            >
              <i className="bi bi-github"></i> Github del proyecto
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
