import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ModalAgreePDP from "../../mods/ModAgreePDP";
import shield from "../../assets/protect.jpg";

const SectionTitle = ({ children }) => (
  <p className="text-2xl font-bold leading-relaxed text-justify md:text-3xl lg:text-5xl">
    {children}
  </p>
);

const SectionText = ({ children }) => (
  <p className="text-lg font-normal text-justify">{children}</p>
);

const InfoCard = ({ title, content }) => (
  <div className="w-full h-full">
    <p className="text-3xl font-semibold">{title}</p>
    <SectionText>{content}</SectionText>
  </div>
);


const PersonalDataProtection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsModalOpen(true); // Membuka popup saat komponen dimuat
  }, []);

  const handleAgree = () => setIsModalOpen(false);
  const handleDisagree = () => navigate("/");

  return (
    <div className="w-full h-full">
      {isModalOpen && (
        <ModalAgreePDP onAgree={handleAgree} onDisagree={handleDisagree} />
      )}
      <section className="w-full h-full px-5 py-10 md:px-20 lg:px-40">
        <div className="flex flex-col gap-8 md:flex-row-reverse">
          <div className="w-full h-64 md:w-1/2 lg:w-5/12">
            <img
              src={shield}
              alt="shield"
              className="object-cover w-full h-full rounded-xl md:rounded-2xl"
            />
          </div>
          <div className="flex flex-col justify-center w-full gap-5 md:w-1/2 lg:w-7/12">
            <SectionTitle>Personal Data Protection</SectionTitle>
            <SectionText>
              We take the privacy of our website visitors and service users very
              seriously, adhering to the Personal Data Protection Law No. 27 of
              2022. This Privacy Policy explains how we collect, use, disclose,
              and protect information collected via our website or other
              platforms as required by the law.
            </SectionText>
          </div>
        </div>
      </section>

      <section className="flex flex-col w-full h-full gap-5 px-5 pb-10 md:px-20 lg:px-40">
        <SectionTitle>Information We Collect</SectionTitle>
        <div className="flex flex-col w-full h-full gap-5">
          <InfoCard
            title="Personal Information"
            content="Information that can identify an individual, such as name, email
            address, and telephone number. Collected only when voluntarily
            submitted, like through contact forms or service subscriptions."
          />
          <InfoCard
            title="Technical Information"
            content="Collected to improve user experience, such as IP addresses,
            browser type, and usage patterns. This information is used
            internally to enhance website performance and security."
          />
        </div>
      </section>

      <section className="flex flex-col w-full h-full gap-5 px-5 pb-10 md:px-20 lg:px-40">
        <SectionTitle>Use of Information</SectionTitle>
        <SectionText>
          The information we collect may be used for:
        </SectionText>
        <ul className="pl-5 list-disc">
          <li><SectionText>Providing requested information, products, and services.</SectionText></li>
          <li><SectionText>Responding to inquiries and feedback.</SectionText></li>
          <li><SectionText>Improving website functionality and content.</SectionText></li>
          <li><SectionText>Sending updates about our company, products, and services.</SectionText></li>
        </ul>
      </section>

      <section className="flex flex-col w-full h-full gap-5 px-5 pb-10 md:px-20 lg:px-40">
        <SectionTitle>Disclosure of Information</SectionTitle>
        <SectionText>
          Personal information is not shared with third parties except under the following conditions:
        </SectionText>
        <ul className="pl-5 list-disc">
          <li><SectionText>With the individual`s consent.</SectionText></li>
          <li><SectionText>As required by law, such as in response to a subpoena or court order.</SectionText></li>
          <li><SectionText>To protect the rights, property, or safety of mtm.id and the public.</SectionText></li>
        </ul>
      </section>

      <section className="flex flex-col w-full h-full gap-5 px-5 pb-10 md:px-20 lg:px-40">
        <SectionTitle>Data Security</SectionTitle>
        <SectionText>
          We take appropriate measures to secure the personal information from unauthorized access, though no data transmission can be guaranteed to be completely secure.
        </SectionText>
      </section>

      <section className="flex flex-col w-full h-full gap-5 px-5 pb-10 md:px-20 lg:px-40">
        <SectionTitle>Changes to Privacy Policy</SectionTitle>
        <SectionText>
          This policy may be updated, and changes will be posted on this page. Continued use of the website indicates acceptance of the updated policy.
        </SectionText>
      </section>

      <section className="flex flex-col w-full h-full gap-5 px-5 pb-10 md:px-20 lg:px-40">
        <SectionTitle>Contact Us</SectionTitle>
        <SectionText>
          If you have any questions, please contact us at dpo@nsc.id.
        </SectionText>
      </section>
    </div>
  );
};

export default PersonalDataProtection;
