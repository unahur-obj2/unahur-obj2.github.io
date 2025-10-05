---
layout: src/layouts/PostCursadaLayout.astro
title: Semana 7
mostrar: true
inicio: 2025-09-26

descripcion: En esta semana vamos a conocer el patrón decorator

importante: La próxima semana tendremos la primer evaluación parcial de la materia el día viernes 03/10. Los patrones a evaluar son Strategy, Template Method, Composite, Decorator y Singleton. La modalidad es virtual.

horarios:
  - Comision: Comision 1 del T.Noche
    Dia: Viernes 26 de Septiembre
    Modalidad: VIRTUAL
    Hora: 18.15hs
    URL: https://meet.google.com/kxz-esct-xcp

  - Comision: Comision 3 del T.Noche
    Dia: Viernes 26 de Septiembre
    Modalidad: Presencial
    Hora: 18.00hs
    Aula: LAB LP-207
    Edificio: LA PATRIA

  - Comision: Todas las Comisiones
    Dia: Sábado 27 de Septiembre
    Hora: 13.00hs a 15:00
    Modalidad: VIRTUAL (Es por zoom, no por meet.)
    URL: https://us06web.zoom.us/j/87958925031

videos:
  - nombre: Obj2 - Decorator Grabación Parte I  (26-09-2025)
    urlYoutube: https://www.youtube.com/watch?v=_Tmo_D4OeYI
  - nombre: Obj2 - Decorator Grabación Parte II   (26-09-2025)
    urlYoutube: https://www.youtube.com/watch?v=lKZt7EsAtl0
  - nombre: Obj2 - Decorator Grabación Parte III   (26-09-2025)
    urlYoutube: https://www.youtube.com/watch?v=jb-qaBYekq4
  - nombre: Grabación 24-09, Patrón Decorator por Mauricio Pintos
    urlYoutube: https://www.youtube.com/watch?v=yU1WTwvyvvg&t=30s
  - nombre: Clase de consultas 27-09
    urlYoutube: https://www.youtube.com/watch?v=wceasDarxyE

ejercicios:
  - name: Cazadores de Recompensas
    classroom: https://classroom.github.com/a/q_m3x596
    repoUrl: 'unahur-obj2-2025c2/cazador_recompenza' # Acá va la URL del repo sin el "https://github.com/"
    defaultBranch: 'main' # Acá va la rama default del repo
    comentarios:
      - name: Ejercicio para reforzar los conocimientos sobre el patrón decorator
  - name: Filtro de Paises
    classroom: https://classroom.github.com/a/Jyir8SmY
    repoUrl: 'unahur-obj2-2025c2/filtro-paises' # Acá va la URL del repo sin el "https://github.com/"
    defaultBranch: 'main' # Acá va la rama default del repo
    comentarios:
      - name: Ejercicio para reforzar los conocimientos sobre el patrón composite
---

- Esta semana vamos a ver el patrón Decorator. Este patrón sirve para sumar nuevas funcionalidades a un objeto sin tener que modificar su código. En lugar de usar herencia, lo que hace es “envolver” al objeto original con otros objetos que le agregan comportamientos extra, de forma flexible y dinámica.

- <div ><img src="https://www.cs.unc.edu/~stotts/GOF/hires/Pictures/decor064.gif"></img></div>

- Les recomendamos fuertemente leer la teoría del libro, es muy importante para entender en que situaciones es aplicable el patrón y la mejor forma de implementarlo <a href="/material#estructurales" target="_blank">**Utilidad**▼ Material> Patrones de Diseño</a>
