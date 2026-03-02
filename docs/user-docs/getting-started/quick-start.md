# Quickstart

This quick guide is designed to walk you through your first successful integration with Transactionify.

# Postman Collection

Download the official Transactionify Postman collection:

<a href="../../postman/collection.json" class="download-btn" download>
  Download Postman Collection
</a>

## Create an Account

### Request

```bash
curl -X POST \
  https://gj7edrv1il.execute-api.us-east-1.amazonaws.com/api/v1/accounts \
  -H "Authorization: APIKey {{api_key}}" \
  -H "Content-Type: application/json" \
  -d '{
    "currency": "USD"
  }'
```

### Response

```json
{
  "id": "019a4757-c049-7ea8-a110-2ea110c5a6f8",
  "balance": {
    "value": "0.00",
    "currency": "USD"
  }
}
```

## Create a Payment

```bash
curl -X POST \
  https://gj7edrv1il.execute-api.us-east-1.amazonaws.com/api/v1/accounts/{account_id}/payments \
  -H "Authorization: APIKey {{api_key}}" \
  -H "Content-Type: application/json" \
  -d '{
    "amount": {
      "value": "100.00",
      "currency": "USD"
    }
  }'
```

## Retrieve a balance

```bash
curl -X GET \
  https://gj7edrv1il.execute-api.us-east-1.amazonaws.com/api/v1/accounts/{account_id}/balance \
  -H "Authorization: APIKey {{api_key}}"
```

## List Transactions

```bash
curl -X GET \
  https://gj7edrv1il.execute-api.us-east-1.amazonaws.com/api/v1/accounts/{account_id}/transactions \
  -H "Authorization: APIKey {{api_key}}"
```

With these use cases completed, you should now have a working integration.