package model

// userId: string
// problems_solved: int
// problem_breakdown: 	{
// 				easy: int,
// 				medium: int,
// 				hard: int,
// 			},
// recent_submissions: 	[
// 						{
// 							language_completed: enum,
// 							submission_status: enum (accepted, time limit exceed, runtime error, wrong answer - test fail), ?? Maybe head-10??
// 							date_submitted: date? possibly
// 						}
// 					]..

// acceptance_rate: double (percentile)

// ------------------------------------------------------------------------------
// DASHBOARD/OVERVIEW/INFORMATION Model - For basic information about the overall user
// ------------------------------------------------------------------------------
type submissionStatus int

const (
	Accepted submissionStatus = iota
	TimeExceededError
	RunTimeError
	WrongAnswer
)

type problemBreakdown struct {
	Solved int `json:"solved" bson:"solved"`
	Easy   int `json:"easy" bson:"easy"`
	Medium int `json:"medium" bson:"medium"`
	Hard   int `json:"hard" bson:"hard"`
}

type submission struct {
	ProblemName string           `json:"problem_name" bson:"problem_name"`
	Language    string           `json:"language" bson:"language"`
	Status      submissionStatus `json:"submission_status" bson:"submission_status"`
}

type Information struct {
	ID               int              `json:"id" bson:"id"`
	ProblemSolved    problemBreakdown `json:"problem_breakdown" bson:"problem_breakdown"`
	RecentSubmission submission       `json:"recent_submission" bson:"recent_submission"`
	AcceptanceRate   float32          `json:"acceptance_rate" bson:"acceptance_rate,truncate"`
}

// ------------------------------------------------------------------------------
// DASHBOARD/OVERVIEW/INFORMATION Model - For basic information about the overall user
// ------------------------------------------------------------------------------

// ------------------------------------------------------------------------------
// DASHBOARD/OVERVIEW/EXPLORE QUESTIONS Model - For content about question
// ------------------------------------------------------------------------------

// CI/CD will change storage to point from local directory to s3 bucket in aws
type Question struct {
	Id      int
	Name    string
	Storage string
}

// ------------------------------------------------------------------------------
// DASHBOARD/OVERVIEW/EXPLORE QUESTIONS Model - For content about question
// ------------------------------------------------------------------------------

// ------------------------------------------------------------------------------
// DASHBOARD/OVERVIEW/CONTENT Model - For video courses embed
// ------------------------------------------------------------------------------

type Content struct {
	Label   string `json:"label" bson:"label"`
	EmbedId string `json:"embedId" bson:"embedId"`
}
