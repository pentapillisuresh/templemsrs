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

    // Remove any existing Google Translate iframes and styles
    const iframes = document.querySelectorAll('iframe[src*="translate.google"]');
    iframes.forEach(iframe => iframe.remove());

    const styles = document.querySelectorAll('.goog-te-banner-frame, .goog-te-menu-frame, .goog-te-ftab-frame');
    styles.forEach(style => style.remove());

    // Avoid adding script multiple times
    if (!document.querySelector("#google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }

    // Define init function globally
    window.googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "te,hi,kn,ta,gu,ml",
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          "google_translate_element"
        );

        // Custom styling to show only Google icon and dropdown
        setTimeout(() => {
          // Hide the language select dropdown but keep the icon
          const select = document.querySelector('.goog-te-combo');
          if (select) {
            (select as HTMLElement).style.display = 'none';
          }
        }, 100);
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
    <div className="google-translate-custom">
      <div
        id="google_translate_element"
        style={{ 
          display: 'inline-block',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          height: '40px',
          overflow: 'hidden'
        }}
      ></div>
    </div>
  );
};

export default GoogleTranslate;