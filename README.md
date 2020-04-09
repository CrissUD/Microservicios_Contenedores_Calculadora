# Microservicios y Contenedores para una Calculadora de enteros
Se ve una introducción a microservicios utilizando el Framework Flask, Flask-cors en el back-end para la creacion de microservicios para una calculadora donde cada operacion representa un servicio aislado y separado. En el Front-end se hace uso de Live-server, fetch y Json para comunicacion con los microservicios. Se explica entonces el proceso de correr la aplicación por medio de la activacion de los microservicios y luego dar paso al uso de Docker para la ejecucion de microservicios en contenedores sin necesidad de la activacion o instalacion de dependencias.

## Integrantes

* Cristian Felipe Patiño Caceres - 20141020079
* Cristian David Santoyo Parra - 20141020077 
* Brian Giovanny Alfonso Rodriguez - 20151020600
* Catalina - 2020

## Informatica I

### Docente

* Alejandro Paolo Daza 

## Ejercicio
Se plantea establecer una arquitectura orientada a microservicios usando el micro-framework flask para ofrecer la implementación de los servicios de suma, resta, multiplicación y división.

En el repositorio se deben exponer las tecnologías seleccionadas para ofrecer los servicios propios de este tipo de arquitecturas teniendo en cuenta que las operaciones se ofrecen con flask.

La explicación de despliegue así como la explicación de las herramientas seleccionadas debe ser clara en el README del proyecto.
## tecnologias usadas
### Flask
Flask es un “micro” Framework escrito en Python y concebido para facilitar el desarrollo de Aplicaciones Web bajo el patrón MVC.
* Flask puede ser muy conveniente, para determinadas aplicaciones no se necesitan muchas extensiones y es suficiente.
* No se necesita una infraestructura con un servidor web para probar las aplicaciones sino de una manera sencilla se puede correr un servidor web para ir viendo los resultados que se van obteniendo.
* Es compatible con python 3
* Permite el uso de sesiones
* Es Open source
#### Flask-cors
Es una extensión de Flask para manejar (CORS) Cross Origin Resource Sharing , haciendo posible AJAX de origen cruzado.
habilita el soporte de CORS en todas las rutas, para todos los orígenes y métodos. Permite la parametrización de todos los encabezados CORS en un nivel por recurso. El paquete también contiene un decorador, para aquellos que prefieren este enfoque.
### live-server
Es una extension de VSCode la cual monta un pequeño servidor local en donde cualquier cambio que hagamos en el editor, se verá reflejado instantáneamente en el navegador.
### Docker
Docker es un proyecto de código abierto el cual se usa para automatizar la implementación de aplicaciones como contenedores portátiles y autosuficientes que se pueden ejecutar en la nube o localmente. Docker  también una empresa que promueve e impulsa esta tecnología, en colaboración con proveedores de la nube, Linux y Windows, incluido Microsoft.
## Solución 

Aplicativo web de calculadora usando Flask, Flask-cors y liver-server en un entorno dockerizado

1. ejecutar docker-compose build
2. ejecutar docker-compose up
3. entrar a la url http://localhost:8080/ desde un navegador de preferencia


## Demostracion

![](demostracion.gif)
