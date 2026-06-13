/* =========================================================
   Реальні кейси — дані для секції "РЕАЛЬНІ КЕЙСИ"
   Редагуй текст/цифри тут. Кнопка "Читати далі" відкриває detail.
   ========================================================= */
window.CASE_DATA = {

  /* ---- 4 ВІТРИННІ (демо) кейси для розкішних карток ---- */
  stomatologia: {
    demo: true, icon: "i-tooth", accent: "#22C55E",
    niche: "Стоматологія", geo: "Київ", tag: "Бюджет 45 000 грн/міс",
    title: "Знизили ціну ліда зі 680₴ до 290₴ за 30 днів",
    metrics: [{ v: "-57%", l: "ціна ліда" }, { v: "680→290₴", l: "за лід" }, { v: "18 700₴", l: "економія/міс" }],
    detail: {
      lead: "Власник думав, що реклама не працює. Аудит показав, що проблема — у налаштуваннях: широкі ключі, відсутність мінус-слів і некоректне відстеження конверсій.",
      ba: [{ l: "Ціна ліда", b: "680₴", a: "290₴" }, { l: "Заявок/міс", b: "28", a: "46" }, { l: "CTR", b: "1,2%", a: "3,4%" }],
      blocks: [{ h: "Що зробили", items: ["Зібрали семантику та мінус-слова", "Розділили кампанії по послугах", "Оптимізували PMax і пошук", "Налаштували точне відстеження конверсій"] }],
      conclusion: "Економія 18 700 грн/міс при тому ж бюджеті. Ціна ліда впала на 57%."
    }
  },
  ecommerce: {
    demo: true, icon: "i-bag", accent: "#A855F7",
    niche: "E-commerce", geo: "Одяг", tag: "Бюджет 80 000 грн/міс",
    title: "Підняли ROAS зі 180% до 340%",
    metrics: [{ v: "+160%", l: "ROAS" }, { v: "180→340%", l: "ROAS" }, { v: "+22 000₴", l: "обороту/міс" }],
    detail: {
      lead: "Одна кампанія просувала всі категорії, Google оптимізувався на кліки, конверсії передавались з помилками.",
      ba: [{ l: "ROAS", b: "180%", a: "340%" }, { l: "Ціна продажу", b: "640₴", a: "395₴" }, { l: "CTR", b: "0,9%", a: "2,1%" }],
      blocks: [{ h: "Що зробили", items: ["Сегментували PMax по марджі", "Налаштували фід і пріоритети", "Списки виключень і мінус-слова", "Коректний e-commerce tracking"] }],
      conclusion: "+22 000 грн/міс додаткового обороту. Продажі ростуть стабільно щотижня."
    }
  },
  legal: {
    demo: true, icon: "i-scale", accent: "#F5A623",
    niche: "Юридичні послуги", geo: "Київ", tag: "Бюджет 25 000 грн/міс",
    title: "Підняли заявки із 28 до 46 на місяць",
    metrics: [{ v: "+65%", l: "заявок" }, { v: "28→46", l: "заявок/міс" }, { v: "-39%", l: "ціна заявки" }],
    detail: {
      lead: "Усі послуги в одній кампанії, загальні запити без уточнень, дзвінки не рахувались як конверсії.",
      ba: [{ l: "Заявок/міс", b: "28", a: "46" }, { l: "Ціна заявки", b: "890₴", a: "540₴" }, { l: "CTR", b: "1,8%", a: "4,3%" }],
      blocks: [{ h: "Що зробили", items: ["Розбили кампанії по практиках права", "Зібрали цільову семантику з намірами", "Додали мінус-слова і гео-уточнення", "Підключили відстеження дзвінків"] }],
      conclusion: "+65% заявок при тому ж бюджеті. Заявки пішли вже на другий день."
    }
  },
  medical: {
    demo: true, icon: "i-cross-med", accent: "#A855F7",
    niche: "Медичний центр", geo: "Київ", tag: "Бюджет 60 000 грн/міс",
    title: "Знизили ціну запису з 1200₴ до 480₴",
    metrics: [{ v: "-60%", l: "ціна запису" }, { v: "1200→480₴", l: "за запис" }, { v: "×2.5", l: "дешевше" }],
    detail: {
      lead: "Партнерська мережа з'їдала бюджет, загальні запити, записи рахувались некоректно, один лендінг на всі напрями.",
      ba: [{ l: "Ціна запису", b: "1200₴", a: "480₴" }, { l: "Записів/міс", b: "50", a: "109" }, { l: "CTR", b: "1,1%", a: "2,3%" }],
      blocks: [{ h: "Що зробили", items: ["Вимкнули партнерську мережу", "Розбили кампанії по напрямах", "Мінус-слова і точне гео", "Відстеження записів + релевантні сторінки"] }],
      conclusion: "Ціна запису впала в 2.5 рази за 3 тижні. Тепер кожна гривня працює на результат."
    }
  },


  hostels: {
    icon: "i-calendar", accent: "#60A5FF",
    niche: "Мережа хостелів", geo: "Київ", tag: "Google Search",
    title: "Повернули системний підхід — і реклама знову прогнозована",
    metrics: [{ v: "+10%", l: "CTR зростає" }, { v: "4", l: "нові хостели" }, { v: "стабільні", l: "бронювання" }],
    detail: {
      lead: "Клієнт із нами понад рік. Реклама стабільно приносила бронювання, бізнес масштабувався — відкрили ще 4 нових хостели. Потім — пауза на 3 місяці: новий інвестор привів свого підрядника.",
      blocks: [
        { h: "Що сталося без нас", items: ["Структура акаунту втратила логіку", "Кампанії перестали чітко сегментуватись", "Значно зросла вартість конверсії", "Реклама стала менш прогнозованою", "У підрядника бракувало досвіду саме в Google Ads"] },
        { h: "Результат за останні 30 днів", items: ["CTR стабільно зростає 10%+", "Стабільна кількість конверсій", "Контрольована вартість заявки", "Прогнозована система залучення бронювань"] }
      ],
      conclusion: "Google Ads працює, коли є правильна структура, зрозуміла логіка запитів, грамотна аналітика і постійна оптимізація — а не разовий запуск."
    }
  },

  effectplants: {
    icon: "i-bag", accent: "#34D399",
    niche: "Effectplants · етноботаніка", geo: "Онлайн + офлайн", tag: "Google Ads + PMax",
    title: "Перетворили рекламу на керовану систему продажів",
    metrics: [{ v: "×3", l: "ROI на старті" }, { v: "29", l: "покупок / 10 днів" }, { v: "1166", l: "кліків" }],
    detail: {
      lead: "Магазин етноботаніки (гриби, чаї, олія). До старту — одна кампанія на всі категорії, Google оптимізувався на кліки, конверсії не передавались, 70% бюджету йшло на одну аудиторію.",
      blocks: [
        { h: "Що було зроблено", items: ["Повністю перезібрано структуру: окремі групи під мікродозинг, чаї, олії, релакс", "Розділення запитів: холодні → теплі → гарячі", "Запущено Performance Max з оптимізацією на цінність покупки", "GA4 + електронна комерція + серверні події", "Smart-ретаргетинг: перегляд → кошик → покинутий кошик", "Оптимізація фіда: заголовки, ключі, описи, UTM"] },
        { h: "Деталі за 10 днів", items: ["50 одиниць товару продано", "29 покупок через кошик", "1166 кліків із Google Ads"] }
      ],
      conclusion: "Правильний товар → правильному запиту → у правильний момент. Стабільний прибуток уже на 10-й день, ROI понад ×3, ціль — 40 000 грн обороту/міс."
    }
  },

  altos: {
    icon: "i-cross-med", accent: "#A855F7",
    niche: "Клініка Altos", geo: "Прага, Чехія", tag: "Google + Meta Ads",
    title: "Збудували систему залучення пацієнтів замість «кампанії на трафік»",
    metrics: [{ v: "−48%", l: "ціна ліда" }, { v: "×6", l: "ROAS" }, { v: "+470%", l: "звернень" }],
    detail: {
      lead: "Лазерно-дерматологічна клініка. Аудит виявив: 40,7% бюджету витрачалось неефективно, кампанії не сегментовані, немає коректного відстеження конверсій, накладення аудиторій у Meta.",
      ba: [
        { l: "CTR Google Ads", b: "2,9%", a: "7,4%" },
        { l: "CTR Meta Ads", b: "0,5%", a: "1,9%" },
        { l: "Конверсія сайту", b: "0,8%", a: "2,5%" }
      ],
      blocks: [
        { h: "Що було зроблено", items: ["Нова структура за напрямками: ліфтинг, епіляція, видалення новоутворень, шліфування, губи, тату", "Окремі кампанії під кожну групу аудиторій з урахуванням сезонності й чека", "Наскрізна аналітика GA4 + CRM Komo, Value-Based Bidding", "Система ретаргетингу за діями користувача", "Нові відео- та статичні креативи під кожен напрямок"] },
        { h: "Результати за 30 днів", items: ["Вартість ліда −48%", "ROAS збільшився в 6 разів", "Звернення (ліди + чат) +470%"] }
      ],
      conclusion: "Правильне повідомлення → правильній людині → у правильний момент. Стабільний, прогнозований потік пацієнтів."
    }
  },

  bomed: {
    icon: "i-cross-med", accent: "#34D399",
    niche: "Медцентр «Бомед»", geo: "Хмельницький", tag: "Google Ads",
    title: "З нуля побудували систему залучення пацієнтів за 2 місяці",
    metrics: [{ v: "×125", l: "заявок" }, { v: "43₴", l: "ціна ліда" }, { v: "625", l: "конверсій" }],
    detail: {
      lead: "За два місяці з нуля побудували робочу систему залучення пацієнтів. Дотягнули ROI до бажаного ще в перший місяць.",
      ba: [
        { l: "Конверсії", b: "5", a: "625" },
        { l: "Ціна конверсії", b: "500₴", a: "43₴" },
        { l: "Конверсія сайту", b: "≈0%", a: "4,9%" }
      ],
      blocks: [
        { h: "Що дало результат", items: ["Повний аудит і перезапуск акаунту, чисті запити під послуги", "Окремі кампанії під лікарів і послуги, акцент на сімейного лікаря", "Точні сигнали для алгоритму, зняли конкуренцію між групами", "Відстеження форм і дзвінків через Binotel, навчання на цінних подіях", "Нові банери: фото лікарів, акцент на запис, заклик до дії", "A/B-тести заголовків, контроль витрат, відсікання неефективних запитів"] },
        { h: "Підсумок", items: ["Ціну звернення зменшено у 11,6 раза", "Кількість заявок збільшено у 125 разів", "CTR зріс до 6,8% за перші 2 місяці"] }
      ],
      conclusion: "Медцентр отримав систему, що збирає потік пацієнтів щодня. Витрати — на рівні рентабельності, лід коштує у рази менше, ніж на старті."
    }
  },

  hurom: {
    icon: "i-bag", accent: "#F5A623",
    niche: "Hurom · преміум соковижималки", geo: "Україна", tag: "Google Ads + PMax",
    title: "Масштабували продажі у преміум-ніші — навіть у період війни",
    metrics: [{ v: "×7.7", l: "замовлень" }, { v: "−4.6×", l: "ціна покупки" }, { v: "751₴", l: "ціна конверсії" }],
    detail: {
      lead: "Офіційний представник преміальних соковижималок. За 2 роки повністю перебудували рекламну систему та досягли стабільного зростання продажів.",
      ba: [
        { l: "Конверсії", b: "12", a: "93" },
        { l: "Ціна конверсії", b: "3 447₴", a: "751₴" },
        { l: "CTR", b: "2,07%", a: "3,45%" },
        { l: "Середня ціна кліку", b: "6,46₴", a: "4,23₴" }
      ],
      blocks: [
        { h: "Як ми цього досягли", items: ["Повний аудит і перезапуск: ядро лише з цільових комерційних фраз", "Структура під e-commerce: окремі кампанії по моделях, акцент на переваги Hurom", "Чіткі сигнали конверсій, Performance Max для масштабування", "Усі кампанії прив'язані до цінності продажу (ROAS)", "Оновлені банери: преміальність, технологія, продукт у дії", "Регулярні A/B-тести заголовків, візуалів, аудиторій, фіда"] }
      ],
      conclusion: "Правильна структура → правильні сигнали → правильні результати. Вартість покупки зменшено у 4,6 раза, замовлень — у 7,7 раза."
    }
  },

  blaster: {
    icon: "i-target", accent: "#F0444C",
    niche: "Арена лазертагу Blaster", geo: "Львів", tag: "Google Ads + PMax",
    title: "Google Ads став основним каналом бронювань",
    metrics: [{ v: "+910%", l: "бронювань" }, { v: "+420%", l: "ROI" }, { v: "5.8%", l: "CTR" }],
    detail: {
      lead: "За 6 місяців перебудували рекламу розважальної локації. Аудит виявив 40%+ неефективних витрат (покази за «пейнтбол», «квести»).",
      blocks: [
        { h: "Що зробили", items: ["Окремі кампанії під сегменти: сім'ї, корпоративи, дитячі дні народження, молодіжні батли", "Індивідуальні креативи під кожну аудиторію", "GA4 + CRM-аналітика: бронювання, дзвінки, чати, повторні клієнти", "Value-Based Bidding з урахуванням середнього чека", "Performance Max + короткі емоційні відеокреативи з арени"] },
        { h: "Результати за 6 місяців", items: ["Вартість бронювання −350%", "CTR з 1,2% до 5,8%", "Конверсія сайту +87%", "Кількість бронювань +910%", "ROI +420%"] }
      ],
      conclusion: "Правильне повідомлення — правильній людині — у правильний момент."
    }
  },

  roofing: {
    icon: "i-strategy", accent: "#60A5FF",
    niche: "Покрівельні та фасадні матеріали", geo: "Полтава", tag: "Google Ads + Меta",
    title: "Заявки ×17 і середній чек ×2.5 за 2,5 місяця",
    metrics: [{ v: "×17", l: "заявок" }, { v: "−15×", l: "ціна звернення" }, { v: "×2.5", l: "середній чек" }],
    detail: {
      lead: "Виробник покрівельних і фасадних матеріалів. За 2,5 місяця збудували систему, що дає у рази більше заявок за ті самі гроші.",
      blocks: [
        { h: "Що зробили", items: ["Побудували правильну структуру Google Ads кампаній", "Опрацювали ключові сегменти аудиторії", "Унікальні оголошення й банери з акцентом на цінність продукту", "Підключили Ringostat, аналітику й відстеження конверсій", "Налаштували електронну комерцію і динамічний ремаркетинг", "Візуалізували ключові показники в Looker Studio"] },
        { h: "Результат", items: ["Вартість звернення зменшено у 15 разів", "Кількість заявок збільшено у 17 разів", "Середній чек піднято у 2,5 рази"] }
      ],
      conclusion: "Для інтернет-магазину чи компанії у сфері будівництва — повторюємо цю стратегію з детальною візуалізацією результату."
    }
  },

  leads337: {
    icon: "i-cross-med", accent: "#A855F7",
    niche: "Медичний центр", geo: "Україна", tag: "Google Ads",
    title: "337 заявок по $3.03 — записи на місяці вперед",
    metrics: [{ v: "337", l: "заявок" }, { v: "$3.03", l: "за заявку" }, { v: "$1030", l: "бюджет" }],
    detail: {
      lead: "Послуги: імпланти, гігієна, лікування уві сні, урологія, хірургія, ЛОР, гінекологія. Квітень–травень 2025, витрачено $1030.",
      blocks: [
        { h: "Що робимо ми", items: ["10+ нових записів щодня — без «холодних» лідів", "Аудит реклами: показуємо, куди зливається бюджет", "Записи на місяці вперед завдяки готовим воронкам", "Систему впроваджуємо за 7 днів"] },
        { h: "Кому допомагаємо", items: ["Зростати без «акцій і знижок»", "Побудувати реальні воронки продажів", "Вивести медцентр на новий рівень у Google Ads, Meta і TikTok"] }
      ],
      conclusion: "337 заявок по $3.03 за один період. Власники клінік часто просять «вимкнути рекламу» — бо не встигають обробляти пацієнтів."
    }
  }

};
/* =========================================================
   Google Ads Audit — Modern Infographic Landing
   main.js   →  put this file in:  /js/main.js
   ========================================================= */
