import React from "react";

export const NavbarAddComponent: React.FC = () => {
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "52px",
          width: "350px",
          transform: "translateX(-45%)",
          backgroundColor: "#242526",
          border: "1px solid #474a4d",
          borderRadius: "8px",
          right: "0",
          padding: "1rem",
          overflow: "hidden",
          transition: "height 500ms ease",
        }}
      >
        <div style={{ width: "100%" }}>
          <h1 style={{ fontSize: "1.5rem", color: "#E4E6EB", fontWeight: 600 }}>
            Create
          </h1>
          <div
            className="create__animation"
            style={{
              height: "50px",
              display: "flex",
              alignItems: "center",
              borderRadius: "8px",
              transition: "background 500ms",
              padding: "0.5rem",
            }}
          >
            <div
              style={{
                width: "36px",
                height: "36px",
                backgroundColor: "rgba(255,255,255,0.1)",
                borderRadius: "50%",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <i
                style={{
                  backgroundPosition: "0 -285px",
                  backgroundSize: "auto",
                  backgroundRepeat: "no-repeat",
                  display: "inline-block",
                  height: "20px",
                  width: "20px",
                  backgroundImage:
                    "url('https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/WtM2L1oWuuk.png')",
                  filter: "invert(100%)",
                }}
              ></i>
            </div>
            <div style={{ marginLeft: "10px" }}>
              <div style={{ lineHeight: "0", marginTop: "9px" }}>
                <span
                  style={{
                    color: "#E4E6EB",
                    fontSize: ".9375rem",
                    textAlign: "left",
                    fontWeight: 500,
                    maxWidth: "100%",
                  }}
                >
                  Post
                </span>
              </div>
              <div
                style={{
                  marginTop: "5px",
                }}
              >
                <span
                  style={{
                    color: "#B0B3B8",
                    fontWeight: "normal",
                    fontSize: ".8125rem",
                  }}
                >
                  Share a post on News Feed.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
