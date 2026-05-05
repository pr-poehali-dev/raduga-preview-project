import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "@/components/BackButton";
import Icon from "@/components/ui/icon";

type Section = "prep" | "doctor" | "resources" | null;
type MkbbItem = "institutions" | "criteria" | "female" | "male" | "tactics" | null;

const NegativePage = () => {
  const navigate = useNavigate();
  const [openSection, setOpenSection] = useState<Section>(null);
  const [openMkbb, setOpenMkbb] = useState<MkbbItem>(null);

  const toggle = (s: Section) => {
    setOpenSection((prev) => (prev === s ? null : s));
  };

  const toggleMkbb = (m: MkbbItem) => {
    setOpenMkbb((prev) => (prev === m ? null : m));
  };

  return (
    <div className="bg-page min-h-screen px-4 py-8 font-manrope relative overflow-hidden">
      <div className="absolute top-12 left-6 text-xl opacity-50 animate-pulse-soft pointer-events-none">
        ✨
      </div>
      <div
        className="absolute top-24 right-10 text-2xl opacity-60 animate-pulse-soft pointer-events-none"
        style={{ animationDelay: "0.4s" }}
      >
        ⭐
      </div>
      <div
        className="absolute top-40 left-10 text-lg opacity-50 animate-pulse-soft pointer-events-none"
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
        className="absolute top-1/2 right-12 text-lg opacity-50 animate-pulse-soft pointer-events-none"
        style={{ animationDelay: "0.6s" }}
      >
        ⭐
      </div>
      <div
        className="absolute bottom-1/3 left-10 text-xl opacity-60 animate-pulse-soft pointer-events-none"
        style={{ animationDelay: "1.4s" }}
      >
        ✨
      </div>
      <div
        className="absolute bottom-44 right-6 text-2xl opacity-50 animate-pulse-soft pointer-events-none"
        style={{ animationDelay: "0.2s" }}
      >
        ⭐
      </div>
      <div
        className="absolute bottom-24 left-6 text-lg opacity-60 animate-pulse-soft pointer-events-none"
        style={{ animationDelay: "1.8s" }}
      >
        ✨
      </div>
      <div className="absolute top-32 right-8 text-3xl opacity-40 animate-float pointer-events-none">
        🌿
      </div>
      <div
        className="absolute bottom-44 right-2 text-3xl opacity-40 animate-float pointer-events-none"
        style={{ animationDelay: "0.7s" }}
      >
        💜
      </div>

      <div className="max-w-sm mx-auto animate-fade-in relative z-10">
        <BackButton onClick={() => navigate("/")} color="text-purple-700" />

        <div className="text-center mb-6">
          <div className="text-7xl mb-3 animate-float">🌿</div>
          <h1 className="text-3xl font-extrabold text-purple-700 mb-3">
            Не огорчайся!
          </h1>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-5 mb-5">
          <p className="text-gray-700 text-base leading-relaxed">
            Если у тебя отрицательный тест на беременность — это не повод
            расстраиваться. Обратись в свою женскую консультацию: тебе помогут
            подготовиться к беременности и рождению здорового малыша 🌷
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {/* Подготовка к беременности */}
          <button
            onClick={() => toggle("prep")}
            className="w-full rounded-2xl p-5 flex items-center gap-4 shadow-lg text-left hover:scale-[1.01] transition-transform"
            style={{
              background:
                "linear-gradient(135deg, #5eead4 0%, #2dd4bf 60%, #14b8a6 100%)",
            }}
          >
            <div className="w-16 h-16 rounded-xl bg-white/30 flex-shrink-0 flex items-center justify-center text-3xl">
              👫
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span>🌱</span>
                <span className="text-white font-bold text-base">
                  Подготовка к беременности
                </span>
              </div>
              <div className="text-teal-50 text-sm">
                Шаги к здоровому материнству и поиск консультации
              </div>
            </div>
            <span className="text-white text-lg">
              {openSection === "prep" ? "∧" : "∨"}
            </span>
          </button>

          {openSection === "prep" && (
            <div className="flex flex-col gap-4 animate-fade-in">
              <div className="bg-teal-50/90 backdrop-blur-sm rounded-2xl p-5 shadow-sm border border-teal-100">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">📋</span>
                  <h3 className="font-bold text-gray-800 text-base">
                    Рекомендуемые шаги
                  </h3>
                </div>
                <ul className="flex flex-col gap-3 text-gray-700 text-sm leading-relaxed">
                  <li>• Пройди осмотр у гинеколога для оценки здоровья</li>
                  <li>• Сдай базовые анализы крови и на гормоны</li>
                  <li>• Пересмотри питание и режим сна</li>
                  <li>• Откажись от вредных привычек</li>
                </ul>
              </div>

              <div className="bg-teal-50/90 backdrop-blur-sm rounded-2xl p-5 shadow-sm border border-teal-100">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">🏥</span>
                  <h3 className="font-bold text-gray-800 text-base">
                    Найти женскую консультацию
                  </h3>
                </div>
                <a
                  href="https://2gis.ru/ekaterinburg/search/%D0%B6%D0%B5%D0%BD%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BA%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%86%D0%B8%D1%8F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-xl p-3 flex items-start gap-3 hover:scale-[1.02] transition-transform"
                >
                  <span className="text-xl flex-shrink-0">📍</span>
                  <div className="flex-1">
                    <p className="font-bold text-teal-700 text-sm">
                      Ближайшая женская консультация
                    </p>
                    <p className="text-gray-500 text-xs mt-0.5">
                      Поиск на карте Свердловской области
                    </p>
                  </div>
                  <Icon
                    name="ExternalLink"
                    size={16}
                    className="text-teal-600 flex-shrink-0 mt-1"
                  />
                </a>
              </div>
            </div>
          )}

          {/* Записаться к врачу */}
          <button
            onClick={() => toggle("doctor")}
            className="w-full rounded-2xl p-5 flex items-center gap-4 shadow-lg text-left hover:scale-[1.01] transition-transform"
            style={{
              background:
                "linear-gradient(135deg, #c4b5fd 0%, #818cf8 60%, #6366f1 100%)",
            }}
          >
            <div className="w-16 h-16 rounded-xl bg-white/30 flex-shrink-0 flex items-center justify-center text-3xl">
              🧪
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span>👩‍⚕️</span>
                <span className="text-white font-bold text-base">
                  Записаться к врачу
                </span>
              </div>
              <div className="text-indigo-50 text-sm">
                Чат-бот «Запись к врачу», Свердловская область
              </div>
            </div>
            <span className="text-white text-lg">
              {openSection === "doctor" ? "∧" : "∨"}
            </span>
          </button>

          {openSection === "doctor" && (
            <div className="bg-white rounded-2xl p-5 shadow-sm animate-fade-in">
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                Запишись к акушеру-гинекологу прямо сейчас через официальный
                чат-бот Свердловской области — быстро и без очередей.
              </p>
              <a
                href="https://max.ru/k_vrachu_sverdlovsk_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-50 rounded-xl p-4 mb-3 flex items-center gap-3 hover:scale-[1.02] transition-transform"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-500 flex items-center justify-center text-white text-2xl flex-shrink-0">
                  💬
                </div>
                <div className="flex-1">
                  <p className="font-bold text-indigo-700 text-base">
                    Мессенджер MAX
                  </p>
                  <p className="text-gray-600 text-sm">
                    Чат-бот «Запись к врачу»
                  </p>
                  <p className="text-indigo-600 text-xs mt-0.5">
                    Свердловская область
                  </p>
                </div>
                <Icon
                  name="ExternalLink"
                  size={20}
                  className="text-indigo-500 flex-shrink-0"
                />
              </a>
              <div className="bg-gray-50 rounded-xl p-3 text-center">
                <p className="text-gray-500 text-xs leading-relaxed">
                  Также можно позвонить в регистратуру своей поликлиники или
                  обратиться через портал Госуслуг
                </p>
              </div>
            </div>
          )}

          {/* Ресурсы помощи семьям */}
          <button
            onClick={() => toggle("resources")}
            className="w-full rounded-2xl p-5 flex items-center gap-4 shadow-lg text-left hover:scale-[1.01] transition-transform"
            style={{
              background:
                "linear-gradient(135deg, #fda4af 0%, #f472b6 60%, #ec4899 100%)",
            }}
          >
            <div className="w-16 h-16 rounded-xl bg-white/30 flex-shrink-0 flex items-center justify-center text-3xl">
              🤰
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span>🤝</span>
                <span className="text-white font-bold text-base">
                  Ресурсы помощи семьям
                </span>
              </div>
              <div className="text-pink-50 text-sm">
                ВРТ, НКО, поддержка при планировании
              </div>
            </div>
            <span className="text-white text-lg">
              {openSection === "resources" ? "∧" : "∨"}
            </span>
          </button>

          {openSection === "resources" && (
            <div className="bg-white rounded-2xl p-5 shadow-sm animate-fade-in flex flex-col gap-4">
              <p className="text-gray-700 text-sm leading-relaxed">
                Если беременность не наступает длительное время — существуют
                программы помощи и современные медицинские технологии.
              </p>

              <div className="bg-pink-50 rounded-2xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">🧬</span>
                  <h3 className="font-bold text-pink-800 text-sm">
                    ВРТ — Вспомогательные репродуктивные технологии
                  </h3>
                </div>
                <p className="text-gray-600 text-xs leading-relaxed mb-3">
                  ЭКО и другие методы по полису ОМС — обратись к врачу для
                  направления
                </p>
                <div className="flex flex-col gap-2">
                  <a
                    href="https://minzdrav.midural.ru/activity/1988/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white rounded-xl p-3 flex items-start gap-3 hover:scale-[1.02] transition-transform"
                  >
                    <span className="text-xl flex-shrink-0">🏥</span>
                    <div className="flex-1">
                      <p className="font-bold text-pink-700 text-sm">
                        Министерство здравоохранения СО
                      </p>
                      <p className="text-gray-500 text-xs mt-0.5">
                        ВРТ в Свердловской области
                      </p>
                    </div>
                    <Icon
                      name="ExternalLink"
                      size={16}
                      className="text-pink-600 flex-shrink-0 mt-1"
                    />
                  </a>
                  <a
                    href="https://xn--52-6kc3besvhp0j.xn--p1ai/pacientam/eko_po_polisu_oms/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white rounded-xl p-3 flex items-start gap-3 hover:scale-[1.02] transition-transform"
                  >
                    <span className="text-xl flex-shrink-0">💊</span>
                    <div className="flex-1">
                      <p className="font-bold text-pink-700 text-sm">
                        ЭКО по полису ОМС
                      </p>
                      <p className="text-gray-500 text-xs mt-0.5">
                        Флотская 52 — информация для пациентов
                      </p>
                    </div>
                    <Icon
                      name="ExternalLink"
                      size={16}
                      className="text-pink-600 flex-shrink-0 mt-1"
                    />
                  </a>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-2xl p-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">👶</span>
                  <h3 className="font-bold text-orange-800 text-sm">
                    МКББ — межтерриториальные кабинеты бесплодного брака
                  </h3>
                </div>
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => toggleMkbb("institutions")}
                    className="bg-white rounded-xl p-3 flex items-center gap-2 w-full text-left hover:scale-[1.01] transition-transform"
                  >
                    <span>🏛️</span>
                    <p className="font-semibold text-gray-700 text-sm flex-1">
                      Учреждения МКББ
                    </p>
                    <span className="text-orange-500 text-sm">
                      {openMkbb === "institutions" ? "∧" : "∨"}
                    </span>
                  </button>
                  {openMkbb === "institutions" && (
                    <div className="bg-white rounded-xl p-3 animate-fade-in flex flex-col gap-2">
                      <div className="bg-orange-50 rounded-lg p-2.5">
                        <p className="text-gray-700 text-xs leading-relaxed">
                          • <b>ГБУЗ СО «ЕКПЦ»</b> (для города Екатеринбурга)
                        </p>
                      </div>
                      <div className="bg-orange-50 rounded-lg p-2.5">
                        <p className="text-gray-700 text-xs leading-relaxed">
                          • <b>ГАУЗ СО «ОДКБ»</b> — (Берёзовский, Реж, Сысерть,
                          Арамиль, Артёмовский, Полевской, Верхняя Пышма и
                          Среднеуральск)
                        </p>
                      </div>
                      <div className="bg-orange-50 rounded-lg p-2.5">
                        <p className="text-gray-700 text-xs leading-relaxed">
                          • <b>ГАУЗ СО «Алапаевская ГБ»</b> (Алапаевск)
                        </p>
                      </div>
                      <div className="bg-orange-50 rounded-lg p-2.5">
                        <p className="text-gray-700 text-xs leading-relaxed">
                          • <b>ГАУЗ СО «ГБ город Асбест»</b> (Асбест, Рефть,
                          Малышевский ГО, Верхнее Дуброво, Сухой Лог)
                        </p>
                      </div>
                      <div className="bg-orange-50 rounded-lg p-2.5">
                        <p className="text-gray-700 text-xs leading-relaxed">
                          • <b>ГАУЗ СО «КДЦ „ОЗМР“» и ФГБУ «НИИ ОММ»</b> (для
                          Восточного округа)
                        </p>
                      </div>
                      <div className="bg-orange-50 rounded-lg p-2.5">
                        <p className="text-gray-700 text-xs leading-relaxed">
                          • <b>ГАУЗ СО «ГБ город Каменск-Уральский»</b> (для
                          Южного округа)
                        </p>
                      </div>
                      <div className="bg-orange-50 rounded-lg p-2.5">
                        <p className="text-gray-700 text-xs leading-relaxed">
                          • <b>ГАУЗ СО «Красноуфимская РБ»</b> (Красноуфимск,
                          Ачит, Арти)
                        </p>
                      </div>
                      <div className="bg-orange-50 rounded-lg p-2.5">
                        <p className="text-gray-700 text-xs leading-relaxed">
                          • <b>ГАУЗ СО «ГБ №4 город Нижний Тагил»</b> (для
                          Горнозаводского округа)
                        </p>
                      </div>
                      <div className="bg-orange-50 rounded-lg p-2.5">
                        <p className="text-gray-700 text-xs leading-relaxed">
                          • <b>ГАУЗ СО «ГБ город Первоуральск»</b> (для
                          Западного округа)
                        </p>
                      </div>
                      <div className="bg-orange-50 rounded-lg p-2.5">
                        <p className="text-gray-700 text-xs leading-relaxed">
                          • <b>ГАУЗ СО «Серовская ГБ»</b> (для Северного
                          округа)
                        </p>
                      </div>
                    </div>
                  )}

                  <button
                    onClick={() => toggleMkbb("criteria")}
                    className="bg-white rounded-xl p-3 flex items-center gap-2 w-full text-left hover:scale-[1.01] transition-transform"
                  >
                    <span>ℹ️</span>
                    <p className="font-semibold text-gray-700 text-sm flex-1">
                      Критерии бесплодия
                    </p>
                    <span className="text-orange-500 text-sm">
                      {openMkbb === "criteria" ? "∧" : "∨"}
                    </span>
                  </button>
                  {openMkbb === "criteria" && (
                    <div className="bg-white rounded-xl p-3 animate-fade-in">
                      <p className="text-gray-700 text-xs leading-relaxed">
                        Пару считают бесплодной, если беременность у женщины не
                        наступает в течение года регулярной половой жизни без
                        использования средств и методов контрацепции. На
                        лечение бесплодия имеют право мужчина и женщина, как
                        состоящие, так и не состоящие в зарегистрированном
                        браке.
                      </p>
                    </div>
                  )}

                  <button
                    onClick={() => toggleMkbb("female")}
                    className="bg-white rounded-xl p-3 flex items-center gap-2 w-full text-left hover:scale-[1.01] transition-transform"
                  >
                    <span>👩</span>
                    <p className="font-semibold text-gray-700 text-sm flex-1">
                      Обследование женщины
                    </p>
                    <span className="text-orange-500 text-sm">
                      {openMkbb === "female" ? "∧" : "∨"}
                    </span>
                  </button>
                  {openMkbb === "female" && (
                    <div className="bg-white rounded-xl p-3 animate-fade-in">
                      <ul className="flex flex-col gap-1.5 text-gray-700 text-xs">
                        <li className="bg-orange-50 rounded-lg p-2">
                          • Оценка проходимости маточных труб
                        </li>
                        <li className="bg-orange-50 rounded-lg p-2">
                          • Определение гормонального фона
                        </li>
                        <li className="bg-orange-50 rounded-lg p-2">
                          • УЗИ молочных желез и/или маммография
                        </li>
                        <li className="bg-orange-50 rounded-lg p-2">
                          • Микробиологическое исследование на ИППП
                        </li>
                        <li className="bg-orange-50 rounded-lg p-2">
                          • Кольпоскопия
                        </li>
                        <li className="bg-orange-50 rounded-lg p-2">
                          • Консультация эндокринолога
                        </li>
                        <li className="bg-orange-50 rounded-lg p-2">
                          • Биопсия эндометрия (по показаниям)
                        </li>
                      </ul>
                      <p className="text-gray-700 text-xs leading-relaxed mt-2">
                        При наличии показаний для хирургического лечения
                        (трубно-перитонеальное бесплодие, миома матки, полипы
                        эндометрия, эндометриоз и т.д.) женщина
                        госпитализируется в гинекологическое отделение для
                        проведения лечения, преимущественно эндоскопического.
                      </p>
                    </div>
                  )}

                  <button
                    onClick={() => toggleMkbb("male")}
                    className="bg-white rounded-xl p-3 flex items-center gap-2 w-full text-left hover:scale-[1.01] transition-transform"
                  >
                    <span>👨</span>
                    <p className="font-semibold text-gray-700 text-sm flex-1">
                      Обследование мужчины
                    </p>
                    <span className="text-orange-500 text-sm">
                      {openMkbb === "male" ? "∧" : "∨"}
                    </span>
                  </button>
                  {openMkbb === "male" && (
                    <div className="bg-white rounded-xl p-3 animate-fade-in">
                      <ul className="flex flex-col gap-1.5 text-gray-700 text-xs">
                        <li className="bg-orange-50 rounded-lg p-2">
                          • Общее и специальное андрологическое обследование
                        </li>
                        <li className="bg-orange-50 rounded-lg p-2">
                          • Спермограмма
                        </li>
                        <li className="bg-orange-50 rounded-lg p-2">
                          • УЗИ половых органов
                        </li>
                        <li className="bg-orange-50 rounded-lg p-2">
                          • Гормональный фон
                        </li>
                      </ul>
                      <p className="text-gray-700 text-xs leading-relaxed mt-2">
                        При наличии показаний для оперативного лечения
                        (варикоцеле, фимоз, гидроцеле) — госпитализация в
                        урологическое отделение.
                      </p>
                    </div>
                  )}

                  <button
                    onClick={() => toggleMkbb("tactics")}
                    className="bg-white rounded-xl p-3 flex items-center gap-2 w-full text-left hover:scale-[1.01] transition-transform"
                  >
                    <span>💊</span>
                    <p className="font-semibold text-gray-700 text-sm flex-1">
                      Выбор тактики лечения
                    </p>
                    <span className="text-orange-500 text-sm">
                      {openMkbb === "tactics" ? "∧" : "∨"}
                    </span>
                  </button>
                  {openMkbb === "tactics" && (
                    <div className="bg-white rounded-xl p-3 animate-fade-in">
                      <p className="text-gray-700 text-xs leading-relaxed">
                        Выбор тактики ведения и лечения определяется видом
                        бесплодия. При абсолютном трубном бесплодии,
                        неэффективности консервативного и оперативного лечения
                        определяются показания для ВРТ.
                      </p>
                    </div>
                  )}
                </div>
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
};

export default NegativePage;