import { useEffect } from "react";
import { scrollToTop } from "../util/util";
import { useNavigate } from "react-router-dom";

export default function Tfa() {
  const navigate = useNavigate();
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div>
          <p
            onClick={() => navigate("/training")}
            className="absolute top-[25px] text-[#0056D2] cursor-pointer"
          >
            {" "}
            {`<<< Go Back`}
          </p>
        </div>
        <div className="pt-[40px] pb-[60px]">
          <h1 className="text-center text-3xl font-medium underline pb-2">
            Two-Factor Authentication
          </h1>

          <p>
            Two-factor authentication (2FA) is a security process that requires
            users to provide two different forms of identification before
            gaining access to an online account or system. Typically, this
            involves something you know (like a password or PIN) and something
            you have (like a smartphone or security token).
          </p>
          <div className="mt-8">
            <h1 className="text-xl font-semibold pb-3">Examples</h1>
            <ul style={{ listStyleType: "disc" }}>
              <li>
                <span className="font-semibold">Text Message Codes</span>: After
                entering your username and password, you might receive a
                one-time verification code via text message to your mobile
                phone. You then enter this code on the login page to complete
                the authentication process. For example, after entering your
                password to access your training schedule online, you receive a
                text with a code that you must enter before gaining access to
                the schedule.
              </li>
              <li>
                <span className="font-semibold">Authentication Apps</span>:
                Instead of receiving codes via text message, you can use
                authentication apps like Google Authenticator or other
                authentication applications to generate time-based one-time
                passwords (OTPs). These codes are synchronized with your account
                and change every few seconds, providing an additional layer of
                security. For instance, after entering your password, you open
                the authentication app to generate a unique code that you enter
                to complete the login process.
              </li>
              <li>
                <span className="font-semibold"> Biometric Verification</span>:
                Some systems use biometric data, such as fingerprint scans or
                facial recognition, as the second factor for authentication.
                Athletes might use biometric authentication to access training
                apps or fitness trackers, ensuring that only authorized users
                can view their performance data or training plans.
              </li>
              <li>
                <span className="font-semibold">Hardware Tokens</span>: In
                high-security environments, users may be issued hardware tokens
                or security keys that generate unique codes for authentication.
                These tokens are typically carried on a keychain and require
                physical possession to complete the login process. For example,
                athletes might use hardware tokens to access secure databases or
                training platforms containing sensitive information.
              </li>
            </ul>
          </div>
          <div className="mt-8">
            <h1 className="text-xl font-semibold pb-3">How it Works</h1>
            <ul style={{ listStyleType: "disc" }}>
              <li>
                <span className="font-semibold">
                  First Factor (Something You Know)
                </span>
                : This is usually your password or PIN, which you enter when
                logging into your account.
              </li>
              <li>
                <span className="font-semibold">
                  Second Factor (Something You Have)
                </span>
                : This could be a mobile phone, authentication app, hardware
                token, or biometric data, which provides an additional layer of
                verification.
              </li>
              <li>
                <span className="font-semibold">Authentication Process</span>:
                After entering your password, you're prompted to provide the
                second factor, such as entering a code from an authentication
                app or responding to a text message. Once both factors are
                verified, you gain access to your account.
              </li>
            </ul>
          </div>
          <div className="mt-8">
            <a
              target="_blank"
              className="font-semibold text-[#0056D2]"
              href="https://www.microsoft.com/en-gb/security/business/security-101/what-is-two-factor-authentication-2fa"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
