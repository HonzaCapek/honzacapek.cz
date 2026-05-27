# AGENTS.md — honzacapek.cz

Tento repozitář obsahuje osobní statický web honzacapek.cz.

## Kontext projektu

Web je osobní portfolio Honzy Čapka, marketingového stratéga a manažera se zkušeností v marketingové komunikaci, branded contentu, native advertisingu, strategii a vedení projektů.

Cílem webu je působit moderně, sebevědomě, čistě, osobitě a kreativně. Nemá působit korporátně, genericky ani jako šablona.

## Aktuální zdroj pravdy

Aktuální pracovní složka je tento GitHub repozitář:

C:\Users\capek\OneDrive\Plocha\honzacapek.cz

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
  C:\Users\capek\OneDrive\Plocha\honzacapek.cz
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

## Git workflow

Po každé úpravě:

1. Spusť:
   - git status --short
   - git diff

2. Stručně vypiš:
   - které soubory se změnily,
   - co přesně se změnilo,
   - zda je změna bezpečná k nasazení.

3. Před commitem a pushem ověř, že pracuješ na správné větvi, typicky main.

4. Commit ani push nedělej bez výslovného potvrzení uživatele.

5. Až uživatel potvrdí, proveď:
   - git add .
   - git commit -m "stručný popis změny"
   - git push

6. Po pushi připomeň, že Vercel pravděpodobně automaticky spustí deploy.

## Preferovaný styl odpovědí

Odpovídej stručně, prakticky a srozumitelně.
Nevysvětluj zbytečně obecnou teorii.
Když je potřeba rozhodnutí, doporuč jednu variantu a jasně řekni proč.

Poznámka: Tento soubor slouží jako výchozí instrukce pro Codex při práci na webu honzacapek.cz.
