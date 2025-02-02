---
layout: post
title: "Low-level oulikheid met shells and exploits"
date: 2022-03-18
toc: false
categories: [sekuriteit]
tags: [Shellcode]
---

Goeiedag, mense! Nathan hier, en vandag gaan ons bietjie meer oor "low-level" oulikheid leer. Want as jy weet hoe shells en exploits werk, dan's jy halfpad nader om jou stelsel (of die van die ander) te beskerm - of, as jy 'n "offensive sec" type is, om vulnerabilities te vind en uit te buit (uiteraard net waar jy mag!).

## 1. Wat's die hoof idee?
Rekenaarstelsels kan misbruik word via **low-level** hacking. Dink aan:

- **Buffer Overflows**

- **Format String Vulnerabilities**

- **Return-Oriented Programming (ROP)**

- **Heap Exploits**

- **Developing Shellcode** (hoe om "onskuldige" kode in stelsels in te smokkel)

Vir baie mense klink dit na "dark magic," maar dit gaan eintlik oor vestaan hoe jou memory, registers, en CPU werk. En deur dit te verstaan, verstaan jy ook beter hoe om jou eie programme veilig te maak.

## 2. Buffer Overflows & Memory Corruption
Dis soos om 'n glas tot bo, tot hy oorloop, met water te vul - dit loop oor en maak 'n gemors op die tafel. In rekenaarland, as jy 'n buffer te vol stop, kan jy soms **return addresses** of **control flow** manipuleer.

1. **Stack-based Overflows:** Jy vul die stack met meer data as waarvoor daar plek is, en stamp sodoende 'n return pointer of 'n saved frame pointer oor. Nou begin jou **shellcode** in die program loop.

2. **Heap Overflows:** Jy teiken die "heap," wat dinamies geallokeerde memory is. Soms kan jy pointer structures overwrite en dus 'code execution jumps' manipuleer.

Dit kan klink soos high-tech wizardry, maar dis grotendeels net **C-strings** wat nie behoorlik ge-sanitize word nie.

## 3. Format String Bugs
So basic maar so dodelik. As 'n programmeerder ```%s```, ```%d```, of ```%x``` roep sonder om ‘n string ordentlik te definieer, kan ‘n aanvaller willekeurige gedeeltes van die stelsel se memory "lek" of selfs skryf. Dis soos om jou geheime te laat lees deur iemand wat net printf oor en oor roep. Dodelik simpel!

## 4. Shellcode 101
Shellcode is **masjienkode** wat 'n aanvaller in jou program inspuit en laat loop. Gewoonlik wil hy net 'n "shell" spawn sodat hy remote kontrole kry, maar hy kan lastigheid doen:

- **Bind Shell:** Jy bind 'n shell op 'n 'listening-port' sodat jy kan in-telnet.

- **Reverse Shell:** Jy laat die slagoffer se masjien terug na jou konnekteer.

- **Edge Cases:** Enige arbitrêre kode - miskien net 'n "calc.exe" wat oop maak op Windows, of 'n "rm -rf /" op Linux (wees net versigtig om nie jou eie masjien te "nuke" nie!).

Die truuk is om klein en **null-free** shellcode te bou, want dikwels kan null karakters jou exploit breek.

## 5. Tools en Tegnieke

1. **Disassemblers** (IDA Pro, Radare2, Ghidra): Kyk na masjienkode en verstaan wat aangaan.
2. **Debugger** (gdb, WinDbg, OllyDbg): Stap deur kode, check registers, sien waar jou stack oorloop.
3. **Automated Fuzzing:** Gooi random data na 'n program, kyk of dit breek. As dit breek, het jy iets interesting gevind.
4. **Exploitation Frameworks** (Metasploit, Canvas, Core Impact): Hierdie frameworks kan jou lewe vergemaklik as jy graag "unleash" wil.

## 6. Beveiligingshindernisse & Evasion

Moderne bedryfstelsels en "compiler tricks" maak exploiters se lewe nie altyd makliker nie.

- **ASLR (Address Space Layout Randomization):** Verander die address layout, so jy moet jou spronge "gadgets" soek.

- **DEP / NX Bit (Data Execution Prevention):** Verhoed dat kode in sekere gedeeltes van die memory uitgevoer word.

- **Stack Canaries:** Gooi 'n random waarde voor jou return pointer - as dit verander word, crash die program.

Maar daar's maniere om, om hierdie hindernisse te navigeer, soos **ROP-chains** (Return Oriented Programming) en **jump-n-skip** truuks.

## 7. Etiese Aspek & "Hack Wisely"

Al hierdie kennis is **kragtig**. Jy kan stelsels van binne af uitmekaar trek, maar met groot mag kom groot verantwoordelikheid:

- **Toets slegs** stelsels waar jy toestemming het.

- **Responsible Disclosure:** As jy 'n fout gevind het, sê vir die ontwikkelaars – moenie net ‘n zero-day verkoop op die dark web nie.

- **Leer, dan verdedig:** Die hoofrede om hierdie te leer is sodat jy veilige kode kan skryf en veilige stelsels kan bou.

## Afsluiting: Weet Wat Onder die Deksel Gebeur

Hierdie gee jou 'n begin om bietjie te **deep dive** in hoe mens stelsels op lae-vlak (assembly en memory) kan bykom. Dit gaan oor buffer overflows, format string exploits, en hoe om shellcode te bou sodat jy beheer kry oor 'n teiken program. Vir die aspiring exploit-dev of security engineer is dit goud.

**Onthou:** Kennis is neutraal. Jy kan dit gebruik om kwaad aan te rig, of om jou stelsel-argitektuur en kode meer robust te maak. Jou keuse, my vriend!

**Tot volgende keer**, Nathan - wat jou mooi vra om jou "shellcoding" vir goeie doeleindes te gebruik, en altyd jou stelsels te patch voor iemand anders jou rekenaars oorneem!