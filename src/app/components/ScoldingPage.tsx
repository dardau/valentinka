import { ArrowLeft } from "lucide-react";
import { Button } from "@/app/components/ui/button";

interface ScoldingPageProps {
  onGoBack: () => void;
}

export function ScoldingPage({ onGoBack }: ScoldingPageProps) {
  return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4">
        <div className="text-center space-y-6 sm:space-y-8 max-w-3xl w-full animate-fade-in">
          {/* Scolding text */}
          <div className="space-y-4 sm:space-y-6 px-4 animate-fade-in-up">
            <h1
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-500 tracking-tight animate-glow"
                style={{
                  textShadow: "0 0 30px rgba(236, 72, 153, 0.5)",
                }}
            >
              Ты серьезно?!
            </h1>
            <p className="text-2xl sm:text-3xl text-white font-semibold">
              Ты выбрал(а) "Нет"?!
            </p>
            <p className="text-xl sm:text-2xl text-pink-300">
              Ты что, думал(а), что можешь выбрать "Нет"?
            </p>
            <p className="text-lg sm:text-xl text-gray-400 mt-4">
              Ты знаешь, что ты хочешь сказать "Да"... 💕
            </p>
            <p className="text-base sm:text-lg text-gray-500 italic">
              (Подсказка: если ты скажешь "Нет", я тебя точно заставлю передумать!)
            </p>
          </div>

          {/* Funny reasons list */}
          <div className="bg-pink-500/10 border-2 border-pink-500 rounded-2xl p-6 sm:p-8 space-y-4 text-left mx-4 animate-slide-up">
            <h2 className="text-xl sm:text-2xl font-bold text-pink-500 text-center mb-4">
              Почему тебе стоит передумать:
            </h2>
            <ul className="space-y-3 text-base sm:text-lg text-gray-300">
              <li className="flex items-start gap-3 transition-all duration-300 hover:translate-x-2">
                <span className="text-pink-500"></span>
                <span>Ты получишь шанс подарить мне шоколадку!</span>
              </li>
              <li className="flex items-start gap-3 transition-all duration-300 hover:translate-x-2">
                <span className="text-pink-500"></span>
                <span>
                Ты сможешь тратить деньги на меня!(купишь мне еще розы)
              </span>
              </li>
              <li className="flex items-start gap-3 transition-all duration-300 hover:translate-x-2">
                <span className="text-pink-500"></span>
                <span>
                Мы проведем лучший День святого Валентина!
              </span>
              </li>
              <li className="flex items-start gap-3 transition-all duration-300 hover:translate-x-2">
                <span className="text-pink-500"></span>
                <span>К тому же, "Нет" не вариант (просто так, чтобы ты передумал(а)!)</span>
              </li>
            </ul>
          </div>

          {/* Go back button */}
          <Button
              onClick={onGoBack}
              className="w-full sm:w-auto px-6 sm:px-10 py-5 sm:py-6 text-base sm:text-xl bg-pink-500 hover:bg-pink-600 text-black font-bold rounded-2xl transition-all duration-300 ease-in-out transform hover:scale-110 shadow-[0_0_30px_rgba(236,72,153,0.6)] hover:shadow-[0_0_40px_rgba(236,72,153,0.8)] flex items-center justify-center gap-3 mx-auto"
          >
            <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="text-center">
            Попробуй снова, скажи "Да" или я тебя заблокирую! 💕
          </span>
          </Button>
        </div>

        <style>{`
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
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out 0.3s backwards;
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-scale-in {
          animation: scale-in 0.6s ease-out 0.5s backwards;
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out 0.7s backwards;
        }

        @keyframes glow {
          0%, 100% {
            opacity: 1;
            text-shadow: 0 0 30px rgba(236, 72, 153, 0.5);
          }
          50% {
            opacity: 0.9;
            text-shadow: 0 0 40px rgba(236, 72, 153, 0.8);
          }
        }
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>
      </div>
  );
}
