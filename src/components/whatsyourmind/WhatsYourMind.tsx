import React, { useState } from "react";
import { WhatsYourMindPopup } from "./popup/WhatsYourMindPopup";

export const WhatsYourMind: React.FC = () => {
  const [catchMind, setCatchMind] = useState<any>("");
  const [user] = useState<any>(
    JSON.parse(localStorage.getItem("user") || "{}")
  );
  const [showPopup, setShowPopup] = useState<Boolean>(false);
  const [showMind, setShowMind] = useState<Boolean>(false);
  const RenderChildComponent = (props: any) => {
    return (
      <>
        <div
          style={{
            borderRadius: "8px",
            padding: "8px",
            outline: "none",
            width: "100%",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <i className={props.class}></i>
            <span
              style={{
                color: "#b0b3b8",
                fontWeight: 600,
                fontSize: "0.8475rem",
                cursor: "pointer",
              }}
            >
              {props.text}
            </span>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      {showPopup && (
        <WhatsYourMindPopup
          mind={catchMind}
          setShowMind={showMind}
          handle={() => setShowPopup(false)}
        />
      )}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "80px",
          transform: "translateX(-50%)",
        }}
      >
        <div
          style={{
            backgroundColor: "#242526",
            boxShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
            borderRadius: "6px",
            marginTop: "16px",
            width: "500px",
          }}
        >
          <div
            style={{
              padding: "10px 16px 10px 16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                width: "100%",
              }}
            >
              <div>
                <a href="https://google.com">
                  <img
                    src="https://scontent.ftbs4-1.fna.fbcdn.net/v/t1.30497-1/cp0/c15.0.50.50a/p50x50/84241059_189132118950875_4138507100605120512_n.jpg?_nc_cat=1&ccb=1-3&_nc_sid=7206a8&_nc_ohc=KVCZQJ0gtUIAX-Tt2_0&_nc_ht=scontent.ftbs4-1.fna&tp=27&oh=a72b8a988230c32ce5bb5084a5fd8d2a&oe=608EE00F"
                    alt=""
                    style={{
                      borderRadius: "50%",
                      width: "40px",
                      height: "40px",
                      objectFit: "contain",
                    }}
                  />
                </a>
              </div>
              <div
                onClick={() => setShowPopup(true)}
                role="button"
                style={{
                  width: "500px",
                  paddingLeft: "12px",
                  paddingBottom: "8px",
                  borderRadius: "20px",
                  cursor: "pointer",
                  minHeight: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  paddingRight: "12px",
                  paddingTop: "8px",
                  backgroundColor: "#3a3b3c",
                  boxShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
                  marginLeft: "7px",
                }}
              >
                <div
                  aria-label={`What's on your mind ${user.username} ${user.lastname}?`}
                  role="combobox"
                  aria-hidden="false"
                  aria-required="false"
                  aria-disabled="false"
                  aria-labelledby="false"
                  aria-readonly="false"
                  title={`${catchMind}`}
                  style={{
                    border: "none",
                    outline: "none",
                    cursor: "pointer",
                    fontSize: "1.01rem",
                    color: "#b0b3b8",
                  }}
                >
                  {catchMind === ""
                    ? `What's on your mind, ${user.username}?`
                    : `${catchMind.substring(0, 38)}...`}
                </div>
              </div>
            </div>
            <div
              style={{
                minHeight: "40px",
                marginTop: "12px",
                display: "flex",
                justifyContent: "space-around",
                paddingTop: "8px",
                borderTop: "1px solid rgba(255,255,255,0.1)",
                width: "100%",
              }}
            >
              <RenderChildComponent class="i" text="Live video" />
              <RenderChildComponent class="ii" text="Photo/Video" />
              <RenderChildComponent class="iii" text="Feeling/Activity" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
