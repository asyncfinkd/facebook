import React, { useCallback, useState } from "react";

interface Props {
  mind: any;
  setShowMind: any;
  handle: any;
}

export const WhatsYourMindPopup: React.FC<Props> = ({
  mind,
  setShowMind,
  handle,
}) => {
  const [user] = useState<any>(
    JSON.parse(localStorage.getItem("user") || "{}")
  );
  const callBackPostError = useCallback(
    (input) => {
      if (mind.length > 0) {
        setShowMind(true);
      } else {
        setShowMind(false);
      }
    },
    [mind]
  );
  const RenderPostComponent = (props: any) => {
    return (
      <>
        <div
          style={{
            marginRight: "2px",
            marginLeft: "2px",
            outline: "none",
            borderRadius: "25px",
          }}
          className="hqol"
        >
          <span>
            <div role="button">
              <div
                style={{
                  height: "34px",
                  width: "36px",
                  paddingTop: "5px",
                  borderRadius: "50%",
                  position: "relative",
                  cursor: "pointer",
                  outline: "none",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    outline: "none",
                    position: "relative",
                  }}
                >
                  <i className={props.classcom}></i>
                </div>
              </div>
            </div>
          </span>
        </div>
      </>
    );
  };
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          height: "100vh",
          backgroundColor: "rgba(11,11,11,0.8)",
          zIndex: 999,
        }}
        onClick={handle}
      ></div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          borderRadius: "8px",
          zIndex: 9999,
        }}
        role="dialog"
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div
            style={{
              width: "500px",
              height: "428px",
              position: "absolute",
              backgroundColor: "#242526",
              transform: "translate(-50%, -50%)",
              borderRadius: "8px",
              boxShadow:
                "0 12px 28px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.1), inset 0 0 0 1px rgba(255, 255, 255, 0.05)",
            }}
          >
            <div style={{ paddingLeft: "16px", paddingRight: "16px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "60px",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <h2 dir="auto">
                  <span
                    style={{
                      color: "#e4e6eb",
                      fontSize: "1.25rem",
                      fontWeight: 700,
                    }}
                  >
                    Create Post
                  </span>
                </h2>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "12px",
                  right: "16px",
                  borderRadius: "50%",
                }}
              >
                <div
                  aria-label="Close"
                  role="button"
                  onClick={handle}
                  style={{
                    height: "36px",
                    width: "36px",
                    backgroundColor: "rgba(255,255,255,0.1)",
                    borderRadius: "50%",
                    position: "relative",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <i
                    style={{
                      backgroundPosition: "0 -477px",
                      backgroundImage:
                        "url('https://static.xx.fbcdn.net/rsrc.php/v3/yi/r/1fcdIJQ2VJC.png')",
                      backgroundSize: "auto",
                      backgroundRepeat: "no-repeat",
                      width: "20px",
                      height: "20px",
                      cursor: "pointer",
                      filter:
                        "invert(62%) sepia(98%) saturate(12%) hue-rotate(175deg) brightness(90%) contrast(96%)",
                      outline: "none",
                    }}
                  ></i>
                </div>
              </div>
            </div>
            <div
              style={{
                paddingBottom: "16px",
                paddingTop: "16px",
                paddingRight: "0",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div style={{ marginLeft: "11px", display: "flex" }}>
                <a aria-label="Timeline" href="" role="link">
                  <div style={{ position: "relative", cursor: "pointer" }}>
                    <img
                      src="https://scontent.ftbs4-1.fna.fbcdn.net/v/t1.30497-1/cp0/c15.0.50.50a/p50x50/84241059_189132118950875_4138507100605120512_n.jpg?_nc_cat=1&ccb=1-3&_nc_sid=7206a8&_nc_ohc=KVCZQJ0gtUIAX-Tt2_0&_nc_ht=scontent.ftbs4-1.fna&tp=27&oh=a72b8a988230c32ce5bb5084a5fd8d2a&oe=608EE00F"
                      alt=""
                      width="40"
                      height="40"
                      style={{ borderRadius: "50%" }}
                    />
                  </div>
                </a>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "11px",
                  }}
                >
                  <span
                    dir="auto"
                    style={{
                      color: "#e4e6eb",
                      fontWeight: 600,
                      fontSize: "0.9375rem",
                      textTransform: "capitalize",
                    }}
                  >
                    {user.username} {user.lastname}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
