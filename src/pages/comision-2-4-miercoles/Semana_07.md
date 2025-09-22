---
layout: src/layouts/PostCursadaLayout.astro
title: Semana 7
mostrar: true
inicio: 2025-09-24

descripcion: En esta semana vamos a conocer el patrón decorator

importante: La próxima semana tendremos la primer evaluación parcial de la materia el día miércoles 01/10. Los patrones a evaluar son Strategy, Template Method, Composite, Decorator y Singleton. Aún no definimos si será en modalidad presencial o virtual.

horarios:
  - Comision: Comision 2 del T.Noche
    Dia: Miércoles 24 de Septiembre
    Modalidad: PRESENCIAL
    Hora: 18.00hs
    Aula: Malvinas Argentinas - 109 (1°piso)
    Edificion: Malvinas Argentinas

  - Comision: Comision 4 del T.Noche
    Dia: Miércoles 24 de Septiembre
    Modalidad: VIRTUAL
    Hora: 18.00hs
    URL: https://meet.google.com/kxz-esct-xcp

  - Comision: Todas las Comisiones
    Dia: Sábado 27 de Septiembre
    Hora: 13.00hs a 15:00
    Modalidad: VIRTUAL (Es por zoom, no por meet.)
    URL: https://us06web.zoom.us/j/87958925031

videos:
  - nombre: Obj2 - Decorator (Grabación del Cuatrimestre 2025-C1)
    urlYoutube: https://www.youtube.com/watch?v=jPQ4J7GubiM

ejercicios:
  - name: Cazadores de Recompensas
    classroom: https://classroom.github.com/a/q_m3x596
    repoUrl: 'unahur-obj2-2025c2/cazador_recompenza' # Acá va la URL del repo sin el "https://github.com/"
    defaultBranch: 'main' # Acá va la rama default del repo
    comentarios:
      - name: Ejercicio para reforzar los conocimientos sobre el patrón decorator
---

- Esta semana vamos a ver el patrón Decorator. Este patrón sirve para sumar nuevas funcionalidades a un objeto sin tener que modificar su código. En lugar de usar herencia, lo que hace es “envolver” al objeto original con otros objetos que le agregan comportamientos extra, de forma flexible y dinámica.

- <div ><img src="https://www.cs.unc.edu/~stotts/GOF/hires/Pictures/decor064.gif"></img></div>
