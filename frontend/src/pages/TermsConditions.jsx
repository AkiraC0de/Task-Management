import ContentSections from "../components/ContentSections";

const TermsConditions = () => {
  const lastUpdated = "January 6, 2026";

  return (
    <div className="min-h-screen bg-white text-gray-800 py-12 px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        
        <header className="mb-12 border-b border-gray-100 pb-8">
          <button 
            onClick={() => window.history.back()}
            className="text-primary hover:underline mb-6 flex items-center gap-2 font-medium"
          >
            ← Back to GTask
          </button>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-gray-500 italic">Last Updated: {lastUpdated}</p>
        </header>

        <div className="space-y-10 leading-relaxed text-gray-700">
          <ContentSections header="1. Acceptance of Terms">
             By accessing or using <span className="font-semibold">GTask</span>, provided by 
              <span className="font-semibold text-primary"> AkiraCode</span>, you agree to be bound by these Terms of Service. 
              If you do not agree to these terms, please do not use the service.
          </ContentSections>

          <ContentSections header="2. Description of Service">
            GTask is a task-management platform designed to help users organize group and individual tasks. 
              We reserve the right to modify, suspend, or discontinue any part of the service at any time.
          </ContentSections>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">3. User Accounts</h2>
            <p>To use certain features, you must verify your account. You are responsible for:</p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>Maintaining the confidentiality of your login credentials.</li>
              <li>All activities that occur under your account.</li>
              <li>Notifying us immediately of any unauthorized use.</li>
            </ul>
          </section>

          <section className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
            <h2 className="text-xl font-bold text-primary mb-3">4. Acceptable Use</h2>
            <p>You agree not to use GTask for any unlawful purposes or to upload content that:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
              <li>Is defamatory, obscene, or harassing.</li>
              <li>Infringes on any intellectual property rights.</li>
              <li>Contains software viruses or harmful code.</li>
            </ul>
          </section>

          <ContentSections header="5. Intellectual Property">
            The GTask interface, logo, and brand are the property of AkiraCode. However, 
            <span className="font-semibold text-gray-900"> you retain full ownership</span> of the data and task 
            content you upload to the platform.
          </ContentSections>

          <ContentSections header="6. Limitation of Liability">
            GTask is provided "as is" without warranties of any kind. AkiraCode shall not be liable for 
            any indirect, incidental, or consequential damages resulting from your use of the service.
          </ContentSections>

          <ContentSections header="7. Governing Law">
            These terms are governed by the laws of the jurisdiction in which AkiraCode operates, 
            without regard to its conflict of law provisions.
          </ContentSections>

        </div>
      </div>
    </div>
  );
};
export default TermsConditions