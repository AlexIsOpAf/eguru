package dashboard

import (
	"eguru/internal/database"
	"encoding/json"
	"net/http"
)

func ContentHandler(w http.ResponseWriter, r *http.Request) {
	container, err := database.ShowContentCollection("dashboard_content")

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
