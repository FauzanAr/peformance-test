package main

import (
	"context"
	"os"
	"os/signal"
	"syscall"
	"time"

	"github.com/labstack/echo/v4"
)

func main() {
	server := echo.New()
	quit := make(chan os.Signal, 1)
	signal.Notify(quit, syscall.SIGTERM)
	signal.Notify(quit, syscall.SIGINT)
	go func() {
		<-quit
		server.Logger.Error("Server is shutting down...")

		ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
		defer cancel()
		server.Shutdown(ctx)
	}()

	server.GET("/status", func(c echo.Context) error {
		return c.JSON(200, map[string]string{"message": "Server running"})
	})

	server.Logger.Fatal(server.Start(":" + "9000"))
}