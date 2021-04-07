import React, { useCallback, useState } from "react";

interface Props {
  mind: any;
  setShowMind: any;
  handle: any;
  setMind?: any;
  showMind: any;
}

export const WhatsYourMindPopup: React.FC<Props> = ({
  mind,
  setShowMind,
  handle,
  showMind,
  setMind,
}) => {
  const [user] = useState<any>(
    JSON.parse(localStorage.getItem("user") || "{}")
  );
  const [validationError, setValidationError] = useState<any>(false);
  const callBackPostError = useCallback(
    (input?: any) => {
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
              height: "438px",
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
                      marginTop: "-8px",
                    }}
                  >
                    {user.username} {user.lastname}
                  </span>
                  <div style={{ marginTop: "2px" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <div
                            aria-label="Edit privacy. Sharing with Public."
                            role="button"
                            style={{ cursor: "pointer", position: "relative" }}
                          >
                            <span
                              dir="auto"
                              style={{
                                color: "#e4e6eb",
                                fontWeight: 600,
                                cursor: "pointer",
                              }}
                            >
                              <div
                                style={{
                                  position: "relative",
                                  color: "#e4e6eb",
                                  fontWeight: 600,
                                  fontSize: "0.8125rem",
                                  cursor: "pointer",
                                }}
                              >
                                <div
                                  style={{
                                    backgroundColor: "rgba(255,255,255,0.1)",
                                    paddingLeft: "8px",
                                    borderRadius: "6px",
                                    paddingTop: "4px",
                                    paddingBottom: "4px",
                                    paddingRight: "4px",
                                    color: "#e4e6eb",
                                    fontWeight: 600,
                                  }}
                                >
                                  <div
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      color: "#e4e6eb",
                                      fontWeight: 600,
                                      fontSize: "0.8125rem",
                                    }}
                                  >
                                    <div
                                      style={{
                                        marginRight: "4px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                      }}
                                    >
                                      <img
                                        src="https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/axobuTi734a.png"
                                        alt=""
                                        width="12"
                                        height="12"
                                        style={{ filter: "invert(100%)" }}
                                      />
                                    </div>
                                    <span
                                      dir="auto"
                                      style={{
                                        marginRight: "4px",
                                        fontWeight: 600,
                                        color: "#e4e6eb",
                                        fontSize: "0.8125rem",
                                      }}
                                    >
                                      Public
                                    </span>
                                    <i
                                      style={{
                                        width: "12px",
                                        height: "12px",
                                        backgroundPosition: "-17px -885px",
                                        backgroundImage:
                                          "url('https://static.xx.fbcdn.net/rsrc.php/v3/yi/r/1fcdIJQ2VJC.png')",
                                        backgroundSize: "auto",
                                        backgroundRepeat: "no-repeat",
                                        filter: "invert(100%)",
                                      }}
                                    ></i>
                                  </div>
                                </div>
                              </div>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ marginLeft: "11px" }}>
              <textarea
                placeholder={`What's on your mind, ${user.username}?`}
                rows={10}
                value={mind}
                id="overflow"
                onChange={setMind}
                className="hover__placeholder"
                cols={51}
                style={{
                  resize: "none",
                  backgroundColor: "transparent",
                  border: "none",
                  color: "#e4e6eb",
                  fontWeight: 400,
                  outline: "none",
                  paddingRight: "15px",
                  maxHeight: "167px",
                  maxWidth: "100%",
                  fontSize: "1.5rem",
                }}
              ></textarea>
            </div>
            <div
              style={{
                paddingBottom: "16px",
                paddingTop: "16px",
                position: "relative",
              }}
            >
              <div
                style={{
                  marginRight: "16px",
                  borderRadius: "6px",
                  padding: "16px",
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "16px",
                  backgroundColor: "#242526",
                  borderLeft: "1px solid #3e4042",
                  borderBottom: "1px solid #3e4042",
                  borderRight: "1px solid #3e4042",
                  borderTop: "1px solid #3e4042",
                  boxShadow: "0 1px 2px rgba(255, 255, 255, 0.05)",
                  marginTop: "-15px",
                }}
              >
                <div style={{ paddingLeft: "8px", paddingRight: "8px" }}>
                  <div
                    aria-label="Add to your post"
                    role="button"
                    style={{ cursor: "pointer" }}
                  >
                    <span
                      style={{
                        color: "#e4e6eb",
                        fontWeight: 600,
                        fontSize: "0.9375rem",
                        cursor: "pointer",
                      }}
                    >
                      Add to your post
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    position: "absolute",
                    outline: "none",
                    right: "20px",
                    top: "10px",
                  }}
                >
                  <RenderPostComponent classcom="iql" />
                  <RenderPostComponent classcom="iiql" />
                  <RenderPostComponent classcom="iiiql" />
                  <RenderPostComponent classcom="iiiiql" />
                  <RenderPostComponent classcom="iiiiiql" />
                  <RenderPostComponent classcom="iiiiiiql" />
                </div>
              </div>
            </div>
            <div
              style={{
                paddingRight: "16px",
                paddingLeft: "16px",
                paddingBottom: "16px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div
                className={showMind ? "enableButton" : "qlx"}
                aria-label="Post"
                aria-disabled={showMind ? "false" : "true"}
                role="button"
              >
                <span className={showMind ? "enableSpan" : "disableSpan"}>
                  Post
                </span>
                {callBackPostError()}
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
