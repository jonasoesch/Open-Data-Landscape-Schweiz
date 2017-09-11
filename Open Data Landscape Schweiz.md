# The hitchhiker’s guide to Swiss Open Governement Data

*Die Öffnung der Behördendaten wird oft als deren "Befreiung" bezeichnet. Man könnte sie aber auch als "Entkleidung" sehen. Ohne den ursprünglichen Kontext präsentieren sich die nackten Zahlen als ein Haufen Antworten ohne die passenden Fragen. Wie man alte Daten neu gewandet, darauf sucht die Open Data-Community gerade die Antwort*

## Die Forderung nach mehr Transparenz und Demokratie

Das mit der Öffnung der Behördendaten hat in der Schweiz schon eine längere Geschichte. Als späte Folge des Fichenskandals in den 90er Jahren erliess der Bund 2006 ein [Gesetz](https://www.admin.ch/opc/de/classified-compilation/20022540/index.html), das die Bundesbehörden dazu verpflichtet, auf Anfrage fast alle ihrer Informationen herauszugeben.

Das Öffentlichkeitsgesetz wurde eingeführt um den Staatsapparat für die Öffentlichkeit transparenter zu machen. Viele, bisher  nur interne, Informationen wurden nun [von ihrem dicken Amtsmantel befreit](https://www.oeffentlichkeitsgesetz.ch/deutsch/befreite-dokumente/). Zur Freude vieler Journalisten, deren Arbeit dadurch ungemein erleichtert wurde. 

### Open Governement Data

Wie durch Zufall veröffentlichte im [gleichen Jahr](https://blog.okfn.org/2006/09/06/version-10-of-the-open-knowledge-definition-released/) die [Open Knowledge Foundation](https://okfn.org/) ihre [Open Definition](http://opendefinition.org/). Nach deren Grundsätzen, soll der Staat die Daten die er erhebt auch seinen Bürgern zugänglich machen. Dafür hat sich der Begriff [Open Governement Data](https://opengovernmentdata.org/) kurz *OGD* durchgesetzt. Eine der Hauptbegründungen für OGD war damals wie heute: mehr Transparenz und Demokratie.

Obwohl Open Governement Data und das Öffentlichkeitsgesetz dadurch Schwestern im Geiste sind, geht OGD doch viel weiter. Das Öffentlichkeitsgesetz verlangt lediglich die *Herausgabe* von Daten auf Anfrage. OGD hingegen deren komplette *Freigabe*. Als der Bundesrat 2014 eine [Open Governement Data-Strategie](https://www.admin.ch/opc/de/federal-gazette/2014/3493.pdf) erliess, bezeichnete er dies als "Selbstbedienungssystem".

Solche Daten dürfen beliebig vervielfältigt, weitergegeben und kopiert werden. "Es ist oftmals kaum mehr nachvollziehbar, wer, welche Datensätze nutzt.", sagt JuanPablo Lovato, Projektleiter Open Government Data Schweiz. "Aber das liegt ja auch in der Natur *freier Daten*".

### Der Verein opendata.ch

Dass die Sache überhaupt auf den Radar des Bundesrates kam, ist nicht zuletzt dem [Verein opendata.ch](https://opendata.ch/) geschuldet. Als Schweizer Arm der Open Knowledge Foundation weibelt der Verein seit 2011 für offene Daten in der Schweiz. Die Aktivisten sind dazu gut vernetzt in Politik, Medien und der IT-Branche. Das Vereinsprofil auf Twitter zählt fast [5000 Follower](https://twitter.com/opendatach). Das ist weit mehr als ähnliche Lobbyorganisationen wie [swissICT](https://twitter.com/swissict) oder [Energie Schweiz](https://twitter.com/energieschweiz). In der Open Data-Blase auf Twitter bekomme ich auch einen guten Einblick in die Denkweise der Bewegung:

Obwohl offiziell immer wieder auch der potenzielle wirtschaftliche Nutzen von offenen Behördendaten betont wird (geschätzt auf [eine Milliarde Franken pro Jahr](https://www.egovernment.ch/index.php/download_file/force/347/3337/)); sind die Leute die ich treffe vor allem eins: Idealisten.

Dieser Eindruck bestätigt sich als ich Oleg Lavrovsky, den "Crowdsourcing Champion" des Vereins, im [Kaffee Effinger](https://www.effinger.ch/) in Bern treffe. Aus dem geplanten Interview wird bald eine Grundsatzdiskussion. Lavrovsky sieht offene Daten in Zukunft als unverzichtbaren Teil unserer Infrastruktur. Wie Wasser oder Strom.


## Open Data als Nebenprodukt: von der Sekundärnutzung

Damit diese Infrastruktur Wirklichkeit wird, definiert der Bundesrat in seinem Massnahmenpaket die Erstellung einer zentralen Plattform: [opendata.swiss](http://opendata.swiss/). Sie sammelt seit 2015 offene Daten aus Bundesämtern, Kantonen, Gemeinden und bundesnahen Betrieben.

<p><iframe id="landscape" src="cantons/dist/index.html" height="500px"></iframe></p> 

*Map mit Kantonen und Bundesämtern. Zeigt welche Kantone ein Öffentlichkeitsgesetz haben und wie ihr Status bezüglich Open Data ist.*

Nach Möglichkeit geschieht dies automatisch mittels sogenannter "Harvester". Die Stadt Zürich hat bereits 2012 damit begonnen, eine eigene OGD-Plattform aufzubauen. Diese ist nun auch mit der nationalen Plattform verknüpft und liefert täglich neue und aktualisierte Datensätze aus.

"Das ist genau der Charme von Open Data", bestätigen mir Marco Sieber und Reto Wick, die OGD-Beauftragten der Stadt Zürich, "dass wir die Daten schon haben. Wir brauchen sie nur noch in geeigneter Form zu publizieren. Das kann man auch automatisieren". Auch der Bundesrat erwähnt diese Sekundärnutzung als eine der Stärken von Open Data. 

Dass das nicht immer so einfach ist, wissen die beiden selbst am besten. Seit Jahren werben sie an den verschiedenen Stellen dafür, dass sie ihre Daten "per default" offenlegen. Oft steht oder fällt es damit, ob sich die richtige Person an der entsprechenden Stelle [für das Thema interessiert](https://www.stadt-zuerich.ch/content/dam/stzh/portal/Deutsch/OGD/Dokumente/Hinderungsgr%c3%bcnde%20f%c3%bcr%20Open%20Government%20Data.pdf). 

### "Rohe Daten"

Jemand der sich eindeutig für das Thema interessiert, ist Daniel Schweizer von den Parlamentsdiensten. Die Parlamentsdienste publizieren seit Jahren Informationen über Parlamentarier, Vorlagen und Abstimmungsresultate auf [parlament.ch](https://www.parlament.ch/de). Schon vor einiger Zeit wurde entschieden, die Webseite mit Hilfe einer Daten-API zu befüttern. Diese API auch der Öffentlichkeit zur Verfügung zu stellen, war da nur noch ein kleiner Schritt. Neben dem gedruckten Amtlichen Bulletin und der Webseite hat die Öffentlichkeit nun auch Zugriff auf die rohen Daten.

Die Definition, was denn Rohdaten seien, ist dabei oftmals nicht ganz klar. In der Praxis bedeutet es aber oft, dass Daten leicht in einen neuen Kontext übernommen werden können. Und das bedeutet im Kehrschluss auch den Verlust des ursprünglichen Kontexts.

## 2048 Antworten ohne die passenden Fragen

Angekommen auf opendata.swiss präsentiert sich mir, was sonst, eine Zahl: "2408 Datensätze" steht da. Und irgendwie kommt mir die skurrile Geschichte von Douglas Adams in den Sinn. Gefragt nach der Antwort die Frage "nach dem Leben, dem Universum und dem ganzen Rest“, spuckt der Supercomputer nach 7.5 Millionen Jahren Rechenzeit die Zahl 42 aus. Die passende Frage dazu kennt aber auch er nicht.

So präsentiert sich mir hier ein Haufen Antworten ohne die zugehörigen Fragen. Es liegt nun wohl an mir, meine eigene Frage an die Daten zu stellen. Ich fange damit an: "Wie viel Daten sind denn überhaupt 2408 Datensätze?"

Der Download (fast) aller Datensätze wiegt rund 60 GB. Die Visualisierung zeigt aber, dass durchaus nicht alle Datensätze gleich geartet sind. Es gibt GB-schwere Bildarchive aber auch statistische Datensätze die es kaum auf ein MB bringen.

<p><iframe id="plattform" src="sunburst/index.html" height="800px"></iframe></p> 

"Sind solchen Daten dadurch aber weniger wert?" Ich versuche es damit, die Einträge in jedem Datensatz zu zählen. Und es ergibt sich ein komplett anderes Bild. Nun finden sich statistische Daten mit Millionen von Einträgen. "Sind denn die Datensätze mit den meisten Einträgen auch die beliebtesten?", frage ich mich. "Nicht wirklich" antworten mir die Besucherzahlen der einzelnen Datensätze.

## Data Literacy

Einen solchen Dialog mit den Daten zu führen bezeichnet man in der Szene als "Data Literacy". Und möglichst jeder soll in Zukunft "data literate" werden. Lavrovsky hat dazu eigens eine *School of Data* gegründet. Dort bringt er Interessierten bei, mit Daten umzugehen, sie darzustellen und zu interpretieren.

Regelmässig veranstaltet der Verein opendata.ch auch sogenannte Hackathons zu verschiedenen Themen wie "Finanzen", "Energie" oder "Tourismus". Dort treffen sich interessierte Parteien, tauschen Fragestellungen aus und schlagen kreative Lösungen vor.

Manchmal stellt die Community auch fest, dass Daten fehlen oder fehlerhaft sind. Geschehen so mit Nährwertdaten der Lebensmittel  der Schweizer Detailhändler. Weil diese sich sträubten, die Daten öffentlich zu machen, begann ein Team an der ETH Lausanne kurzerhand selbst die Daten zusammen zu tragen. Seither hat die Community schon über 18000 Produkte in den Katalog aufgenommen. Lavrovsky ist von solchen Initiativen begeistert. "Wenn die Organisationen ihre Daten nicht selbst offenlegen, dann macht die Community das eben selbst".

## Daten im neuen Gewand

Wichtig, so scheint es, ist nicht nur der Zugang zu den Daten, sondern vor allem auch zu deren Nutzungskontext. In der Öffentlichkeit stossen so auch die Datensätze auf das grösste Echo, die direkt mit dem Lebenskontext vieler Leute zu tun haben.

Die Öffnung der Transportdaten der SBB hat zum Beispiel viele Pendler dazu inspiriert, ihren Fahrplan [kreativ neu zu interpretieren](https://opentransportdata.swiss/de/fallblatt). Aber auch Unternehmen machen dem [SBB-Fahrplan Konkurrenz](http://www.viadi-app.ch). Das innovative Interface von viadi findet schliesslich sogar Einzug in die neuen SBB-App.

Doch während viele Leute in Bahnhof, Migros oder Coop fast täglich ein und ausgehen, trifft das bei der Verwaltung nicht zu.

Lovato wünscht sich deshalb auch dort mehr Offenheit. Die Verwaltung kennt ihre Fragestellungen und oftmals sind sie ähnlich zwischen den Ämtern. Offene Daten können ein Anlass sein, darüber zu diskutieren ob man die Herausforderungen nicht gemeinsam angehen will, statt jeder für sich in seiner Ecke[^Huijboom] [^Janssen]. Bis sich eine solche Kultur des "Open Governement" etabliert hat, wird es [wohl noch einige Jahre dauern](https://www.egovernment.ch/index.php/download_file/force/1135/3337/). Aber, so Lovato: "die Zeit ist auf unserer Seite. Irgendwann wird der Zugang zu Daten so selbstverständlich sein wie der zu Wasser oder zu Strom."



[^Huijboom]: Huijboom, N., & Van den Broek, T. (2011). Open data: an international comparison of strategies. European Journal of ePractice, 7-8.
[^Janssen]: Janssen, M., Charalabidis, Y., & Zuiderwijk, A. (2012). Benefits, Adoption Barriers and Myths of Open Data and Open Government. Information Systems Management, 29(4), 258–268.  http://doi.org/10.1080/10580530.2012.716740


<script src="presentation/presentation.js"></script>