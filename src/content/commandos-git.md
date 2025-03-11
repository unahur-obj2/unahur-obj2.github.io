---
comandosBasicGit:
  - titulo: Clonar repositorio
    codigo: git clone [URL del repo original]
    descripcion:
      Nos permite crear una copia local del repositorio original (situado
      en GitHub).

  - titulo: Agregar archivos al área de preparación (staging area)
    codigo: git add * .
    descripcion: Con este comando agregamos todos los archivos que deben estar
      en el 'staging area', es decir, nos va a permitir "preparar"
      aquellos archivos que modificamos para que los podamos
      'enviar' a través del commit.

  - titulo: Hacer commit de los cambios
    codigo: git commit -m 'mensaje'
    descripcion: Nos permite "actualizar" nuestro repositorio local con aquellos
      cambios que hayamos realizado. En la parte de 'mensaje'
      debemos aclarar de manera descriptiva aquello que hayamos
      modificado, por ejemplo 'git commit -m 'Modifiqué los errores que
      tenía en la resolución de mi ejercicio''

  - titulo: Subir cambios al repositorio remoto
    codigo: git push origin [rama]
    descripcion:
      Esto nos posibilita actualizar el repositorio original que tenemos
      en GitHub con aquellos cambios que hicimos en nuestro
      repositorio local. En '[rama]' debemos especificar si se trata de
      main o master, por ejemplo 'git push origin master'

  - titulo: Obtener cambios del repositorio remoto
    codigo: git pull
    descripcion: Nos permite bajar de GitHub todos los cambios que recibió
      nuestro proyecto. Nos servirá cuando trabajemos en grupo y otra
      persona realice cambios en el mismo. De esta manera tendremos la
      versión más reciente del proyecto de manera local.

  - titulo: Configurar nombre de usuario global
    codigo: git config --global user.name
    descripcion: Ponemos nuestro usuario luego de 'user.name' y cargamos nuestro usuario en nuestra PC PERSONAL.

  - titulo: Configurar correo electrónico global
    codigo: git config --global user.email
    descripcion: Ponemos nuestro mail luego de 'user.email' y cargamos nuestro mail en nuestra PC PERSONAL.
---
