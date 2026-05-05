import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-page min-h-screen flex flex-col items-center px-5 py-12 font-manrope relative overflow-hidden">
      <div className="absolute top-20 right-10 text-3xl opacity-40 animate-float pointer-events-none">💕</div>
      <div className="absolute top-40 left-6 text-2xl opacity-40 animate-float pointer-events-none" style={{ animationDelay: '1.5s' }}>✨</div>
      <div className="absolute bottom-32 right-8 text-3xl opacity-40 animate-float pointer-events-none" style={{ animationDelay: '0.8s' }}>🌸</div>

      <div className="w-full max-w-sm flex flex-col items-center animate-fade-in relative z-10">
        <div className="text-7xl mb-6 mt-4 animate-float">🤰</div>

        <h1 className="text-4xl font-extrabold text-center text-crimson leading-tight mb-4">
          Тест на<br />беременность
        </h1>

        <p className="text-center text-gray-500 text-lg mb-10 leading-relaxed px-2">
          Выбери результат своего теста и получи персональную информацию и помощь
        </p>

        <div className="w-full flex flex-col gap-4">
          <button
            onClick={() => navigate('/positive')}
            className="card-positive w-full rounded-2xl p-5 flex items-center gap-4 shadow-lg hover:scale-[1.02] transition-transform text-left"
          >
            <span className="text-5xl flex-shrink-0">🎉</span>
            <div className="flex-1">
              <div className="text-white font-bold text-xl leading-tight">
                Тест<br />положительный
              </div>
              <div className="text-pink-100 text-sm mt-1">Две полоски — это две радости!</div>
            </div>
            <span className="text-white text-2xl opacity-80">→</span>
          </button>

          <button
            onClick={() => navigate('/negative')}
            className="card-negative w-full rounded-2xl p-5 flex items-center gap-4 shadow-lg hover:scale-[1.02] transition-transform text-left"
          >
            <span className="text-5xl flex-shrink-0">🌿</span>
            <div className="flex-1">
              <div className="text-white font-bold text-xl leading-tight">
                Тест<br />отрицательный
              </div>
              <div className="text-purple-100 text-sm mt-1">Всё будет хорошо, не огорчайтесь!</div>
            </div>
            <span className="text-white text-2xl opacity-80">→</span>
          </button>
        </div>

        <p className="text-center text-gray-400 text-xs mt-10 px-4 leading-relaxed">
          Информация соответствует рекомендациям российских учреждений здравоохранения
        </p>
      </div>
    </div>
  );
};

export default Index;