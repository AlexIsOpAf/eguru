package database

import (
	"context"
	"eguru/model"
	"encoding/json"
	"io/ioutil"
	"log"
	"time"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"go.mongodb.org/mongo-driver/mongo/readpref"
)

var MongoDB *mongo.Client

type Config struct {
	User  string `json:"user"`
	Pwd   string `json:"pwd"`
	Roles struct {
		Role string `json:"role"`
		DB   string `json:"db"`
	} `json:"roles"`
}

var mOptions = options.Find()

func InitialiseDB() error {
	dbConfig := Config{}

	err := dbConfig.readInDBConfig()
	if err != nil {
		return err
	}

	err = connectToDB()

	if err != nil {
		return err
	}

	err = pingDatabase()

	if err != nil {
		return err
	}

	log.Println("Database Up..")
	return nil
}

func (config *Config) readInDBConfig() error {
	file, err := ioutil.ReadFile("config/db-connection.json")

	if err != nil {
		return err
	}

	err = json.Unmarshal(file, config)

	if err != nil {
		return err
	}

	return nil
}

func connectToDB() (err error) {
	MongoDB, err = mongo.NewClient(options.Client().ApplyURI("mongodb://root:toor@localhost/testDB?authSource=testDB"))

	if err != nil {
		return err
	}

	ctx, _ := context.WithTimeout(context.Background(), 10*time.Second)

	err = MongoDB.Connect(ctx)

	if err != nil {
		return err
	}

	return nil
}

func pingDatabase() error {
	ctx, _ := context.WithTimeout(context.Background(), 5*time.Second)
	err := MongoDB.Ping(ctx, readpref.Primary())
	if err != nil {
		return err
	}
	return nil
}

// Damn.. would have been a good function to <T>
func ShowInformationCollection(collectionName string) ([]model.Information, error) {
	ctx, _ := context.WithTimeout(context.Background(), 5*time.Second)
	// .Collection(func Lookup(TypeID)  )
	collection := MongoDB.Database("testDB").Collection(collectionName)

	var container []model.Information

	cursor, err := collection.Find(ctx, bson.D{}, mOptions)
	if err != nil {
		return nil, err
	}

	defer cursor.Close(ctx)
	for cursor.Next(ctx) {
		var p model.Information
		if err := cursor.Decode(&p); err != nil {
			return nil, err
		}
		container = append(container, p)
	}

	if err := cursor.Err(); err != nil {
		return nil, err
	}

	return container, nil

}

func ShowContentCollection(collectionName string) ([]model.Content, error) {
	ctx, _ := context.WithTimeout(context.Background(), 5*time.Second)
	// .Collection(func Lookup(TypeID)  )
	collection := MongoDB.Database("testDB").Collection(collectionName)

	var container []model.Content

	cursor, err := collection.Find(ctx, bson.D{}, mOptions)
	if err != nil {
		return nil, err
	}

	defer cursor.Close(ctx)
	for cursor.Next(ctx) {
		var p model.Content
		if err := cursor.Decode(&p); err != nil {
			return nil, err
		}
		container = append(container, p)
	}

	if err := cursor.Err(); err != nil {
		return nil, err
	}

	return container, nil

}

func ShowQuestionCollection(collectionName string, questionLimit int) ([]model.Question, error) {
	ctx, _ := context.WithTimeout(context.Background(), 5*time.Second)
	// .Collection(func Lookup(TypeID)  )
	collection := MongoDB.Database("testDB").Collection(collectionName)

	var container []model.Question

	cursor, err := collection.Find(ctx, bson.M{"type": questionLimit}, mOptions)
	if err != nil {
		return nil, err
	}

	defer cursor.Close(ctx)
	for cursor.Next(ctx) {
		var p model.Question
		if err := cursor.Decode(&p); err != nil {
			return nil, err
		}
		container = append(container, p)
	}

	if err := cursor.Err(); err != nil {
		return nil, err
	}

	return container, nil

}
