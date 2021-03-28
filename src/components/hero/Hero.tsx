import React, { useState, useRef } from "react";
import { Signin } from "../signin/Signin";

export const Hero: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [emailPhoneNumber, setEmailPhoneNumber] = useState<any>("");
  const [emailPhoneNumberError, setEmailPhoneNumberError] = useState<boolean>(
    false
  );
  const emailPhoneNumberRef = useRef<HTMLInputElement>(null);
  const [password, setPassword] = useState<any>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const passwordErrorRef = useRef<HTMLInputElement>(null);
  const renderLogIn = () => {
    if (!emailPhoneNumber) {
      setEmailPhoneNumberError(true);
      setPasswordError(false);
      emailPhoneNumberRef.current?.focus();
    } else if (!password) {
      setEmailPhoneNumberError(false);
      setPasswordError(true);
      passwordErrorRef.current?.focus();
    } else {
      setEmailPhoneNumberError(false);
      setPasswordError(false);
    }
  };
  return (
    <>
      {showModal && (
        <>
          <Signin
            closeModal={() => {
              setShowModal(false);
            }}
          />
        </>
      )}
      <div className="container">
        <div className="row items-center justify-center h-screen">
          <div className="column position-gx responsive:info">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
              alt="Facebook"
              className="h-106px -m-7 max-w-full"
            />
            <h2 className="text-2xl ptb-5 max-w-full w-500px text-28px">
              Facebook helps you connect and share with the people in your life.
            </h2>
          </div>
          <div className="column-5 mr-12 display:flex items-center justify-center flex-column responsive:validation">
            <div className="fb-log-container max-w-full">
              <div className="display:flex justify-center items-center flex-column max-w-full">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                  style={{ padding: "0 10px" }}
                  className="max-w-full form:res display:flex justify-center items-center flex-column"
                >
                  <div className="relative display:flex justify-center items-center flex-column max-w-full">
                    <input
                      type="text"
                      autoFocus
                      aria-label="Email address or phone number"
                      name="email[phoneNumber]"
                      ref={emailPhoneNumberRef}
                      value={emailPhoneNumber}
                      onChange={(e) => {
                        setEmailPhoneNumber(e.target.value);
                      }}
                      className={
                        emailPhoneNumberError
                          ? "fb-log-input fb-input-error max-w-full"
                          : "fb-log-input max-w-full"
                      }
                      placeholder="Email address or phone number"
                    />
                    {emailPhoneNumberError && (
                      <>
                        <i className="input-error-icon absolute"></i>
                        <div className="text-left fb-text-error ml-2 mr-2">
                          The email address or mobile number you entered isn't
                          connected to an account.{" "}
                          <strong>Find your account and log in.</strong>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="relative mt-3 display:flex items-center justify-center flex-column max-w-full">
                    <input
                      type={showPassword ? "text" : "password"}
                      className={
                        passwordError
                          ? "fb-log-input fb-input-error max-w-full"
                          : "fb-log-input max-w-full"
                      }
                      value={password}
                      aria-label="Password"
                      name="Password"
                      ref={passwordErrorRef}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      placeholder="Password"
                    />
                    {passwordError && (
                      <>
                        <i className="input-error-icon absolute"></i>
                        <div className="text-left fb-text-error ml-2 mr-2">
                          The password that you've entered is incorrect.{" "}
                          <strong style={{ cursor: "pointer" }}>
                            Forgotten password?
                          </strong>
                        </div>
                      </>
                    )}
                    {password.length > 0 && (
                      <div
                        className={
                          passwordError
                            ? "none"
                            : "w-7 h-7 absolute max-border-radius right-1 password-icon-container"
                        }
                        style={{ bottom: "9px" }}
                        onClick={() => {
                          setShowPassword(!showPassword);
                        }}
                      >
                        <div
                          className={
                            showPassword
                              ? "password-close-icon-container w-4 h-4 p-3"
                              : "password-icon w-4 h-4 p-3"
                          }
                          style={{ bottom: "6px", right: "6px" }}
                        ></div>
                      </div>
                    )}
                  </div>
                  <div className="max-w-full">
                    <button
                      className="fb-button-log mt-4 max-w-full"
                      type="submit"
                      onClick={() => renderLogIn()}
                    >
                      Log In
                    </button>
                  </div>
                  <div className="max-w-full mt-4 text-center">
                    <a
                      href="https://www.facebook.com/recover/initiate/?ars=facebook_login&amp;privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjE2ODQ0MTk3LCJjYWxsc2l0ZV9pZCI6MzgxMjI5MDc5NTc1OTQ2fQ%3D%3D"
                      className="fb-forgot-log"
                    >
                      Forgotten password?
                    </a>
                  </div>
                  <div className="fb-hr max-w-full"></div>
                  <div className="max-w-full text-center mt-5">
                    <button
                      className="fb-create-log"
                      onClick={() => {
                        setShowModal(true);
                      }}
                    >
                      Create New Account
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="mt-6 fb-group-log text-center forgotPassword:responsive">
              <strong style={{ cursor: "pointer" }}>Create a Page</strong> for a
              celebrity, band or business.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
/* React */
