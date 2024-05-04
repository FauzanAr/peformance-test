FROM golang:1.21.5-alpine

WORKDIR /app

COPY go.mod go.sum ./
RUN go mod download

COPY *.go ./

EXPOSE 9000
CMD ["go", "run", "main.go"]