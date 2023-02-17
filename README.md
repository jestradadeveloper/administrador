# Administrador de Proyectos Challange

## Eliminar el .example de los archivos de variables de entorno
- /environments/.env.backend_api.example
- /environments/.env.postgres.example

## Construir el proyecto
docker-compose build

## Crear la base de datos y ejecutar migraciones
docker-compose exec backend_api bundle exec rake db:setup db:migrate

## Levantar el contenedor con los servicios en detached mode (opcion 2)
docker-compose up -d 


## Para acceder al bash del proyecto en rails
docker exec -it backend_api bash
