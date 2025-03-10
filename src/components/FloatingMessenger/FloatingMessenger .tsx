import { MessageCircleMore } from "lucide-react";
import Link from "next/link";

const FloatingMessenger = () => {
  return (
    <Link
      href="https://m.me/fb.cloudsmsbd"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-sky-600 text-white p-2 z-50 rounded-full shadow-lg hover:bg-sky-500 transition flex items-center justify-center"
    >
  
      <MessageCircleMore size={28}/>
    </Link>
  );
};

export default FloatingMessenger;
