import React, { useState } from "react";

export const Navbar: React.FC = () => {
  const [user, setUser] = useState<any>(
    JSON.parse(localStorage.getItem("user") || "{}")
  );
  return (
    <>
      <div
        className="display:flex items-center justify-between"
        style={{
          backgroundColor: "#242526",
          height: "55px",
          borderBottom: "1px solid #474a4d",
          padding: "0 0.2rem",
        }}
      >
        <div className="display:flex items-center">
          <img
            src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo.png"
            alt="Facebook"
            style={{ height: "45px" }}
          />
          <div>
            <input
              type="search"
              role="combobox"
              dir="ltr"
              autoComplete="list"
              aria-expanded="false"
              aria-label="Search Facebook"
              placeholder="Search Facebook"
              spellCheck="false"
              aria-invalid="false"
              style={{
                height: "40px",
                borderRadius: "50px",
                fontSize: ".9375rem",
                textAlign: "left",
                backgroundColor: "#3A3B3C",
                color: "#E4E6EB",
                border: "none",
                outline: "none",
                paddingTop: "7px",
                paddingRight: "15px",
                paddingBottom: "9px",
                paddingLeft: "25px",
              }}
            />
          </div>
        </div>
        <div>
          <span className="relative">
            <svg
              viewBox="0 0 28 28"
              height="28"
              width="28"
              style={{
                fill: "#2D88FF",
                width: "100px",
              }}
            >
              <path d="M25.825 12.29C25.824 12.289 25.823 12.288 25.821 12.286L15.027 2.937C14.752 2.675 14.392 2.527 13.989 2.521 13.608 2.527 13.248 2.675 13.001 2.912L2.175 12.29C1.756 12.658 1.629 13.245 1.868 13.759 2.079 14.215 2.567 14.479 3.069 14.479L5 14.479 5 23.729C5 24.695 5.784 25.479 6.75 25.479L11 25.479C11.552 25.479 12 25.031 12 24.479L12 18.309C12 18.126 12.148 17.979 12.33 17.979L15.67 17.979C15.852 17.979 16 18.126 16 18.309L16 24.479C16 25.031 16.448 25.479 17 25.479L21.25 25.479C22.217 25.479 23 24.695 23 23.729L23 14.479 24.931 14.479C25.433 14.479 25.921 14.215 26.132 13.759 26.371 13.245 26.244 12.658 25.825 12.29"></path>
            </svg>
            <div
              style={{
                backgroundColor: "#2D88FF",
                position: "absolute",
                top: "35px",
                width: "100%",
                height: "3px",
              }}
            ></div>
          </span>

          <span className="relative">
            <svg
              viewBox="0 0 28 28"
              style={{
                fill: "#B0B3B8",
                width: "100px",
              }}
              height="28"
              width="28"
            >
              <path d="M8.75 25.25C8.336 25.25 8 24.914 8 24.5 8 24.086 8.336 23.75 8.75 23.75L19.25 23.75C19.664 23.75 20 24.086 20 24.5 20 24.914 19.664 25.25 19.25 25.25L8.75 25.25ZM17.163 12.846 12.055 15.923C11.591 16.202 11 15.869 11 15.327L11 9.172C11 8.631 11.591 8.297 12.055 8.576L17.163 11.654C17.612 11.924 17.612 12.575 17.163 12.846ZM21.75 20.25C22.992 20.25 24 19.242 24 18L24 6.5C24 5.258 22.992 4.25 21.75 4.25L6.25 4.25C5.008 4.25 4 5.258 4 6.5L4 18C4 19.242 5.008 20.25 6.25 20.25L21.75 20.25ZM21.75 21.75 6.25 21.75C4.179 21.75 2.5 20.071 2.5 18L2.5 6.5C2.5 4.429 4.179 2.75 6.25 2.75L21.75 2.75C23.821 2.75 25.5 4.429 25.5 6.5L25.5 18C25.5 20.071 23.821 21.75 21.75 21.75Z"></path>
            </svg>
          </span>

          <span className="relative">
            <svg
              viewBox="0 0 28 28"
              style={{
                fill: "#B0B3B8",
                width: "100px",
              }}
              height="28"
              width="28"
            >
              <path d="M25.5 14C25.5 7.649 20.351 2.5 14 2.5 7.649 2.5 2.5 7.649 2.5 14 2.5 20.351 7.649 25.5 14 25.5 20.351 25.5 25.5 20.351 25.5 14ZM27 14C27 21.18 21.18 27 14 27 6.82 27 1 21.18 1 14 1 6.82 6.82 1 14 1 21.18 1 27 6.82 27 14ZM7.479 14 7.631 14C7.933 14 8.102 14.338 7.934 14.591 7.334 15.491 6.983 16.568 6.983 17.724L6.983 18.221C6.983 18.342 6.99 18.461 7.004 18.578 7.03 18.802 6.862 19 6.637 19L6.123 19C5.228 19 4.5 18.25 4.5 17.327 4.5 15.492 5.727 14 7.479 14ZM20.521 14C22.274 14 23.5 15.492 23.5 17.327 23.5 18.25 22.772 19 21.878 19L21.364 19C21.139 19 20.97 18.802 20.997 18.578 21.01 18.461 21.017 18.342 21.017 18.221L21.017 17.724C21.017 16.568 20.667 15.491 20.067 14.591 19.899 14.338 20.067 14 20.369 14L20.521 14ZM8.25 13C7.147 13 6.25 11.991 6.25 10.75 6.25 9.384 7.035 8.5 8.25 8.5 9.465 8.5 10.25 9.384 10.25 10.75 10.25 11.991 9.353 13 8.25 13ZM19.75 13C18.647 13 17.75 11.991 17.75 10.75 17.75 9.384 18.535 8.5 19.75 8.5 20.965 8.5 21.75 9.384 21.75 10.75 21.75 11.991 20.853 13 19.75 13ZM15.172 13.5C17.558 13.5 19.5 15.395 19.5 17.724L19.5 18.221C19.5 19.202 18.683 20 17.677 20L10.323 20C9.317 20 8.5 19.202 8.5 18.221L8.5 17.724C8.5 15.395 10.441 13.5 12.828 13.5L15.172 13.5ZM16.75 9C16.75 10.655 15.517 12 14 12 12.484 12 11.25 10.655 11.25 9 11.25 7.15 12.304 6 14 6 15.697 6 16.75 7.15 16.75 9Z"></path>
            </svg>
          </span>

          <span className="relative">
            <svg
              viewBox="0 0 28 28"
              height="28"
              style={{
                fill: "#B0B3B8",
                width: "100px",
              }}
              width="28"
            >
              <path d="M23.5 9.5H10.25a.75.75 0 00-.75.75v7c0 .414.336.75.75.75H17v5.5H4.5v-19h19v5zm0 14h-5v-6.25a.75.75 0 00-.75-.75H11V11h12.5v12.5zm1.5.25V4.25C25 3.561 24.439 3 23.75 3H4.25C3.561 3 3 3.561 3 4.25v19.5c0 .689.561 1.25 1.25 1.25h19.5c.689 0 1.25-.561 1.25-1.25z"></path>
            </svg>
          </span>
        </div>
        <div>
          <div className="display:flex items-center">
            <img
              src="https://scontent.ftbs4-1.fna.fbcdn.net/v/t1.30497-1/cp0/c15.0.50.50a/p50x50/84241059_189132118950875_4138507100605120512_n.jpg?_nc_cat=1&ccb=1-3&_nc_sid=7206a8&_nc_ohc=KVCZQJ0gtUIAX-Tt2_0&_nc_ht=scontent.ftbs4-1.fna&tp=27&oh=a72b8a988230c32ce5bb5084a5fd8d2a&oe=608EE00F"
              alt="Facebook Image"
              style={{ width: "28px", height: "28px", borderRadius: "50%" }}
            />
            <span
              style={{
                color: "#E4E6EB",
                fontWeight: 600,
                fontSize: "0.9375rem",
                textTransform: "capitalize",
                marginLeft: "5px",
              }}
            >
              {user.username}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
