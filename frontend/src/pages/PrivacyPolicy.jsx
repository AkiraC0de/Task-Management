import ContentSections from "../features/About/ContentSections";
import Header from "../features/About/Header";

const PrivacyPolicy = () => {
  const lastUpdated = "January 6, 2026";

  return (
    <div className="min-h-screen bg-white text-gray-800 py-8 px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Header pageTitle="Privacy and Policies" lastUpdated={lastUpdated}/>

        <div className="space-y-10 leading-relaxed text-gray-700">
          <ContentSections header="1. Introduction">
            Welcome to GTask. Your privacy is critically important to us. This Privacy Policy explains how 
            <span className="font-semibold"> AkiraCode</span> ("we," "us," or "our") collects, uses, and shares information 
            about you when you use our web application.
          </ContentSections>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">2. Information We Collect</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><span className="font-semibold">Account Data:</span> Your email and name for authentication and verification.</li>
              <li><span className="font-semibold">Task Data:</span> Titles, group names, and descriptions you create to organize your workflow.</li>
            </ul>
          </section>

          <ContentSections header="3. Use of Data">
            We use your data strictly to provide the GTask service, verify your account, and improve 
            user experience. <span className="text-gray-900 font-medium underline decoration-primary/30">We do not sell your personal data to third parties.</span>
          </ContentSections>

          <ContentSections header="4. Security">
            GTask employs industry-standard SSL/TLS encryption. While we implement strong security measures, 
            no method of electronic storage is 100% secure.
          </ContentSections>

          <ContentSections header="5. Your Rights">
            Under GDPR and CCPA, you have the right to access, update, or delete your data. 
            You may close your account at any time to remove your data from our active databases.
          </ContentSections>

          <ContentSections header="6. ContactRights">
            For questions regarding this policy, reach out via the AkiraCode GitHub profile or 
            contact our support channel.
          </ContentSections>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy