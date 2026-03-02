# Error Catalog

Transactionify uses standard HTTP status codes.

---

## 400 — Bad Request

Occurs when request validation fails.

Examples:

- Invalid currency
- Missing required fields
- Currency mismatch
- Invalid pagination cursor

Example response:

```json
{
  "message": "Invalid currency. Allowed values: USD, EUR, GBP"
}
```

## 401 — Unauthorized

Occurs when the API key is missing or invalid.

```json
{
  "message": "Unauthorized"
}
```

## 404 - Not Found

Returned when a resource does not exist.

```json
{
  "message": "Account not found"
}
```

## 500 - Internal Server Error

An unexpected server-side error occurred.

```json
{
  "message": "An error occurred while processing your request"
}
```