import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "@/components/BackButton";
import Icon from "@/components/ui/icon";

const weeks = [
  {
    label: "4–6 недель",
    desc: "Эмбрион размером с маковое зёрнышко (1–2 мм). Формируется нервная трубка и крошечное сердце, которое начинает биться. Закладываются основы всех органов.",
    img: "https://cdn.poehali.dev/projects/1e2c7eb4-b816-4660-8c2e-943f1c0f94ed/files/df2e5d63-8ad1-44c1-8da5-a286ee601f5b.jpg",
  },
  {
    label: "8 недель",
    desc: "Активно развивается нервная система — происходит разделение мозга на отделы, очерчиваются полушария, формируются извилины. Лицо становится более рельефным, формируются уши, ноздри, глаза.",
    img: "https://cdn.poehali.dev/projects/1e2c7eb4-b816-4660-8c2e-943f1c0f94ed/files/bba23fc2-e1b7-45dd-aeca-eed8b211d3f3.jpg",
  },
  {
    label: "12 недель",
    desc: "Отмечается интенсивное развитие головного мозга, формирование связей со спинным мозгом и большими полушариями.",
    img: "https://cdn.poehali.dev/projects/1e2c7eb4-b816-4660-8c2e-943f1c0f94ed/files/94364645-8dda-4ebf-baaa-5fae855bc92f.jpg",
  },
  {
    label: "20 недель",
    desc: "Интенсивный рост размеров. Малыш достаточно активен, совершает многочисленные движения.",
    img: "https://cdn.poehali.dev/projects/1e2c7eb4-b816-4660-8c2e-943f1c0f94ed/files/dae5ef46-9ee1-40ba-b97c-edb07a4c689e.jpg",
  },
  {
    label: "36–38 недель — малыш готов к встрече с мамой!",
    desc: "Тело становится розового цвета, мышцы крепче, а плечики приобретают округлую форму. Кроха занимает уже окончательное положение в матке. Беременность считается доношенной.",
    img: "https://cdn.poehali.dev/projects/1e2c7eb4-b816-4660-8c2e-943f1c0f94ed/files/f272e5e1-971a-4bfb-8d22-4bb27311630c.jpg",
  },
];

type Section = "baby" | "tips" | "choice" | null;

