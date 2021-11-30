package dashboard

import "github.com/gorilla/mux"

// Dashboard is not a 1 dimensional route, It has nested routes within on the frontend
// We use dashboard handler as the parent to route to children routes
func DashboardHandler(m *mux.Router) {
	subRoute := m.PathPrefix("/dashboard/").Subrouter()

	subRoute.HandleFunc("/info", InformationHandler)
	subRoute.HandleFunc("/content", ContentHandler)
}
