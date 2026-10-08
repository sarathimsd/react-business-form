import { CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Header from "./Header";
import Stepper from "./Stepper";

function VerifySuccess() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f8fafc]">

      {/* HEADER */}
      <Header />

      {/* MAIN CONTAINER */}
      <main className="mx-auto flex w-full max-w-[1240px] flex-col px-4 pb-12 pt-6 sm:px-8 sm:pt-8 lg:flex-row lg:gap-14 lg:px-12 lg:pt-14">

        {/* STEPPER */}
        <Stepper currentStep={4} />

        {/* CONTENT */}
        <section className="min-w-0 w-full flex-1">

          <div className="mx-auto flex w-full max-w-[420px] flex-col items-center text-center sm:max-w-[620px] lg:mx-0 lg:max-w-[680px]">

            {/* SUCCESS ICON */}
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
              <CheckCircle2
                size={48}
                className="text-green-500"
              />
            </div>

            {/* TITLE */}
            <h1 className="mt-6 text-2xl font-semibold tracking-tight text-[#303c4a] sm:text-3xl">
              Verification Successful
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-3 max-w-[500px] text-sm leading-6 text-gray-500 sm:text-base">
              Your business information has been successfully verified.
              Your application is now ready for the next step.
            </p>

            {/* SUCCESS BOX */}
            <div className="mt-8 w-full rounded-lg border border-green-200 bg-green-50 px-5 py-4 text-left">
              <p className="text-sm font-medium text-green-700">
                Verification completed successfully.
              </p>

              <p className="mt-1 text-xs leading-5 text-green-600 sm:text-sm">
                All the information you provided has been received and
                verified.
              </p>
            </div>

            {/* BUTTON */}
            <div className="mt-8 w-full border-t border-gray-200/80 pt-6">

              <button
                type="button"
                onClick={() => navigate("/")}
                className="mx-auto flex h-[42px] w-full items-center justify-center rounded-md bg-[#3b8eea] text-xs font-medium text-white transition hover:bg-blue-600 sm:w-[240px] sm:text-sm"
              >
                Back to Start
              </button>

            </div>

          </div>

        </section>

      </main>
    </div>
  );
}

export default VerifySuccess;