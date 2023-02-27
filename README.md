# Administrador de Proyectos Challange

## Eliminar el .example de los archivos de variables de entorno

- /environments/.env.backend_api.example
- /environments/.env.postgres.example

## Construir el proyecto

docker-compose build

## Levantar el contenedor con los servicios en detached mode

docker-compose up -d

## Crear la base de datos y ejecutar migraciones

docker-compose exec backend_api bundle exec rake db:setup db:migrate

## Para acceder al bash del proyecto en rails

docker-compose exec -it backend_api bash
