import React from "react";
import { useLanguage } from "../Components/LanguageProvider";

export default function Privacy() {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: "Privacy & SMS Communication Policy",
      intro: "Velez Psychiatric Services (VPS) and Ginkgo Well Care strive to make communication as easy as possible for patients. To do this, we offer some limited access to SMS text messaging with the following disclaimer:",
      noSharing: "No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. All other categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.",
      hipaaWarning: "Sending SMS text messages to Velez Psychiatric Services (VPS) & Ginkgo Well Care cannot be guaranteed HIPAA-compliant due to user phone access oversight requirements.",
      consent: "Patients sending SMS text messages to providers is their consent to using SMS text messaging for non-emergency responses from their provider whom patients hold harmless for any viewing of unintended HIPAA-protected information through this mode of communication.",
      responsibility: "Patients are responsible for safeguarding the transmission of any protected or private information and are strongly encouraged to limit others' access to devices where healthcare messages are viewed and stored."
    },
    es: {
      title: "Política de Privacidad y Comunicación por SMS",
      intro: "Velez Psychiatric Services (VPS) y Ginkgo Well Care se esfuerzan por hacer que la comunicación sea lo más fácil posible para los pacientes. Para hacer esto, ofrecemos acceso limitado a mensajes de texto SMS con el siguiente descargo de responsabilidad:",
      noSharing: "No se compartirá información móvil con terceros/afiliados con fines de marketing/promoción. Todas las demás categorías excluyen los datos y el consentimiento de activación del originador de mensajes de texto; esta información no se compartirá con terceros.",
      hipaaWarning: "El envío de mensajes de texto SMS a Velez Psychiatric Services (VPS) y Ginkgo Well Care no puede garantizar el cumplimiento de HIPAA debido a los requisitos de supervisión de acceso al teléfono del usuario.",
      consent: "Los pacientes que envían mensajes de texto SMS a los proveedores dan su consentimiento para usar mensajes de texto SMS para respuestas que no son de emergencia de su proveedor, a quien los pacientes eximen de responsabilidad por cualquier visualización de información protegida por HIPAA no intencional a través de este modo de comunicación.",
      responsibility: "Los pacientes son responsables de salvaguardar la transmisión de cualquier información protegida o privada y se les recomienda encarecidamente limitar el acceso de otras personas a los dispositivos donde se ven y almacenan los mensajes de atención médica."
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-teal to-teal-900">
        <div className="container mx-auto px-4 py-10">
          <h1 className="italic text-6xl text-white py-10 text-center">
            {translations[language].title}
          </h1>

          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 max-w-4xl mx-auto mb-10">
            <div className="space-y-6 text-gray-800">
              <p className="text-lg leading-relaxed">
                {translations[language].intro}
              </p>

              <div className="border-l-4 border-teal pl-6 py-2">
                <p className="text-lg leading-relaxed">
                  {translations[language].noSharing}
                </p>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                <p className="text-lg leading-relaxed font-semibold text-yellow-900">
                  {translations[language].hipaaWarning}
                </p>
              </div>

              <p className="text-lg leading-relaxed">
                {translations[language].consent}
              </p>

              <p className="text-lg leading-relaxed font-medium">
                {translations[language].responsibility}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
