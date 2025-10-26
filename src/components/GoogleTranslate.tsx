import { useEffect } from "react";

declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: any;
  }
}

const GoogleTranslate: React.FC = () => {
  useEffect(() => {
    // Clear any existing translate element
    const existingElement = document.getElementById('google_translate_element');
    if (existingElement) {
      existingElement.innerHTML = '';
    }

    // Avoid adding script multiple times
    if (!document.querySelector("#google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(script);
    }

    // Define init function globally
    window.googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "hi,ta,te,ml,bn,gu,kn,pa,fr,de,es,ja,ko,zh-CN,ar,ru",
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          "google_translate_element"
        );
      }
    };

    // Re-initialize if google is already loaded
    if (window.google && window.google.translate) {
      window.googleTranslateElementInit();
    }

    return () => {
      // Cleanup function to prevent memory leaks
      const element = document.getElementById('google_translate_element');
      if (element) {
        element.innerHTML = '';
      }
    };
  }, []);

  return (
    <div
      id="google_translate_element"
      className="google-translate-container"
      style={{ minWidth: "120px" }}
    ></div>
  );
};

export default GoogleTranslate;