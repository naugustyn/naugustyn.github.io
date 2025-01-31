---
layout: post
title: "Wireshark - Wat is dit?"
date: 2021-01-28
toc: false
categories: [sekuriteit]
tags: [Wireshark, Metasploit]
---


Goeiedag! Dis ek, Nathan, wat jou vandag gaan wys hoe om jou netwerke soos 'n baas uit te check met Wireshark. Nou, vir die wat nog nooit van Wireshark gehoor het nie: dis basies 'n kragtige "network sniffer" of "packet analyzer" wat jou help om al die data wat oor 'n netwerk loop, te ondersoek. Dis soos om 'n super-spioen bril op te sit en elke klein pakkie data af te luister.

## 1. Wat's Wireshark se storie?
Wireshark is 'n open-source tool - lees: jy kan hom verniet download en gebruik. Hy't begin as "Ethereal" in die laat 90s, maar hulle het later van naam verander. Hierdie outjie word deur groot cybersecurity -en netwerk-experts gebruik, want hy laat jou sien wat regtig in jou netwerk aangaan. Dis amper soos om jou ore teen 'n deur te druk en elke woord te hoor!

## 2. Hoekom moet jy omgee?
As jy in netwerksekuriteit belangstel, of net 'n nuuskierige tegniese gees het, dan is Wireshark jou beste pel. Hiermee kan jy:

- **Foute opspoor:** As jou netwerk stadig is of toe is, kan jy uitvind watter verkeer jou pyp verstop.
- **Sekuriteitslekke ontdek:** Jy kan snuffel of daar ongewone pakkies rondloop wat jou kan vertel van kwaadwillige aktiwiteite of data-leaks.
- **Lekker leer:** As jy wil verstaan hoe data oor 'n netwerk beweeg, is Wireshark jou tool. Dis 'n goeie (en soms pret) manier om TCP, UDP, IP en al daai goeters te leer ken.

## 3. Basiese "Street" Setup

- **Download Wireshark:** Gaan na [wireshark.org](https://wireshark.org) en kry die laaste weergawe. Dis 'n maklike installasie, geen gedoente nie.
- **Promiscuous Mode:** As jy regtig als wil sien, maak seker die "Promiscuous Mode" is aan, sodat jy al die pakkies kan sien.
- **Filters:** Neem kennis van filters, want sonder filters is jou skerm vinning oorstroom met 'n klom "junk" pakkies. 'n Goeie begin is dinge soos `ip.addr == 192.168.0.1` om net pakkies van 'n spesifieke IP te sien, of `tcp.port == 80` om net webverkeer te vang.

## 4. Wireshark + Metasploit?
Wireshark alleen is epic, maar as jy "offensive security mode" wil gaan, kan jy Metasploit gebruik. Dis basically 'n kit vol "exploits" en "payloads" om stelselveiligheid te toets. Kombineer Wireshark met Metasploit en jy kan:

- **Exploits loods** teen 'n teiken en Wireshark gebruik om elke pakkie van jou aanval te analiseer.
- **Honeypots** of ander toestomgewings gebruik en kyk in real-time wat gebeur as jy sekere aanvalle loods.

Nou, moenie net willekeurig op netwerke gaan speel nie - dis krimineel. Gebruik 'n toetsomgewing, of jou eie netwerk waar jy toestemming het. Onthou, big brother is altyd besig om in te loer!

## 5. Tips en Tricks

- **Colour Coding:** Wireshark het 'n colour coding feature - dis nie net oulik nie, maar ook super handig om vinnig "weird" vekeer te spot.
- **Follow TCP Stream:** Regskliek op 'n pakkie en kies "Follow TCP Stream" om 'n hele gesprek te lees, begin tot einde. 
- **Auto-resolve Names:** Skakel dit af as jy spoed en prestasie wil hê, want Wireshark probeer soms DNS names resolve, wat dit stadiger kan maak.

## 6. Street Smarts

- Onthou, net omdat jy iets kan snuif, beteken nie jy moet nie. Wees eties!
- Maak 'n sandbox-omgewing om jou Metasploit-eksperimente te doen. Moenie jou baas se netwerk stukken eksperimenteer nie.
- As iemand jou vra wat Wireshark is, sê vir hulle: “Dis die OG network detective tool!”

Dus, mense, as jy serious is oor netwerksekuriteit of graag jou IT-skill wil opskerp, maak Wireshark jou lewe baie makliker. Dit sit jou in beheer om te sien wat op jou netwerk aan die gang is, en om enige shady vibes uit te sniffel. So, laai hom af, krap rond, kyk wat daar uitspring, en begin speel. Sodra jy 'n feel vir Metasploit ook het, maak seker jy's reg om jou wit-hoet-hacker kant te wys.

Dis al van my! Gaan maak golwe, maar wees veilig en eties!














