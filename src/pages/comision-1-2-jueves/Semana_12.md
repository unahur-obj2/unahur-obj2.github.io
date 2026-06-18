---
layout: src/layouts/PostCursadaLayout.astro
title: Semana 12
mostrar: true
inicio: 2026-06-18

descripcion: En esta semana vamos a conocer los patrones Command y Observer

horarios:
  - Comision: Comisión 1
    Dia: Jueves 18 de Junio
    Modalidad: Presencial
    Hora: 18.00hs
    Aula: Malvinas Argentinas - 113 (1°piso)
    Edificion: Malvinas Argentinas

  - Comision: Comisiones 2
    Dia: Jueves 11 de Junio
    Modalidad: VIRTUAL
    Hora: 18.00hs
    URL: https://meet.google.com/kxz-esct-xcp

  - Comision: Todas las Comisiones
    Dia: Sábado 13 de Junio
    Hora: 13.00hs a 15:00
    Modalidad: VIRTUAL
    URL: https://meet.google.com/uyd-tupo-azd

ejercicios:
  - name: Operaciones bancarias
    repoUrl: 'unahur-obj2-2026c1/operaciones-bancarias' # Acá va la URL del repo sin el "https://github.com/"
    defaultBranch: 'main' # Acá va la rama default del repo
    comentarios:
      - name: Ejercicio para trabajar en clase

  - name: Maquina de café
    repoUrl: 'unahur-obj2-2026c1/maquina-cafe' # Acá va la URL del repo sin el "https://github.com/"
    defaultBranch: 'main' # Acá va la rama default del repo
    comentarios:
      - name: Ejercicio para trabajar los conocimientos sobre el patrón command

  - name: Subastas
    repoUrl: 'unahur-obj2-2026c1/subastas' # Acá va la URL del repo sin el "https://github.com/"
    defaultBranch: 'main' # Acá va la rama default del repo
    comentarios:
      - name: Ejercicio para trabajar los conocimientos sobre el patrón observer
---

- Esta semana vamos los patrones Command y Observer haciendo un ejemplo que los combiene.

- **Patrón Command**
- Sirve para encapsular una petición en un objeto, permitiendo así parametrizar a los clientes con diferentes peticiones, hacer cola o llevar un registro de las peticiones, y poder deshacer las operaciones.

- <div ><img src="/img/command.png"></img></div>

- **Patrón Observer**
- Define una dependencia de uno-a-muchos entre objetos, de forma que cuando un objeto cambie de estado se notifique y se actualicen automáticamente todos los objetos que dependen de él.

- <div ><img src="/img/observer.png"></img></div>

- Les dejamos un ejercicio para que practiquen luego de la clase. La idea es que intenten resolverlo individualmente.

- Les recomendamos fuertemente leer la teoría del libro, es muy importante para entender en que situaciones es aplicable cada patrón y la mejor forma de implementarlos <a href="/material#comportamiento" target="_blank">**Utilidad**▼ Material> Patrones de Diseño</a