(function () {
  "use strict";

  /* ---------- 24h countdown timer (persists in localStorage) ---------- */
  function initTimer() {
    var KEY = "gads_timer_end";
    var th = document.getElementById("th");
    var tm = document.getElementById("tm");
    var ts = document.getElementById("ts");
    if (!th || !tm || !ts) return;

    var end = parseInt(localStorage.getItem(KEY), 10);
    if (!end || Date.now() > end) {
      end = Date.now() + 24 * 60 * 60 * 1000;
      localStorage.setItem(KEY, String(end));
    }

    function pad(n) { return String(n).padStart(2, "0"); }

    function tick() {
      var diff = end - Date.now();
      if (diff <= 0) {
        localStorage.removeItem(KEY);
        initTimer();
        return;
      }
      th.textContent = pad(Math.floor(diff / 3600000));
      tm.textContent = pad(Math.floor((diff % 3600000) / 60000));
      ts.textContent = pad(Math.floor((diff % 60000) / 1000));
    }
    tick();
    setInterval(tick, 1000);
  }

  /* ---------- animated stat counters ---------- */
  function animateCounter(el, target) {
    var duration = 1600;
    var startTime = null;
    function frame(now) {
      if (!startTime) startTime = now;
      var p = Math.min((now - startTime) / duration, 1);
      // easeOutCubic
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.floor(eased * target);
      if (p < 1) requestAnimationFrame(frame);
      else el.textContent = target;
    }
    requestAnimationFrame(frame);
  }

  function initCounters() {
    var cards = document.querySelectorAll(".stat-card");
    if (!("IntersectionObserver" in window)) {
      cards.forEach(function (c) {
        var el = c.querySelector("[data-target]");
        if (el) el.textContent = el.dataset.target;
      });
      return;
    }
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target.querySelector("[data-target]");
        if (el && !el.dataset.animated) {
          el.dataset.animated = "1";
          animateCounter(el, parseInt(el.dataset.target, 10));
        }
      });
    }, { threshold: 0.35 });
    cards.forEach(function (c) { obs.observe(c); });
  }

  /* ---------- bonuses show / hide ---------- */
  var bonusOpen = false;
  window.toggleBonuses = function () {
    bonusOpen = !bonusOpen;
    document.querySelectorAll(".bonus-hidden").forEach(function (el) {
      el.style.display = bonusOpen ? "flex" : "none";
      // ensure cards are visible (scroll-reveal may have left them at opacity:0)
      if (bonusOpen) { el.style.opacity = "1"; el.style.transform = "none"; }
    });
    var btn = document.getElementById("bonusBtn");
    var txt = document.getElementById("bonusBtnText");
    if (txt) txt.textContent = bonusOpen ? "Сховати додаткові бонуси" : "Відкрити всі бонуси (+6)";
    if (btn) btn.classList.toggle("open", bonusOpen);
  };

  /* ---------- cases show / hide ---------- */
  var casesOpen = false;
  window.toggleCases = function () {
    casesOpen = !casesOpen;
    document.querySelectorAll(".cases-hidden").forEach(function (el) {
      el.style.display = casesOpen ? "block" : "none";
    });
    var txt = document.getElementById("casesBtnText");
    var btn = document.getElementById("casesBtn");
    if (txt) txt.textContent = casesOpen ? "Сховати кейси" : "Показати ще 2 кейси";
    if (btn) btn.classList.toggle("open", casesOpen);
  };

  /* ---------- FAQ accordion ---------- */
  window.toggleFaq = function (btn) {
    var item = btn.parentElement;
    var isOpen = item.classList.contains("open");
    document.querySelectorAll(".faq-item").forEach(function (i) { i.classList.remove("open"); });
    if (!isOpen) item.classList.add("open");
  };

  /* ---------- scroll reveal ---------- */
  function initReveal() {
    var selector = ".get-card,.whom-card,.step,.pain-item,.bonus-card,.case-card,.stat-card";
    var els = document.querySelectorAll(selector);
    if (!("IntersectionObserver" in window)) return;
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.style.opacity = "1";
          e.target.style.transform = "translateY(0)";
          e.target.classList.add("in-view"); // triggers case charts / ring fills
          // animate case ring gauges to their target offset
          var ring = e.target.querySelector(".ring-fg[data-dash]");
          if (ring) {
            requestAnimationFrame(function () {
              ring.style.strokeDashoffset = ring.getAttribute("data-dash");
            });
          }
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.08 });
    els.forEach(function (el) {
      el.style.opacity = "0";
      el.style.transform = "translateY(18px)";
      el.style.transition = "opacity .5s ease, transform .5s ease";
      obs.observe(el);
    });
  }

  /* ---------- init on DOM ready ---------- */
  function init() {
    initTimer();
    initCounters();
    initReveal();
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();


/* =========================================================
   Реальні кейси: рендер карток + модалка "Читати далі"
   ========================================================= */
(function () {
  "use strict";
  function esc(s){return String(s).replace(/[&<>]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;"}[c];});}
  function icon(id,cls){return '<svg class="ci '+(cls||"")+'"><use href="#'+id+'"/></svg>';}

  function cardHTML(id,d){
    var chips=d.metrics.map(function(m){return '<div class="rc-m"><b>'+esc(m.v)+'</b><span>'+esc(m.l)+'</span></div>';}).join("");
    return '<article class="rc-card" style="--ac:'+d.accent+'">'
      +'<div class="rc-top"><div class="rc-ic">'+icon(d.icon)+'</div>'
      +'<div class="rc-niche"><b>'+esc(d.niche)+'</b><span>'+esc(d.geo)+' · '+esc(d.tag)+'</span></div></div>'
      +'<h3 class="rc-title">'+esc(d.title)+'</h3>'
      +'<div class="rc-metrics">'+chips+'</div>'
      +'<button class="rc-more" type="button" data-case="'+id+'">Читати далі '+icon("i-chart","rc-more-ic")+'</button>'
      +'</article>';
  }

  function detailHTML(d){
    var h="";
    h+='<div class="rcm-head"><div class="rcm-ic" style="--ac:'+d.accent+'">'+icon(d.icon)+'</div>'
      +'<div><div class="rcm-niche">'+esc(d.niche)+'</div><div class="rcm-meta">'+esc(d.geo)+' · '+esc(d.tag)+'</div></div></div>';
    h+='<h2 class="rcm-title">'+esc(d.title)+'</h2>';
    h+='<div class="rcm-metrics">'+d.metrics.map(function(m){return '<div class="rcm-m" style="--ac:'+d.accent+'"><b>'+esc(m.v)+'</b><span>'+esc(m.l)+'</span></div>';}).join("")+'</div>';
    if(d.detail.lead) h+='<p class="rcm-lead">'+esc(d.detail.lead)+'</p>';
    if(d.detail.ba){
      h+='<div class="rcm-ba"><div class="rcm-ba-h"><span>Показник</span><span>Було</span><span>Стало</span></div>'
        +d.detail.ba.map(function(r){return '<div class="rcm-ba-row"><span>'+esc(r.l)+'</span><span class="bad">'+esc(r.b)+'</span><span class="good">'+esc(r.a)+'</span></div>';}).join("")+'</div>';
    }
    (d.detail.blocks||[]).forEach(function(b){
      h+='<div class="rcm-block"><h3>'+esc(b.h)+'</h3><ul>'+b.items.map(function(it){return '<li>'+esc(it)+'</li>';}).join("")+'</ul></div>';
    });
    if(d.detail.conclusion) h+='<div class="rcm-concl">'+icon("i-bolt","")+'<p>'+esc(d.detail.conclusion)+'</p></div>';
    h+='<div class="rcm-cta"><a href="https://t.me/YOUR_TELEGRAM" class="btn-tg" target="_blank" rel="noopener">'+icon("i-telegram","i")+' Хочу такий результат</a>'
      +'<a href="https://instagram.com/YOUR_INSTAGRAM" class="btn-ig" target="_blank" rel="noopener">'+icon("i-instagram","i")+' Instagram</a></div>';
    return h;
  }

  var modal,body,lastFocus;
  function open(id){
    var d=(window.CASE_DATA||{})[id]; if(!d||!modal) return;
    body.innerHTML=detailHTML(d);
    modal.classList.add("open"); modal.setAttribute("aria-hidden","false");
    document.body.style.overflow="hidden"; body.scrollTop=0;
    lastFocus=document.activeElement;
    var c=modal.querySelector(".rcm-close"); if(c) c.focus();
  }
  function close(){
    if(!modal) return;
    modal.classList.remove("open"); modal.setAttribute("aria-hidden","true");
    document.body.style.overflow="";
    if(lastFocus&&lastFocus.focus) lastFocus.focus();
  }

  function init(){
    var grid=document.getElementById("rcGrid");
    var data=window.CASE_DATA||{};
    if(grid){
      // у "Дивитись більше" показуємо лише реальні кейси (без demo)
      grid.innerHTML=Object.keys(data).filter(function(id){return !data[id].demo;}).map(function(id){return cardHTML(id,data[id]);}).join("");
    }
    modal=document.getElementById("rcModal");
    body=document.getElementById("rcModalBody");
    document.addEventListener("click",function(e){
      var btn=e.target.closest?e.target.closest("[data-case]"):null;
      if(btn){open(btn.getAttribute("data-case"));return;}
      if(e.target.closest&&e.target.closest("[data-close]")) close();
    });
    document.addEventListener("keydown",function(e){if(e.key==="Escape"&&modal&&modal.classList.contains("open"))close();});
    // reveal cards
    if("IntersectionObserver" in window && grid){
      var obs=new IntersectionObserver(function(es){es.forEach(function(en){if(en.isIntersecting){en.target.style.opacity="1";en.target.style.transform="none";obs.unobserve(en.target);}});},{threshold:.08});
      grid.querySelectorAll(".rc-card").forEach(function(el){el.style.opacity="0";el.style.transform="translateY(18px)";el.style.transition="opacity .5s ease, transform .5s ease";obs.observe(el);});
    }
    // "Дивитись більше кейсів" — розкрити реальні кейси
    var moreOpen=false;
    window.toggleMoreCases=function(){
      moreOpen=!moreOpen;
      if(grid){
        grid.style.display=moreOpen?"grid":"none";
        if(moreOpen) grid.querySelectorAll(".rc-card").forEach(function(el){el.style.opacity="1";el.style.transform="none";});
      }
      var b=document.getElementById("moreCasesBtn"), t=document.getElementById("moreCasesTxt");
      if(t) t.textContent=moreOpen?"Згорнути кейси":"Дивитись більше кейсів — ще 8 реальних";
      if(b) b.classList.toggle("open",moreOpen);
    };
  }
  if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",init);}else{init();}
})();
