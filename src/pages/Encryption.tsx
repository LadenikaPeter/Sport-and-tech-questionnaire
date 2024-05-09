import { useNavigate } from "react-router-dom";
import { scrollToTop } from "../util/util";
import { useEffect } from "react";

export default function Encryption() {
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
            Encryption
          </h1>

          <p>
            Encryption is like translating your sensitive information into a
            secret code that only those with the right key can understand. It's
            a bit like writing a secret message in a language that only you and
            your teammates can interpret.
          </p>
          <div className="mt-8">
            <h1 className="text-xl font-semibold pb-3">Examples</h1>
            <ul style={{ listStyleType: "disc" }}>
              <li>
                <span className="font-semibold">Messaging Apps</span>: Athletes
                often use messaging apps to communicate with coaches, teammates,
                and support staff. Encryption ensures that their conversations
                remain private and secure, preventing unauthorized access to
                sensitive information like game strategies, injury updates, or
                personal details. For example, end-to-end encryption in
                messaging apps like Signal or WhatsApp ensures that only the
                sender and intended recipient can read the messages.
              </li>
              <li>
                <span className="font-semibold">File Storage</span>: Athletes
                may store training videos, performance data, or medical records
                in cloud storage services for easy access and collaboration.
                Encryption safeguards these files from unauthorized access,
                ensuring that only authorized users with the decryption key can
                view or modify the contents. Services like Dropbox or Google
                Drive offer encryption to protect users' data stored on their
                platforms.
              </li>
              <li>
                <span className="font-semibold">Online Transactions</span>:
                Athletes often make purchases for training equipment,
                nutritional supplements, or travel expenses online. Encryption
                secures their payment information during online transactions,
                preventing cybercriminals from intercepting and stealing
                sensitive data like credit card numbers or banking details.
                Secure Sockets Layer (SSL) encryption on e-commerce websites
                encrypts payment information during checkout processes, ensuring
                secure transactions.
              </li>
              <li>
                <span className="font-semibold">Video Conferencing</span>: With
                the rise of remote training sessions and virtual meetings,
                athletes rely on video conferencing platforms to connect with
                coaches, trainers, and teammates. Encryption protects these
                video conferences from unauthorized access or eavesdropping,
                preserving the confidentiality of discussions on training
                strategies, performance analysis, or team tactics. Platforms
                like Zoom or Microsoft Teams offer encryption features to secure
                video calls and meetings.
              </li>
            </ul>
          </div>
          <div className="mt-8">
            <h1 className="text-xl font-semibold pb-3">How it Works</h1>
            <ul style={{ listStyleType: "disc" }}>
              <li>
                <span className="font-semibold">Encryption Algorithms</span>:
                Encryption uses mathematical algorithms to transform plaintext
                into ciphertext, scrambling the data into an unreadable format
              </li>
              <li>
                <span className="font-semibold">Encryption Keys</span>:
                Encryption keys are used to encode and decode the data.
                Public-key encryption involves using a pair of keys: a public
                key for encryption and a private key for decryption.
                Symmetric-key encryption uses the same key for both encryption
                and decryption.
              </li>
              <li>
                <span className="font-semibold">
                  Secure Communication Channels
                </span>
                : Encrypted communication channels, such as SSL/TLS protocols
                for web browsing or VPNs for internet traffic, ensure that data
                transmitted between devices remains protected from interception
                or tampering by unauthorized parties.
              </li>
            </ul>
          </div>
          <div className="mt-8">
            <a
              target="_blank"
              className="font-semibold text-[#0056D2]"
              href="https://us.norton.com/blog/privacy/what-is-encryption"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
