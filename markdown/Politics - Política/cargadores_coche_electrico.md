Los cargadores de coches eléctricos como guía de la política de distribución de recursos

$$------------$$

En mi trabajo es bastante común tener que lanzar procesos que pueden tardar unos 20 o 30 minutos en ejecutarse
que básicamente me impiden hacer otra cosa hasta que termina. A veces me tomo un café, otras voy a hacer la compra o
hago la comida.
Pero lo más común es que me acabaré poniendo un video en Youtube.

El otro día me puse un video de Second Thought(???), un canal abiertamente marxista, en el que hablaba de como nos han
vendido
a lo largo de los años que la "ciencia" económica asume que la gente piensa de manera egoista porque es lo que más
beneficio __individual__ les puede traer.  
En dicho video pone el ejemplo típico de teoría de juegos de "el dilema del prisionero"(???). Se propone una situación
hipotética donde dos personas tienen dos opciones:
Culpar a la otra persona o no decir nada.
Si uno de ellos culpa al otro y el otro no dice nada, el que es culpado va a la cárcel 5 años.
Si los dos se culpan mutuamente van 3 años a la cárcel cada uno.
Si ambos callan cada uno va a la cárcel 1 año.
Desde el punto de vista de la teoría de juegos, la mejor opción desde el punto de vista de cada individuo es culpar al
otro, ya que si el otro no dice nada pues quedan libre y si el otro también culpa ambos van a la cárcel pero por una
cantidad de tiempo limitada.
El problema está en que desde el punto de vista del conjunto de jugadores, esta opción es la que provee más años de
cárcel a todo el conjunto de la sociedad.
Si ambos jugadores decidieran colaborar y no culparse entre ellos, ambos irían a la cárcel, pero sería la menor cantidad
de años total de cárcel.

¿Y dirás que tiene que ver esto con los cargadores de coche eléctricos?
Hace unas semanas, tomandome una cerveza con mi pareja vi a un conocido que se estaba peleando con un cargador de coche
público.
Me acerqué para ver si podía echar una mano, ya que había utilizado ese cargador anteriormente y a veces tarda en
empezar a cargar.
Al final no funcionaba por una tontería, pero estuvimos hablando un rato y me comentó una situación que le parecía
molesta de este cargador.
Resulta que este cargador tiene dos plazas de aparcamiento dedicadas para el cargador y tiene 2 "mangueras" conectadas
al mismo cargador, entonces puede cargar dos coches al mismo tiempo.  
Me comentó que alguna vez había llegado, estaba solo y ponía el coche a cargar y entonces seguía la curva de carga
máxima de su coche.
Entonces llegaba un tesla, que tiene más capacidad de carga que su coche, y al cargar "chupa" toda la potencia de carga
dejando al suyo con los restos o casi nada.  
No es el peor de los problemas, ya que como el cargador es del ayuntamiento tiene un precio de carga muy barato que le
hace que sea rentable usarlo pero que es injusto que este llegue después y porque tenga más capacidad de carga, pues
coja toda la potencia de carga del cargador.

Esta situación me hizo pensar en unos estudios que leí hace años cuando estaba estudiando mi master en inteligencia
artificial. Una parte del temario es sobre planificación, interacción entre agentes y teoría de juegos. Aquí hice un
trabajo estudiando diferentes algoritmos para la distribución de la carga de vehículos eléctricos. No desde el punto de
vista de como cargar un vehículo sino como cargar muchos vehículos con una red eléctrica no infinita.
Pensarás que cargar un coche electrico es enchufar el coche y ya está, pero es más complicado que eso, especialmente en
España.  
Un coche eléctrico moderno con carga rápida puede consumir de la red 300kW en su pico de carga. Una vivienda media en
España tiene contratada entre 3.5kW y 4.5kW de potencia.
Eso significa que un coche cargando puede llegar a consumir lo mismo que 60 viviendas o básicamente uno o dos edificios
de viviendas.

A lo mejor empiezas a ver por donde voy, no tiene sentido desde el punto de vista de infraestructura poner cargadores
rápidos en todos los garages porque simplemente no tiene sentido desde el punto de vista utilitario ni de coste.
Estos estudios de los que hablaba antes desarrollaban diferentes algoritmos para decidir como repartir la carga en, por
ejemplo, un garage comunitario.

Imaginemos un edificio de viviendas nuevo con 10 viviendas el reglamento dice que el promotor debe asegurar que cada
vivienda tendrá al menos acceso a 5.7kW de potencia,
pero si las viviendas tienen una grado de electrificación elevada llega a 9.2kW. Redondeando digamos que el edificio
tiene una potencia de 100kW para compartir y que en todo momento la suma del consumo de todo el
edificio nunca debe pasar los 100kW de potencia.  
Bien, estamos en el 2025 imaginario y cada vivienda tiene un vehículo eléctrico, y cada uno de ellos tiene una capacidad
de carga máxima de 50kW, y además para simplificarlo más cada coche tiene una batería de 100kWh y son capaces de cargar
todo el tiempo al máximo. Eso significa que un coche se puede cargar en dos horas.

