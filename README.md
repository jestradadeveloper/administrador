# Administrador de Proyectos Challange


## Construir y levantar los servicios (opcion 1)
docker compose up -d —build
## Construir el proyecto (opcion 2)
docker-compose build
## Crear la base de datos y ejecutar migraciones
docker-compose exec backend_api bundle exec rake db:setup db:migrate

## Levantar el contenedor con los servicios en detached mode (opcion 2)
docker-compose up -d 


## Para acceder al bash del proyecto en rails
docker exec -it backend_api bash

## Eliminar el .example de los archivos de variables de entorno
- /environments/.env.backend_api.example
- /environments/.env.postgres.example
