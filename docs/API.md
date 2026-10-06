\# SSIS API Contract



Base URL: `http://localhost:8000/api`

All endpoints return JSON. Protected routes require `Authorization: Bearer <token>`.



\## Auth



\### POST /login

Request: `{ "username": "student1", "password": "pass" }`



Response 200:

```json

{

&#x20; "user": { "id": 1, "name": "Juan Dela Cruz", "role": "student" },

&#x20; "token": "1|abc..."

}

```



Response 422:

```json

{ "message": "...", "errors": { "username": \["The username field is required."] } }

```



\### POST /logout

Auth required. Response: `{ "message": "Logged out" }`



\### GET /me

Auth required. Response: `{ "id": 1, "name": "Juan", "role": "student" }`



\## Student



\### GET /student/profile

`{ "student\_no": "2026-00123", "program": "BSIT", "year\_level": 3 }`



\### GET /student/grades

```json

\[{ "id": 1, "course": { "code": "CS101", "title": "Intro to Computing", "units": 3 }, "grade": 1.5 }]

```



\### GET /student/subjects

```json

\[{ "id": 1, "code": "CS101", "title": "Intro to Computing", "units": 3, "schedule": "MWF 9:00-10:00" }]

```



\## Documents



\### GET /documents/types

```json

\[

&#x20; { "id": 1, "name": "Transcript of Records (TOR)", "fee": 150 },

&#x20; { "id": 2, "name": "Certificate of Registration (COR)", "fee": 50 }

]

```



\### POST /documents/request

Request: `{ "type\_id": 1, "purpose": "Employment", "copies": 2 }`



Response 201:

```json

{ "id": 10, "type": { "name": "TOR" }, "copies": 2, "fee": 300, "status": "pending" }

```



\### GET /documents/my-requests

Returns array of the above.



\## Registrar



\### POST /enrollment

Request: `{ "course\_ids": \[1, 2, 3] }`



\### POST /grades

Request: `{ "student\_id": 1, "course\_id": 1, "grade": 1.5 }`



\## Cashier



\### POST /payments

Request: `{ "amount": 500, "method": "cash" }`



Response: `{ "reference\_no": "PAY-2026-0001", "receipt\_url": "..." }`



\## Department



\### GET /clearance/:studentId

```json

\[{ "department": "Library", "status": "approved" }]

```



\## Admin



\### GET /admin/users

```json

\[{ "id": 1, "name": "Juan", "username": "student1", "role": "student" }]

```



\### POST /admin/users

Request: `{ "name": "...", "username": "...", "role": "student", "password": "..." }`



\## Error Codes



| Code | Meaning |

|------|---------|

| 200 | OK |

| 201 | Created |

| 401 | Unauthenticated — redirect to login |

| 403 | Forbidden — wrong role |

| 404 | Not found |

| 422 | Validation error |

| 500 | Server error |

