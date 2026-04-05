import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919120203160?text=Hi%2C%20I%20want%20to%20book%20a%20self-drive%20car"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-50 w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200 animate-float bottom-[max(1rem,env(safe-area-inset-bottom,0px)+0.5rem)] right-[max(1rem,env(safe-area-inset-right,0px)+0.25rem)] sm:bottom-[max(1.5rem,env(safe-area-inset-bottom,0px)+0.5rem)] sm:right-[max(1.5rem,env(safe-area-inset-right,0px)+0.25rem)]"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
    </a>
  );
};

export default WhatsAppButton;
