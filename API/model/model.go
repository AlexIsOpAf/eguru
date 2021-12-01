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
	Incomplete submissionStatus = iota
	Accepted
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

type Information struct {
	ID               int              `json:"id" bson:"id"`
	ProblemSolved    problemBreakdown `json:"problem_breakdown" bson:"problem_breakdown"`
	RecentSubmission Question         `json:"recent_submission" bson:"recent_submission"`
	AcceptanceRate   float32          `json:"acceptance_rate" bson:"acceptance_rate,truncate"`
	Score            int              `json:"score" bson:"score"`
}

// ------------------------------------------------------------------------------
// DASHBOARD/OVERVIEW/INFORMATION Model - For basic information about the overall user
// ------------------------------------------------------------------------------

// ------------------------------------------------------------------------------
// DASHBOARD/OVERVIEW/EXPLORE QUESTIONS Model - For content about question
// ------------------------------------------------------------------------------

// CI/CD will change storage to point from local directory to s3 bucket in aws
type Question struct {
	ID          int              `json:"id" bson:"id"`
	Type        int              `json:"type" bson:"type"`
	Name        string           `json:"name" bson:"name"`
	Base        string           `json:"base" bson:"base"`
	Solution    string           `json:"solution" bson:"solution"`
	Language    string           `json:"language" bson:"language"`
	Status      submissionStatus `json:"submission_status" bson:"submission_status"`
	Information string           `json:"info" bson:"info"`
	Difficulty  string           `json:"difficulty,omitempty" bson:"difficulty"`
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
