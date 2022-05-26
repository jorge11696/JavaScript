/**
 * Generador de palabra del día para Wordle.
 * Lenguajes de Marcas y Sistemas de Gestión de la Información
 */

/* Diccionario de 750 palabras de 5 letras */
const diccionario = ['ababa','abaca','abaco','abada','abadi','abaja','abaje','abajo','abala','abale','abalo','abana','abane','abano','abaña','abañe','abaño','abasi','abata','abate','abati','abato','abece','abeja','abete','abeto','abiar','abias',
'abina','abine','babas','babea','babee','babel','babeo','babis','bable','babor','bacan','bacas','bache','bacia','bacin','bacon','badal','badan','badas','badea','baden','badil','bafle','bagad','bagan','bagar','bagas','bagos','bagre','bague',
'bahai','bahia','cabal','cabas','cabed','caben','caber','cabes','cabia','cabio','cable','cabos','cabra','cabre','cabro','cacan','cacao','cacas','cacea','cacee','cacen','caceo','caces','cacha','cache','cacho','cachu','cacle','cacos','cacto',
'cacuy','cadas','daban','dabas','dable','dacha','dacia','dacio','dadas','dador','dados','dagas','dahir','daifa','dajao','dalas','dalgo','dalia','dalla','dalle','dallo','damas','damil','damos','dance','dandi','dando','danes','dango','danta',
'dante','danto','ebano','ebria','ebrio','echad','echan','echar','echas','echen','eches','ecuas','ecuos','edema','edila','edita','edite','edito','edrad','edran','edrar','edras','edren','edres','educa','educe','educi','educo','eduje','edujo','efebo','efeta',
'fabas','fabla','fabos','fabro','facas','facer','faces','facha','fache','facho','facil','facon','facto','fadas','fados','faena','faene','faeno','fagos','fagot','faina','faino','fajad','fajan','fajar','fajas','fajea','fajee','fajen','fajeo',
'gaban','gabar','gacel','gacha','gache','gachi','gacho','gafad','gafan','gafar','gafas','gafea','gafee','gafen','gafeo','gafes','gafos','gagas','gagos','gaita','gajes','gajos','galan','galas','galce','galea','galeo','gales','galga','galgo',
'habar','habas','haber','habia','habil','habiz','habla','hable','hablo','habon','habra','habre','habus','hacan','haced','hacen','hacer','haces','hacha','hache','hacho','hacia','hadar','hadas','hados','hafiz','hagan','hagas','haiga','halad',
'ibais','ibera','ibero','ibice','icaco','iceis','ichal','ichos','ichus','icono','ictus','idead','ideal','idean','idear','ideas','ideay','ideen','idees','ideos','idolo','iglus','ignea','igneo','igual','iguar','ijada','ijiyo','ijuju','ileon',
'jabas','jabis','jable','jabon','jabra','jabre','jabri','jabro','jacal','jacas','jacer','jacha','jacos','jacta','jacte','jacto','jadas','jadea','jadee','jadeo','jades','jadia','jadie','jadio','jaece','jaeza','jaezo','jagua','jaiba','jaima',
'labeo','labes','labia','labil','labio','labor','labra','labre','labro','lacad','lacan','lacar','lacas','lacea','lacee','lacen','laceo','laces','lacha','lacho','lacia','lacio','lacon','lacra','lacre','lacro','lacta','lacte','lacto','ladas',
'mabis','mable','macal','macan','macar','macas','macea','macee','macen','maceo','maces','macha','mache','machi','macho','macia','macio','macis','macla','macon','macro','macua','mador','madre','maeña','maeño','maesa','maese','maeso','mafia',
'nabab','nabal','nabar','nabas','nabis','nabla','nabos','nacar','nacas','naced','nacen','nacer','naces','nacha','nacho','nacia','nacio','nacos','nacre','nadad','nadal','nadan','nadar','nadas','naden','nades','nadga','nadie','nadir','nafra',
'ñajas','ñajos','ñames','ñampi','ñandu','ñanga','ñango','ñañas','ñaños','ñapas','ñaque','ñatas','ñatea','ñatee','ñateo','ñatos','ñecas','ñecla','ñecos','ñenga','ñengo','ñeque','ñinga','ñipes','ñique','ñires','ñisca','ñizca','ñocas','ñocha',
'oasis','obelo','obesa','obeso','obice','obito','oblea','oboes','obolo','obrad','obran','obrar','obras','obren','obres','obsta','obste','obsto','obten','obues','obvia','obvie','obvio','ocapi','ocaso','ocelo','ocena','ochos','ociad','ocian',
'pacae','pacas','pacay','paced','pacen','pacer','paces','pacha','pacho','pacia','pacio','pacon','pacos','pacta','pacte','pacto','pacus','padre','pafia','pafio','pagad','pagan','pagar','pagas','pagel','pagos','pagro','pagua','pague','pahua',
'queco','queda','quede','quedo','queja','queje','quejo','quema','queme','quemi','quemo','quena','quepa','quepi','quepo','quera','quere','quero','queso','quias','quien','quier','quifs','quijo','quila','quilo','quima','quimo','quina','quino',
'rabal','rabas','rabea','rabee','rabel','rabeo','rabia','rabie','rabil','rabio','rabis','rabon','rabos','racea','racee','racel','raceo','racha','rache','racho','racor','racos','radal','radar','radas','rades','radia','radie','radio','radon',
'sabea','sabed','saben','sabeo','saber','sabes','sabia','sabio','sabir','sable','sabor','sabra','sabre','sacad','sacan','sacar','sacas','saces','sacha','sache','sacho','sacia','sacie','sacio','sacon','sacos','sacra','sacre','sacro','saeta',
'tabal','tabas','tabea','tabes','tabis','tabla','table','tablo','tabon','tabor','tabos','tabus','tacar','tacas','tacen','taces','tacet','tacha','tache','tacho','tacon','tacos','tacto','tafia','tafon','tafos','tafur','tagua','tahas','tahur',
'ubica','ubico','ubies','ubios','ubres','ucase','uchus','uebos','ufana','ufane','ufano','ugres','ujier','ujule','ulaga','ulala','ulano','ulema','ulpos','ultra','uluas','ulula','ulule','ululo','umbra','umbro','umero','unais','uncen','unces',
'vacad','vacan','vacar','vacas','vacia','vacie','vacio','vacos','vacua','vacuo','vadea','vadee','vadeo','vades','vados','vafea','vafee','vafeo','vagad','vagan','vagar','vagas','vagon','vagos','vague','vahad','vahan','vahar','vahas','vahea',
'xecas','xenon','xinca','xiote','xolas','xolos','yabas','yacal','yacas','yaced','yacen','yacer','yaces','yacia','yacio','yacon','yagan','yagas','yagua','yaiti','yales','yamao','yambo','yampa','yanas','yanta','yante','yanto','yapad','yapan',
'yapar','yapas','yapen','yapes','yapus','yaque','zabra','zabro','zacas','zacea','zacee','zaceo','zades','zafad','zafan','zafar','zafas','zafen','zafes','zafia','zafio','zafir','zafon','zafos','zafra','zafre','zagal','zagas','zagua','zahen',
'zahon','zaida','zaina','zaino','zajon','zalas'];
/* Creamos un índice aleatorio y recogemos la palabra del diccionario */
const indice = parseInt(Math.random() * (diccionario.length - 1 ) + 1);
const palabra_del_dia = diccionario[indice].toUpperCase();

/* Descomentar la línea siguiente para hacer pruebas */
console.log(palabra_del_dia);