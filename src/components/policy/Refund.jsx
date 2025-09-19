import React from "react";
import Banner from "../../components/Banner";

const RefundCancellationPolicy = () => {
  return (
    <div className="w-full bg-white lg:pb-[100px]">
      <Banner
        title="Refund & Cancellation Policy"
        subtitle="Learn more about our company"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Refund & Cancellation Policy", href: "/refund-cancellation" },
        ]}
      />
      <div className="container mx-auto p-6 bg-white">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Refund & Cancellation Policy
          </h1>
          <div className="h-1 w-24 bg-orange-600 rounded"></div>
        </div>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <section className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-600">
            <p>
              This Refund and Cancellation Policy governs the cancellation and
              refund process for services purchased from{" "}
              <span className="font-semibold">
                TRAFICO ANALYTICA PRIVATE LIMITED
              </span>
              , a provider of digital marketing services. By availing of our
              services or accessing our website, you agree to the terms outlined
              below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                1
              </span>
              Cancellation Policy
            </h2>
            <div className="ml-11">
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-orange-50 to-red-50 p-5 rounded-lg border-l-4 border-orange-400">
                  <div className="flex items-start">
                    <svg
                      className="h-5 w-5 text-orange-600 mt-0.5 mr-3 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Cancellation Window
                      </h3>
                      <p className="text-sm">
                        Clients may request a cancellation within{" "}
                        <span className="font-bold text-orange-700">
                          15 Working Days
                        </span>{" "}
                        from the date of payment or service agreement, whichever
                        is earlier.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-5 rounded-lg border-l-4 border-blue-400">
                  <div className="flex items-start">
                    <svg
                      className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Request Process
                      </h3>
                      <p className="text-sm">
                        Cancellation requests must be submitted in writing via
                        email to{" "}
                        <a
                          href="mailto:traficoanalytica@gmail.com"
                          className="!text-blue-600 hover:text-blue-800 underline font-medium"
                        >
                          traficoanalytica@gmail.com
                        </a>{" "}
                        with a valid reason and supporting details.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-red-50 to-pink-50 p-5 rounded-lg border-l-4 border-red-400">
                  <div className="flex items-start">
                    <svg
                      className="h-5 w-5 text-red-600 mt-0.5 mr-3 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Restrictions
                      </h3>
                      <p className="text-sm">
                        No cancellations will be entertained once the project
                        has progressed beyond{" "}
                        <span className="font-bold text-red-700">
                          strategy finalization and/or execution phase
                        </span>
                        .
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-5 rounded-lg border-l-4 border-green-400">
                  <div className="flex items-start">
                    <svg
                      className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Minimum Project Value
                      </h3>
                      <p className="text-sm">
                        Projects with a starting value of{" "}
                        <span className="font-bold text-green-700">
                          INR 15,000 or more
                        </span>{" "}
                        are subject to this policy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                2
              </span>
              Refund Policy
            </h2>
            <div className="ml-11">
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg border border-red-200">
                  <div className="flex items-start">
                    <svg
                      className="h-6 w-6 text-red-600 mt-0.5 mr-3 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-red-800 mb-2">
                        No Refund After Work Begins
                      </h3>
                      <p className="text-sm text-red-700">
                        Once significant planning, content development, ad
                        account setup, or marketing campaigns have commenced,{" "}
                        <span className="font-bold">
                          no refund will be processed
                        </span>
                        .
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border border-green-200">
                  <div className="flex items-start">
                    <svg
                      className="h-6 w-6 text-green-600 mt-0.5 mr-3 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-green-800 mb-2">
                        Refund Processing Time
                      </h3>
                      <p className="text-sm text-green-700">
                        Any refund approved will be credited within{" "}
                        <span className="font-bold">7-15 Working days</span> to
                        the original payment method.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                3
              </span>
              Non-Refundable Items
            </h2>
            <div className="ml-11">
              <div className="bg-gradient-to-r from-gray-50 to-red-50 p-6 rounded-lg border-l-4 border-gray-400">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <svg
                    className="h-5 w-5 text-red-600 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  No refunds will be made for:
                </h3>

                <div className="grid gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-400">
                    <div className="flex items-start">
                      <svg
                        className="h-5 w-5 text-red-500 mt-0.5 mr-3 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div>
                        <h4 className="font-medium text-gray-900">
                          Services Already Delivered
                        </h4>
                        <p className="text-sm text-gray-600 mt-1">
                          Completed work, reports, or deliverables that have
                          been provided to the client.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-400">
                    <div className="flex items-start">
                      <svg
                        className="h-5 w-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" />
                      </svg>
                      <div>
                        <h4 className="font-medium text-gray-900">
                          Third-Party Ad Spends
                        </h4>
                        <p className="text-sm text-gray-600 mt-1">
                          Ad spends paid to third-party platforms (Google, Meta,
                          etc.) that have been utilized for campaigns.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-400">
                    <div className="flex items-start">
                      <svg
                        className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div>
                        <h4 className="font-medium text-gray-900">
                          Technical Purchases
                        </h4>
                        <p className="text-sm text-gray-600 mt-1">
                          Domain registrations, hosting, or paid plugins/tools
                          purchased for the client's project.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-purple-400">
                    <div className="flex items-start">
                      <svg
                        className="h-5 w-5 text-purple-500 mt-0.5 mr-3 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div>
                        <h4 className="font-medium text-gray-900">
                          Initiated Campaigns
                        </h4>
                        <p className="text-sm text-gray-600 mt-1">
                          Customized or time-sensitive campaigns that have
                          already been initiated and are in progress.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-600">
            <div className="flex items-start">
              <svg
                className="h-6 w-6 text-orange-600 mt-0.5 mr-3 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <h3 className="font-semibold text-orange-800 mb-2">
                  Important Note
                </h3>
                <p className="text-sm text-orange-700">
                  This policy is designed to be fair to both clients and our
                  team. We encourage clients to carefully review project details
                  and ask questions before committing to ensure mutual
                  understanding and satisfaction.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gray-100 p-6 rounded-lg mt-8">
            <div className="text-center">
              <p className="text-sm text-gray-600">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              <p className="text-sm text-gray-600 mt-2">
                For questions about refunds or cancellations, please contact us
                at{" "}
                <a
                  href="mailto:traficoanalytica@gmail.com"
                  className="text-orange-600 hover:text-orange-800 underline"
                >
                  traficoanalytica@gmail.com
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RefundCancellationPolicy;
