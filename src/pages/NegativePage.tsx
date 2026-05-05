import { useNavigate } from 'react-router-dom';

const reasons = [
  { emoji: '⏱️', title: 'Слишком рано', text: 'Тест сделан слишком рано — ХГЧ ещё не достиг определяемого уровня. Повторите через 3–5 дней.' },
  { emoji: '💧', title: 'Разбавленная моча', text: 'Много жидкости перед тестом снижает концентрацию ХГЧ. Лучше использовать утреннюю мочу.' },
  { emoji: '🧪', title: 'Истёкший срок', text: 'Проверьте срок годности теста — просроченный тест может давать неточные результаты.' },
];

const support = [
  { emoji: '🧘‍♀️', title: 'Не переживайте', text: 'Отрицательный тест — это тоже результат. Всё бывает, и это нормально.' },
  { emoji: '🔄', title: 'Повторите тест', text: 'Если цикл задержался, повторите тест через 3–5 дней или сдайте анализ крови на ХГЧ.' },
  { emoji: '👩‍⚕️', title: 'Обратитесь к врачу', text: 'Если задержка более 7 дней при отрицательном тесте — стоит посетить гинеколога.' },
];

const NegativePage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-page min-h-screen px-4 py-8 font-manrope">
      <div className="max-w-sm mx-auto animate-fade-in">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-1 text-purple-600 font-semibold mb-8 hover:opacity-70 transition-opacity"
        >
          ← Назад
        </button>

        <div className="text-center mb-8">
          <div className="text-7xl mb-4">🌿</div>
          <h1 className="text-3xl font-extrabold text-purple-700 mb-3">Всё будет хорошо</h1>
          <p className="text-gray-500 text-base leading-relaxed">
            Не переживайте — отрицательный результат теста бывает по разным причинам
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-5 mb-5">
          <h2 className="font-bold text-gray-800 text-lg mb-4 flex items-center gap-2">
            <span>🔍</span> Почему тест мог ошибиться?
          </h2>
          <div className="flex flex-col gap-3">
            {reasons.map((r) => (
              <div key={r.title} className="flex items-start gap-3 bg-purple-50 rounded-xl p-3">
                <span className="text-2xl flex-shrink-0">{r.emoji}</span>
                <div>
                  <p className="font-bold text-gray-800 text-sm">{r.title}</p>
                  <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">{r.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-5 mb-5">
          <h2 className="font-bold text-gray-800 text-lg mb-4 flex items-center gap-2">
            <span>💜</span> Что делать дальше?
          </h2>
          <div className="flex flex-col gap-3">
            {support.map((s) => (
              <div key={s.title} className="flex items-start gap-3 bg-purple-50 rounded-xl p-3">
                <span className="text-2xl flex-shrink-0">{s.emoji}</span>
                <div>
                  <p className="font-bold text-gray-800 text-sm">{s.title}</p>
                  <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card-negative rounded-2xl p-6 text-center shadow-lg">
          <p className="text-white font-bold text-lg mb-2">Вы молодец! 🌸</p>
          <p className="text-purple-100 text-sm leading-relaxed">
            Вы заботитесь о своём здоровье — это уже большой шаг. Берегите себя!
          </p>
        </div>

        <p className="text-center text-gray-400 text-xs mt-8 px-4 leading-relaxed">
          Информация соответствует рекомендациям российских учреждений здравоохранения
        </p>
      </div>
    </div>
  );
};

export default NegativePage;
