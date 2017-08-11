SERVICE_NAME=parkersremovals
IMAGE=renegare/$(SERVICE_NAME)
VERSION=$(shell git rev-parse --verify --short=10 HEAD)

build: build-assets build-image

build-assets:
	rm -rf ./build
	npm run build:assets

build-image:
	docker build \
		-t $(IMAGE):latest \
		-t $(IMAGE):$(VERSION) \
		.

push-image:
	docker push $(IMAGE):$(VERSION)
	docker push $(IMAGE):latest

create-service:
	docker service create \
		--name $(SERVICE_NAME) \
 		--limit-memory 128000000 \
		--reserve-memory 128000000 \
		$(IMAGE):latest
