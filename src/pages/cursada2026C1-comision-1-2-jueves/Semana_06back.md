---
layout: src/layouts/PostCursadaLayout.astro
title: Semana 7

inicio: 2029-03-03

descripcion: En esta semana vamos a conocer el patrón decorator

importante: La semana próxima tendremos la primer evaluación parcial de la materia, el día viernes 16/5.

horarios:
  - Comision: Todas las Comisiones del T.Noche
    Dia: Viernes 9 de Mayo
    Modalidad: VIRTUAL
    Hora: 18.10hs
    URL: https://meet.google.com/zvj-qcev-ekr

  - Comision: Clase de consulta
    Dia: Sabado 10 de Mayo
    Modalidad: VIRTUAL
    Hora: 14.30hs
    URL: https://meet.google.com/zes-uozi-wec

videos:
  - nombre: Obj2 - Decorator
    urlYoutube: https://www.youtube.com/watch?v=jPQ4J7GubiM
  - nombre: Clase de consultas - Préstamo Libros
    urlYoutube: https://www.youtube.com/watch?v=adT4SSLHS7s

ejercicios:
  - name: Cazadores de Recomepensas
    classroom: https://classroom.github.com/a/_apuCZet
    repoUrl: 'unahur-obj2-2025c1/cazadores-recompensa' # Acá va la URL del repo sin el "https://github.com/"
    defaultBranch: 'main' # Acá va la rama default del repo
    comentarios:
      - name: Ejercicio para reforzar los conocimientos sobre el patrón decorator

  - name: Préstamo Libros
    classroom: https://classroom.github.com/a/ddDbNlLX
    repoUrl: 'unahur-obj2-2025c1/prestamo-libros' # Acá va la URL del repo sin el "https://github.com/"
    defaultBranch: 'main' # Acá va la rama default del repo
    comentarios:
      - name: Usaremos este ejercicio en la clase de consultas del dia sabado 10/05
    consultas: true
---

- Esta semana vamos a ver el patrón Decorator. Este patrón sirve para sumar nuevas funcionalidades a un objeto sin tener que modificar su código. En lugar de usar herencia, lo que hace es “envolver” al objeto original con otros objetos que le agregan comportamientos extra, de forma flexible y dinámica.

- <div ><img src="https://www.cs.unc.edu/~stotts/GOF/hires/Pictures/decor064.gif"></img></div>
