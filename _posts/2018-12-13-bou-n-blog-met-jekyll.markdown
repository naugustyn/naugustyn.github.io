---
layout: post
title:  "Bou 'n blog met Jekyll"
date:   2018-12-13 12:46:27 +0200
categories: jekyll update
---

## Wat is Jekyll?

Dis 'n raamwerk wat mense in staat stel om te blog deur gebruik van eenvoudige statiese HTML webwerwe. All die inhoud word gestoor en beheer op Github en geen databasis word benodig soos met ander CMS-gebaseerde webwerwe nie.

Jekyll vat jou inhoud geskryf in Markdown, stoot dit deur jou templates en lewer 'n statiese webwerf. Github Pages lewer die webwerf direk van jou Github repsitory sodat jy nie dit hoef te host nie. 

Die voordeel van statiese webwerwe is dat hul eenvoudig is, geen databasis of CMS benodig nie, dis vinnig, minimale ontwerp en baie minder kwesbaarhede as gewone platforms. 

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

{% include image.html url="/assets/img/capture1.PNG" description=" " %}

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

Registreer 'n domain en **[voeg dit by jou CloudFlare rekening](https://support.cloudflare.com/hc/en-us/articles/201720164-Step-2-Create-a-CloudFlare-account-and-add-a-website)**.

Om dit moontlik te maak vir Github om verkeer te aanvaar van jou domain moet jy 'n CNAME l&#234;er in jou repository maak wat die hostname bevat om verkeer te aanvaar. 

Die volgende r&#235;els tel:

- As die CNAME l&#234;er byvoorbeeld.co.za bevat dan sal www.byvoorbeeld.co.za na byvoorbeeld.co.za herlei.
- As die CNAME l&#234;er www.byvoorbeeld.co.za bevat sal byvoorbeeld.co.za na www.byvoorbeeld.co.za herlei.

Die Git repository wat ons in die vorige afdeling geskep het voeg 'n CNAME file by and "commit" jou veranderinge:

{% highlight shell %}

echo "www.naugustyn.me" > CNAME
git add -A
git commit -m "CNAME file bygelas."
git push origin master

{% endhighlight shell %}

Ons can die rekords bylas om na ons DNS rekords wys na ons Githup Pages rekening:

{% include image.html url="/assets/img/capture2.PNG" description=" " %}

Jy can **[nuuste lys van IP adresse](https://help.github.com/en/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site)** vind op die Github Page dokumentasie.

## Stap 3 - SSL

Github Pages ondersteun nog nie SSL vir pasgemaakte domains wat gewoonlik HTTP/2 sal uit kanselleer. Terwyl die HTTP/2 spesifikasie (**[RFC 7540](https://tools.ietf.org/html/rfc7540)**) toelaat vir HTTP/2 oor gewone teks HTTP/2. Alle popul&#234;re blaaiers benodig HTTP/2 om te hardloop bo TLS bedoelend HTTP/2 net bo-op HTTPS kan hardloop die de-facto standaard is. 

CloudFlare's universele SSL opsie ons toelaat om getekende SSL sertifikate aan besoekers te gee. Dit gee ons die voordele van HTTP/2 en **[moontlik jou soekenjinranglys verbeter](https://webmasters.googleblog.com/2014/08/https-as-ranking-signal.html)**.

{% include image.html url="/assets/img/cloudflare_ssl_modes.png" description=" " %}

In die *Crypt tab* van jou CloudFlare rekening moet jy seker maak jou SSL mode is gestel na *Full* en nie *Full (Strict)*:

{% include image.html url="/assets/img/capture3.PNG" description=" " %}

Ons kan nou 'n r&#235;el bylas in *Page Rule* om HTTPS te dwing op besoekers:

{% include image.html url="/assets/img/capture4.PNG" description=" " %}

Ons kan ook 'n r&#235;el bylas wat verseker dat byvoorbeeld.co.za veilig na www.byvoorbeeld.co.za herley word wanneer HTTPS gebruik word:

{% include image.html url="/assets/img/capture5.PNG" description=" " %}

Deur streng HTTP HSTS te aktiveer sal help verseker dat jou besoekers met jou webwerf kommunikeer oor HTTPS duer die blaaiers te s&#234; dat hul moet kommunikeer oor ge&#235;nkripteerde HTTPS. Wees versigtig om die te aktiveer, omdat dit jou webwerf ontoeganglik kan maak as jy ooit besluit om HTTPS af te skakel.

## Stap 4 - Cache

CloudFlare het 'n "Cache Everything" opsie in die *Page Rules*. Vir statiese webwerwe laat dit jou HTML toe om ge-cache te word en direct van CloudFlare's CDN gedien word.

{% include image.html url="/assets/img/capture6.PNG" description=" " %}

Wanneer jy jou webwerf dien kan jy die *Purge Cache* opsie in die *Cache tab* op CloudFlare gebruik om die cached weergawe van jou webwerf te verwyder. 

Die volgendeis vertaal van **[Secure and fast GitHub Pages with CloudFlare](https://blog.cloudflare.com/secure-and-fast-github-pages-with-cloudflare/)**