const changingWord = document.querySelector(".changing-word");

if (changingWord) {
  const words = changingWord.dataset.words.split(",");
  let activeWordIndex = 0;

  window.setInterval(() => {
    changingWord.classList.add("is-changing");

    window.setTimeout(() => {
      activeWordIndex = (activeWordIndex + 1) % words.length;
      changingWord.textContent = words[activeWordIndex];
      changingWord.classList.remove("is-changing");
    }, 180);
  }, 1800);
}

const currentYear = document.querySelector("#current-year");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

const cookieBanner = document.querySelector("[data-cookie-banner]");
const cookieAcceptButton = document.querySelector("[data-cookie-accept]");
const cookieDenyButton = document.querySelector("[data-cookie-deny]");
const cookieSettingsButtons = document.querySelectorAll("[data-cookie-settings]");
const cookieDetailsToggle = document.querySelector("[data-cookie-details-toggle]");
const cookieDetails = document.querySelector("[data-cookie-details]");
const cookieStorageKey = "hc_cookie_consent";

function getCookieConsent() {
  try {
    return localStorage.getItem(cookieStorageKey);
  } catch (error) {
    return null;
  }
}

function setCookieConsent(value) {
  try {
    localStorage.setItem(cookieStorageKey, value);
    return true;
  } catch (error) {
    return false;
  }
}

function updateAnalyticsConsent(isGranted) {
  if (typeof window.gtag !== "function") {
    return;
  }

  window.gtag("consent", "update", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: isGranted ? "granted" : "denied",
  });

  if (isGranted) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "analytics_consent_granted",
    });
  }
}

function removeAnalyticsCookies() {
  const analyticsCookiePattern = /^(_ga($|_)|_gid$|_gat($|_))/;
  const hostParts = window.location.hostname.split(".");
  const cookieDomains = [
    window.location.hostname,
    `.${window.location.hostname}`,
  ];

  if (hostParts.length > 2) {
    cookieDomains.push(`.${hostParts.slice(-2).join(".")}`);
  }

  document.cookie.split(";").forEach((cookie) => {
    const cookieName = cookie.split("=")[0].trim();

    if (!analyticsCookiePattern.test(cookieName)) {
      return;
    }

    document.cookie = `${cookieName}=; Max-Age=0; path=/`;
    cookieDomains.forEach((domain) => {
      document.cookie = `${cookieName}=; Max-Age=0; path=/; domain=${domain}`;
    });
  });
}

function showCookieBanner() {
  if (!cookieBanner) {
    return;
  }

  cookieBanner.hidden = false;
}

function hideCookieBanner() {
  if (!cookieBanner) {
    return;
  }

  cookieBanner.hidden = true;
}

function saveCookieChoice(value) {
  const isGranted = value === "granted";
  const isSaved = setCookieConsent(value);

  updateAnalyticsConsent(isGranted && isSaved);

  if (!isGranted || !isSaved) {
    removeAnalyticsCookies();
  }

  hideCookieBanner();
}

if (cookieBanner && !getCookieConsent()) {
  showCookieBanner();
}

if (cookieAcceptButton) {
  cookieAcceptButton.addEventListener("click", () => {
    saveCookieChoice("granted");
  });
}

if (cookieDenyButton) {
  cookieDenyButton.addEventListener("click", () => {
    saveCookieChoice("denied");
  });
}

cookieSettingsButtons.forEach((button) => {
  button.addEventListener("click", () => {
    showCookieBanner();

    if (cookieAcceptButton) {
      cookieAcceptButton.focus();
    }
  });
});

if (cookieDetailsToggle && cookieDetails) {
  cookieDetailsToggle.addEventListener("click", () => {
    const isExpanded = cookieDetailsToggle.getAttribute("aria-expanded") === "true";

    cookieDetails.hidden = isExpanded;
    cookieDetailsToggle.setAttribute("aria-expanded", String(!isExpanded));
    cookieDetailsToggle.textContent = isExpanded ? "Co to znamená?" : "Skrýt vysvětlení";
  });
}
