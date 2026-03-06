"use client";

import { useState, useEffect } from "react";

import LoadingState from "./LoadingState";
import ErrorBlock from "./ErrorBlock";

function LeadForm({ domain, setSuccess }) {
  const initialValues = {
    isLoading: false,
    domain: domain,
    email: "",
  };

  const initialErrors = {
    validate: false,
    emailError: "",
  };

  const [data, setData] = useState(initialValues);
  const [errors, setErrors] = useState(initialErrors);
  const [emailExist, setEmailExist] = useState("");

  useEffect(() => {
    const validateErrors = () => {
      const dataErrors = {
        emailError:
          (data.email ? "" : "Email is required") ||
          (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) ? "" : "Invalid Email"),
      };
      setErrors(dataErrors);
    };
    validateErrors();
  }, [data]);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setEmailExist("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const isValid = !Object.values(errors).some((v) => v);
    setErrors({ ...errors, ["validate"]: true });
    if (isValid) {
      setData({ ...data, ["isLoading"]: true });
      try {
        // console.log('submit')
        const response = await fetch("/api/lead", {
          method: "POST",
          body: JSON.stringify(data),
        });

        setData({ ...data, ["isLoading"]: false });

        if (response.ok) {
          const res = await response.json();
          // console.log(res.lead.success);
          if (res.lead.success == "success") {
            setSuccess(true);
            console.log("done....");
          } else {
            setEmailExist(res.lead.success);
          }
        } else {
          alert("An error occurred");
        }
      } catch (error) {
        console.log(error);
      } finally {
        //set
      }
    }
  };

  const showStep = () => {
    return (
      <div className="tw-w-full">
        <p className="tw-text-white/80 tw-text-sm tw-font-medium tw-mb-3">
          Enter your email to join the waitlist
        </p>
        <div className="tw-flex tw-flex-col sm:tw-flex-row tw-gap-3 tw-w-full">
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            value={data.email}
            onChange={handleChange}
            className="tw-flex-1 tw-min-w-0 tw-h-12 sm:tw-h-11 tw-px-4 tw-rounded-xl tw-border tw-border-white/20 tw-bg-white/10 tw-text-white tw-placeholder-white/50 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-cyan-400/50 focus:tw-border-cyan-400/50 tw-transition-all"
          />
          <button
            type="button"
            onClick={handleSubmit}
            className="tw-shrink-0 tw-h-12 sm:tw-h-11 tw-px-6 tw-rounded-xl tw-font-semibold tw-bg-cyan-500 hover:tw-bg-cyan-400 tw-text-white tw-border-0 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-cyan-400/50 tw-transition-colors"
          >
            Join the Waitlist
          </button>
        </div>
        {errors.validate ? <ErrorBlock msg={errors.emailError} /> : null}
        {emailExist ? <ErrorBlock msg={emailExist} /> : null}
      </div>
    );
  };

  return <>{data.isLoading ? <LoadingState /> : showStep()}</>;
}

export default LeadForm;
