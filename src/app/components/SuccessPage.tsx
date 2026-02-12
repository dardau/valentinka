import { Heart, Sparkles, Gift, Cake } from "lucide-react";
import { Button } from "@/app/components/ui/button";

interface SuccessPageProps {
  onGoBack: () => void;
}

export function SuccessPage({ onGoBack }: SuccessPageProps) {
  return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4 overflow-hidden">
        {/* Анимация с плавающими сердечками */}
        <div className="fixed inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
              <div
                  key={i}
                  className="absolute text-pink-500 opacity-30 animate-float"
                  style={{
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${5 + Math.random() * 5}s`,
                  }}
              >
                <Heart className="w-6 h-6 sm:w-8 sm:h-8 fill-current" />
              </div>
          ))}
        </div>

        <div className="text-center space-y-6 sm:space-y-10 max-w-4xl relative z-10 w-full">
          {/* Иконка праздника */}
          <div className="flex justify-center gap-2 sm:gap-4 items-center animate-fade-in">
            <Sparkles className="w-10 h-10 sm:w-16 sm:h-16 text-pink-500 fill-pink-500 animate-spin-smooth" />
            <div className="relative">
              <Heart className="w-24 h-24 sm:w-32 md:w-40 sm:h-32 md:h-40 text-pink-500 fill-pink-500 animate-heartbeat" />
              <div className="absolute inset-0 blur-3xl bg-pink-500 opacity-60 animate-heartbeat" />
            </div>
            <Sparkles className="w-10 h-10 sm:w-16 sm:h-16 text-pink-500 fill-pink-500 animate-spin-smooth" />
          </div>

          {/* Сообщение об успехе */}
          <div className="space-y-4 sm:space-y-6 px-4 animate-fade-in-up">
            <h1
                className="text-5xl sm:text-6xl md:text-7xl font-bold text-pink-500 tracking-tight animate-bounce-smooth"
                style={{ textShadow: "0 0 40px rgba(236, 72, 153, 0.6)" }}
            >
              Ура!!
            </h1>
            <p className="text-3xl sm:text-4xl md:text-5xl text-white font-bold">
              Ты сказал(а) Да!
            </p>
            <p className="text-2xl sm:text-3xl text-pink-300 animate-glow">
              Лучшее решение💕
            </p>
          </div>

          {/* Сообщение о любви */}
          <div className="bg-gradient-to-r from-pink-500/20 via-pink-500/30 to-pink-500/20 border-2 border-pink-500 rounded-3xl p-6 sm:p-10 space-y-4 sm:space-y-6 mx-4">
            <p className="text-lg sm:text-xl md:text-2xl text-white leading-relaxed">
              Мы провели вместе так много незабываемых моментов — каждый день с тобой для меня особенный, наполненный радостью, смехом и тем непередаваемым теплом, которое ты приносишь в мою жизнь. Я благодарен(на) судьбе за все те моменты, когда мы были рядом, и за все те моменты, которые нас еще ждут.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-pink-200">
              С тобой каждый день — это как маленький праздник, и сегодня я хочу пожелать нам еще больше счастливых дней, полных любви, поддержки и понимания. Ты — моя опора, моя радость, мой лучший друг и любимый человек.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-400 italic">
              (Этот сайт я сделал с любовью, несмотря на все переживания. Но на самом деле, я всегда готов сделать для тебя всё, даже если у нас нет времени)
            </p>
          </div>


          {/* Функции для удовольствия */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 pt-4 sm:pt-6 px-4">
            <div className="bg-pink-500/10 border border-pink-500/50 rounded-2xl p-5 sm:p-6 space-y-3 transform hover:scale-105 transition-transform">
              <Gift className="w-10 h-10 sm:w-12 sm:h-12 text-pink-500 mx-auto" />
              <h3 className="text-lg sm:text-xl font-bold text-pink-500">Сюрпризы</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Ты заставляешь меня чувствовать себя особенным(ной) с каждым твоим сюрпризом!
              </p>
            </div>
            <div className="bg-pink-500/10 border border-pink-500/50 rounded-2xl p-5 sm:p-6 space-y-3 transform hover:scale-105 transition-transform">
              <Heart className="w-10 h-10 sm:w-12 sm:h-12 text-pink-500 fill-pink-500 mx-auto" />
              <h3 className="text-lg sm:text-xl font-bold text-pink-500">Любовь</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Ты для меня — всё. Твоя любовь дарит мне радость каждый день.
              </p>
            </div>
            <div className="bg-pink-500/10 border border-pink-500/50 rounded-2xl p-5 sm:p-6 space-y-3 transform hover:scale-105 transition-transform">
              <Cake className="w-10 h-10 sm:w-12 sm:h-12 text-pink-500 mx-auto" />
              <h3 className="text-lg sm:text-xl font-bold text-pink-500">Лакомства</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Ты всегда знаешь, как угодить мне сладкими угощениями. Ммм... шоколадки!
              </p>
            </div>
          </div>

          {/* Финальное сообщение */}
          <div className="pt-4 sm:pt-6 px-4">
            <p className="text-3xl sm:text-4xl text-pink-500 font-bold animate-pulse">
              С Днем святого Валентина! 💖
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 mt-4">
              Я сделал тебя самым счастливым человеком сегодня (благодари меня)! 🥰
            </p>
          </div>

          {/* Кнопка "Попробовать снова?" */}
          <div className="pt-6 px-4">
            <Button
                onClick={onGoBack}
                className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl bg-pink-500/20 hover:bg-pink-500/30 text-pink-500 border-2 border-pink-500 font-bold rounded-2xl transition-all duration-300 ease-in-out transform hover:scale-105 shadow-[0_0_20px_rgba(236,72,153,0.4)] hover:shadow-[0_0_30px_rgba(236,72,153,0.6)]"
            >
              Попробовать снова? 💝
            </Button>
          </div>
        </div>

        <style>{`
        /* Анимации */
        @keyframes float {
          0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
          100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }
        .animate-float { animation: float linear infinite; }
        @keyframes spin-smooth { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-spin-smooth { animation: spin-smooth 3s linear infinite; }
        @keyframes heartbeat {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        .animate-heartbeat { animation: heartbeat 2.5s ease-in-out infinite; }
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        .animate-fade-in { animation: fade-in 1s ease-in-out; }
        @keyframes glow { from { text-shadow: 0 0 5px rgba(255, 0, 0, 0.5); } to { text-shadow: 0 0 20px rgba(255, 0, 0, 1); } }
        .animate-glow { animation: glow 1.5s infinite alternate; }
      `}</style>
      </div>
  );
}
