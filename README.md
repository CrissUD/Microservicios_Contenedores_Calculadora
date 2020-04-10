# Microservicios y Contenedores para una Calculadora de enteros

Se ve una introducción a microservicios utilizando el Framework Flask, Flask-cors en el back-end para la creacion de microservicios para una calculadora donde cada operacion representa un servicio aislado y separado. En el Front-end se hace uso de Live-server, fetch y Json para comunicacion con los microservicios. Se explica entonces el proceso de correr la aplicación por medio de la activacion de los microservicios y luego dar paso al uso de Docker para la ejecucion de microservicios en contenedores sin necesidad de la activacion o instalacion de dependencias.

## Integrantes

- Cristian Felipe Patiño Caceres - 20141020079
- Cristian David Santoyo Parra - 20141020077
- Brian Giovanny Alfonso Rodriguez - 20151020600
- Catalina - 2020

## Informatica I

### Docente

- Alejandro Paolo Daza

## Ejercicio

Se plantea establecer una arquitectura orientada a microservicios usando el micro-framework flask para ofrecer la implementación de los servicios de suma, resta, multiplicación y división.

En el repositorio se deben exponer las tecnologías seleccionadas para ofrecer los servicios propios de este tipo de arquitecturas teniendo en cuenta que las operaciones se ofrecen con flask.

La explicación de despliegue así como la explicación de las herramientas seleccionadas debe ser clara en el README del proyecto.

# tecnologias usadas

## Flask

Flask es un “micro” Framework escrito en Python y concebido para facilitar el desarrollo de Aplicaciones Web bajo el patrón MVC.

- Flask puede ser muy conveniente, para determinadas aplicaciones no se necesitan muchas extensiones y es suficiente.
- No se necesita una infraestructura con un servidor web para probar las aplicaciones sino de una manera sencilla se puede correr un servidor web para ir viendo los resultados que se van obteniendo.
- Es compatible con python 3
- Permite el uso de sesiones
- Es Open source

### Flask-cors

Es una extensión de Flask para manejar (CORS) Cross Origin Resource Sharing , haciendo posible AJAX de origen cruzado.
habilita el soporte de CORS en todas las rutas, para todos los orígenes y métodos. Permite la parametrización de todos los encabezados CORS en un nivel por recurso. El paquete también contiene un decorador, para aquellos que prefieren este enfoque.

## live-server

Es una extension de VSCode la cual monta un pequeño servidor local en donde cualquier cambio que hagamos en el editor, se verá reflejado instantáneamente en el navegador.

## Docker

Docker es un proyecto de código abierto el cual se usa para automatizar la implementación de aplicaciones como contenedores portátiles y autosuficientes que se pueden ejecutar en la nube o localmente. Docker también una empresa que promueve e impulsa esta tecnología, en colaboración con proveedores de la nube, Linux y Windows, incluido Microsoft.

# Solución

A continuación se explicara como se implementa una solución mediante microservicios la cual constara de dos partes:

- La creacion y uso de los microservicios con el uso de las dependencias necesarias para su funcionamiento.
- El uso de contenedores con Docker para desplegar la aplicación de manera rapida y efectiva.

# Microservicios y como correr la aplicación.

Para realizar la aplicacion lo primero a realizar son las funciones de suma, resta, multiplicacion y division ubicados cada uno en su propio entorno con su respectivo nombre tanto en su carpeta como en su archivo ".py" por ejemplo suma/suma.py.

<div align="center">
  <img  src="./microservicios.png">
</div>
<div align="center">
Cada microservicio en su respectivo entorno 
</div>

En estos archivos se definira el servicio empezando por importar la libreria de flask y flask_cors, seguidamente se dara la ruta de la aplicacion y el metodo http a ser usado. Por ejemplo para el microservicio suma.py invoca una peticion POST con la ruta '/api/suma, segudiamente el metodo que sera usado en esta ruta en donde pondremos la logica del microservicio, en este caso una suma, obteniendo los parametros mediante un JSON enviado desde la interfaz. En el metodo principal del archivo se declara ademas el puerto por el cual se podra acceder a la peticion.

<div align="center">
  <img  src="./ejemploMicroservicio.png">
</div>

<div align="center">Ejemplo Microservicio Suma</div>

