---
layout: src/layouts/PostCursadaLayout.astro
title: Semana 12
mostrar: true
inicio: 2025-10-31

descripcion: Esta semana veremos el patrón Observer.

importante: El 2do parcial para comisiones 1 y 3 (viernes) será la próxima semana el día 7/11 en modalidad VIRTUAL.

horarios:
  - Comision: Comision 1 y 3 del T.Noche
    Dia: Viernes 31 de Octurbe
    Modalidad: VIRTUAL
    Hora: 18.00hs
    URL: https://meet.google.com/kxz-esct-xcp

  - Comision: Todas las Comisiones
    Dia: Sábado 1 de Noviembre
    Hora: 13.00hs a 15:00
    Modalidad: VIRTUAL
    URL: https://us06web.zoom.us/j/87958925031
videos:
  - nombre: Clase 31-10 - Parte 1
    urlYoutube: https://www.youtube.com/watch?v=RvWQZN0VqhU
  - nombre: Clase 31-10 - Parte 2
    urlYoutube: https://www.youtube.com/watch?v=VpSB39MxLwc
  - nombre: Clase de consultas 01-11
    urlYoutube: https://www.youtube.com/watch?v=6M8TydgM8zA

ejercicios:
  - name: Central de Alarmas
    classroom: https://classroom.github.com/a/Cb-pOyP_
    repoUrl: 'unahur-obj2-2025c2/centralAlertas' # Acá va la URL del repo sin el "https://github.com/"
    defaultBranch: 'main' # Acá va la rama default del repo
    comentarios:
      - name: Para resolver aplicando el Patrón Observer, parcial del cuatrimestre anterior.
    obligatorio: false

  - name: Subastas Online
    classroom: https://classroom.github.com/a/xMKQiflp
    repoUrl: 'unahur-obj2-2025c2/subastas' # Acá va la URL del repo sin el "https://github.com/"
    defaultBranch: 'main' # Acá va la rama default del repo
    comentarios:
      - name: Otro ejercicio para implementar el patrón Observer.
    obligatorio: false
---

- Esta semana veremos el patrón Observer.
- Define una dependencia de uno-a-muchos entre objetos, de forma que cuando un
  objeto cambie de estado se notifique y se actualicen automáticamente todos los
  objetos que dependen de él.
- <div ><img src="/img/observer.png"></img></div>
