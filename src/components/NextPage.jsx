import { ArrowRight, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Header from "./Header";
import Stepper from "./Stepper";
import FormField from "./FormField";

function NextPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f8fafc]">

      {/* HEADER */}
      <Header />

      {/* MAIN CONTAINER */}
      <main className="mx-auto flex w-full max-w-[1240px] flex-col px-4 pb-12 pt-6 sm:px-8 sm:pt-8 lg:flex-row lg:gap-14 lg:px-12 lg:pt-14">

        {/* STEPPER */}
        <Stepper currentStep={3} />

        {/* FORM SECTION */}
        <section className="min-w-0 w-full flex-1">

          <div className="mx-auto w-full max-w-[420px] sm:max-w-[620px] lg:mx-0 lg:max-w-[680px]">

            {/* TITLE */}
            <h1 className="mb-6 text-xl font-semibold tracking-tight text-[#303c4a] sm:mb-8 sm:text-2xl">
              Additional business information
            </h1>

            {/* FORM FIELDS */}
            <div className="space-y-4 sm:space-y-5 lg:space-y-6">

              {/* Business Email */}
              <FormField
                label="Business email"
                description="Email address used for your business"
              >
                <input
                  type="email"
                  placeholder="Enter business email"
                  className="h-[40px] w-full rounded-md border border-gray-200 bg-white px-3 text-xs text-gray-700 outline-none focus:border-blue-500 sm:h-[42px] sm:rounded-lg sm:px-4 sm:text-sm"
                />
              </FormField>

              {/* Business Phone */}
              <FormField
                label="Business phone"
                description="Primary contact number"
              >
                <input
                  type="tel"
                  placeholder="Enter phone number"
                  className="h-[40px] w-full rounded-md border border-gray-200 bg-white px-3 text-xs text-gray-700 outline-none focus:border-blue-500 sm:h-[42px] sm:rounded-lg sm:px-4 sm:text-sm"
                />
              </FormField>

              {/* Business Website */}
              <FormField
                label="Business website"
                description="Your business website, if available"
              >
                <input
                  type="text"
                  placeholder="https://example.com"
                  className="h-[40px] w-full rounded-md border border-gray-200 bg-white px-3 text-xs text-gray-700 outline-none focus:border-blue-500 sm:h-[42px] sm:rounded-lg sm:px-4 sm:text-sm"
                />
              </FormField>

              {/* Business Registration */}
              <FormField
                label="Business registration number"
                description="Helpful description"
              >
                <input
                  type="text"
                  placeholder="Enter registration number"
                  className="h-[40px] w-full rounded-md border border-gray-200 bg-white px-3 text-xs text-gray-700 outline-none focus:border-blue-500 sm:h-[42px] sm:rounded-lg sm:px-4 sm:text-sm"
                />
              </FormField>

              {/* Business Activity */}
              <FormField
                label="Primary business activity"
                description="Select your primary business activity"
              >
                <select
                  className="h-[40px] w-full rounded-md border border-gray-200 bg-white px-3 text-xs text-gray-700 outline-none focus:border-blue-500 sm:h-[42px] sm:rounded-lg sm:px-4 sm:text-sm"
                >
                  <option value="">Select business activity</option>
                  <option value="technology">Technology</option>
                  <option value="retail">Retail</option>
                  <option value="finance">Finance</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="education">Education</option>
                  <option value="other">Other</option>
                </select>
              </FormField>

            </div>

            {/* BUTTONS */}
            <div className="mt-8 border-t border-gray-200/80 pt-6 sm:mt-10 sm:pt-7">

              <div className="button-gap">

                {/* BACK BUTTON */}
                <button
                  type="button"
                  onClick={() => navigate("/")}
                  className="flex h-[42px] w-full items-center justify-center gap-2 rounded-md border border-gray-300 bg-white text-xs font-medium text-gray-700 transition hover:bg-gray-50 sm:w-[150px] sm:text-sm"
                >
                  <ArrowLeft size={18} />
                  Back
                </button>

                {/* CONTINUE BUTTON */}
                <button
                  type="button"
                  onClick={() => navigate("/success")}
                  className="flex h-[42px] w-full items-center justify-center gap-2 rounded-md bg-[#3b8eea] text-xs font-medium text-white transition hover:bg-blue-600 sm:w-[240px] sm:text-sm"
                >
                  Continue
                  <ArrowRight size={18} />
                </button>

              </div>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default NextPage;