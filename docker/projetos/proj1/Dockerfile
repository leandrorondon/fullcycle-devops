#builder image
FROM golang:1.15-alpine AS builder
WORKDIR /usr/src/app
COPY ./app/main.go .
RUN go build -ldflags="-s -w" -v -o fullcycle

#final image
FROM scratch
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/fullcycle .
ENTRYPOINT [ "./fullcycle" ]
