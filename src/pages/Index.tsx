import { useState } from "react";
import Icon from "@/components/ui/icon";

const BIRD_IMG = "https://cdn.poehali.dev/projects/2e42e12a-9361-4b13-ab7b-e7ca07957ae6/files/27b71e62-3347-4f6a-bb0d-c65feac538ab.jpg";
const ANIMAL_IMG = "https://cdn.poehali.dev/projects/2e42e12a-9361-4b13-ab7b-e7ca07957ae6/files/e03677f4-0bbf-4364-ae7e-235cd607eb30.jpg";

const AMOUNTS = [200, 500, 1000, 2000];

export default function Index() {
  const [selected, setSelected] = useState<number | null>(500);
  const [custom, setCustom] = useState("");
  const [activeSection, setActiveSection] = useState<"birds" | "animals">("birds");
  const [showCard, setShowCard] = useState(false);
  const [copied, setCopied] = useState(false);

  const CARD_NUMBER = "2202 2088 1738 2048";

  const copyCard = () => {
    navigator.clipboard.writeText(CARD_NUMBER.replace(/\s/g, ""));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const donateAmount = custom ? parseInt(custom) : selected;

  const getHint = () => {
    if (!donateAmount) return "Выберите сумму пожертвования";
    if (donateAmount === 200) return "200 ₽ — корм для птиц на 3 дня";
    if (donateAmount === 500) return "500 ₽ — приём у ветеринара для одного животного";
    if (donateAmount === 1000) return "1 000 ₽ — недельный корм для 5 бездомных кошек";
    if (donateAmount === 2000) return "2 000 ₽ — лечение травмированной птицы";
    return `${donateAmount.toLocaleString()} ₽ — огромная помощь нашим подопечным!`;
  };

  return (
    <div className="min-h-screen" style={{ background: "hsl(38 30% 97%)" }}>

      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
        style={{ background: "hsla(38,30%,97%,0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid hsl(38 20% 88%)" }}
      >
        <div className="flex items-center gap-2">
          <span className="text-2xl">🐾</span>
          <span className="font-cormorant font-semibold text-xl" style={{ color: "hsl(25 25% 18%)" }}>Добрые руки</span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <button onClick={() => scrollTo("about")} className="font-golos text-sm transition-colors hover:opacity-70" style={{ color: "hsl(25 15% 45%)" }}>О проекте</button>
          <button onClick={() => scrollTo("donate")} className="font-golos text-sm transition-colors hover:opacity-70" style={{ color: "hsl(25 15% 45%)" }}>Пожертвования</button>
          <button
            onClick={() => scrollTo("donate")}
            className="px-5 py-2 rounded-full font-golos text-sm font-medium transition-all hover:scale-105"
            style={{ background: "hsl(16 55% 42%)", color: "hsl(38 30% 97%)" }}
          >
            Помочь
          </button>
        </div>
        <button
          onClick={() => scrollTo("donate")}
          className="md:hidden px-4 py-1.5 rounded-full font-golos text-sm"
          style={{ background: "hsl(16 55% 42%)", color: "hsl(38 30% 97%)" }}
        >
          Помочь
        </button>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img src={BIRD_IMG} alt="Птица в руках" className="w-full h-full object-cover" />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to right, hsla(25,25%,12%,0.78) 0%, hsla(25,25%,12%,0.35) 60%, transparent 100%)" }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
          <div className="max-w-xl">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 animate-fade-in"
              style={{ background: "hsla(38,45%,88%,0.18)", border: "1px solid hsla(38,45%,88%,0.35)" }}
            >
              <span className="text-sm font-golos" style={{ color: "hsl(38 45% 93%)" }}>🕊️ Мы помогаем с 2020 года</span>
            </div>

            <h1
              className="font-cormorant text-5xl md:text-7xl font-semibold leading-tight mb-6 animate-fade-in-up"
              style={{ color: "hsl(38 30% 97%)", animationDelay: "0.1s" }}
            >
              Они не могут<br />
              <em className="italic" style={{ color: "hsl(38 60% 83%)" }}>попросить</em><br />
              о помощи
            </h1>

            <p
              className="font-golos text-lg leading-relaxed mb-10 animate-fade-in-up"
              style={{ color: "hsla(38,30%,93%,0.82)", animationDelay: "0.3s" }}
            >
              Дикие птицы и бездомные животные нуждаются в еде, лечении и заботе каждый день.
              Вместе мы можем изменить это.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
              <button
                onClick={() => scrollTo("donate")}
                className="px-8 py-4 rounded-full font-golos font-semibold text-base transition-all hover:scale-105 hover:shadow-xl"
                style={{ background: "hsl(16 55% 42%)", color: "hsl(38 30% 97%)" }}
              >
                Сделать пожертвование
              </button>
              <button
                onClick={() => scrollTo("about")}
                className="px-8 py-4 rounded-full font-golos font-medium text-base transition-all hover:bg-white/10"
                style={{ color: "hsl(38 30% 97%)", border: "1.5px solid hsla(38,30%,97%,0.5)" }}
              >
                Узнать больше
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={28} style={{ color: "white", opacity: 0.6 }} fallback="ChevronDown" />
        </div>
      </section>

      {/* STATS */}
      <section style={{ background: "hsl(16 55% 42%)" }} className="py-10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: "1 240", label: "животных спасено" },
            { num: "340+", label: "постоянных доноров" },
            { num: "84", label: "партнёра-ветеринара" },
            { num: "5 лет", label: "мы помогаем" },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-cormorant text-4xl font-bold" style={{ color: "hsl(38 45% 92%)" }}>{s.num}</div>
              <div className="font-golos text-sm mt-1" style={{ color: "hsla(38,30%,97%,0.65)" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-golos text-sm tracking-widest uppercase" style={{ color: "hsl(78 22% 40%)" }}>О проекте</span>
            <h2 className="font-cormorant text-5xl md:text-6xl font-semibold mt-3" style={{ color: "hsl(25 25% 18%)" }}>
              Почему мы это делаем
            </h2>
            <div className="w-16 h-1 rounded-full mx-auto mt-5" style={{ background: "hsl(16 55% 42%)" }} />
          </div>

          <div className="grid md:grid-cols-2 gap-14 items-center mb-20">
            <div>
              <p className="font-golos text-lg leading-relaxed mb-6" style={{ color: "hsl(25 15% 35%)" }}>
                «Добрые руки» — это команда неравнодушных людей, которая уже пять лет спасает диких птиц и бездомных
                животных по всей России. Мы организуем лечение травмированных птиц, кормление животных в холодное
                время года и поиск хозяев для тех, кто остался на улице.
              </p>
              <p className="font-golos text-lg leading-relaxed" style={{ color: "hsl(25 15% 35%)" }}>
                Каждое пожертвование идёт напрямую на корм, медикаменты и ветеринарную помощь.
                Мы публикуем ежемесячные отчёты — вы всегда знаете, как использованы ваши деньги.
              </p>
            </div>
            <div className="relative">
              <img
                src={ANIMAL_IMG}
                alt="Кошка и собака"
                className="rounded-3xl w-full object-cover shadow-2xl"
                style={{ height: 380 }}
              />
              <div
                className="absolute -bottom-4 -left-4 rounded-2xl p-4 shadow-lg"
                style={{ background: "hsl(38 30% 97%)", border: "1px solid hsl(38 20% 84%)" }}
              >
                <div className="font-cormorant text-3xl font-bold" style={{ color: "hsl(16 55% 42%)" }}>100%</div>
                <div className="font-golos text-xs" style={{ color: "hsl(25 15% 45%)" }}>средств — животным</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "Bird", title: "Дикие птицы", text: "Лечим травмированных птиц, выхаживаем птенцов и возвращаем их в природу. Оборудуем зимние кормушки по всему городу." },
              { icon: "PawPrint", title: "Бездомные животные", text: "Кормим и лечим бездомных кошек и собак, помогаем найти им тёплый дом и заботливых хозяев." },
              { icon: "Heart", title: "Прозрачность", text: "Каждый рубль на счету. Ежемесячно публикуем финансовые отчёты с фотографиями и историями спасённых животных." },
            ].map((c) => (
              <div
                key={c.title}
                className="rounded-3xl p-8 transition-all hover:-translate-y-1 hover:shadow-lg"
                style={{ background: "hsl(38 25% 94%)", border: "1px solid hsl(38 20% 88%)" }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: "hsl(38 45% 88%)" }}
                >
                  <Icon name={c.icon} size={22} style={{ color: "hsl(16 55% 42%)" }} fallback="Heart" />
                </div>
                <h3 className="font-cormorant text-2xl font-semibold mb-3" style={{ color: "hsl(25 25% 18%)" }}>{c.title}</h3>
                <p className="font-golos text-sm leading-relaxed" style={{ color: "hsl(25 15% 45%)" }}>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DONATE */}
      <section id="donate" className="py-24 px-6" style={{ background: "hsl(38 25% 93%)" }}>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-golos text-sm tracking-widest uppercase" style={{ color: "hsl(78 22% 40%)" }}>Помочь</span>
            <h2 className="font-cormorant text-5xl md:text-6xl font-semibold mt-3" style={{ color: "hsl(25 25% 18%)" }}>
              Сделать пожертвование
            </h2>
            <div className="w-16 h-1 rounded-full mx-auto mt-5" style={{ background: "hsl(16 55% 42%)" }} />
            <p className="font-golos text-base mt-6" style={{ color: "hsl(25 15% 45%)" }}>
              Выберите сумму или введите свою. Каждый рубль важен.
            </p>
          </div>

          <div
            className="rounded-3xl p-8 md:p-10 shadow-xl"
            style={{ background: "hsl(38 30% 97%)", border: "1px solid hsl(38 20% 88%)" }}
          >
            {/* Target toggle */}
            <div className="flex gap-3 mb-8 p-1 rounded-2xl" style={{ background: "hsl(38 20% 90%)" }}>
              {(["birds", "animals"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setActiveSection(t)}
                  className="flex-1 py-2.5 rounded-xl font-golos text-sm font-medium transition-all"
                  style={
                    activeSection === t
                      ? { background: "hsl(16 55% 42%)", color: "hsl(38 30% 97%)" }
                      : { color: "hsl(25 15% 45%)" }
                  }
                >
                  {t === "birds" ? "🐦 Птицам" : "🐾 Животным"}
                </button>
              ))}
            </div>

            {/* Amount grid */}
            <div className="grid grid-cols-4 gap-3 mb-4">
              {AMOUNTS.map((a) => (
                <button
                  key={a}
                  onClick={() => { setSelected(a); setCustom(""); }}
                  className="py-3 rounded-2xl font-golos font-medium text-sm transition-all hover:scale-105"
                  style={
                    selected === a && !custom
                      ? { background: "hsl(16 55% 42%)", color: "hsl(38 30% 97%)" }
                      : { background: "hsl(38 20% 90%)", color: "hsl(25 25% 18%)" }
                  }
                >
                  {a.toLocaleString()} ₽
                </button>
              ))}
            </div>

            {/* Custom input */}
            <div className="relative mb-6">
              <input
                type="number"
                placeholder="Другая сумма"
                value={custom}
                onChange={(e) => { setCustom(e.target.value); setSelected(null); }}
                className="w-full rounded-2xl px-5 py-3.5 font-golos text-sm outline-none transition-all"
                style={{
                  background: "hsl(38 20% 90%)",
                  border: custom ? "1.5px solid hsl(16 55% 42%)" : "1.5px solid transparent",
                  color: "hsl(25 25% 18%)"
                }}
              />
              <span className="absolute right-5 top-1/2 -translate-y-1/2 font-golos text-sm" style={{ color: "hsl(25 15% 55%)" }}>₽</span>
            </div>

            {/* Hint */}
            <div
              className="rounded-2xl p-4 mb-6 flex items-center gap-3"
              style={{ background: "hsl(38 45% 91%)" }}
            >
              <span className="text-2xl flex-shrink-0">💡</span>
              <p className="font-golos text-sm" style={{ color: "hsl(25 25% 25%)" }}>{getHint()}</p>
            </div>

            <button
              onClick={() => setShowCard(true)}
              className="w-full py-4 rounded-2xl font-golos font-semibold text-base transition-all hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
              style={{ background: "hsl(16 55% 42%)", color: "hsl(38 30% 97%)" }}
            >
              <Icon name="Heart" size={18} fallback="Heart" />
              Пожертвовать{donateAmount ? ` ${donateAmount.toLocaleString()} ₽` : ""}
            </button>

            {/* Card modal */}
            {showCard && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center px-4"
                style={{ background: "hsla(25,25%,12%,0.6)", backdropFilter: "blur(6px)" }}
                onClick={() => setShowCard(false)}
              >
                <div
                  className="w-full max-w-sm rounded-3xl p-8 shadow-2xl animate-fade-in-up"
                  style={{ background: "hsl(38 30% 97%)" }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-cormorant text-2xl font-semibold" style={{ color: "hsl(25 25% 18%)" }}>Реквизиты для перевода</h3>
                    <button onClick={() => setShowCard(false)} className="hover:opacity-60 transition-opacity">
                      <Icon name="X" size={20} fallback="X" style={{ color: "hsl(25 15% 45%)" }} />
                    </button>
                  </div>

                  <p className="font-golos text-sm mb-5" style={{ color: "hsl(25 15% 45%)" }}>
                    Переведите любую сумму на карту Сбербанка и сообщите нам — мы пришлём отчёт о том, как были использованы средства.
                  </p>

                  <div className="rounded-2xl p-5 mb-4" style={{ background: "hsl(38 20% 90%)" }}>
                    <div className="font-golos text-xs mb-2" style={{ color: "hsl(25 15% 55%)" }}>Номер карты Сбербанк</div>
                    <div className="font-cormorant text-3xl font-semibold tracking-widest" style={{ color: "hsl(25 25% 18%)" }}>
                      {CARD_NUMBER}
                    </div>
                    <div className="font-golos text-xs mt-2" style={{ color: "hsl(25 15% 55%)" }}>Получатель: <span style={{ color: "hsl(25 25% 25%)" }}>Альме</span></div>
                  </div>

                  <button
                    onClick={copyCard}
                    className="w-full py-3.5 rounded-2xl font-golos font-medium text-sm transition-all hover:scale-105 flex items-center justify-center gap-2"
                    style={copied
                      ? { background: "hsl(78 22% 40%)", color: "hsl(38 30% 97%)" }
                      : { background: "hsl(16 55% 42%)", color: "hsl(38 30% 97%)" }}
                  >
                    <Icon name={copied ? "Check" : "Copy"} size={16} fallback="Copy" />
                    {copied ? "Скопировано!" : "Скопировать номер карты"}
                  </button>

                  <p className="font-golos text-xs text-center mt-4" style={{ color: "hsl(25 15% 60%)" }}>
                    Нажмите за пределами окна, чтобы закрыть
                  </p>
                </div>
              </div>
            )}

            <p className="font-golos text-xs text-center mt-4" style={{ color: "hsl(25 15% 60%)" }}>
              Безопасная оплата · Мы не храним данные карты · Можно отменить
            </p>
          </div>

          {/* Recurring */}
          <div
            className="mt-6 rounded-3xl p-6 text-center"
            style={{ border: "1.5px dashed hsl(16 55% 62%)" }}
          >
            <p className="font-cormorant text-xl font-semibold mb-2" style={{ color: "hsl(25 25% 18%)" }}>
              Станьте постоянным другом 🌿
            </p>
            <p className="font-golos text-sm mb-4" style={{ color: "hsl(25 15% 45%)" }}>
              Ежемесячное пожертвование — самая ценная помощь. Животные получают регулярную заботу, вы — отчёты и истории спасения.
            </p>
            <button
              className="px-6 py-2.5 rounded-full font-golos text-sm font-medium transition-all hover:scale-105"
              style={{ border: "1.5px solid hsl(16 55% 42%)", color: "hsl(16 55% 42%)" }}
            >
              Подписаться на регулярные пожертвования
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 text-center" style={{ background: "hsl(25 25% 18%)" }}>
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-2xl">🐾</span>
          <span className="font-cormorant text-2xl font-semibold" style={{ color: "hsl(38 45% 88%)" }}>Добрые руки</span>
        </div>
        <p className="font-golos text-sm mb-6" style={{ color: "hsla(38,30%,90%,0.45)" }}>
          Фонд помощи диким птицам и бездомным животным
        </p>
        <div className="flex items-center justify-center gap-6 mb-8">
          <button className="font-golos text-sm hover:opacity-80 transition-opacity" style={{ color: "hsla(38,30%,90%,0.55)" }}>О проекте</button>
          <button className="font-golos text-sm hover:opacity-80 transition-opacity" style={{ color: "hsla(38,30%,90%,0.55)" }}>Отчёты</button>
          <button className="font-golos text-sm hover:opacity-80 transition-opacity" style={{ color: "hsla(38,30%,90%,0.55)" }}>Контакты</button>
        </div>
        <p className="font-golos text-xs" style={{ color: "hsla(38,30%,90%,0.28)" }}>
          © 2024 Добрые руки. Все средства идут на помощь животным.
        </p>
      </footer>
    </div>
  );
}