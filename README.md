JSON Server Example
Este es un ejemplo de cómo usar JSON Server para simular una API REST con datos JSON. En este caso, hemos creado un conjunto de datos simulados con posts, comentarios y un perfil.

Requisitos previos
Asegúrate de tener Node.js instalado en tu máquina.

Instalación
Clona este repositorio o descarga el código.

git clone https://github.com/rickyurvinaUCN/Prueba3IWM
Navega al directorio del proyecto.

cd Prueba3IWM
Instala las dependencias.

npm install
Uso
Inicia JSON Server.

json-server --watch posts.json
JSON Server se ejecutará en http://localhost:3000.

Rutas disponibles
Posts: http://localhost:3000/posts
Comentarios: http://localhost:3000/comments
Puedes realizar solicitudes GET, POST, PUT y DELETE a estas rutas para interactuar con los datos simulados.

Ejemplo de solicitud
# Obtener todos los posts
http://localhost:3000/posts

# Obtener un post específico (reemplaza {postId} con el ID del post)
http://localhost:3000/posts/{postId}

Mas documentación
https://github.com/typicode/json-server


Para el frontend se utiliza Vue, Ionic

para esto debes tener instalado node js

# Frontend App

Este es el frontend de la aplicación de publicaciones, que permite a los usuarios ver y eliminar publicaciones y comentarios.

## Tecnologías Utilizadas

- Vue.js 3
- Ionic Framework
- Axios para las solicitudes HTTP

## Instalación

Para instalar el proyecto, sigue estos pasos:

```bash
git clone url-del-repositorio
cd frontend
npm install
Uso
Para ejecutar el servidor de desarrollo:

bash
Copy code
npm run serve
Abre http://localhost:8080 para ver la aplicación en el navegador.
