---
layout: post
title: "Hoekom is Identity Management ’n Groot Ding?"
date: 2022-03-02
toc: false
categories: [sekuriteit]
tags: [Identity Management]
---

Ola, mense! Nathan hier om jou te lei in die geheime wêreld van **Identity Management** - daai kuns om jou gebruikers te laat inlog, uitlog, en veilig te hou sonder dat hulle 101 wagwoorde moet onthou nie.

## 1. Hoekom is Identity Management 'n Groot Ding?
Kom ons praat straight: As jy 'n app bou en mense "log in" sonder enige sekuriteit, dan gaan jou data en jou gebruikers se inligting **op straat** beland. Identity Management (IM) gaan oor:

- **Veiligheid:** Geen hacker moet maklik toegang kry tot jou gebruikers se rekening nie.
- **Gebruikersgerief:** Jou gebruiker wil net **een** wagwoord onthou, nie tien nie.
- **Compliance:** Jou stelsel moet by sekere wetlike veriestes hou (POPIA, GDPR, ens.) - jy wil nie 'n boete kry omdat jy slordig was nie.

## 2. Die Groot Taktieke van Identity Management

### 2.1 Single Sign-On (SSO)
Dis waar jou gebruiker slegs **een** keer hoef aan te meld, en dan outomaties toegang het tot al jou "geaffilieerde" stelsels. Soos as jy by Gmail aanmeld en sommer op YouTube ook ingeteken is. Minder wagwoorde = minder hoofpyne.

### 2.2 OAuth 2.0
Hierdie is soos 'n **toegangtoestemmingsraamwerk**. In plaas van jou app wat wagwoorde stoor, gebruik jy 'n "token" (m.a.w. 'n veilige kaartjie) om te bewys jy is wie jy sê jy is. Dis "delegated authority": ek (die gebruiker) sê vir die ander app “ja, jy mag toegang hê tot my data,” sonder om my wagwoord direk te gee.

### 2.3 OpenID Connect
OpenID Connect bou bo-op OAuth 2.0. Dis gerig op **authentication** (jy is wie jy sê jy is) plus bietjie profieldata (naam, e-pos, ens.). As jy al ooit met 'n "Sign in with Google/Facebook" gekliek het, het jy waarskynlik OpenID Connect gebruik.

### 2.4 MFA (Multi-Factor Authentication)
Waarom net 'n wagwoord gebruik as jy kan **verdubbel** op sekuriteit? Met MFA gooi jy nog 'n laag by, soos:

- 'n SMS Pin
- 'n TOTP (Time-Based One-Time Password) app (bv. Google Authenticator)
- 'n Biometriese check (vingerafdruk, gesig). Dis basically “wees dubbel-seker dat hierdie persoon regtig reg is” in plaas van net ’n enkele wagwoord.


## 3. User Provisioning & Deprovisioning
In groot maatskappye is dit 'n **ramp** as mense nie reg hanteer word nie:

- **Provisioning:** Gee 'n nuwe werknemer outomaties toegang tot net die stelsels wat hulle nodig het.
- **Deprovisioning:** Wanneer iemand loop of afgedank word, trek sommer **alle** toegangsregte terug in een klap. Moenie jou ex-werknemer laat rondsnuffel in jou databasis nie!

## 4. Identity Federation: Vetroue Tussen Domains
Identity Federation is waar veskillende organisasies/toeps mekaar se aanmeldstelsels vertrou. Dis soos "You scratch my back, I scratch yours.” As jou maatskappy “Company A” en “Company B” ‘n vennootskap het, kan gebruikers van “A” hul inligting gebruik om “B” se stelsels te gebruik, sonder dat hulle ’n nuwe rekening skep.

## 5. Directory & IAM Tools
Maak jou lewe makliker met toots en directory services:

- **Active Directory / Azure AD:** Baie gewild by Windows-omgewings.
- **Okta, AuthO:** Cloud-based ID platforms, easy-peasy integrasie met apps.
- **LDAP:** 'n Protocol vir die ouer garde, maar nog steeds nuttig om directory info te soek.

## 6. Paar Belangrike Wenke

1. **Hash jou wagwoorde:** Moet nooit plain-text wagwoorde stoor nie. Gebruik bcrypt, scrypt of Argon2.

2. **Beheer Sessie-tyd:** Moet nie oneindige sessies hou nie; vra weer ‘n teken-in as dit lank stilstaan.

3. **Goed Geskrewe RBAC (Role-Based Access Control):** Maak sekere sekuriteitspaaie slegs beskikbaar vir sekere rolle. Nie almal moet ‘n “Admin” wees nie.

4. **Tjek logs:** Identity management is net so sterk soos jou vermoë om anonymous aanmeldings of misbruik te vind. Monitoring en regristrasie is key.

## 7. Afsluiting: Beheer Jou Troepe!

In ‘n moderne toepassing is “Identity is the new perimeter”. As jy jou Identity Management nie sorteer nie, gaan jy uitgevang word met ‘n gat so groot dat jy jou gebruikers in die steek laat. Met SSO, OAuth, OpenID Connect en goeie provisioning kan jy ’n slick en veilige stelsel bou.

Onthou, my vriende: ’n **Wagwoord alleen is nie meer genoeg**. Gooi ‘n laag ekstra (MFA), hou jou aktiwiteite dop, en gebruik goed-ontwikkelde IAM-raamwerke en -tools. So bly jy bo die hackers se kop – én hou jy jou gebruikers happy.