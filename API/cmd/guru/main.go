package main

import (
	"fmt"
	"log"
	"net/http"
	"time"

	"github.com/gorilla/mux"
)

func main() {
	// Registering a router host
	r := mux.NewRouter()

	log.Println("Docker up")

	//Register path and base handler to handle endpoint
	r.HandleFunc("/", BaseHandler)

	server := &http.Server{
		Handler: r,
		Addr:    ":8080",
		// Best practice dictates to set timeouts to avoid attacks
		WriteTimeout: 10 * time.Second,
		ReadTimeout:  10 * time.Second,
	}

	log.Fatal(server.ListenAndServe())
}

func BaseHandler(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusOK)
	fmt.Fprint(w, "Base Endpoint Reached!")
}
