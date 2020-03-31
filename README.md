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

## Solución 

Aplicativo web de calculadora usando Flask, Flask-cors y liver-server en un entorno dockerizado

1. ejecutar docker-compose build
2. ejecutar docker-compose up
3. entrar a la url http://localhost:8080/ desde un navegador de preferencia


## Demostracion

![](demostracion.gif)
