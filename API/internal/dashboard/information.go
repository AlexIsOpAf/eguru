package dashboard

import (
	"eguru/internal/database"
	"encoding/json"
	"net/http"
)

func InformationHandler(w http.ResponseWriter, r *http.Request) {
	container, err := database.ShowInformationCollection("dashboard_information")

	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		_, _ = w.Write([]byte(` { "message": "` + err.Error() + `" }`))
		return
	}

	err = json.NewEncoder(w).Encode(container)

	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		_, _ = w.Write([]byte(` { "message": "` + err.Error() + `" }`))
		return
	}

}
