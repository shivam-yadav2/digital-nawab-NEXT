import React from "react";
import Banner from "../../components/Banner";

const PrivacyPolicy = () => {
  return (
    <div className="w-full bg-white lg:pb-[100px]">
        <Banner
                title=" Privacy Policy"
                subtitle="Learn more about our company"
                breadcrumb={[
                  { label: "Home", href: "/" },
                  { label: " Privacy Policy", href: "/privacy&policy" },
                ]}
              />
      <div className="container mx-auto p-6 bg-white">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Privacy Policy
          </h1>
          <div className="h-1 w-24 bg-green-600 rounded"></div>
        </div>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <section className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
            <p>
              This Privacy Policy describes how{" "}
              <span className="font-semibold">
                TRAFICO ANALYTICA PRIVATE LIMITED
              </span>{" "}
              and its affiliates (collectively "TRAFICO ANALYTICA PRIVATE
              LIMITED", "we", "our", "us") collect, use, share, protect or
              otherwise process your information/personal data through our
              website{" "}
              <a
                href="https://www.digitalnawab.com/"
                className="!text-green-600 hover:text-green-800 underline font-medium"
              >
                https://www.digitalnawab.com/
              </a>{" "}
              (hereinafter referred to as "Platform").
            </p>
          </section>
          <section className="bg-blue-50 p-6 rounded-lg">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-blue-500 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-blue-800">
                  Important Information
                </h3>
                <p className="mt-1 text-sm text-blue-700">
                  You may browse certain sections of the Platform without
                  registering with us. We do not offer any product/service
                  outside India. Your personal data will primarily be stored and
                  processed in India. By visiting the Platform, providing your
                  information, or availing any service/product, you agree to
                  this Privacy Policy and the applicable terms, and consent to
                  be governed by Indian laws. If you disagree, please do not use
                  the Platform.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                1
              </span>
              Collection of Information
            </h2>
            <div className="ml-11">
              <p className="mb-4">
                We collect personal data when you use our Platform or services
                or interact with us. This includes (but is not limited to):
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Name, DOB, address, contact number, email ID</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Identity/address proof</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Payment data (bank/card info)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Biometric info (when required & opted)</span>
                  </li>
                </ul>
              </div>
              <p className="mt-4 text-sm bg-yellow-50 p-3 rounded border-l-4 border-yellow-400">
                <strong>Note:</strong> You may choose not to provide some
                information, but this may restrict use of certain
                features/services.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                2
              </span>
              Usage of Information
            </h2>
            <div className="ml-11">
              <p className="mb-4">We use your data to:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg">
                  <div className="flex items-start">
                    <svg
                      className="h-5 w-5 text-green-600 mt-0.5 mr-2 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm">Provide & improve services</span>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg">
                  <div className="flex items-start">
                    <svg
                      className="h-5 w-5 text-green-600 mt-0.5 mr-2 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm">
                      Handle orders, disputes, troubleshoot
                    </span>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg">
                  <div className="flex items-start">
                    <svg
                      className="h-5 w-5 text-green-600 mt-0.5 mr-2 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm">
                      Offer personalized content & marketing
                    </span>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg">
                  <div className="flex items-start">
                    <svg
                      className="h-5 w-5 text-green-600 mt-0.5 mr-2 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm">
                      Protect against fraud and unauthorized access
                    </span>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg md:col-span-2">
                  <div className="flex items-start">
                    <svg
                      className="h-5 w-5 text-green-600 mt-0.5 mr-2 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm">
                      Conduct research and surveys
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                3
              </span>
              Sharing of Information
            </h2>
            <div className="ml-11">
              <p className="mb-4">Your data may be shared with:</p>
              <div className="space-y-3">
                <div className="flex items-start bg-blue-50 p-3 rounded-lg">
                  <svg
                    className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  </svg>
                  <span>Our affiliates and corporate entities</span>
                </div>
                <div className="flex items-start bg-purple-50 p-3 rounded-lg">
                  <svg
                    className="h-5 w-5 text-purple-600 mt-0.5 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    Third-party service providers (logistics, payment partners,
                    etc.)
                  </span>
                </div>
                <div className="flex items-start bg-red-50 p-3 rounded-lg">
                  <svg
                    className="h-5 w-5 text-red-600 mt-0.5 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Government/law enforcement, if legally required</span>
                </div>
                <div className="flex items-start bg-orange-50 p-3 rounded-lg">
                  <svg
                    className="h-5 w-5 text-orange-600 mt-0.5 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    Marketing and advertising partners (with opt-out options)
                  </span>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                4
              </span>
              Security Precautions
            </h2>
            <div className="ml-11">
              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border border-green-200">
                <div className="flex items-start">
                  <svg
                    className="h-6 w-6 text-green-600 mt-0.5 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <p className="text-gray-700">
                      We use reasonable security practices to protect your data.
                      However, no method of online transmission is completely
                      secure.
                    </p>
                    <p className="text-sm text-gray-600 mt-2 font-medium">
                      Users must protect their account credentials.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                5
              </span>
              Data Deletion & Retention
            </h2>
            <div className="ml-11">
              <p className="mb-4">
                You can delete your account via profile/settings or request
                support. In case of pending services or claims, deletion may be
                delayed.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                <p className="text-sm">
                  <strong>Retention:</strong> Data is retained only as long as
                  necessary or legally required.
                </p>
                <p className="text-sm">
                  <strong>Analytics:</strong> Anonymized data may be used for
                  analytics.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                6
              </span>
              Your Rights
            </h2>
            <div className="ml-11">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p>
                  You can access, update, or correct your data through platform
                  features.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                7
              </span>
              Consent
            </h2>
            <div className="ml-11">
              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                <p>
                  By using our Platform or providing data, you consent to
                  collection and processing as described.
                </p>
                <p className="mt-2 text-sm font-medium">
                  You may withdraw consent by writing to the Grievance Officer
                  (see below), but services may be restricted as a result.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                8
              </span>
              Changes to this Policy
            </h2>
            <div className="ml-11">
              <p>
                We may update this Privacy Policy from time to time. Please
                review it periodically.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                9
              </span>
              Grievance Officer
            </h2>
            <div className="ml-11">
              <div className="bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-lg border border-green-300">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Contact Information
                    </h3>
                    <div className="space-y-2 text-sm">
                      <p>
                        <span className="font-medium">Name:</span> Sharad Verma
                      </p>
                      <p>
                        <span className="font-medium">Designation:</span>{" "}
                        Co-Founder
                      </p>
                      <p>
                        <span className="font-medium">Company:</span> TRAFICO
                        ANALYTICA PRIVATE LIMITED (Digital Nawab)
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Available Hours
                    </h3>
                    <div className="flex items-center">
                      <svg
                        className="h-4 w-4 text-green-600 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm">
                        Monday-Saturday (10:30 AM - 6:30 PM)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gray-100 p-6 rounded-lg mt-8">
            <div className="text-center">
              <p className="text-sm text-gray-600">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              <p className="text-sm text-gray-600 mt-2">
                For questions about this Privacy Policy, please contact our
                Grievance Officer during business hours.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
