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
    
        "acceptance_rate": 0,
        "score": 0
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
]);

db.dashboard_questions.insert([
    {
        "id": 0,
        "type": 0,
        "name": "Two Number Sum",
        "base": "",
        "solution": "",
        "language": "",
        "status": 0,
        "information": ""
    },
    {
        "id": 1,
        "type": 0,
        "name": "Validate Subsequence",
        "base": "",
        "solution": "",
        "language": "",
        "status": 0,
        "information": ""
    },
    {
        "id": 2,
        "type": 0,
        "name": "Sorted Squared Array",
        "base": "",
        "solution": "",
        "language": "",
        "status": 0,
        "information": ""
    },
    {
        "id": 3,
        "type": 0,
        "name": "Three Number Sum",
        "base": "",
        "solution": "",
        "language": "",
        "status": 0,
        "information": ""
    },
    {
        "id": 4,
        "type": 0,
        "name": "Smallest Difference",
        "base": "",
        "solution": "",
        "language": "",
        "status": 0,
        "information": ""
    },
    {
        "id": 5,
        "type": 0,
        "name": "Move Element to End",
        "base": "",
        "solution": "",
        "language": "",
        "status": 0,
        "information": ""
    },
    {
        "id": 6,
        "type": 0,
        "name": "Four Number Sum",
        "base": "",
        "solution": "",
        "language": "",
        "status": 0,
        "information": ""
    },
    {
        "id": 7,
        "type": 1,
        "name": "Remove Duplicates From Linked List",
        "base": "",
        "solution": "",
        "language": "",
        "status": 0,
        "information": ""
    },    {
        "id": 8,
        "type": 1,
        "name": "LRU Cache",
        "base": "",
        "solution": "",
        "language": "",
        "status": 0,
        "information": ""
    },    {
        "id": 9,
        "type": 1,
        "name": "Node Swap",
        "base": "",
        "solution": "",
        "language": "",
        "status": 0,
        "information": ""
    },    {
        "id": 10,
        "type": 1,
        "name": "Linked List Palindrome",
        "base": "",
        "solution": "",
        "language": "",
        "status": 0,
        "information": ""
    },    {
        "id": 11,
        "type": 2,
        "name": "Product Sum",
        "base": "",
        "solution": "",
        "language": "",
        "status": 0,
        "information": ""
    },    {
        "id": 12,
        "type": 2,
        "name": "Permutations",
        "base": "",
        "solution": "",
        "language": "",
        "status": 0,
        "information": ""
    },    {
        "id": 13,
        "type": 2,
        "name": "Powerset",
        "base": "",
        "solution": "",
        "language": "",
        "status": 0,
        "information": ""
    },    {
        "id": 14,
        "type": 2,
        "name": "Staircase Traversal",
        "base": "",
        "solution": "",
        "language": "",
        "status": 0,
        "information": ""
    },
]);