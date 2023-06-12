import React from "react";
import styles from "./cards.module.scss";
import { Link } from "react-router-dom";
const Cards = ({ results, page }) => {
  // if(!results)return<span>No results found</span>
  let display;
  if (results) {
    display = results.map((x) => {
      let { id, name, image, location, status } = x;
      return (
        <Link
        style={{textDecoration:"none"}}
          to={`${page}${id}`}
          key={id}
          className="col-lg-4 col-md-6 col-12 mb-4 position-relative text-dark"
        >
          <div className={`${styles.cards} d-flex justify-content-center flex-column`}>
            <img src={image} alt="" className={`${styles.img} img-fluid`} />
            <div className="content" style={{ padding: "10px" }}>
              <div className="fs-4 fw-bold mb-4">{name}</div>
              <div className="">
                <div className="fs-6">Last Location</div>
                <div className="fs-5">{location.name}</div>
              </div>
            </div>
          </div>
          {(() => {
            if (status === "Dead") {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-danger`}
                >
                  {status}
                </div>
              );
            } else if (status === "Alive") {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-success`}
                >
                  {status}
                </div>
              );
            } else {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-secondary`}
                >
                  {status}
                </div>
              );
            }
          })()}
        </Link>
      );
    });
  } else {
    display = "No Characters Found🫥";
  }
  return <>{display}</>;
};

export default Cards;
