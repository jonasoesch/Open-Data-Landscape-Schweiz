# The hitchhiker’s guide to Swiss Open Government Data

*Die Öffnung der Behördendaten wird oft als deren "Befreiung" bezeichnet. Man könnte sie aber auch als "Entkleidung" sehen. Ohne den ursprünglichen Kontext präsentieren sich die nackten Zahlen als ein Haufen Antworten ohne die passenden Fragen. Wie man alte Daten neu einkleidet, darauf sucht die Open Data-Community gerade die Antwort*

## Die Forderung nach mehr Transparenz und Demokratie

Die Öffnung der Behördendaten hat in der Schweiz schon eine längere Geschichte. Als späte Folge des Fichenskandals in den 90er Jahren erliess der Bund 2006 ein [Gesetz](https://www.admin.ch/opc/de/classified-compilation/20022540/index.html), das die Bundesbehörden dazu verpflichtet, auf Anfrage fast alle ihrer Informationen herauszugeben.

Das Öffentlichkeitsgesetz wurde eingeführt um den Staatsapparat für die Öffentlichkeit transparenter zu machen. Viele, bisher  nur interne, Informationen wurden nun [von ihrem dicken Amtsmantel befreit](https://www.oeffentlichkeitsgesetz.ch/deutsch/befreite-dokumente/). Zur Freude vieler Journalisten, deren Arbeit dadurch ungemein erleichtert wurde. 

### Offene Behördendaten

Wie durch Zufall veröffentlichte im [gleichen Jahr](https://blog.okfn.org/2006/09/06/version-10-of-the-open-knowledge-definition-released/) die [Open Knowledge Foundation](https://okfn.org/) ihre [Open Definition](http://opendefinition.org/). Nach deren Grundsätzen soll der Staat die Daten, die er erhebt, auch seinen Bürgern zugänglich machen. Dafür hat sich der Begriff [Open Government Data](https://opengovernmentdata.org/)  kurz *OGD* durchgesetzt. [^openscience] Eine der Hauptbegründungen für OGD war damals wie heute: mehr Transparenz und Demokratie.

Obwohl Open Government Data und das Öffentlichkeitsgesetz dadurch Schwestern im Geiste sind, geht OGD doch viel weiter. Das Öffentlichkeitsgesetz verlangt lediglich die Herausgabe von Daten auf Anfrage, OGD hingegen die aktive *Freigabe*. Als der Bundesrat 2014 eine [Open Government Data-Strategie](https://www.admin.ch/opc/de/federal-gazette/2014/3493.pdf) erliess, bezeichnete er dies als "Selbstbedienungssystem".

Freigegebene Daten dürfen beliebig vervielfältigt, weitergegeben und kopiert werden. "Es ist oftmals kaum mehr nachvollziehbar, wer welche Datensätze nutzt.", sagt Juan Pablo Lovato, Projektleiter Open Government Data Schweiz. "Aber das liegt ja auch in der Natur *freier Daten*".

### Der Verein opendata.ch

Dass die Sache überhaupt auf den Radar des Bundesrates kam, ist nicht zuletzt dem [Verein opendata.ch](https://opendata.ch/) geschuldet. Als Schweizer Arm der Open Knowledge Foundation weibelt der Verein seit 2011 für offene Daten in der Schweiz. Die Aktivisten sind dazu gut vernetzt in Politik, Medien und der IT-Branche. Das Vereinsprofil auf Twitter zählt fast [5000 Follower](https://twitter.com/opendatach). Das ist weit mehr als ähnliche Lobbyorganisationen wie [swissICT](https://twitter.com/swissict) oder [Energie Schweiz](https://twitter.com/energieschweiz). In der Open Data-Blase auf Twitter erhält man auch einen guten Einblick in die Denkweise der Bewegung:

Obwohl offiziell immer wieder auch der potenzielle wirtschaftliche Nutzen von offenen Behördendaten betont wird (geschätzt auf [eine Milliarde Franken pro Jahr](https://www.egovernment.ch/index.php/download_file/force/347/3337/)), sind die Leute, die man antrifft, vor allem eins: Idealisten.

Dieser Eindruck bestätigt sich, als ich Oleg Lavrovsky, den "Crowdsourcing Champion" des Vereins, im [Kaffee Effinger](https://www.effinger.ch/) in Bern treffe. Aus dem geplanten Interview wird bald eine Grundsatzdiskussion. Lavrovsky sieht offene Daten in Zukunft als unverzichtbaren Teil unserer Infrastruktur. Wie Wasser oder Strom.


## Open Data als Nebenprodukt: die Sekundärnutzung

Damit diese Infrastruktur Wirklichkeit wird, definiert der Bundesrat in seinem Massnahmenpaket die Erstellung einer zentralen Plattform: [opendata.swiss](http://opendata.swiss/). Sie sammelt seit 2015 offene Daten aus Bundesämtern, Kantonen, Gemeinden und bundesnahen Betrieben.

<p><iframe id="landscape" src="cantons/dist/index.html" height="500px"></iframe></p> 

*Karte mit Kantonen und Bundesämtern. Zeigt welche Kantone ein Öffentlichkeitsgesetz haben und wie ihr Status bezüglich Open Data ist. Die Grösse der Kantone und Städte ist im Verhältnis zur Einwohnerzahl dargestellt. Stand 12.9.2017*

Nach Möglichkeit geschieht dies automatisch mittels sogenannter "Harvester". Die Stadt Zürich hat zum Beispiel bereits 2012 damit begonnen, eine eigene OGD-Plattform aufzubauen. Diese ist so nun auch mit der nationalen Plattform verknüpft und liefert täglich neue und aktualisierte Datensätze aus.

"Das ist genau der Charme von Open Data", bestätigen mir Marco Sieber und Reto Wick, die OGD-Beauftragten der Stadt Zürich, "dass wir die Daten schon haben. Wir brauchen sie nur noch in geeigneter Form zu publizieren. Das kann man auch automatisieren". Auch der Bundesrat erwähnt diese Sekundärnutzung als eine der Stärken von Open Government Data. Diese sollen ganz ohne Mehraufwand entstehen, einfach als Nebenprodukt der Amtstätigkeit.

Dass das nicht immer so einfach ist, wissen Sieber und Wick selbst am besten. Seit Jahren werben sie an den verschiedenen Stellen dafür, dass sie ihre Daten "per default" offenlegen. Oft steht oder fällt es damit, ob sich die richtige Person an der entsprechenden Stelle [für das Thema interessiert](https://www.stadt-zuerich.ch/content/dam/stzh/portal/Deutsch/OGD/Dokumente/Hinderungsgr%c3%bcnde%20f%c3%bcr%20Open%20Government%20Data.pdf) und bereit ist, die internen Prozesse anzupassen. 

Jemand, der sich eindeutig für das Thema interessiert, ist Daniel Schweizer von den Parlamentsdiensten. Die Parlamentsdienste publizieren seit Jahren Informationen über Parlamentarier, Vorlagen und Abstimmungsresultate auf [parlament.ch](https://www.parlament.ch/de). Schon vor einiger Zeit wurde entschieden, die Webseite mit Hilfe einer Daten-API zu befüttern. Diese API zu öffnen war da nur noch ein kleiner Schritt. Mit der Publikation der Schnittstelle produzierten die Parlamentsdienste über Nacht, ohne Mehraufwand, offene Daten. Auch diese sind natürlich bei opendata.swiss eingetragen.

Und so landen die unterschiedlichsten Datensätze auf der Plattform. Die grosse Vielfalt erschliesst sich dem Besucher aber erst auf den zweiten Blick. Aus ihrem Ursprungskontext herausgehoben, sehen die Daten als erstes alle recht ähnlich aus.

## 2420 Antworten ohne die passenden Fragen

Auf der Startseite von opendata.swiss präsentiert sich allem voran, was sonst, eine Zahl: "2420 Datensätze" steht da gross und weiss auf neutral-grünblauem Hintergrund. Und irgendwie kommt einem die [skurrile Geschichte von Douglas Adams](http://www.progressiveruin.com/2011/03/13/42/) in den Sinn. Gefragt nach der Antwort auf die Frage "nach dem Leben, dem Universum und dem ganzen Rest“, spuckt der Supercomputer nach 7.5 Millionen Jahren Rechenzeit endlich die Antwort aus: "42". Die passende Frage dazu kennt aber auch er nicht.

So findet sich hier ein grosse Menge Antworten ohne die passenden Fragen. Keine Geschichten, keine Interpretationen oder Meinungen. Einfach nur die nackten Zahlen. Es liegt nun am Leser selbst, Fragen an die Daten zu formulieren. Und ein guter Anfang wäre sicher die Frage: "Wie viel Daten sind denn überhaupt 2420 Datensätze?"

Der Download [(fast)](#methodik) aller Datensätze wiegt rund 136 GB. Die Visualisierung zeigt aber, dass durchaus nicht alle Datensätze gleich geartet sind. Es gibt GB-schwere Bildarchive aber auch statistische Datensätze die es kaum auf ein MB bringen.

<p><iframe id="plattform" src="sunburst/index.html" height="700px"></iframe></p> 

*Übersicht über die Datensätze auf opendata.swiss. Stand 12.9.2017.*  [Details zur Methodik](#methodik)

"Aber sind denn solchen Daten dadurch weniger wert?" Während jedes Bildarchiv vielleicht hundert Bilder enthält, haben manche Tabellen oder APIs Millionen von Einträgen. Versucht man die Einträge in jedem Datensatz zu zählen, ergibt sich ein komplett neues Bild. Die grössten Datensätze bringen es auf 50 Millionen Datenpunkte, die kleinsten gerade Mal auf drei. "Sind denn die Datensätze mit den meisten Einträgen auch die beliebtesten?", fragt man sich. "Nicht unbedingt" antworten die Besucherzahlen. Der beliebteste Datensatz, die [Krankenversicherungsprämien](https://opendata.swiss/de/dataset/health-insurance-premiums) des Bundesamtes für Gesundheit, liegt mit rund 8 Millionen Einträgen im Mittelfeld.

## Data Literacy

Einen solchen Dialog mit Daten zu führen bezeichnet man in der Szene als "Data Literacy". Und möglichst jeder soll in Zukunft "data literate" werden. Lavrovsky hat dazu einen [Schweizer Ableger](https://schoolofdata-ch.github.io/) der sogenannten [*School of Data*](https://schoolofdata.org/) gestartet. Dort bringt er Interessierten bei, mit Daten umzugehen, sie darzustellen und zu interpretieren.

Regelmässig veranstaltet die Community auch sogenannte [Hackathons](https://opendata.ch/events/) zu verschiedenen Themen wie Finanzen, Energie oder Tourismus. Dort kommen Hacker, Journalisten, Unternehmer und Staatsangestellte zusammen, tauschen Fragestellungen aus und schlagen kreative Lösungen vor.

Manchmal stellt die Community auch fest, dass Daten fehlen oder fehlerhaft sind, so geschehen mit den Nährwertdaten aus dem Schweizer Detailhandel. Weil sich die Detailhändler sträubten, die Daten öffentlich zu machen, begann ein [Team an der ETH](https://www.openfood.ch/) Lausanne kurzerhand selbst, Produkte zu fotografieren und die Daten zusammenzutragen. Seither hat die Community schon über 18000 Produkte in den Katalog aufgenommen. Lavrovsky ist von solchen Initiativen begeistert. "Wenn die Organisationen ihre Daten nicht selbst offenlegen, dann macht die Community das eben selbst".

## Daten im neuen Gewand

Wichtig, so scheint es, ist nicht nur der Zugang zu den Daten, sondern vor allem auch zu deren Kontext. Die Daten selbst enthalten nicht die Fragen, die sie beantworten. Interessante Fragestellungen kommen immer aus dem Alltag der Menschen. In der Öffentlichkeit stossen so auch diejenigen Datensätze auf das grösste Echo, die direkt mit dem Alltag vieler Leute zu tun haben.

Die Öffnung der Transportdaten der SBB hat zum Beispiel viele Pendler dazu inspiriert, ihren Fahrplan [kreativ neu zu interpretieren](https://opentransportdata.swiss/de/fallblatt). Aber auch Unternehmen machen dem [SBB-Fahrplan Konkurrenz](http://www.viadi-app.ch). Das innovative Interface von [Viadi](https://www.viadi-app.ch/) fand schliesslich sogar Einzug in die neue SBB-App.

Doch während viele Leute in Bahnhof, Migros oder Coop fast täglich ein und ausgehen, trifft das bei der Verwaltung nicht zu.

Lovato wünscht sich deshalb auch dort mehr Offenheit. Die Verwaltungen kennen ihre Fragestellungen und oftmals gleichen sie sich untereinander. Offene Daten können ein Anlass sein, darüber zu diskutieren, ob man die Herausforderungen nicht gemeinsam angehen will, anstatt jeder für sich in seiner Ecke[^Huijboom] [^Janssen]. Bis sich eine solche Kultur des "Open Government" etabliert hat, wird es [wohl noch einige Jahre dauern](https://www.egovernment.ch/index.php/download_file/force/1135/3337/). Aber, so Lovato: "die Zeit ist auf unserer Seite. Irgendwann wird der Zugang zu Daten so selbstverständlich sein wie der zu Wasser oder zu Strom."

<div markdown="1" style="background-color: #D9D9D6; padding: 5px 30px; box-sizing: border-box">

### Methodik

Informationen zu den einzelnen Datensätzen wurden über die [opendata.swiss-API](https://opendata.swiss/api/3/action/package_list) abgefragt. 

Um die Dateigrösse und die Anzahl der Einträge zu ermitteln wurden alle Daten heruntergeladen. Davon ausgenommen sind Datensätze die als API zur Verfügung stehen oder nicht direkt verlinkt sind. Zur Ermittlung der Dateigrösse wurden die Grössen aller Downloads addiert. 

Die Anzahl Einträge wurde aus Zeitgründen nur für etwa drei Viertel der Datensätze ermittelt. Sie funktioniert für die verschiedenen Datentypen folgerndermassen: 

* Tabellarische Daten (TSV, CSV, PC-AXIS, XLS): Anzahl Felder in der Tabelle. 
* Geodaten (Shapefiles): Anzahl Einträge (Punkte, Flächen) × Anzahl Attribute pro Eintrag. 
* Bildaten: Anzahl der Bilder

Die Besucherzahlen wurden freundlicherweise vom [Bundesarchiv](https://www.bar.admin.ch/bar/de/home/recherche/suchen/suchmaschinen-portale/open-government-data.html) zur Verfügung gestellt. Die Besucherzahlen für einen Datensatz wurden ermittelt, indem die Anzahl Besucher auf der Seite des Datensatzes und auf allen Unterseiten kumuliert wurde.

</div>

### Fussnoten

[^openscience]: Neben der Verwaltung gibt es auch in anderen Bereichen Bestrebungen, Daten zu öffnen. Speziell auch in der Wissenschaft. Das Thema *Open Science Data* steht in der Schweiz noch [ziemlich am Anfang]((https://www.swissuniversities.ch/de/themen/hochschulpolitik/open-access/)) und wird in diesem Artikel nicht weiter behandelt. 


[^Huijboom]: Huijboom, N., & Van den Broek, T. (2011). Open data: an international comparison of strategies. European Journal of ePractice, 7-8.
[^Janssen]: Janssen, M., Charalabidis, Y., & Zuiderwijk, A. (2012). Benefits, Adoption Barriers and Myths of Open Data and Open Government. Information Systems Management, 29(4), 258–268.  http://doi.org/10.1080/10580530.2012.716740


<script src="presentation/presentation.js"></script>