Tenemos 10 vehículos, que si todos los vecinos enchufan a la vez tendrían que repartir 100kW de potencia asumiendo que
no hay otro consumo en el edificio, ¿cómo los repartimos?
Esto no es un problema que se soluciona con tecnología, sino con ideología.
Existe la solución en la cual el dinero todo lo puede, por tanto diseñamos el garage para el peor caso posible.
Todos los vecinos quieren ser capaces de cargar su coche a máxima potencia en todo momento asique a cada plaza de
aparcamiento le ponemos un cargador de 100kW. Invito al lector a buscar el coste de dicha instalación y ya después
seguir el artículo.

Yo que soy una persona que no quiere gastar mucho dinero en cosas absurdas casi que prefiero otra solución. ¿Pero qué
hacemos?
¿Hacemos una cola donde se van cargando los coches según se van enchufando a máxima potencia? ¿Según se van enchufando
coches se reparten equitativamente?

¿Sabes qué?, ¡que le den! ¡Me voy a montar un mercado energético en el garage y vamos a poner precios dinámicos! Cuanto
más usuarios hay enchufados más caro es que kWh así desincentivamos la sobrecarga.

Espera, mejor todavía. Esto a más de un economista famoso le gustará. "¡El que pague más que se lleve más kWh!"
Imagínate, son las 7 de la mañana y te llega una notificación de que tu coche no está cargado y necesitas cargarlo al
máximo para las 9 de la mañana y que Pepe el del 2ºA está dispuesto a pagar 0.45€/kWh, ¿quieres pujar más alto? Le das
que sí, porque claro ¡no vas a llegar tarde al trabajo!.
Pero Juan del 3ºB se va de viaje al pueblo así que 5 minutos después te puja por encima, 0.60€/kWh, ahora ya no estás
cargando el coche. ¿Debería pujar a 0.65€/kWh? ¡Venga va, si solo es un día!
Alguno lo llamaría la gamificación de la carga de lavadoras.

Espero que estés entendiendo más o menos por donde van los tiros. Bien, pues aquí nos encontramos con otra versión del
dilema del prisionero.
¿Competimos o cooperamos?
¿Cuándo creamos este mercado artificial de kWh quien se lleva esos ingresos? ¿El Binance de los kWh o la aplicación es
un servicio ofrecido al edificio donde ese pago extra se va los gastos de la comunidad?
¿Cuándo creamos un mercado de precios, cuál es el precio medio del kWh durante la carga comparado con una cola simple o
repartirlo equitativamente?
Lo bueno del mercado es quien necesite carga la tendrá siempre y cuando pueda permitirselo/esté dispuesto a pagar un
extra. Si repartimos la carga equitativamente ese precio no se incrementa pero perdemos previsibilidad en la carga. A lo
mejor esperaba tener el coche cargado en 3 horas pero todos los vecinos están enchufados y, por tanto, tardará 10 horas.

Estas no son las únicas soluciones, pero son las más fáciles de entender y muestran varios de los problemas que aparecen
en las diferentes aproximaciones.
Por dar un ejemplo que me pareció interesante. Unos investigadores chinos proponen un sistema que trata de minimizar el
coste del usuario por cada unidad de carga maximizando la utilidad de este. El sistema permite al usuario indicar cuando
necesita carga en el vehículo y cuánta carga.
El sistema automáticamente distribuye la carga en los vehículos de la red basado en estas necesidades teniendo en cuenta
el precio de la electricidad en la red y la carga máxima disponible.
En esta aproximación se conseguía el coste medio más bajo y la utilidad máxima (o satisfacción de usuario) global de
todo el sistema a coste de que en pequeño momentos donde la carga del sistema es muy alta algunos usuarios quedaban
insatisfechos con la carga que habían recibido.
Hay que tener en cuenta que estos usuarios insatisfechos pueden ser tanto ricos como pobres, su insatisfacción viene
porque se ha maximizado el bien común a costa de estos. En el caso del mercado de precios es que unos usuarios no han
podido cargar porque simplemente no podían pagar lo suficiente.

Toda esta infraestructura se está construyendo ahora y quien está decidiendo quien "merece" cargar más es la empresa que
construye el cargador o el dueño del cargador.
En el sistema que vivimos seguramente acabe estableciendo un sistema de carga donde el que más paga reciba más, al final
así funciona todo hoy en día. Pero yo al menos quería enseñar que existen más manera de distribuir los recursos.

Si has llegado hasta aquí, quiero que entiendas que realmente este no es un problema que ocurre al nivel de edificio
porque rara vez necesitas cargar rápidamente en un garaje.
La mayoría de cargadores son de típo L2 o L3 donde como mucho hay 10-15W de potencia. Al final poder cargar tu coche en
un noche es más que suficiente.
Ahora bien, esto aplica al 70% de los vehículos españoles que se aparcan en la calle, expandelo a una calle, a un
barrio, a una ciudad.
Ese es el problema que la red eléctrica tiene que afrontar en los próximos años.
Es una de tantas problemáticas de como estamos construyendo nuestras ciudades en España.
Hay muchas direcciones que se pueden tomar para mitigar este problema que no tiene que ir por ofrecer soluciones a nivel
de infraestructura de carga.
Si hay menos coches que cargar este es un problema menor. Mejor red de transporte público, mejores carriles bici,
vehículos compartidos, etc.  