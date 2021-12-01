package dashboard

import (
	"eguru/internal/database"
	"encoding/json"
	"net/http"
	"strconv"

	"github.com/gorilla/mux"
)

func QuestionHandler(w http.ResponseWriter, r *http.Request) {

	vars := mux.Vars(r)
	questionType := vars["type"]

	limit, err := strconv.Atoi(questionType)

	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		_, _ = w.Write([]byte(` { "message": "` + err.Error() + `" }`))
		return
	}

	container, err := database.ShowQuestionCollection("dashboard_questions", limit)

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
