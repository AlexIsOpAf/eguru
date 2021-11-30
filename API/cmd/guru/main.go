package main

import (
	"eguru/internal/dashboard"
	"eguru/internal/database"
	"log"
	"net/http"
	"time"

	"github.com/gorilla/mux"
)

func main() {

	err := database.InitialiseDB()

	if err != nil {
		log.Fatal(err)
	}

	// Registering a router host
	dashRoute := mux.NewRouter()

	//Register path and handler to handle endpoint
	http.Handle("/dashboard/", dashRoute)
	dashboard.DashboardHandler(dashRoute)

	// Middleware to handle internal stdout logging and cors header for local development
	// In production nginx will be used as a proxy
	dashRoute.Use(loggingMiddleware, setCorsHeaders)

	server := &http.Server{
		Handler: dashRoute,
		// Should read in from config later
		Addr: ":8080",
		// Best practice dictates to set timeouts to avoid attacks
		WriteTimeout: 10 * time.Second,
		ReadTimeout:  10 * time.Second,
	}

	log.Fatal(server.ListenAndServe())
}

func loggingMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		w.Header().Set("Accept-Encoding", "gzip, deflate, br")

		log.Println(r.RequestURI)
		next.ServeHTTP(w, r)
	})
}

func setCorsHeaders(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

		if r.Method == http.MethodOptions {
			return
		}
		next.ServeHTTP(w, r)
	})
}