Para conectar todos los servicios creados sera necesario usar una vista la cual es el index.html, en el cual unicamente se definen los botones y vista de la calculadora, este importa el "script.js" el cual es el encargado de conectar la interfaz y consumir los servicios creados con cada aplicacion flask. Para esto utilizamos fetch que ayuda a la creacion de peticiones a servicios externos. Esta peticion se compone de varos elementos importantes como:

- URL: debe contener el host, puerto y ruta
- Method: Tipo de Peticion
- Headers: Generalmente explica el tipo de archivo enviado a la peticion, tambien puede incluir mecanismos de seguridad.
- Body: contiene la informacion en documento tipo .Json que debe ser enviada a la peticion, en este caso los numeros con los que se realizara la operacion.

Una vez realizada la opracion se maneja de forma asincrona la respuesta recibida por medio de promesas.

<div align="center">
  <img  src="./ejemploConsumoMicroservicio.png">
</div>

<div align="center">Ejemplo Consumo de Microservicio Suma</div>

## Como probar la aplicación.

### Requisitos

Una vez el proyecto sea descargado o clonado desde este repositorio se debe tener cumplir los siguientes requisitos:

- Instalar Python en su version 3. Una vez instalado se puede comprobar su version de la siguiente forma:

```sh
$ python --version
python 3.76
```

- Instalar Flask a la maquina

```sh
$ pip install flask
```

- Instalar Flask Core a la maquina

```sh
$ pip install flask-core
```

- Instalar Live Server, este puede ser instalado desde una extension para Visual Studio Code.
  ![](liveServer.png)

### Montar Aplicacion

Para esto se deben abrir 4 terminales, una para cada Microservicio, se debe llegar a la ruta donde esta el proyecto y una vez alli se ejecuta el archivo para activar el servicio.

```sh
$ python suma.py
```

```sh
$ python resta.py
```

```sh
$ python multiplicacion.py
```

```sh
$ python division.py
```

Seguidamente con ayuda de liveserver, se monta la app al servidor y se abre el archivo **index.html** para correrlo esto con ayuda de Visual Studio Code.

![](goLive.png)

Una vez el servidor este corriendo en el navegador podra hacer uso de los microservicios que ya han sido activados previamente. Cuando se quiera dar fin a los servicios basta con dar Ctrl + C a la respectiva terminal y dar al icono de nuevo de Visual Studio Code para finalizar el LiveServer.

# Uso de Docker para despliegue de aplicacion

El proyecto ademas fue dockerizado, la ventaja que proporciona docker es muy importante. Para empezar una vez la aplicacion este dockerizada no habra necesidad de descargar ni instalar ninguna dependencia lo que hace posible que se corra en cualquier maquina, ademas no es necesario correr cada microservicio por separado que no seria ventajoso en un ambiente con cientos de microservicios.

Para observar los detalles y configuracion se pueden ver los archivos de configuracion del docker ubicados en cada uno de los de los servicios. Estos archivos llamados **DockerFile** se encargan de la creacion de un contenedor por cada microservicio instalando de manera automatica las dependencias necesarias para el funcionamiento de este por medio del documento **requirements.txt** y ademas expone el puerto para invocar el contenedor.

<div align="center">
  <img  src="./dockerfile.png">
</div>

<div align="center">Ejemplo Archivo DockerFile para Microservicio Suma</div>

Una vez creado cada uno de los Dockerfile en cada servicio se crea el documento **docker-compose** este documento automatiza la creacion de cada servicio en un contenedor con sus respectivos puertos y rutas, adicionalmente si se requiere se puede crear persistencia en la aplicacion por medio de volumenes.

<div align="center">
  <img  src="./dockercompose.png">
</div>

<div align="center">Ejemplo Archivo DockerCompose para Microservicio Suma</div>

## Como Correr la aplicacion.

Una vez descargado o clonado el proyecto de este repositorio se debe cumplir con los siguietes requisitos.

### Requisitos

- Instalar Docker en la maquina. Se puede comprobar su instalacion mediante el comando:

```sh
$ docker --version
Docker version 19.03.8, build afacb8b
```

### Montar Contenedor

Para montar la aplicacion se debe seguir los siquientes comandos.

```sh
$ docker-compose build
```

Este instala las dependencias necesarias para la construccion de cada contenedor y asi correr todos los microservisios.

```sh
$ docker-compose up
```

Este comando activa cada contenedor y esta listo para uso en este caso en el puerto 8080

Ahora se debe entrar a la url http://localhost:8080/ desde un navegador de preferencia.

## Demostracion

![](demostracion.gif)
