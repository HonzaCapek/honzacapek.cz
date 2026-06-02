# AGENTS.md — honzacapek.cz

Tento repozitář obsahuje osobní statický web honzacapek.cz.

## Kontext projektu

Web je osobní portfolio Honzy Čapka, marketingového stratéga a manažera se zkušeností v marketingové komunikaci, branded contentu, native advertisingu, strategii a vedení projektů.

Cílem webu je působit moderně, sebevědomě, čistě, osobitě a kreativně. Nemá působit korporátně, genericky ani jako šablona.

## Aktuální zdroj pravdy

Aktuální pracovní složka je tento GitHub repozitář:

C:\Projects\honzacapek.cz

Tento repozitář je jediný zdroj pravdy pro web.

Starší složka:

C:\Users\capek\OneDrive\Plocha\Web

slouží už jen jako archiv/záloha. Nepoužívej ji jako výstupní složku a neupravuj ji, pokud k tomu nedostaneš výslovný pokyn.

## Technický stack

Web je jednoduchý statický web.

Používej:
- HTML
- CSS
- vanilla JavaScript pouze tam, kde dává smysl

Nepřidávej React, Next.js, Tailwind, build proces, bundlery ani externí knihovny, pokud k tomu nedostaneš výslovný pokyn.

## Pravidla práce

- Pracuj vždy v aktuálním Git repozitáři:
  C:\Projects\honzacapek.cz
- Neměň layout, viditelné texty, CSS ani JS mimo rozsah aktuálního zadání. Pokud by úprava vyžadovala zásah mimo zadání, nejdřív se zeptej.
- Neodstraňuj existující meta tagy, OG tagy, obrázky, analytické prvky ani SEO prvky bez výslovného zadání.
- Nepřidávej zbytečné soubory, knihovny ani složitou strukturu.
- Pokud si nejsi jistý, nejdřív se zeptej.
- Udržuj web jednoduchý, rychlý, responzivní a snadno udržovatelný.
- Web musí fungovat jako statický web nasazený přes Vercel.

## SEO a technické soubory

- Hlavní URL webu je:
  https://www.honzacapek.cz/

- Sitemap URL je:
  https://www.honzacapek.cz/sitemap.xml

- Soubor sitemap.xml musí být v rootu repozitáře.
- Soubor robots.txt musí být v rootu repozitáře.
- Strukturovaná data JSON-LD mají být v části <head> souboru index.html.
- Kontaktní e-mail webu je:
  ahoj@honzacapek.cz

## Technické kontroly

Technické kontroly dělej přiměřeně podle typu změny, ne automaticky po každé malé úpravě.

- Při úpravách `<head>` zkontroluj metadata, canonical URL, Open Graph / Twitter metadata, favicony, manifest, theme-color a JSON-LD.
- Při úpravách obsahu osoby, služeb nebo hlavního popisu webu zkontroluj, že odpovídají i JSON-LD typy `Person`, `WebSite` a `Service`.
- Při úpravách obrázků zkontroluj cesty k souborům, WebP/fallback, `width`, `height`, `loading`, `decoding` a dopad na LCP. Hero obrázky nenastavuj jako `loading="lazy"`.
- Při úpravách navigace, klikacích prvků nebo `script.js` zkontroluj GTM/GA4 skripty, `noscript` fallback a datové atributy `data-analytics`, `data-menu-item`, `data-case-study`.
- Při běžných textových změnách nedělej kompletní technický audit, jen ověř, že se nerozbil layout nebo HTML struktura.

## Git workflow

Po každé úpravě:

1. Spusť:
   - git status --short
   - git diff

2. Stručně vypiš:
   - které soubory se změnily,
   - co přesně se změnilo,
   - zda je změna bezpečná k nasazení.

3. Nedělej:
   - git add
   - git commit
   - git push

4. Commit a push dělá uživatel ručně přes GitHub Desktop nebo PowerShell.

5. Po dokončení úprav uživateli napiš:
   - stručné shrnutí změny,
   - doporučený název commitu pro GitHub Desktop do pole „Summary required“,
   - větu: „Můžeš provést commit a push.“

6. Doporučená commit message musí být krátká, věcná a v angličtině. Například:
   - Update project instructions
   - Fix menu tracking
   - Add case study click tracking
   - Update SEO metadata

## Preferovaný styl odpovědí

Odpovídej stručně, prakticky a srozumitelně.
Nevysvětluj zbytečně obecnou teorii.
Když je potřeba rozhodnutí, doporuč jednu variantu a jasně řekni proč.
