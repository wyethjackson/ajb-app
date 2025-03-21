# ajb-app


# front end build
docker build -t dockerhub-user/ajb-frontend-image:latest \
  --build-arg BACKEND_API_URL=http://backend:4000 .