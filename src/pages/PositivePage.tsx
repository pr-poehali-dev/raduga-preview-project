import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BackButton from '@/components/BackButton';
import Icon from '@/components/ui/icon';

const weeks = [
  {
    label: '4–5 недель',
    desc: 'Идёт активное развитие внезародышевых органов. В данное время происходит зарождение всех основных систем будущего организма.',
  },
  {
    label: '8 недель',
    desc: 'Активно развивается нервная система — происходит разделение мозга на отделы, очерчиваются полушария, формируются извилины. Лицо становится более рельефным, формируются уши, ноздри, глаза.',
  },
  {
    label: '12 недель',
    desc: 'Отмечается интенсивное развитие головного мозга, формирование связей со спинным мозгом и большими полушариями.',
  },
  {
    label: '20 недель',
    desc: 'Интенсивный рост размеров. Малыш достаточно активен, совершает многочисленные движения.',
  },
  {
    label: '36–38 недель — малыш готов к встрече с мамой!',
    desc: 'Тело становится розового цвета, мышцы крепче, а плечики приобретают округлую форму. Кроха занимает уже окончательное положение в матке. Беременность считается доношенной.',
  },
];

type Section = 'baby' | 'tips' | 'choice' | null;

const PositivePage = () => {
  const navigate = useNavigate();
  const [showBabyDetail, setShowBabyDetail] = useState(false);
  const [openSection, setOpenSection] = useState<Section>(null);

  const toggleSection = (s: Section) => {
    setOpenSection(prev => prev === s ? null : s);
  };

  if (showBabyDetail) {
    return (
      <div className="bg-page min-h-screen px-4 py-6 font-manrope relative overflow-hidden">
        <div className="absolute top-32 right-6 text-2xl opacity-30 animate-float pointer-events-none">💕</div>
        <div className="absolute top-1/2 left-4 text-2xl opacity-30 animate-float pointer-events-none" style={{ animationDelay: '1s' }}>✨</div>

        <div className="max-w-sm mx-auto animate-fade-in relative z-10">
          <BackButton onClick={() => setShowBabyDetail(false)} />

          <div className="text-5xl mb-1 text-center animate-pulse-soft">🎀</div>
          <h2 className="text-3xl font-extrabold text-crimson text-center mb-2">Поздравляем!</h2>
          <p className="text-center text-gray-500 mb-8">Впереди — одно из самых прекрасных путешествий в твоей жизни</p>

          <div className="flex flex-col gap-4">
            <button
              onClick={() => toggleSection('baby')}
              className="card-blue w-full rounded-2xl p-5 flex items-center gap-4 shadow-lg text-left hover:scale-[1.01] transition-transform"
            >
              <div className="w-16 h-16 rounded-xl overflow-hidden bg-white/20 flex-shrink-0 flex items-center justify-center text-3xl">
                👶
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span>🎬</span>
                  <span className="text-white font-bold text-base">Здравствуй, моя будущая мама!</span>
                </div>
                <div className="text-blue-100 text-sm">Развитие малыша по неделям</div>
              </div>
              <span className="text-white text-lg">{openSection === 'baby' ? '∧' : '∨'}</span>
            </button>

            {openSection === 'baby' && (
              <div className="bg-white rounded-2xl p-5 shadow-sm animate-fade-in">
                <div className="flex items-center gap-2 mb-3">
                  <span>📅</span>
                  <h3 className="font-bold text-gray-800 text-base">Развитие малыша по неделям</h3>
                </div>
                <p className="text-gray-600 text-sm mb-5">
                  На сроке 4–6 недель формируется сердечко, 8 недель — все основные органы. Каждая неделя — маленькое чудо!
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {weeks.slice(0, 4).map((w) => (
                    <div key={w.label} className="bg-blue-50 rounded-xl p-3">
                      <p className="text-gray-700 font-semibold text-xs mb-2">{w.label}</p>
                      <p className="text-gray-500 text-xs leading-relaxed">{w.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-blue-50 rounded-xl p-4 mt-3">
                  <p className="text-gray-700 font-semibold text-sm mb-2 text-center">{weeks[4].label}</p>
                  <p className="text-gray-500 text-sm leading-relaxed text-center">{weeks[4].desc}</p>
                </div>
              </div>
            )}

            <button
              onClick={() => toggleSection('tips')}
              className="card-orange w-full rounded-2xl p-5 flex items-center gap-4 shadow-lg text-left hover:scale-[1.01] transition-transform"
            >
              <div className="w-16 h-16 rounded-xl overflow-hidden bg-white/20 flex-shrink-0 flex items-center justify-center text-3xl">
                🤰
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span>💡</span>
                  <span className="text-white font-bold text-base">Полезные советы</span>
                </div>
                <div className="text-orange-100 text-sm">Здоровье мамы, развитие малыша, соцподдержка</div>
              </div>
              <span className="text-white text-lg">{openSection === 'tips' ? '∧' : '∨'}</span>
            </button>

            {openSection === 'tips' && (
              <div className="flex flex-col gap-4 animate-fade-in">
                <div className="bg-orange-50/90 backdrop-blur-sm rounded-2xl p-5 shadow-sm border border-orange-100">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xl">🏥</span>
                    <h3 className="font-bold text-gray-800 text-base">Первые шаги</h3>
                  </div>
                  <ul className="flex flex-col gap-3 mb-4 text-gray-700 text-sm leading-relaxed">
                    <li>• Встань на учёт в женскую консультацию — до 12 недель</li>
                    <li>• Сдай анализы и врач назначит тебе обследование</li>
                    <li>• Уточни у врача, какие шаги помогут тебе вести правильный образ жизни</li>
                  </ul>
                  <a
                    href="https://2gis.ru/ekaterinburg/search/%D0%B6%D0%B5%D0%BD%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BA%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%86%D0%B8%D1%8F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white rounded-xl p-3 flex items-start gap-3 hover:scale-[1.02] transition-transform"
                  >
                    <span className="text-xl flex-shrink-0">📍</span>
                    <div className="flex-1">
                      <p className="font-bold text-orange-700 text-sm">Ближайшая женская консультация</p>
                      <p className="text-gray-500 text-xs mt-0.5">Поиск на карте Екатеринбурга</p>
                    </div>
                    <Icon name="ExternalLink" size={16} className="text-orange-600 flex-shrink-0 mt-1" />
                  </a>
                </div>

                <div className="bg-green-50/90 backdrop-blur-sm rounded-2xl p-5 shadow-sm border border-green-100">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xl">🤰</span>
                    <h3 className="font-bold text-gray-800 text-base">Меры социальной поддержки</h3>
                  </div>
                  <div className="flex flex-col gap-3">
                    <a
                      href="https://www.gosuslugi.ru/help/faq/payment_newborn/102070"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white rounded-xl p-3 flex items-start gap-3 hover:scale-[1.02] transition-transform"
                    >
                      <span className="text-xl flex-shrink-0">💼</span>
                      <div className="flex-1">
                        <p className="font-bold text-green-700 text-sm">Льготы, пособия и материнский капитал</p>
                        <p className="text-gray-500 text-xs mt-0.5">Пособие по беременности и родам — оформить на Госуслугах</p>
                      </div>
                      <Icon name="ExternalLink" size={16} className="text-green-600 flex-shrink-0 mt-1" />
                    </a>
                    <a
                      href="https://msp.midural.ru/aktualnye-proekty/2024-god-god-semi.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white rounded-xl p-3 flex items-start gap-3 hover:scale-[1.02] transition-transform"
                    >
                      <span className="text-xl flex-shrink-0">🏔️</span>
                      <div className="flex-1">
                        <p className="font-bold text-green-700 text-sm">Поддержка семей — Свердловская область</p>
                        <p className="text-gray-500 text-xs mt-0.5">Региональные льготы, пособия и выплаты</p>
                      </div>
                      <Icon name="ExternalLink" size={16} className="text-green-600 flex-shrink-0 mt-1" />
                    </a>
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={() => toggleSection('choice')}
              className="card-purple w-full rounded-2xl p-5 flex items-center gap-4 shadow-lg text-left hover:scale-[1.01] transition-transform"
            >
              <div className="w-16 h-16 rounded-xl overflow-hidden bg-white/20 flex-shrink-0 flex items-center justify-center text-3xl">
                👫
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span>🕊️</span>
                  <span className="text-white font-bold text-base">Непростой выбор</span>
                </div>
                <div className="text-purple-100 text-sm">Поддержка и помощь в трудной ситуации</div>
              </div>
              <span className="text-white text-lg">{openSection === 'choice' ? '∧' : '∨'}</span>
            </button>

            {openSection === 'choice' && (
              <div className="bg-white rounded-2xl p-5 shadow-sm animate-fade-in">
                <p className="text-gray-700 font-bold mb-3">Вы не одна</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">
                  Если вы оказались в трудной жизненной ситуации — знайте, что вам есть куда обратиться за помощью и поддержкой.
                </p>
                <div className="flex flex-col gap-2">
                  <div className="bg-purple-50 rounded-xl p-3">
                    <p className="font-semibold text-gray-800 text-sm">🏥 Социальная помощь</p>
                    <p className="text-gray-500 text-xs mt-1">Обратитесь в органы социальной защиты населения по месту жительства.</p>
                  </div>
                  <div className="bg-purple-50 rounded-xl p-3">
                    <p className="font-semibold text-gray-800 text-sm">📞 Горячая линия</p>
                    <p className="text-gray-500 text-xs mt-1">Всероссийская горячая линия помощи беременным: 8-800-2000-122 (бесплатно)</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <p className="text-center text-gray-400 text-xs mt-8 px-4 leading-relaxed">
            Информация соответствует рекомендациям российских учреждений здравоохранения
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-page min-h-screen px-4 py-8 font-manrope flex flex-col items-center relative overflow-hidden">
      <div className="absolute top-24 left-8 text-3xl opacity-40 animate-float pointer-events-none">💕</div>
      <div className="absolute top-1/3 right-6 text-2xl opacity-40 animate-float pointer-events-none" style={{ animationDelay: '1.2s' }}>✨</div>
      <div className="absolute bottom-40 left-10 text-3xl opacity-40 animate-float pointer-events-none" style={{ animationDelay: '0.6s' }}>🌸</div>

      <div className="max-w-sm w-full mx-auto animate-fade-in flex flex-col items-center relative z-10">
        <div className="self-start w-full">
          <BackButton onClick={() => navigate('/')} />
        </div>

        <div className="relative mb-6 animate-scale-in">
          <span className="absolute -top-4 left-0 text-2xl animate-pulse-soft">💕</span>
          <div className="w-52 h-52 rounded-full bg-white/60 backdrop-blur-sm shadow-lg flex items-center justify-center animate-float">
            <span className="text-9xl">👶</span>
          </div>
          <span className="absolute -bottom-2 right-0 text-3xl animate-pulse-soft" style={{ animationDelay: '1s' }}>✨</span>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-7 w-full text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <p className="text-crimson font-bold text-xl mb-2 text-center">Здравствуй,</p>
          <h2 className="text-3xl font-extrabold text-crimson mb-4 text-center">моя будущая<br />мама! 💕</h2>
          <p className="text-gray-500 text-base leading-relaxed mb-6 text-center">
            Я пока совсем крошечный, но уже так рад встрече с тобой! Впереди нас ждёт удивительное путешествие длиной в 9 месяцев.
          </p>
          <button
            onClick={() => setShowBabyDetail(true)}
            className="btn-pink"
          >
            Узнать больше ✨
          </button>
        </div>

        <p className="text-center text-gray-400 text-xs mt-8 px-4 leading-relaxed">
          Информация соответствует рекомендациям российских учреждений здравоохранения
        </p>
      </div>
    </div>
  );
};

export default PositivePage;
