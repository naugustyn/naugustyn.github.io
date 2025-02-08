---
layout: post
title: "Django Unchained!"
date: 2021-02-03
toc: false
categories: [ontwikkeling]
tags: [Python, Django]
---

Goeiedag! Nathan hier - gereed om weer 'n bietjie kennis met jou te deel. Vandag gaan ons praat or Django - ja, daai **Python-based** web framework wat jou toelaat om webapps to bou **soos 'n pro!**

## 1. Wat is Django?
Django is 'n high-level web framework vir Python wat jou lewe vergemaklik as jy vinnig en doeltreffend webapps wil bou. Dis vol ingeboude tools, soos administrasie-panele, ORM (object-relational mapping), en 'n verskafte struktuur vir jou project. Met ander woorde, Django sê: “Relax, ek hou jou hand vas terwyl ons die internet aanvat.”

## 2. Hoekom moet jy omgee?

- **Spoed:** Django word gemaak om vinnig te wees. Met sy geïntegreerde funksionaliteit kan jy meer tyd spandeer om te code en minder tyd om jou kop te krap.
- **Veiligheid:** Django kom met out-of-the-box sekuriteitsfunksies soos CSRF-beskerming, XSS-beskerming, en SQL-injection voorkoming. Waarvoor wil jy meer vra?
- **Gemeenskap:** 'n Groot Django-gemeenskap beteken hopeloos baie dokumentasie, tutorials, en plugins - om nie eens te praat van stackoverflow.com se miljoene vrae en antwoorde.
- **"Batteries included":** Django het amper alles wat jy nodig het, klaar ingebou. Sit net jou eie "flavour" by, en voila!

## 3. Setup: Start soos 'n Ninja

1. **Installeer Python:** Sorg dat jy die nuuste Python op jou masjien het - check [python.org](https://python.org).
2. **Virtuele Omgewing:** Skep 'n venv (virtual environment) sodat jou dependencies nie jou stelsel rommel nie.
```python
python -m venv myvenv
source myvenv/bin/activate  # op Linux/Mac
# of Windows:
myvenv\Scripts\activate
```
3. **Installeer Django:**
```
pip install django
```
4. **Skep 'n Projek:** Django laat jou vinnig 'n projek op spin:
```
django-admin startproject myproject
cd myproject
python manage.py runserver
```

*As jy nou http://127.0.0.1:8000 besoek, voilà!* Jou Django-app loop.

## 4. "MVT": Model-View-Template
Django gebruik 'n **MVT-argitektuur:**

- **Model:** Definieer jou databasistabelle (e.g., 'n "User" model of 'n "BlogPost" model).
- **View:** Hier kom jou app-logika. Jy besluit hoe jou data verwerk of vertoon word.
- **Template:** Dis wat jou die voorend (frontend) wys. HTML, CSS, en JavaScript vir die blink kant.

Dis soos 'n legkaart: elke stuk pas netjies saam en maak jou lewe makliker.

## 5. Django Admin: Jou Geheimste Wapen
Django se admin-site is **awesome** as jy vinnig iets wil bestuur of toets:

1. Sorg dat jy jou model by ```admin.py``` registreer.
2. Gaan na ```http://127.0.0.1:8000/admin``` en check hoe Django outomaties 'n backend-paneel bou vir jou.

Dis soos om 'n VIP-toegang tot jou data te hê sonder dat jy self 'n admin UI moet code.

## Tips en Truuks

- **Herbruikbare Apps:** Hou jou app modular. As jy eendag 'n "blog app" skryf, kan jy dit later êrens anders weer gebruik.
- **URL Routing:** Gebruik Django se routing (in ```url.py```) om alles netjies te hou.
- **DRY:** Django volg "Don't Repeat Yourself." As iets te veel herhaal word, vra jouself: "Kan ek dit in 'n herbruikbare funksie gooi?"
- **Maklik Ontfouting:** Wanneer 'n fout opduik, Django se foutskerms en logs wys jou waar jy moet soek.
- **Sekuriteit:** Moenie jou "SECRET_KEY" in jou publieke repo sit nie (of jou database-wagwoorde). Gebruik environment variables en ".gitignore" verstandig.

Django is 'n gevegsharde framework wat beginners en kenners lok. Dis soos 'n "scaffold" wat jou projekte ondersteun vanaf nul tot production-scale. Daarmee kan jy sommer vinnig 'n webtoep bou - of dit nou 'n blog, 'n e-commerce site of 'n volle SaaS-oplossing is.