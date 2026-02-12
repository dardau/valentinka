import { Heart } from "lucide-react";
import { Button } from "@/app/components/ui/button";

interface QuestionPageProps {
  onYes: () => void;
  onNo: () => void;
}

export function QuestionPage({ onYes, onNo }: QuestionPageProps) {
  return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4">
        <div className="text-center space-y-6 sm:space-y-8 max-w-2xl w-full animate-fade-in">
          {/* Анимация с плавающими сердечками */}
          <div className="relative">
            <div className="absolute -top-30 -left-10 text-pink-500 opacity-20 animate-float-gentle">
              <Heart className="w-12 h-12 sm:w-16 sm:h-16 fill-current" />
            </div>
            <div className="absolute -top-10 -right-10 text-pink-500 opacity-20 animate-float-gentle delay-300">
              <Heart className="w-8 h-8 sm:w-12 sm:h-12 fill-current" />
            </div>
            <div className="absolute -bottom-10 left-1/2 text-pink-500 opacity-20 animate-float-gentle delay-700">
              <Heart className="w-6 h-6 sm:w-10 sm:h-10 fill-current" />
            </div>
            <div className="absolute top-10 right-20 text-pink-500 opacity-25 animate-float-gentle delay-500">
              <Heart className="w-10 h-10 sm:w-14 sm:h-14 fill-current" />
            </div>
            <div className="absolute -bottom-20 left-10 text-pink-500 opacity-15 animate-float-gentle delay-800">
              <Heart className="w-14 h-14 sm:w-18 sm:h-18 fill-current" />
            </div>
            <div className="absolute top-30 left-30 text-pink-500 opacity-10 animate-float-gentle delay-1000">
              <Heart className="w-20 h-20 sm:w-24 sm:h-24 fill-current" />
            </div>
          </div>

          {/* Основная иконка сердца */}
          <div className="flex justify-center">
            <div className="relative">
              <Heart className="w-24 h-24 sm:w-32 sm:h-32 text-pink-500 fill-pink-500 animate-heartbeat" />
              <div className="absolute inset-0 blur-2xl bg-pink-500 opacity-50 animate-heartbeat" />
            </div>
          </div>

          {/* Шаблонный вопрос */}
          <div className="space-y-2 sm:space-y-4 px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight animate-fade-in-up">
              Будешь моей валентинкой?
            </h1>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-pink-500 tracking-tight animate-glow" style={{ textShadow: '0 0 30px rgba(236, 72, 153, 0.5)' }}>
              (имя вашей валентинки)
            </h1>
          </div>

          {/* Кнопки для ответа */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-6 sm:pt-8 px-4">
            <Button
                onClick={onYes}
                className="w-full sm:w-auto px-8 sm:px-12 py-6 sm:py-8 text-xl sm:text-2xl bg-pink-500 hover:bg-pink-600 text-black font-bold rounded-2xl transition-all duration-300 ease-in-out transform hover:scale-110 shadow-[0_0_30px_rgba(236,72,153,0.6)] hover:shadow-[0_0_40px_rgba(236,72,153,0.8)]"
            >
              Да! 💕
            </Button>
            <Button
                onClick={onNo}
                variant="outline"
                className="w-full sm:w-auto px-8 sm:px-12 py-6 sm:py-8 text-xl sm:text-2xl bg-transparent hover:bg-pink-500/10 text-pink-500 border-2 border-pink-500 font-bold rounded-2xl transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Нет
            </Button>
          </div>
        </div>

        <style>{`
        /* Анимации */
        @keyframes heartbeat {
          0%, 100% {
            transform: scale(1);
          }
          25% {
            transform: scale(1.1);
          }
          50% {
            transform: scale(1);
          }
          75% {
            transform: scale(1.1);
          }
        }
        .animate-heartbeat {
          animation: heartbeat 2.5s ease-in-out infinite;
        }

        @keyframes float-gentle {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
            opacity: 0.3;
          }
        }
        .animate-float-gentle {
          animation: float-gentle 3s ease-in-out infinite;
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out 0.3s backwards;
        }

        @keyframes glow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }
        .delay-700 {
          animation-delay: 0.7s;
        }
      `}</style>
      </div>
  );
}

