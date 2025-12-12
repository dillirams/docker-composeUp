install node
install  typescript
run npx tsc --init
make Rootdir in ts.ciongig =./src
make outdir in ts.config=./dist
run npx tsc -b
run node dist/index.js
install prisma
run npx prisma init
connet to your postges
run npx primsa migrate dev
run npx prisma generate

DOCKERFILE
install docker
create network and volume
run postgres image =`sudo docker run --name postgres-cont-2 --network practce-network -v practice-volume:/var/lib/postgresql/data -e POSTGRES_PASS
WORD=dilli03 -e POSTGRES_DB=compose-practice  -p 5434:5432 postgres`
write docker file
build image= `sudo docker build --network=host -t practice-app .`
run image and same time migrate the prisma at run time: `sudo docker run --network practce-netork -e postgresql://postgres:dilli03@postgres-cont-2:5432/compose-practice -p 3000:3000 practice-app`


DOCKER_COMPOSE
install docker, docker-compose
run docker compose up

