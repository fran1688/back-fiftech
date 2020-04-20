VERSION=0.0.$v
build:
	docker build -t fifchect-api:$(VERSION) . --no-cache
run:
	docker run --rm -it -p 3900:3800 fifchect-api:$(VERSION)
	docker run -p27017:27017 -it --rm  -v /home/francisco/develop/Fiftech/Fiftech-db:/data/db -d mongo:3.5
push:
    docker push fifchect-api:$(VERSION)

all:	build push run
