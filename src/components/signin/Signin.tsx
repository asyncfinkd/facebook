import React, { useState, useRef } from "react";
import { Day } from "../date/day/Day";
import { Month } from "../date/month/Month";
import { Year } from "../date/year/Year";

interface Props {
  closeModal?: any;
  firstName: string;
  lastName: string;
  emailMobile: string;
  password: string;
  firstNameHandle?: any;
  lastNameHandle?: any;
  emailMobileHandle?: any;
  passwordHandle?: any;
  selectValue?: any;
  selectHandle?: any;
  monthValue?: any;
  monthHandle?: any;
  yearValue?: any;
  yearHandle?: any;
}

export const Signin: React.FC<Props> = ({
  closeModal,
  firstName,
  lastName,
  emailMobile,
  password,
  firstNameHandle,
  lastNameHandle,
  emailMobileHandle,
  passwordHandle,
  selectValue,
  selectHandle,
  monthValue,
  monthHandle,
  yearValue,
  yearHandle,
}) => {
  const [firstNameError, setFirstNameError] = useState<Boolean>(false);
  const [lastNameError, setLastNameError] = useState<Boolean>(false);
  const [numberEmailError, setNumberEmailError] = useState<Boolean>(false);
  const [newPasswordError, setNewPasswordError] = useState<Boolean>(false);
  const firstNameErrorRef = useRef<HTMLInputElement>(null);
  const lastNameErrorRef = useRef<HTMLInputElement>(null);
  const numberEmailErrorRef = useRef<HTMLInputElement>(null);
  const newPasswordErrorRef = useRef<HTMLInputElement>(null);
  const renderSignin = () => {
    if (!firstName) {
      setFirstNameError(true);
      setLastNameError(false);
      setNewPasswordError(false);
      setNumberEmailError(false);
      firstNameErrorRef.current?.focus();
    } else if (!lastName) {
      setNewPasswordError(false);
      setFirstNameError(false);
      setLastNameError(true);
      setNumberEmailError(false);
      lastNameErrorRef.current?.focus();
    } else if (!emailMobile) {
      numberEmailErrorRef.current?.focus();
      setNumberEmailError(true);
      setFirstNameError(false);
      setNewPasswordError(false);
      setLastNameError(false);
    } else if (!password) {
      setNumberEmailError(false);
      setNewPasswordError(true);
      setFirstNameError(false);
      newPasswordErrorRef.current?.focus();
      setLastNameError(false);
    } else if (selectValue == "") {
      console.log(selectValue);
      setNumberEmailError(false);
      setNewPasswordError(false);
      setFirstNameError(false);
      setLastNameError(false);
    } else {
      setNumberEmailError(false);
      setNewPasswordError(false);
      setFirstNameError(false);
      setLastNameError(false);
    }
  };
  return (
    <>
      <div
        className="absolute w-full h-screen z-10 max-w-full"
        style={{
          backgroundColor: "hsla(0,0%,100%,.8)",
          top: "0",
          left: "0",
        }}
      >
        <div className="container">
          <div className="row items-center justify-center h-screen padding-default-0">
            <div
              className="z-40 bg-body max-w-full relative signin:responsive"
              style={{
                borderRadius: "6px",
                width: "432px",
                boxShadow:
                  "0 2px 4px rgba(0,0,0,.1), 0 8px 16px rgba(0,0,0,.1)",
              }}
            >
              <img
                src="https://static.xx.fbcdn.net/rsrc.php/v3/y2/r/__geKiQnSG-.png"
                alt="Close Icon"
                className="absolute"
                onClick={closeModal}
                style={{
                  top: "12px",
                  right: "10px",
                  width: "24px",
                  height: "24px",
                }}
              />
              <div style={{ padding: "16px" }}>
                <div
                  style={{
                    color: "#1c1e21",
                    fontSize: "32px",
                    lineHeight: "38px",
                    fontWeight: "bold",
                  }}
                >
                  Sign Up
                </div>
                <div
                  style={{
                    color: "#606770",
                    fontSize: "15px",
                    fontWeight: "normal",
                    lineHeight: "24px",
                  }}
                >
                  It’s quick and easy.
                </div>
              </div>
              <form
                className="max-w-full"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <div
                  style={{ borderTop: "1px solid #dadde1", padding: "16px" }}
                >
                  <div className="display:flex items-center max-w-full _responsive:direction">
                    <div className="relative w-full">
                      <input
                        type="text"
                        ref={firstNameErrorRef}
                        style={{
                          width: "190px",
                          padding: "9px",
                          outline: "none",
                          color: "#1c1e21",
                          fontSize: "15px",
                          backgroundColor: "#f5f6f7",
                          borderRadius: "5px",
                          border: "1px solid #ccd0d5",
                        }}
                        className="focus max-w-full"
                        placeholder="First name"
                        aria-label="First name"
                        value={firstName}
                        onChange={firstNameHandle}
                      />
                      {firstNameError && (
                        <div
                          className="responsive:tooltip"
                          style={{
                            position: "absolute",
                            right: "210px",
                            width: "135px",
                            boxShadow:
                              " 0 0 0 1px rgba(139, 3, 0, .75), 0 1px 10px rgba(0, 0, 0, .35)",
                            borderRadius: "2px",
                            backgroundColor: "#be4b49",
                            color: "#fff",
                            paddingTop: "10px",
                            paddingBottom: "10px",
                            maxWidth: "100%",
                            paddingLeft: "10px",
                            paddingRight: "10px",
                            fontSize: "13px",
                            top: "0",
                          }}
                        >
                          <span>What's your name?</span>
                        </div>
                      )}
                    </div>
                    <div className="relative w-full mt-3">
                      <input
                        ref={lastNameErrorRef}
                        type="text"
                        style={{
                          width: "190px",
                          padding: "9px",
                          outline: "none",
                          color: "#1c1e21",
                          fontSize: "15px",
                          backgroundColor: "#f5f6f7",
                          borderRadius: "5px",
                          border: "1px solid #ccd0d5",
                        }}
                        className="focus ml-3 max-w-full"
                        placeholder="Last name"
                        aria-label="Last name"
                        value={lastName}
                        onChange={lastNameHandle}
                      />
                      {lastNameError && (
                        <div
                          className="responsive:tooltip"
                          style={{
                            position: "absolute",
                            width: "135px",
                            left: "-140px",
                            boxShadow:
                              " 0 0 0 1px rgba(139, 3, 0, .75), 0 1px 10px rgba(0, 0, 0, .35)",
                            borderRadius: "2px",
                            backgroundColor: "#be4b49",
                            color: "#fff",
                            paddingTop: "10px",
                            paddingBottom: "10px",
                            maxWidth: "100%",
                            paddingLeft: "10px",
                            paddingRight: "10px",
                            fontSize: "13px",
                            top: "0",
                          }}
                        >
                          <span>What's your name?</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="relative">
                      <input
                        type="text"
                        className="focus input__max__scss"
                        placeholder="Mobile number or email"
                        ref={numberEmailErrorRef}
                        style={{
                          padding: "11px",
                          fontSize: "15px",
                          marginTop: "10px",
                          outline: "none",
                          maxWidth: "100%",
                          width: "392px",
                          lineHeight: "16px",
                          color: "#1c1e21",
                          border: "1px solid #ccd0d5",
                          backgroundColor: "#f5f6f7",
                          borderRadius: "5px",
                        }}
                        aria-label="Mobile Number or email"
                        value={emailMobile}
                        onChange={emailMobileHandle}
                      />
                      {numberEmailError && (
                        <div
                          className="responsive:tooltip"
                          style={{
                            position: "absolute",
                            width: "135px",
                            left: "-150px",
                            boxShadow:
                              " 0 0 0 1px rgba(139, 3, 0, .75), 0 1px 10px rgba(0, 0, 0, .35)",
                            borderRadius: "2px",
                            backgroundColor: "#be4b49",
                            color: "#fff",
                            paddingTop: "10px",
                            paddingBottom: "10px",
                            maxWidth: "100%",
                            paddingLeft: "10px",
                            paddingRight: "10px",
                            fontSize: "13px",
                            top: "0",
                          }}
                        >
                          <span>
                            You'll use this when you log in and if you ever need
                            to reset your password.
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="relative">
                      <input
                        type="password"
                        className="focus input__max__scss"
                        ref={newPasswordErrorRef}
                        placeholder="New password"
                        style={{
                          padding: "11px",
                          fontSize: "15px",
                          marginTop: "10px",
                          outline: "none",
                          maxWidth: "100%",
                          width: "392px",
                          lineHeight: "16px",
                          color: "#1c1e21",
                          border: "1px solid #ccd0d5",
                          backgroundColor: "#f5f6f7",
                          borderRadius: "5px",
                        }}
                        aria-label="New password"
                        value={password}
                        onChange={passwordHandle}
                      />
                      {newPasswordError && (
                        <div
                          className="responsive:tooltip"
                          style={{
                            position: "absolute",
                            width: "135px",
                            left: "-150px",
                            boxShadow:
                              " 0 0 0 1px rgba(139, 3, 0, .75), 0 1px 10px rgba(0, 0, 0, .35)",
                            borderRadius: "2px",
                            backgroundColor: "#be4b49",
                            color: "#fff",
                            paddingTop: "10px",
                            paddingBottom: "10px",
                            maxWidth: "100%",
                            paddingLeft: "10px",
                            paddingRight: "10px",
                            fontSize: "13px",
                            top: "0",
                          }}
                        >
                          <span>
                            Enter a combination of at least six numbers, letters
                            and punctuation marks (such as ! and &).
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div
                    className="birthday-scss max-w-full _responsive:direction"
                    style={{
                      fontWeight: "normal",
                      lineHeight: "20px",
                      color: "#606770",
                      fontSize: "13px",
                      marginTop: "12px",
                      marginLeft: "3px",
                    }}
                  >
                    Date of birth
                    <br />
                    <Day
                      selectValue={selectValue}
                      handleSelect={selectHandle}
                    />
                    <Month monthValue={monthValue} monthHandle={monthHandle} />
                    <Year yearValue={yearValue} yearHandle={yearHandle} />
                  </div>
                  <div
                    className="gender:responsive"
                    style={{ marginTop: "10px", marginLeft: "3px" }}
                  >
                    <div
                      style={{
                        color: "#606770",
                        fontSize: "13px",
                        fontWeight: "normal",
                        lineHeight: "20px",
                        marginTop: "2px",
                      }}
                    >
                      Gender
                    </div>
                    <span
                      style={{
                        backgroundColor: "#fff",
                        border: "1px solid #ccd0d5",
                        fontWeight: "normal",
                        borderRadius: "4px",
                        padding: "8px 7px",
                        width: "auto",
                      }}
                    >
                      <label
                        style={{
                          fontSize: "15px",
                          padding: "0 28px 0 10px",
                          lineHeight: "36px",
                          color: "#1c1e21",
                        }}
                        htmlFor="female"
                      >
                        Female
                      </label>
                      <input
                        type="radio"
                        id="female"
                        name="sex"
                        aria-label="Female"
                      />
                    </span>

                    <span
                      style={{
                        backgroundColor: "#fff",
                        border: "1px solid #ccd0d5",
                        fontWeight: "normal",
                        borderRadius: "4px",
                        padding: "8px 7px",
                        width: "auto",
                      }}
                      className="ml-3"
                    >
                      <label
                        style={{
                          fontSize: "15px",
                          padding: "0 28px 0 10px",
                          lineHeight: "36px",
                          color: "#1c1e21",
                        }}
                        htmlFor="male"
                      >
                        Male
                      </label>
                      <input
                        type="radio"
                        id="male"
                        name="sex"
                        aria-label="Male"
                        style={{ marginLeft: "30px" }}
                      />
                    </span>
                    <span
                      style={{
                        backgroundColor: "#fff",
                        border: "1px solid #ccd0d5",
                        fontWeight: "normal",
                        borderRadius: "4px",
                        padding: "8px 7px",
                        width: "auto",
                      }}
                      className="ml-3"
                    >
                      <label
                        style={{
                          fontSize: "15px",
                          padding: "0 28px 0 10px",
                          lineHeight: "36px",
                          color: "#1c1e21",
                        }}
                        htmlFor="custom"
                      >
                        Custom
                      </label>
                      <input
                        type="radio"
                        id="custom"
                        name="sex"
                        aria-label="Custom"
                      />
                    </span>
                  </div>
                  <div>
                    <p
                      style={{
                        color: "#777",
                        fontSize: "11px",
                        margin: "1em 0.5em",
                        lineHeight: "normal",
                      }}
                    >
                      By clicking Sign Up, you agree to our{" "}
                      <a
                        className="linker"
                        href="https://www.facebook.com/legal/terms/update"
                        target="_blank"
                        rel="nofollow"
                      >
                        Terms
                      </a>
                      ,{" "}
                      <a
                        href="https://www.facebook.com/about/privacy/update"
                        className="linker"
                        target="_blank"
                        rel="nofollow"
                      >
                        Data Policy
                      </a>{" "}
                      and{" "}
                      <a
                        href="https://www.facebook.com/policies/cookies/"
                        className="linker"
                        target="_blank"
                        rel="nofollow"
                      >
                        Cookie Policy
                      </a>
                      . You may receive SMS notifications from us and can opt
                      out at any time.
                    </p>
                  </div>
                  <div className="max-w-full" style={{ textAlign: "center" }}>
                    <button
                      type="submit"
                      aria-label="Sign Up"
                      style={{
                        backgroundColor: "#00a400",
                        color: "rgb(255,255,255)",
                        fontWeight: "bolder",
                        height: "36px",
                        overflow: "hidden",
                        padding: "0 32px",
                        textShadow: "none",
                        boxShadow: "none",
                        width: "194px",
                        fontSize: "19px",
                        marginTop: "10px",
                        cursor: "pointer",
                        marginBottom: "10px",
                        borderRadius: "6px",
                        border: "none",
                        outline: "none",
                      }}
                      className="_hover-scss max-w-full"
                      onClick={() => renderSignin()}
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
