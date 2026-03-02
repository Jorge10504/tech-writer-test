# Data Models

This section describes the core response objects returned by the API.

---

## Amount

```json
{
  "value": "100.00",
  "currency": "USD"
}
```

| Field    | Type   | Description                                    |
| -------- | ------ | ---------------------------------------------- |
| value    | string | Monetary value with exactly two decimal places |
| currency | string | ISO currency code                              |

## AccountCreated

```json
{
  "id": "uuid",
  "balance": { ... }
}
```

## Payment

```json
{
  "id": "uuid",
  "type": "payment",
  "amount": { ... },
  "status": "pending"
}
```

## Transaction List

```json
{
  "transactions": [ ... ],
  "has_more": true,
  "next_cursor": "..."
}
```