// pages/preferences.js
"use client";
import React, { useState, useEffect, FormEvent } from "react";
import { FC } from "react";
import baseUrl from "../common/common_url";

const Preference: FC = () => {
  const [alertType, setAlertType] = useState("");
  const [alertParticipantsEmail, setAlertParticipantsEmail] = useState("");
  const [alertParticipantsPhone, setAlertParticipantsPhone] = useState("");
  const [HighercriticalTemperature, setHigerCriticalTemperature] = useState("");
  const [LowercriticalTemperature, setLowerCriticalTemperature] = useState("");
  const [HighercriticalHumidity, setHigherCriticalHumidity] = useState("");
  const [LowercriticalHumidity, setLowerCriticalHumidity] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (submitted || emailError || phoneError) {
      timer = setTimeout(() => {
        setSubmitted(false);
        setEmailError(false);
        setPhoneError(false);
      }, 10000); // 10 seconds
    }

    return () => {
      clearTimeout(timer);
    };
  }, [submitted, emailError, phoneError]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    // Specify the type of 'e'
    e.preventDefault();

    // Validate email addresses
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    const emails = alertParticipantsEmail
      .split(",")
      .map((email) => email.trim());
    const validEmails = emails.every((email) => emailRegex.test(email));

    // Validate phone numbers
    const phoneRegex = /^\d{11}$/; // Assuming phone numbers are 11 digits long
    const phoneNumbers = alertParticipantsPhone
      .split(",")
      .map((phone) => phone.trim());
    const validPhoneNumbers = phoneNumbers.every((phone) =>
      phoneRegex.test(phone)
    );

    if (!validEmails) {
      setEmailError(true);
      return;
    } else {
      setEmailError(false);
    }

    if (!validPhoneNumbers) {
      setPhoneError(true);
      return;
    } else {
      setPhoneError(false);
    }

    // Prepare data for sending
    const requestData = {
      alertType,
      alertParticipantsEmail,
      alertParticipantsPhone,
      HighercriticalTemperature,
      LowercriticalTemperature,
      HighercriticalHumidity,
      LowercriticalHumidity,
    };

    console.log("All requested datas ", requestData);

    try {
      const response = await fetch(`${baseUrl}/user/add-preference-data`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      //Clear input values
      setAlertType("");
      setAlertParticipantsEmail("");
      setAlertParticipantsPhone("");
      setHigerCriticalTemperature("");
      setLowerCriticalTemperature("");
      setHigherCriticalHumidity("");
      setLowerCriticalHumidity("");

      // Set submitted to true
      setSubmitted(true);
    } catch (error) {
      console.error("Error:", error);
      // Handle error
    }
  };

  return (
    <div className="">
      <div className="px-8 py-8">
        <div className="my-5 border-l-8 text-xl border-[#0165B9] ps-4 py-1 font-semibold bg-gradient-to-r from-[#B9EEFF] to-[#E0F1FC] w-fit">
          <div>Set your preferences</div>
        </div>
        {submitted && (
          <div role="alert" className="alert alert-success mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Sucessfully Submitted!</span>
          </div>
        )}
        {emailError && (
          <div role="alert" className="alert alert-warning mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <span>Warning: Invalid email address!</span>
          </div>
        )}
        {phoneError && (
          <div role="alert" className="alert alert-warning mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <span>Warning: Invalid phone number!</span>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 font-semibold" htmlFor="alertType">
              Alert Type:
            </label>
            <input
              type="radio"
              id="sms"
              name="alertType"
              value="sms"
              className="mr-2 radio radio-primary"
              onChange={(e) => setAlertType(e.target.value)}
            />
            <label className="mr-4" htmlFor="sms">
              SMS
            </label>
            <input
              type="radio"
              id="email"
              name="alertType"
              value="email"
              className="mr-2 radio radio-primary"
              onChange={(e) => setAlertType(e.target.value)}
            />
            <label className="mr-4" htmlFor="email">
              Email
            </label>
            <input
              type="radio"
              id="both"
              name="alertType"
              value="both"
              className="mr-2 radio radio-primary"
              onChange={(e) => setAlertType(e.target.value)}
            />
            <label htmlFor="both">Both</label>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <div className="mb-4">
              <label
                className="block mb-2 font-semibold"
                htmlFor="alertParticipantsEmail"
              >
                Participants Email:
              </label>

              <textarea
                className="textarea textarea-primary w-full"
                placeholder="Enter email addresses..."
                value={alertParticipantsEmail}
                onChange={(e) => setAlertParticipantsEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 font-semibold"
                htmlFor="alertParticipantsPhone"
              >
                Participants Phone:
              </label>

              <textarea
                className="textarea textarea-primary w-full"
                placeholder="Alert phone numbers..."
                value={alertParticipantsPhone}
                onChange={(e) => setAlertParticipantsPhone(e.target.value)}
              />
            </div>
          </div>
          <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <div className="mb-4">
              <label
                className="block mb-2 font-semibold"
                htmlFor="HighercriticalTemperature"
              >
                Higher Critical Temperature:
              </label>
              <input
                type="number"
                id="HighercriticalTemperature"
                placeholder="Enter Higher Critical Temperature..."
                name="HighercriticalTemperature"
                className="input input-bordered input-primary w-full text-sm"
                value={HighercriticalTemperature}
                onChange={(e) => setHigerCriticalTemperature(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 font-semibold"
                htmlFor="LowercriticalTemperature"
              >
                Lower Critical Temperature:
              </label>
              <input
                type="number"
                id="LowercriticalTemperature"
                placeholder="Enter Lower Critical Temperature..."
                name="LowercriticalTemperature"
                className="input input-bordered input-primary w-full text-sm"
                value={LowercriticalTemperature}
                onChange={(e) => setLowerCriticalTemperature(e.target.value)}
              />
            </div>
          </div>

          <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <div className="mb-4">
              <label
                className="block mb-2 font-semibold"
                htmlFor="HighercriticalHumidity"
              >
                Higher Critical Humidity:
              </label>
              <input
                type="number"
                id="HighercriticalHumidity"
                placeholder="Enter Higher Humidity..."
                name="HighercriticalHumidity"
                className="input input-bordered input-primary w-full text-sm"
                value={HighercriticalHumidity}
                onChange={(e) => setHigherCriticalHumidity(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label
                className="block mb-2 font-semibold"
                htmlFor="LowercriticalHumidity"
              >
                Lower Critical Humidity:
              </label>
              <input
                type="number"
                id="LowercriticalHumidity"
                placeholder="Enter Lower Humidity..."
                name="LowercriticalHumidity"
                className="input input-bordered input-primary w-full text-sm"
                value={LowercriticalHumidity}
                onChange={(e) => setLowerCriticalHumidity(e.target.value)}
              />
            </div>
          </div>

          <div className="flex justify-end items-center mb-8">
           <button type="submit" className="btn btn-outline btn-primary mt-4 mr-4">
              Cancel
            </button>
            <button type="submit" className="btn btn-outline btn-primary mt-4">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Preference;
