SERVICE=parkersremovals
IMAGE=renegare/$(SERVICE_NAME)
VERSION ?=$(shell git rev-parse --verify --short=10 HEAD)

build: build-assets build-image

build-assets:
	rm -rf ./build
	npm run build:assets

build-image:
	docker build \
		-t $(IMAGE):latest \
		-t $(IMAGE):$(VERSION) \
		.

push: push-image

push-image:
	docker push $(IMAGE):$(VERSION)
	docker push $(IMAGE):latest

create-service:
	docker service create \
		--name $(SERVICE) \
 		--limit-memory 128000000 \
		--reserve-memory 128000000 \
		-p 3123:3000 \
		$(IMAGE):latest

version:
	echo $(VERSION)
