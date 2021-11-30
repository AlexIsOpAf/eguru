// To be used for local development

db.createUser({
    user: 'root',
    pwd: 'toor',
    roles: [
        {
            role: 'readWrite',
            db: 'testDB',
        },
    ],
});

db = new Mongo().getDB("testDB");

db.createCollection('dashboard_overview', { capped: false });
db.createCollection('dashboard_content', { capped: false });
db.createCollection('dashboard_questions', { capped: false });



db.dashboard_information.insert([
    {
        "id": 0,
        "problem_breakdown": {
            "solved": 0,
            "easy": 0,
            "medium": 0,
            "hard": 0
        },
    
        "recent_submission": {
            "problem_name": "",
            "language": "",
            "status": 0
        },
    
        "acceptance_rate": 0
    }
]);

db.dashboard_content.insert([
    {
        "label": 'Introduction: Foundation of Data Structures',
        "embedId": "bum_19loj9A"
    },
    {
        "label": 'Array and Memory',
        "embedId": "pmN9ExDf3yQ"
    },
    {
        "label": 'Complexity Analysis',
        "embedId": "D6xkbGLQesk"
    },
    {
        "label": 'Linked Lists',
        "embedId": "WwfhLC16bis"
    },
    {
        "label": 'Recursion',
        "embedId": "B0NtAFf4bvU"
    },
    {
        "label": 'Trees',
        "embedId": "1-l_UOFi1Xw"
    },
    {
        "label": 'Hash Tables',
        "embedId": "sfWyugl4JWA"
    },
    {
        "label": 'Stacks and Queues',
        "embedId": "A3ZUpyrnCbM"
    },
    {
        "label": 'Graph Theory',
        "embedId": "zaBhtODEL0w"
    },
    {
        "label": 'Binary Search',
        "embedId": "6ysjqCUv3K4"
    },
    {
        "label": 'Quicksort',
        "embedId": "0SkOjNaO1XY"
    },
])