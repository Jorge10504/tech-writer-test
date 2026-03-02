# Pagination Guide

Transactionify uses cursor-based pagination.

---

## Query Parameters

| Parameter | Description |
|------------|------------|
| limit | Number of results (default 20, max 100) |
| cursor | Opaque string from previous response |

---

## Example

```bash
GET /api/v1/accounts/{account_id}/transactions?limit=20
```

## Response

```json
{
  "transactions": [...],
  "has_more": true,
  "next_cursor": "abc123"
}
```