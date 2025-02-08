---
layout: post
title: "Wat is Threat Modeling?"
date: 2022-07-14
toc: false
categories: [sekuriteit]
tags: []
---

Hallo daar! Nathan hier, vandag gaan ons praat oor **Threat Modeling** - basies hoe jy jou stelsels "van dag een af" ontwerp om nie soos 'n murasie in te stort wanneer 'n hacker aan jou deur klop nie. 

## 1. Wat is Threat Modeling?
Dit is 'n gesonde proses waar jy:

1. **Identifiseer**: Kyk na jou stelsel ('n webapp, 'n IoT-toestel, of 'n hele netwerk). Wat kan moontlik verkeerd gaan?

2. **Analiseer**: Hoe real is hierdie bedreiging? Hoe sal 'n moontlike aanvaller te werk gaan?

3. **Prioritiseer**: Besluit wat is die "grooste ramp" wat jy moet keer - jy kan nie alles gelyk fix nie.

4. **Mitigate**: Vind oplossings wat, as 'n hacker opdaag, jou stelsel beskerm.

Dis 'n **proaktiewe** benadering. Jy wag nie vir 'n breach om te hoor "moes ons nie maar hier iets gedoen het nie?". Jy bou die verdediging in vanaf die begin.

## 2. Waarom Word Dit So Beklemtoon?

- **Koste**: Dis goedkoper om veilige ontwerpkeuses te maak as om jou hele argitektuur te verander na 'n erinstige hacker-voorval.

- **Geloofwaardigheid**: 'n Maatskappy wat elke maand 'n data breach kry, verloor gebruikers se vertroue. Met 'n deeglike threat model, wys jy" "Ons vat sekuriteit erinstig op."

- **Strukturele Fokus**: Dis nie random "patches" strooi nie - dis 'n georganiseerde metode om seker te maak jy mis nie 'n gapende gat nie.

## 3. Modelle en Raamwerke

### 3.1 STRIDE
Dikwels word daar op **STRIDE** gewys, wat 6 kategorieë van bedreigings dek:

- **Spoofing**

- **Tampering**

- **Repudiation**

- **Information Disclosure**

- **Denial of Service**

- **Elevation of Privilege** 


### 3.2 DREAD
Nog ’n benadering is DREAD, wat scoring gee op vrae soos “Hoe maklik is dit om dit te doen?” en “Wat’s die skaal van skade?”. Dit help om bedreigings te rangskik volgens impak en waarskynlikheid.

## 4. Hoe Begin Jy?

1. **Skets Jou Stelsel**: Maak ’n datavloeidiagram. Watter data gaan van punt A na B? Watter komponente word getref?

2. **Identifiseer Dreigemente**: Gebruik bv. STRIDE om sistematies te kyk waar security gaps kan lê.

3. **Dokumenteer Risikos**: Skryf neer: “Hacker kan user ID’s vervals en admin pages betree.”

4. **Plan Mitigation**: Weet hoe jy elke risiko gaan keer. Miskien stel jy 2FA in, of enkripteer data, of voeg “input validation” by.

5. **Review en Iterate**: Threat modeling is nie “one-and-done” nie. Elke keer as jy iets aanpas in jou argitektuur, moet jy jou threat model update.

## 5. Voorbeelde van Tipiese Dreigemente

- **SQL Injection**: As jou input nie gefiltreer is nie, kan iemand jou database onderskep.

- **XSS (Cross-Site Scripting)**: Kan JavaScript inspuit in jou webapp en cookies steel.

- **Man-in-the-Middle**: As jou verbinding nie geënkripteer is nie, kan iemand jou netwerk verkeer afluister en manipuleer.

- **Phishing / Social Engineering**: Nie net tegniese foute nie – menslike foute speel ’n groot rol.

Threat modeling dwing jou om al hierdie scenario’s in jou ontwerp te bedink, voor hulle jou omkant betrap.

## 6. Best Practices en Wenke

- **Wees Vroeg Besig**: Moenie tot na jou MVP (Minimum Viable Product) wag om met sekuriteit te begin nie.

- **Betrek Die Span**: Ontwikkelaars, UX, QA, SysAdmins – almal moet input lewer. ‘n Beskerme stelsel is ’n spansaak.

- **Gebruik Outomatisering**: Tools soos Microsoft’s Threat Modeling Tool kan help, maar laat nie jou brein in die laai nie – menslike insig bly goud werd.

- **“Privacy by Design”**: Nie net sekuriteit nie, maar ook privaatheid – moenie onnodige data hou nie.

- **Herbesoek Gereeld**: Soos jou stelsel of infrastructuur verander, verander jou bedreigingslandskap ook.

## 7. Afsluitend: Bou Veilige Fondamente
Die benadering tot threat modeling is simpel maar kragtig:

- Identifiseer jou stelsel se moontlike aanval-opppervlak.

- Kategoriseer die bedreigings met ’n metode soos STRIDE.

- Beskerm jou stelsel doelgerig met effektiewe maatreëls.

As jy dít doen, bou jy ’n argitektuur wat nie ineenstort by die eerste golf hackers nie. Jy kies waar jou tyd en geld gaan so dat jou sekuriteit prioriteit geniet – nie net vir show nie.