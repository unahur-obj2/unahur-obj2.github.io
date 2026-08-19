---
layout: src/layouts/PostCursadaLayout.astro
title: Semana 7
mostrar: true
inicio: 2026-05-14

descripcion: En esta semana vamos a conocer el patrón decorator

importante: La 1er evaluación parcial de la materia se traslada al día jueves 28/5 (Semana 9) para las comisiones 1 y 2. Los patrones a evaluar son Strategy, Template Method, Decorator y Singleton. La modalidad será virtual.

horarios:
  - Comision: Comisión 1
    Dia: Jueves 14 de Mayo
    Modalidad: Presencial
    Hora: 18.00hs
    Aula: Malvinas Argentinas - 113 (1°piso)
    Edificion: Malvinas Argentinas

  - Comision: Comisión 2
    Dia: Jueves 14 de Mayo
    Modalidad: VIRTUAL
    Hora: 18.00hs
    URL: https://meet.google.com/kxz-esct-xcp

  - Comision: Todas las Comisiones
    Dia: Sábado 16 de Mayo
    Hora: 13.00hs a 15:00
    Modalidad: VIRTUAL
    URL: https://meet.google.com/uyd-tupo-azd

ejercicios:
  - name: Cazadores de Recompensas
    repoUrl: 'unahur-obj2-2026c1/cazador_recompensas' # Acá va la URL del repo sin el "https://github.com/"
    defaultBranch: 'main' # Acá va la rama default del repo
    comentarios:
      - name: Ejercicio para reforzar los conocimientos sobre el patrón decorator
---

- -
- Esta semana vamos a ver el patrón Decorator. Este patrón sirve para sumar nuevas funcionalidades a un objeto sin tener que modificar su código. En lugar de usar herencia, lo que hace es “envolver” al objeto original con otros objetos que le agregan comportamientos extra, de forma flexible y dinámica.
- -
- <div ><img src="https://www.cs.unc.edu/~stotts/GOF/hires/Pictures/decor064.gif"></img></div>
- -
- Es muy importante la lectura previa a la clase de la documentación incluida en el libro sobre Patrones de diseño, en este caso **Página 207** del libro <a href="https://drive.google.com/file/d/1-1ZfcI9UYGHgcRHTmO5wryfb7y3eEKX7/view?usp=drive_link" target="_blank">**Patrones de Diseño**</a>
