import React, { useState } from "react";

export const Hero: React.FC = () => {
  //   const [input, setInput] = useState<any>("");
  return (
    <>
      <div className="container">
        <div className="row items-center justify-center h-screen">
          <div className="column position-gx">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
              alt="Facebook"
              className="h-106px -m-7 max-w-full"
            />
            <h2 className="text-2xl ptb-5 max-w-full w-500px text-28px">
              Facebook helps you connect and share with the people in your life.
            </h2>
          </div>
          <div className="column-5 mr-6">
            <div className="fb-log-container max-w-full">
              <div className="display:flex justify-center items-center flex-column max-w-full">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                  className="max-w-full"
                >
                  <div>
                    <input
                      type="text"
                      type="text"
                      className="fb-log-input max-w-full"
                      placeholder="Email address or phone number"
                    />
                    <div className="relative">
                      <input
                        type="password"
                        id="input"
                        className="fb-log-input max-w-full"
                        placeholder="Password"
                      />
                      <div
                        className="w-7 h-7 absolute max-border-radius right-1 password-icon-container"
                        style={{ bottom: "9px" }}
                        id="password:button"
                      >
                        <div
                          id="icon:show-password"
                          className="password-icon w-4 h-4 p-3"
                          style={{ bottom: "6px", right: "6px" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
