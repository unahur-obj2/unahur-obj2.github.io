---
layout: src/layouts/PostCursadaLayout.astro
title: Semana 5
mostrar: true
inicio: 2026-04-30

descripcion: En esta semana daremos un paso más en el diseño orientado a objetos profundizando en patrones de diseño, que son soluciones probadas y reutilizables para problemas comunes en el desarrollo de software. Estos patrones nos permiten escribir código más flexible, mantenible y fácil de extender.

horarios:
  - Comision: Comisión 1
    Dia: Jueves 30 de Abril
    Modalidad: Presencial
    Hora: 18.00hs
    Aula: Malvinas Argentinas - 113 (1°piso)
    Edificion: Malvinas Argentinas

  - Comision: Comisión 2
    Dia: Jueves 30 de Abril
    Modalidad: VIRTUAL
    Hora: 18.00hs
    URL: https://meet.google.com/kxz-esct-xcp

  - Comision: Todas las Comisiones
    Dia: Sábado 2 de Mayo
    Hora: 13.00hs a 15:00
    Modalidad: VIRTUAL
    URL: https://meet.google.com/uyd-tupo-azd

  # - Comision: Todas las Comisiones
  #   Dia: Sábado 1 de Mayo
  #   Hora: NO HAY CLASE POR FERIADO
  #   Modalidad: DÍA INTERNACIONAL DE LOS TRABAJADORES
  #   URL:

# videos:
#   - nombre: Grabación Clase Virtual 03-Sep [Strategy + Template Method]
#     urlYoutube: https://youtube.com/watch?v=m2p2ObBW4gI
#   - nombre: Clase de consultas 06-09
#     urlYoutube: https://www.youtube.com/watch?v=rZH2E5u01o4

ejercicios:
  # - name: Se agregará en la semana (Patrones Strategy && Template Method)
  - name: Oktuber-Fest (Patrones Strategy && Template Method)
    classroom: #https://classroom.github.com/a/9S5JPC4Z
    repoUrl: 'unahur-obj2-2026c1/oktubrefest' # Acá va la URL del repo sin el "https://github.com/"
    defaultBranch: 'main' # Acá va la rama default del repo
    comentarios:
      - name: Ejercicio para practicar la implementación de los patrones de diseño Strategy y Template Method.
---

- En esta semana daremos un paso más en el diseño orientado a objetos profundizando en patrones de diseño, que son soluciones probadas y reutilizables para problemas comunes en el desarrollo de software. Estos patrones nos permiten escribir código más flexible, mantenible y fácil de extender

- Comenzaremos estudiando el Patrón Strategy, que nos ayuda a definir un conjunto de algoritmos intercambiables, permitiendo cambiar el comportamiento de un objeto en tiempo de ejecución sin modificar su estructura.
-

![alt text](../../assets/img/patrones/strategy-UML.jpg)

-

- Luego veremos el Patrón Template Method, que establece la estructura general de un algoritmo en una clase abstracta, dejando que las subclases definan algunos pasos específicos. Finalmente, exploraremos el Patrón Singleton, que asegura que una clase tenga una única instancia global, controlando su punto de acceso.

- ![alt text](../../assets/img/patrones/template-method-UML.png)

-

- Durante la práctica, aplicaremos estos patrones a ejemplos concretos para comprender sus ventajas y cuándo utilizarlos. Además, continuaremos trabajando con repositorios y herramientas de desarrollo, reforzando las buenas prácticas en la escritura y organización del código.

<!-- - <div ><img src="https://www.cs.unc.edu/~stotts/GOF/hires/Pictures/compo075.gif"></img></div> -->

- Les recomendamos fuertemente leer la teoría del libro, es muy importante para entender en que situaciones es aplicable el patrón y la mejor forma de implementarlo <a href="/material#estructurales" target="_blank">**Utilidad**▼ Material> Patrones de Diseño</a>
