.PHONY: up down build frontend backend db logs clean

up:
	docker-compose up -d

down:
	docker-compose down

build:
	docker-compose build

frontend:
	docker-compose logs -f frontend

backend:
	docker-compose logs -f backend

db:
	docker-compose logs -f db

logs:
	docker-compose logs -f

clean:
	docker-compose down -v --rmi all
