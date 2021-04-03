import React, { useState } from "react";
import { Link } from "react-router-dom";

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
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/5rR6LRpNc5u.png"
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
              COVID-19 Information Centre
            </span>
          </div>
        </Link>
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
              src="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png"
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
              Friends
            </span>
          </div>
        </Link>
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
              src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/duk32h44Y31.png"
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
              Watch
            </span>
          </div>
        </Link>
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
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/kyCAf2jbZvF.png"
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
              Pages
            </span>
          </div>
        </Link>
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
              src="https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/w-vdKCGzCy1.png"
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
              Most recent
            </span>
          </div>
        </Link>
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
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yK/r/mAnT0r8GSOm.png"
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
              Favourites
            </span>
          </div>
        </Link>
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
              src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png"
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
              Groups
            </span>
          </div>
        </Link>
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
              src="https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/8wTx0Eu2vRq.png"
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
              Events
            </span>
          </div>
        </Link>
        {seeMore ? (
          <>
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
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/CwKNCefmHON.png"
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
                  Ad Centre
                </span>
              </div>
            </Link>
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
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/y9/r/DHBHg9MEeSC.png"
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
                  Ads Manager
                </span>
              </div>
            </Link>
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
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/yN/r/9s7nhm949yb.png"
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
                  Community Help
                </span>
              </div>
            </Link>
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
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/GJ4EaivDaSj.png"
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
                  Facebook Pay
                </span>
              </div>
            </Link>
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
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/MN5ZSGIfEZ3.png"
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
                    color: "#E4E6EB",
                    fontSize: ".9375rem",
                    marginLeft: "9px",
                    textDecoration: "none",
                    textDecorationLine: "none",
                  }}
                >
                  Friends lists
                </span>
              </div>
            </Link>
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
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/n2vd2VduYc1.png"
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
                  Fundraisers
                </span>
              </div>
            </Link>
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
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/yt/r/PObY9OA5lvJ.png"
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
                  Games
                </span>
              </div>
            </Link>
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
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/yy/r/9bekmF_PzNp.png"
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
                    color: "#E4E6EB",
                    fontSize: ".9375rem",
                    marginLeft: "9px",
                    textDecoration: "none",
                    textDecorationLine: "none",
                  }}
                >
                  Gaming video
                </span>
              </div>
            </Link>
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
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/yo/r/DO-SN-shaZL.png"
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
                  Jobs
                </span>
              </div>
            </Link>
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
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/Nl9CPY6q_n-.png"
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
                    color: "#E4E6EB",
                    fontSize: ".9375rem",
                    marginLeft: "9px",
                    textDecoration: "none",
                    textDecorationLine: "none",
                  }}
                >
                  Live videos
                </span>
              </div>
            </Link>
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
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/VPndBxotRgH.png"
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
                    color: "#E4E6EB",
                    fontSize: ".9375rem",
                    marginLeft: "9px",
                    textDecoration: "none",
                    textDecorationLine: "none",
                  }}
                >
                  Memories
                </span>
              </div>
            </Link>
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
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/4Y9Xi2D3hJv.png"
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
                    color: "#E4E6EB",
                    fontSize: ".9375rem",
                    marginLeft: "9px",
                    textDecoration: "none",
                    textDecorationLine: "none",
                  }}
                >
                  Messenger
                </span>
              </div>
            </Link>
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
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/NYOGcd-z-qs.png"
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
                    color: "#E4E6EB",
                    fontSize: ".9375rem",
                    marginLeft: "9px",
                    textDecoration: "none",
                    textDecorationLine: "none",
                  }}
                >
                  Offers
                </span>
              </div>
            </Link>
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
