import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { scrollToTop } from "../util/util";

export default function Phishing() {
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
            Phishing
          </h1>

          <p>
            Phishing is a type of cyber-attack where attackers use deceiving
            tactics, like fake emails, websites, or messages, to trick people
            into revealing sensitive information or downloading malware.
          </p>
          <div className="mt-8">
            <h1 className="text-xl font-semibold pb-3">Examples</h1>
            <ul style={{ listStyleType: "disc" }}>
              <li>
                <span className="font-semibold">Fake Team Email</span>: Imagine
                you receive an email that looks like it's from your team manager
                or coach. It says there's an urgent update about your upcoming
                match schedule and asks you to click a link to view it. However,
                when you click the link, it takes you to a fake website that
                steals your login credentials.
              </li>
              <li>
                <span className="font-semibold">Offer for training gear</span>:
                You might get a message on social media offering you a huge
                discount on top-of-the-line training gear if you provide your
                credit card information. The message looks legitimate and might
                even use the logos of well-known brands, but it's actually a
                scam to steal your financial information.
              </li>
              <li>
                <span className="font-semibold">
                  Contest or Sponsorship Scam
                </span>
                : You might receive an email claiming you've won a contest you
                never entered or offering you a sponsorship deal with a big
                company. They ask for your personal information to claim your
                prize or sign the sponsorship contract, but in reality, they're
                just trying to steal your identity or money.
              </li>
              <li>
                <span className="font-semibold">Urgent Financial Request</span>:
                Someone might pose as a fellow athlete, teammate, or coach and
                send you a message claiming they're in a financial bind and need
                your help urgently. They ask you to send money or share your
                bank details to assist them, but it's actually an attacker
                trying to exploit your trust and generosity.
              </li>
            </ul>
          </div>
          <div className="mt-8">
            <h1 className="text-xl font-semibold pb-3">How to Stay Safe</h1>
            <ul style={{ listStyleType: "disc" }}>
              <li>
                <span className="font-semibold">Verify Sources</span>: Always
                double-check the sender's email address or the legitimacy of the
                website or message before clicking on any links or providing any
                personal information.
              </li>
              <li>
                <span className="font-semibold">
                  Use Two-Factor Authentication (2FA)
                </span>
                : Enable 2FA whenever possible to add an extra layer of security
                to your online accounts.
              </li>
              <li>
                <span className="font-semibold">Educate Yourself</span>: Stay
                informed about the latest phishing tactics and learn how to spot
                red flags in suspicious emails, messages, or websites.
              </li>
              <li>
                <span className="font-semibold">
                  Report Suspicious Activity
                </span>
                : If you suspect you've encountered a phishing attempt, report
                it to your team's IT department or the relevant authorities to
                prevent others from falling victim to the scam.
              </li>
            </ul>
          </div>
          <div className="mt-8">
            <a
              target="_blank"
              className="font-semibold text-[#0056D2]"
              href="https://www.imperva.com/learn/application-security/phishing-attack-scam/"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
