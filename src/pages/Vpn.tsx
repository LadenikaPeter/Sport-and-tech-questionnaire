import { useEffect } from "react";
import { scrollToTop } from "../util/util";
import { useNavigate } from "react-router-dom";

export default function Vpn() {
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
            Virtual Private Network
          </h1>

          <p>
            A VPN creates a secure and encrypted connection between your device
            (such as a laptop or smartphone) and the internet, even when you're
            using public Wi-Fi networks. It routes your internet traffic through
            servers located in different regions, masking your IP address, and
            encrypting your data to prevent third parties from intercepting or
            snooping on your online activities.
          </p>
          <div className="mt-8">
            <h1 className="text-xl font-semibold pb-3">Examples</h1>
            <ul style={{ listStyleType: "disc" }}>
              <li>
                <span className="font-semibold">Training Camp Security</span>:
                When athletes are at training camps or competitions, they often
                use public Wi-Fi networks provided by hotels, stadiums, or
                training facilities. However, these networks can be vulnerable
                to hackers who might try to intercept sensitive information like
                training schedules, tactics, or personal data. By using a VPN,
                athletes can encrypt their internet traffic and protect their
                data from prying eyes, ensuring that their training strategies
                remain confidential.
              </li>
              <li>
                <span className="font-semibold">
                  Accessing Geo-Restricted Content
                </span>
                : Athletes may travel internationally for competitions or events
                and encounter restrictions on accessing certain websites or
                streaming services due to regional limitations. With a VPN, they
                can bypass these geo-blocks by connecting to servers in
                different countries, allowing them to access their favourite
                sports streams, training resources, or entertainment platforms
                from anywhere in the world.
              </li>
              <li>
                <span className="font-semibold">Secure Communication:</span>:
                Athletes often communicate with coaches, teammates, and support
                staff through email, messaging apps, or video calls to discuss
                strategies, performance feedback, or injury management. Using a
                VPN adds an extra layer of security to these communications by
                encrypting the data exchanged between devices, reducing the risk
                of interception, or eavesdropping by malicious actors.
              </li>
            </ul>
          </div>
          <div className="mt-8">
            <h1 className="text-xl font-semibold pb-3">How it Works</h1>
            <ul style={{ listStyleType: "disc" }}>
              <li>
                <span className="font-semibold">Encryption</span>: A VPN
                encrypts your internet traffic, scrambling it into unreadable
                code to prevent unauthorized access or interception.
              </li>
              <li>
                <span className="font-semibold">IP Masking</span>: By routing
                your connection through VPN servers located in different
                regions, a VPN masks your real IP address, making it appear as
                though you're accessing the internet from a different location.
              </li>
              <li>
                <span className="font-semibold">Anonymity</span>: VPNs enhance
                your online anonymity by hiding your browsing history and online
                activities from your internet service provider (ISP), government
                agencies, or other third parties.
              </li>
              <li>
                <span className="font-semibold">Security on Public Wi-Fi</span>:
                VPNs provide a secure tunnel for your data to travel through,
                protecting you from potential security threats when using public
                Wi-Fi networks in airports, hotels, cafes, or stadiums.
              </li>
            </ul>
          </div>
          <div className="mt-8">
            <a
              target="_blank"
              className="font-semibold text-[#0056D2]"
              href="https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-is-vpn#:~:text=A%20VPN%2C%20which%20stands%20for,and%20firewalls%20on%20the%20internet"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
