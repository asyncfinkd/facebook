import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  SidebarDataStructure,
  SeeMoreSidebarStructure,
} from "../../../data/SidebarData";

export const Sidebar: React.FC = () => {
  const [user, setUser] = useState<any>(
    JSON.parse(localStorage.getItem("user") || "{}")
  );
  const [seeMore, setSeeMore] = useState<Boolean>(false);
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: "72px",
          padding: "0 10px",
          width: "305px",
          overflowY: "scroll",
          height: "89%",
        }}
        id="scroll-bar"
      >
        <Link
          to="/"
          style={{ textDecoration: "none", textDecorationLine: "none" }}
        >
          <div
            className="create__animation"
            style={{
              padding: "8px 5px",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src="https://scontent.ftbs4-1.fna.fbcdn.net/v/t1.30497-1/cp0/c15.0.50.50a/p50x50/84241059_189132118950875_4138507100605120512_n.jpg?_nc_cat=1&ccb=1-3&_nc_sid=7206a8&_nc_ohc=KVCZQJ0gtUIAX-Tt2_0&_nc_ht=scontent.ftbs4-1.fna&tp=27&oh=a72b8a988230c32ce5bb5084a5fd8d2a&oe=608EE00F"
              style={{
                width: "28px",
                marginLeft: "2px",
                height: "28px",
                borderRadius: "50%",
              }}
              alt=""
            />
            <span
              style={{
                textTransform: "capitalize",
                color: "#E4E6EB",
                fontSize: ".9375rem",
                marginLeft: "9px",
                textDecoration: "none",
                textDecorationLine: "none",
              }}
            >
              {user.username} {user.lastname}
            </span>
          </div>
        </Link>
        {SidebarDataStructure.map((item) => {
          return (
            <>
              <Link
                to={item.route}
                style={{ textDecoration: "none", textDecorationLine: "none" }}
              >
                <div
                  className="create__animation"
                  style={{
                    padding: "8px 5px",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={item.image}
                    style={{
                      width: "28px",
                      marginLeft: "2px",
                      height: "28px",
                      borderRadius: "50%",
                    }}
                    alt=""
                  />
                  <span
                    style={{
                      textTransform: "capitalize",
                      color: "#E4E6EB",
                      fontSize: ".9375rem",
                      marginLeft: "9px",
                      textDecoration: "none",
                      textDecorationLine: "none",
                    }}
                  >
                    {item.title}
                  </span>
                </div>
              </Link>
            </>
          );
        })}
        {seeMore ? (
          <>
            {SeeMoreSidebarStructure.map((item) => {
              return (
                <>
                  <Link
                    to={item.route}
                    style={{
                      textDecoration: "none",
                      textDecorationLine: "none",
                    }}
                  >
                    <div
                      className="create__animation"
                      style={{
                        padding: "8px 5px",
                        borderRadius: "10px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={item.image}
                        style={{
                          width: "28px",
                          marginLeft: "2px",
                          height: "28px",
                          borderRadius: "50%",
                        }}
                        alt=""
                      />
                      <span
                        style={{
                          textTransform: "capitalize",
                          color: "#E4E6EB",
                          fontSize: ".9375rem",
                          marginLeft: "9px",
                          textDecoration: "none",
                          textDecorationLine: "none",
                        }}
                      >
                        {item.title}
                      </span>
                    </div>
                  </Link>
                </>
              );
            })}
            <div
              className="create__animation"
              style={{
                padding: "8px 5px",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
              }}
              onClick={() => {
                setSeeMore(false);
              }}
            >
              <div
                style={{
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  width: "28px",
                  height: "28px",
                  backgroundColor: "rgba(255,255,255,.1)",
                }}
              >
                <i
                  style={{
                    backgroundPosition: "0 -359px",
                    backgroundImage:
                      "url('https://static.xx.fbcdn.net/rsrc.php/v3/yX/r/sjwIelw3nbI.png')",
                    width: "20px",
                    height: "20px",
                    display: "inline-block",
                    backgroundSize: "auto",
                    backgroundRepeat: "no-repeat",
                    textAlign: "center",
                    margin: "auto",
                    filter: "invert(80%)",
                    transform: "rotate(180deg)",
                  }}
                ></i>
              </div>
              <span
                style={{
                  color: "#E4E6EB",
                  fontSize: ".9375rem",
                  marginLeft: "9px",
                  textDecoration: "none",
                  textDecorationLine: "none",
                }}
              >
                See less
              </span>
            </div>
          </>
        ) : (
          <div
            className="create__animation"
            style={{
              padding: "8px 5px",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
            }}
            onClick={() => {
              setSeeMore(true);
            }}
          >
            <div
              style={{
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                width: "28px",
                height: "28px",
                backgroundColor: "rgba(255,255,255,.1)",
              }}
            >
              <i
                style={{
                  backgroundPosition: "0 -359px",
                  backgroundImage:
                    "url('https://static.xx.fbcdn.net/rsrc.php/v3/yX/r/sjwIelw3nbI.png')",
                  width: "20px",
                  height: "20px",
                  display: "inline-block",
                  backgroundSize: "auto",
                  backgroundRepeat: "no-repeat",
                  textAlign: "center",
                  margin: "auto",
                  filter: "invert(80%)",
                }}
              ></i>
            </div>
            <span
              style={{
                textTransform: "capitalize",
                color: "#E4E6EB",
                fontSize: ".9375rem",
                marginLeft: "9px",
                textDecoration: "none",
                textDecorationLine: "none",
              }}
            >
              See More
            </span>
          </div>
        )}
      </div>
    </>
  );
};