const PositivePage = () => {
  const navigate = useNavigate();
  const [showBabyDetail, setShowBabyDetail] = useState(false);
  const [openSection, setOpenSection] = useState<Section>(null);

  const toggleSection = (s: Section) => {
    setOpenSection((prev) => (prev === s ? null : s));
  };

  if (showBabyDetail) {
    return (
      <div className="bg-page min-h-screen px-4 py-6 font-manrope relative overflow-hidden">
        <div className="absolute top-16 left-6 text-lg opacity-50 animate-pulse-soft pointer-events-none">
          ✨
        </div>
        <div
          className="absolute top-28 right-8 text-xl opacity-60 animate-pulse-soft pointer-events-none"
          style={{ animationDelay: "0.5s" }}
        >
          ⭐
        </div>
        <div
          className="absolute top-44 left-10 text-base opacity-50 animate-pulse-soft pointer-events-none"
          style={{ animationDelay: "1s" }}
        >
          ✨
        </div>
        <div
          className="absolute top-1/3 right-4 text-xl opacity-50 animate-pulse-soft pointer-events-none"
          style={{ animationDelay: "1.5s" }}
        >
          ⭐
        </div>
        <div
          className="absolute top-1/2 left-3 text-2xl opacity-60 animate-pulse-soft pointer-events-none"
          style={{ animationDelay: "0.3s" }}
        >
          ✨
        </div>
        <div
          className="absolute top-2/3 right-6 text-lg opacity-50 animate-pulse-soft pointer-events-none"
          style={{ animationDelay: "1.8s" }}
        >
          ⭐
        </div>
        <div
          className="absolute bottom-1/3 left-12 text-xl opacity-60 animate-pulse-soft pointer-events-none"
          style={{ animationDelay: "0.8s" }}
        >
          ✨
        </div>
        <div
          className="absolute bottom-24 right-10 text-2xl opacity-50 animate-pulse-soft pointer-events-none"
          style={{ animationDelay: "1.2s" }}
        >
          ⭐
        </div>
        <div className="absolute top-32 right-2 text-2xl opacity-30 animate-float pointer-events-none">
          💕
        </div>

        <div className="max-w-sm mx-auto animate-fade-in relative z-10">
          <BackButton onClick={() => setShowBabyDetail(false)} />

          <div className="text-5xl mb-1 text-center animate-pulse-soft">🎀</div>
          <h2 className="text-3xl font-extrabold text-crimson text-center mb-2">
            Поздравляем!
          </h2>
          <p className="text-center text-gray-500 mb-8">
            Впереди — одно из самых прекрасных путешествий в твоей жизни
          </p>

          <div className="flex flex-col gap-4">
            <button
              onClick={() => toggleSection("baby")}
              className="card-blue w-full rounded-2xl p-5 flex items-center gap-4 shadow-lg text-left hover:scale-[1.01] transition-transform"
            >
              <div className="w-16 h-16 rounded-xl overflow-hidden bg-white/20 flex-shrink-0 flex items-center justify-center text-3xl">
                👶
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span>🎬</span>
                  <span className="text-white font-bold text-base">
                    Здравствуй, моя будущая мама!
                  </span>
                </div>
                <div className="text-blue-100 text-sm">
                  Развитие малыша по неделям
                </div>
              </div>
              <span className="text-white text-lg">
                {openSection === "baby" ? "∧" : "∨"}
              </span>
            </button>

            {openSection === "baby" && (
              <div className="bg-white rounded-2xl p-5 shadow-sm animate-fade-in">
                <div className="flex items-center gap-2 mb-3">
                  <span>📅</span>
                  <h3 className="font-bold text-gray-800 text-base">
                    Развитие малыша по неделям
                  </h3>
                </div>
                <p className="text-gray-600 text-sm mb-5">
                  На сроке 4–6 недель формируется сердечко, 8 недель — все
                  основные органы. Каждая неделя — маленькое чудо!
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {weeks.slice(0, 4).map((w) => (
                    <div
                      key={w.label}
                      className="bg-blue-50 rounded-xl p-3 flex flex-col"
                    >
                      <div className="w-full aspect-square rounded-lg overflow-hidden mb-2 bg-white">
                        <img
                          src={w.img}
                          alt={w.label}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-gray-700 font-semibold text-xs mb-1">
                        {w.label}
                      </p>
                      <p className="text-gray-500 text-xs leading-relaxed">
                        {w.desc}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="bg-blue-50 rounded-xl p-4 mt-3">
                  <div className="w-full aspect-[16/10] rounded-lg overflow-hidden mb-3 bg-white">
                    <img
                      src={weeks[4].img}
                      alt={weeks[4].label}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-gray-700 font-semibold text-sm mb-2 text-center">
                    {weeks[4].label}
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed text-center">
                    {weeks[4].desc}
                  </p>
                </div>
              </div>
            )}

            <button
              onClick={() => toggleSection("tips")}
              className="card-orange w-full rounded-2xl p-5 flex items-center gap-4 shadow-lg text-left hover:scale-[1.01] transition-transform"
            >
              <div className="w-16 h-16 rounded-xl overflow-hidden bg-white/20 flex-shrink-0 flex items-center justify-center text-3xl">
                🤰
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span>💡</span>
                  <span className="text-white font-bold text-base">
                    Полезные советы
                  </span>
                </div>
                <div className="text-orange-100 text-sm">
                  Здоровье мамы, развитие малыша, соцподдержка
                </div>
              </div>
              <span className="text-white text-lg">
                {openSection === "tips" ? "∧" : "∨"}
              </span>
            </button>

            {openSection === "tips" && (
              <div className="flex flex-col gap-4 animate-fade-in">
                <div className="bg-orange-50/90 backdrop-blur-sm rounded-2xl p-5 shadow-sm border border-orange-100">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xl">🏥</span>
                    <h3 className="font-bold text-gray-800 text-base">
                      Первые шаги
                    </h3>
                  </div>
                  <ul className="flex flex-col gap-3 mb-4 text-gray-700 text-sm leading-relaxed">
                    <li>
                      • Встань на учёт в женскую консультацию — до 12 недель
                    </li>
                    <li>• Сдай анализы и врач назначит тебе обследование</li>
                    <li>
                      • Уточни у врача, какие шаги помогут тебе вести правильный
                      образ жизни
                    </li>
                  </ul>
                  <a
                    href="https://2gis.ru/ekaterinburg/search/%D0%B6%D0%B5%D0%BD%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BA%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%86%D0%B8%D1%8F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white rounded-xl p-3 flex items-start gap-3 hover:scale-[1.02] transition-transform mb-2"
                  >
                    <span className="text-xl flex-shrink-0">📍</span>
                    <div className="flex-1">
                      <p className="font-bold text-orange-700 text-sm">
                        Ближайшая женская консультация
                      </p>
                      <p className="text-gray-500 text-xs mt-0.5">
                        Поиск на карте Екатеринбурга
                      </p>
                    </div>
                    <Icon
                      name="ExternalLink"
                      size={16}
                      className="text-orange-600 flex-shrink-0 mt-1"
                    />
                  </a>
                  <a
                    href="https://max.ru/k_vrachu_sverdlovsk_bot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white rounded-xl p-3 flex items-start gap-3 hover:scale-[1.02] transition-transform"
                  >
                    <span className="text-xl flex-shrink-0">💬</span>
                    <div className="flex-1">
                      <p className="font-bold text-orange-700 text-sm">
                        Записаться к врачу — MAX
                      </p>
                      <p className="text-gray-500 text-xs mt-0.5">
                        Чат-бот Свердловской области
                      </p>
                    </div>
                    <Icon
                      name="ExternalLink"
                      size={16}
                      className="text-orange-600 flex-shrink-0 mt-1"
                    />
                  </a>
                </div>

                <div className="bg-green-50/90 backdrop-blur-sm rounded-2xl p-5 shadow-sm border border-green-100">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xl">🤰</span>
                    <h3 className="font-bold text-gray-800 text-base">
                      Меры социальной поддержки
                    </h3>
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
                        <p className="font-bold text-green-700 text-sm">
                          Льготы, пособия и материнский капитал
                        </p>
                        <p className="text-gray-500 text-xs mt-0.5">
                          Пособие по беременности и родам — оформить на
                          Госуслугах
                        </p>
                      </div>
                      <Icon
                        name="ExternalLink"
                        size={16}
                        className="text-green-600 flex-shrink-0 mt-1"
                      />
                    </a>
                    <a
                      href="https://msp.midural.ru/aktualnye-proekty/2024-god-god-semi.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white rounded-xl p-3 flex items-start gap-3 hover:scale-[1.02] transition-transform"
                    >
                      <span className="text-xl flex-shrink-0">🏔️</span>
                      <div className="flex-1">
                        <p className="font-bold text-green-700 text-sm">
                          Поддержка семей — Свердловская область
                        </p>
                        <p className="text-gray-500 text-xs mt-0.5">
                          Региональные льготы, пособия и выплаты
                        </p>
                      </div>
                      <Icon
                        name="ExternalLink"
                        size={16}
                        className="text-green-600 flex-shrink-0 mt-1"
                      />
                    </a>
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={() => toggleSection("choice")}
              className="card-purple w-full rounded-2xl p-5 flex items-center gap-4 shadow-lg text-left hover:scale-[1.01] transition-transform"
            >
              <div className="w-16 h-16 rounded-xl overflow-hidden bg-white/20 flex-shrink-0 flex items-center justify-center text-3xl">
                👫
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span>🕊️</span>
                  <span className="text-white font-bold text-base">
                    Непростой выбор
                  </span>
                </div>
                <div className="text-purple-100 text-sm">
                  Поддержка и помощь в трудной ситуации
                </div>
              </div>
              <span className="text-white text-lg">
                {openSection === "choice" ? "∧" : "∨"}
              </span>
            </button>

            {openSection === "choice" && (
              <div className="bg-white rounded-2xl p-5 shadow-sm animate-fade-in">
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  Если ты оказалась в непростой жизненной ситуации — знай, что
                  ты не одна. Есть люди, которые готовы помочь.
                </p>

                <div className="bg-pink-50 rounded-xl p-4 mb-3">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">❤️</span>
                    <div className="flex-1">
                      <p className="font-bold text-purple-800 text-sm mb-1">
                        Фонд «Спаси жизнь»
                      </p>
                      <p className="text-gray-600 text-xs leading-relaxed">
                        Если ты оказалась в трудной ситуации, не оставайся с
                        этим одна. Позвони по номеру{" "}
                        <a
                          href="tel:88001003070"
                          className="text-purple-700 font-semibold underline"
                        >
                          8 (800) 100-30-70
                        </a>{" "}
                        — тебе окажут материальную помощь, а также
                        психологическую и юридическую поддержку.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <a
                    href="https://vk.com/nechayannaya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-50 rounded-xl p-3 flex items-start gap-3 hover:scale-[1.02] transition-transform"
                  >
                    <span className="text-2xl flex-shrink-0">🏠</span>
                    <div className="flex-1">
                      <p className="font-bold text-purple-800 text-sm">
                        Центр «Нечаянная радость»
                      </p>
                      <p className="text-gray-500 text-xs mt-0.5">
                        Помощь беременным и мамам с детьми без жилья
                      </p>
                    </div>
                    <Icon
                      name="ExternalLink"
                      size={16}
                      className="text-purple-600 flex-shrink-0 mt-1"
                    />
                  </a>

                  <a
                    href="https://www.aistenok.org/about/help/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yellow-50 rounded-xl p-3 flex items-start gap-3 hover:scale-[1.02] transition-transform"
                  >
                    <span className="text-2xl flex-shrink-0">🐥</span>
                    <div className="flex-1">
                      <p className="font-bold text-purple-800 text-sm">
                        Организация «Аистёнок»
                      </p>
                      <p className="text-gray-500 text-xs mt-0.5">
                        Помощь семьям с детьми в трудной жизненной ситуации
                      </p>
                    </div>
                    <Icon
                      name="ExternalLink"
                      size={16}
                      className="text-purple-600 flex-shrink-0 mt-1"
                    />
                  </a>

                  <a
                    href="https://vk.com/kolybelekb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-pink-50 rounded-xl p-3 flex items-start gap-3 hover:scale-[1.02] transition-transform"
                  >
                    <span className="text-2xl flex-shrink-0">🛏️</span>
                    <div className="flex-1">
                      <p className="font-bold text-purple-800 text-sm">
                        Центр защиты семьи «Колыбель»
                      </p>
                      <p className="text-gray-500 text-xs mt-0.5">
                        Поддержка и защита семьи, помощь мамам
                      </p>
                    </div>
                    <Icon
                      name="ExternalLink"
                      size={16}
                      className="text-purple-600 flex-shrink-0 mt-1"
                    />
                  </a>
                </div>
              </div>
            )}
          </div>

          <p className="text-center text-gray-400 text-xs mt-8 px-4 leading-relaxed">
            Информация соответствует рекомендациям российских учреждений
            здравоохранения
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-page min-h-screen px-4 py-8 font-manrope flex flex-col items-center relative overflow-hidden">
      <div className="absolute top-12 left-6 text-xl opacity-50 animate-pulse-soft pointer-events-none">
        ✨
      </div>
      <div
        className="absolute top-24 right-8 text-2xl opacity-60 animate-pulse-soft pointer-events-none"
        style={{ animationDelay: "0.4s" }}
      >
        ⭐
      </div>
      <div
        className="absolute top-40 left-12 text-lg opacity-50 animate-pulse-soft pointer-events-none"
        style={{ animationDelay: "0.8s" }}
      >
        ✨
      </div>
      <div
        className="absolute top-56 right-4 text-xl opacity-50 animate-pulse-soft pointer-events-none"
        style={{ animationDelay: "1.2s" }}
      >
        ⭐
      </div>
      <div
        className="absolute top-1/3 left-4 text-2xl opacity-60 animate-pulse-soft pointer-events-none"
        style={{ animationDelay: "1.6s" }}
      >
        ✨
      </div>
      <div
        className="absolute top-1/2 right-10 text-lg opacity-50 animate-pulse-soft pointer-events-none"
        style={{ animationDelay: "0.6s" }}
      >
        ⭐
      </div>
      <div
        className="absolute bottom-1/3 left-8 text-xl opacity-60 animate-pulse-soft pointer-events-none"
        style={{ animationDelay: "1.4s" }}
      >
        ✨
      </div>
      <div
        className="absolute bottom-40 right-12 text-2xl opacity-50 animate-pulse-soft pointer-events-none"
        style={{ animationDelay: "0.2s" }}
      >
        ⭐
      </div>
      <div
        className="absolute bottom-24 left-6 text-lg opacity-50 animate-pulse-soft pointer-events-none"
        style={{ animationDelay: "1.8s" }}
      >
        ✨
      </div>
      <div
        className="absolute bottom-12 right-8 text-xl opacity-60 animate-pulse-soft pointer-events-none"
        style={{ animationDelay: "1s" }}
      >
        ⭐
      </div>
      <div className="absolute top-32 left-1/2 text-3xl opacity-40 animate-float pointer-events-none">
        💕
      </div>
      <div
        className="absolute bottom-1/2 left-2 text-2xl opacity-40 animate-float pointer-events-none"
        style={{ animationDelay: "0.5s" }}
      >
        🌸
      </div>

      <div className="max-w-sm w-full mx-auto animate-fade-in flex flex-col items-center relative z-10">
        <div className="self-start w-full">
          <BackButton onClick={() => navigate("/")} />
        </div>

        <div className="relative mb-6">
          <span className="absolute -top-4 left-0 text-2xl animate-pulse-soft z-10">
            💕
          </span>
          <div className="w-52 h-52 rounded-full bg-white/60 backdrop-blur-sm shadow-lg flex items-center justify-center animate-float overflow-hidden">
            <img
              src="https://cdn.poehali.dev/projects/1e2c7eb4-b816-4660-8c2e-943f1c0f94ed/files/f8bb44c1-2252-4507-9f10-9165eb5c20e1.jpg"
              alt="Малыш"
              className="w-full h-full object-cover"
            />
          </div>
          <span
            className="absolute -bottom-2 right-0 text-3xl animate-pulse-soft z-10"
            style={{ animationDelay: "1s" }}
          >
            ✨
          </span>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-7 w-full text-center">
          <p className="text-crimson font-bold text-xl mb-2 text-center">
            Здравствуй,
          </p>
          <h2 className="text-3xl font-extrabold text-crimson mb-4 text-center">
            моя будущая
            <br />
            мама! 💕
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-6 text-center">
            Я пока совсем крошечный, но уже так рад встрече с тобой! Впереди нас
            ждёт удивительное путешествие длиной в 9 месяцев.
          </p>
          <button onClick={() => setShowBabyDetail(true)} className="btn-pink">
            Узнать больше ✨
          </button>
        </div>

        <p className="text-center text-gray-400 text-xs mt-8 px-4 leading-relaxed">
          Информация соответствует рекомендациям российских учреждений
          здравоохранения
        </p>
      </div>
    </div>
  );
};

export default PositivePage;