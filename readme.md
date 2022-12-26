# Aplicación de consola básica para multiplicar con _typeScript_

### Esta es una aplicación sencilla que permite multiplicar un valor a un rango deseado y entrega un archivo .txt con el resultado en la raiz de la carpeta donde es ejecutado y con el respectivo nombre de su tabla pero no de su rango.

<br>

> ### **Uso**

<br>

Primero debe clonar este repositorio e instalar las dependencias con **npm install** o **npm i**

Despues debe poder compilar la aplicación con **npm run compile**, esto creara una carpeta **dist** que tendra el codigo conpilado en _ES2015_

Despues abra su **consola** en la carpeta **dist** y ejecute el comando:

    node index.js

con cualquiera de las siguientes banderas o con ninguna en especifico si asi lo desea

<br>

> **opciones**

- **--base** o **-b** => "por defecto **1**"
- **--multiply** o **-m** => "por defecto **10**"
- **--listar** o **-l** => "por defecto **false**"
- **--help**
- **--version**

Las **banderas** vienen con **valores** **por defecto** como se ve en el recuadro de arriva

La **badera base** representa el **numero a multiplicar** y la **bandera** **multiply** la cantidad de **veces** que va a ser **multiplicado**, la **bandera listar** es solo si se desea ver por **consola** el **resultado** o si solo desea **generar** el **archivo**, por defecto solo **genera** el **archivo**

<br>

> ### Ejemplos

<br>

Si usted quisiera crear un documento con la _tabla_ de el **9** hasta el **numero** **10** entonces la forma de ejecutarlo seria la siguiente:

    node ./index.js --base 9 --multiply 10

Creo que es bueno mensionar de nuevo que la **bandera multiply** tiene por defecto el **valor** de **10** entonces no hay necesidad de pasarla si solo se desea un valor del **1 al 10**, dicho esto el comando anterior se veria asi:

    node ./index.js --base 9

cuando el **archivo .txt** se a generado correctamente la **consola** le entregara un **mensaje** parecido al siguiente:

    Tabla - 9.txt created

y el **archivo** estara en la **raiz** de su **carpeta** para que pueda usarlo a su antojo

Con la **bandera** **listar** no es necesario pasar un **valor**, ya que con solo ponerla en la **consola** esta inmediatamente **cambiara** a **true** y devolvera un **log** con el registro de lo que encontrara escrito en el **archivo**, suponiendo que el **comando** sea:

    node ./index.js --base 9 --listar

el **resultado** que la consola le entregara sera el siguiente:

    ################################################
              Tabla del 9
    ################################################

    9 X 1 = 9
    9 X 2 = 18
    9 X 3 = 27
    9 X 4 = 36
    9 X 5 = 45
    9 X 6 = 54
    9 X 7 = 63
    9 X 8 = 72
    9 X 9 = 81
    9 X 10 = 90

Recuerde que tambien puede usar las **abreviasiones** de las **banderas** para estableser los **valores** requeridos

    node index.js -b 9 -m 20 -l

Este **comando** usara como **base** el numero **9** el **multiply** como **20** y pondra la **bandera** **listar** en **true** para poder devolver su **resultado** por **consola**
