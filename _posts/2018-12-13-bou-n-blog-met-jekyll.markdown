---
layout: post
title:  "Bou 'n blog met Jekyll"
date:   2018-12-13 12:46:27 +0200
categories: jekyll update
---

## Wat is Jekyll?

Dis 'n raamwerk wat mense in staat stel om te blog deur gebruik van eenvoudige statiese HTML webwerwe. All die inhoud word gestoor en beheer op Github en geen databasis word benodig soos met ander CMS-gebaseerde webwerwe nie.

Jekyll vat jou inhoud geskryf in Markdown, stoot dit deur jou templates en lewer 'n statiese webwerf. Github Pages lewer die webwerf direk van jou Github repsitory sodat jy nie dit hoef te host nie. 

Die voordeel van statiese webwerwe is dat hul eenvoudig is, geen databasis of CMS benodig, dis vinnig, minimale ontwerp en baie minder kwesbaarhede as gewone platforms. 

## Stap 1 - Installeer Jekyll

*Die volgende was geneem van Jekyll se webwerf - https://jekyllrb.com/docs/installation/*

Vir my handleiding gebruik ek Windows 10, maar jy na die webwerf hierbo verwys vir ander operating systems. 

1. Laai Ruby+Devkit af van **[RubyInstaller Downloads](https://rubyinstaller.org/downloads/)**. Gebruik die standaardopsies.
2. Hardloop die `ridk install` stap op die laaste deel van die installasie. Die is nodig vir die installasie van gems met inheemse uitbreidings. Jy kan additionele informasie vind met betrekking tot die in die **[RubyInstaller Dokumentasie](https://github.com/oneclick/rubyinstaller2#using-the-installer-on-a-target-system)**.
3. Maak n nuwe opdragprompt oop in die start menu so dat die verandering na die `PATH` omgewing veranderlike effektief word. Installeer Jekyll en Bundler via: `gem install jekyll bundler`.
4.  Kyk of Jekyll behoorlik geinstalleer is: `jekyll v` 

## Stap 2 - Stel jou repository op

Vir die benodig jy 'n rekening op Github - **[Join Github](https://github.com/join)**.

Skep 'n nuwe Github repository wat jou l&#234;ers sal bevat of die webwerf bedien. My Github username is **naugustyn** so die repository se naam sal **naugustyn.github.io** wees. Maak seker jou repository naam is in kleinletters. 

{% include image.html url="assets/img/capture1.PNG" description=" " %}

In die repository watookal in die meester tak is word gepubliseer na **naugustyn.github.io**.

As jy nog nie het nie begin 'n repository waar jou webwerf l&#234;ers is:

{% highlight shell %}

git init
git add -A
git commit -m "initial commit."

{% endhighlight shell %}

Ons kan nou ons l&#234;ers "push" na ons host duer die oorsprong as Github by te voeg. Maak seker die URL van die oorsprong is aangepas na jou eie repository:

{% highlight shell %}

git remote add origin git@github.com:naugustyn/naugustyn.github.io.git
git push -u origin master

{% endhighlight shell %}

Jy behoort jou webwerf te sien as jy **[username].github.io** besoek.

## Stap 3 - Stel jou DNS op

