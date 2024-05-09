import { useEffect } from "react";
import { scrollToTop } from "../util/util";
import { useNavigate } from "react-router-dom";

export default function SocialEng() {
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
            Social Engineering
          </h1>

          <p>
            Social engineering is a manipulative technique used by individuals
            or groups to deceive others into providing sensitive information,
            granting access to restricted areas, or performing certain actions
            that they normally wouldn't do. It's like a psychological game where
            the attacker exploits human behaviour rather than relying solely on
            technical vulnerabilities
          </p>
          <div className="mt-8">
            <h1 className="text-xl font-semibold pb-3">Examples</h1>
            <ul style={{ listStyleType: "disc" }}>
              <li>
                <span className="font-semibold">Impersonation</span>: An
                attacker might impersonate a coach, teammate, or staff member to
                gain your trust and convince you to share sensitive information
                or perform unauthorized actions. For example, they could pose as
                a coach over the phone and ask for your login credentials under
                the pretext of updating team records.
              </li>
              <li>
                <span className="font-semibold">Pretexting</span>: This involves
                creating a fake scenario to manipulate someone into disclosing
                information or taking specific actions. For instance, an
                attacker might pretend to be a journalist doing a profile piece
                on athletes and ask you seemingly harmless questions that
                unintentionally reveal personal details or security information.
              </li>
              <li>
                <span className="font-semibold">Baiting</span>: Attackers might
                leave physical or digital "bait" such as USB drives labelled
                with appealing titles like "Training Tips" in areas frequented
                by athletes. Curiosity prompts someone to plug in the USB drive,
                unknowingly infecting their device with malware or providing the
                attacker with access to sensitive data.
              </li>
              <li>
                <span className="font-semibold">
                  Phishing with Personalized Content
                </span>
                : Social engineers may tailor phishing emails or messages
                specifically for athletes, using information obtained from
                social media profiles or public databases to make the
                communication appear more credible and luring. For example, they
                might reference recent games or events to lure athletes into
                clicking malicious links or attachments.
              </li>
            </ul>
          </div>
          <div className="mt-8">
            <h1 className="text-xl font-semibold pb-3">How to Stay Safe</h1>
            <ul style={{ listStyleType: "disc" }}>
              <li>
                <span className="font-semibold">Verify Identities</span>: Always
                verify the identity of individuals requesting sensitive
                information or actions, especially if the request seems unusual
                or unexpected.
              </li>
              <li>
                <span className="font-semibold">Question Requests</span>: Be
                cautious of requests for sensitive information, even if they
                appear to come from trusted sources. Verify the legitimacy of
                the request through alternative channels before complying.
              </li>
              <li>
                <span className="font-semibold">Maintain Awareness</span>: Stay
                vigilant and educate yourself about common social engineering
                tactics and red flags to better recognize and respond to
                potential threats.
              </li>
              <li>
                <span className="font-semibold">Limit Information Sharing</span>
                : Be mindful of the information you share online, particularly
                on social media platforms, to minimize the amount of personal
                data available to potential attackers.
              </li>
            </ul>
          </div>
          <div className="mt-8">
            <a
              target="_blank"
              className="font-semibold text-[#0056D2]"
              href="https://www.cisco.com/c/en_uk/products/security/what-is-social-engineering.html"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
