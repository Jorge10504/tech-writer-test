# Authentication

All endpoints require API key authentication. To do this, simply include your API key in the `Authorization` header:

- Authorization: `APIKey <your-api-key>`


Example:

```bash
curl -X GET \
  https://gj7edrv1il.execute-api.us-east-1.amazonaws.com/api/v1/accounts \
  -H "Authorization: APIKey xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
```

## Common Authentication Errors

| Status Code | Meaning                    |
| ----------- | -------------------------- |
| 401         | Missing or invalid API key |

If authentication fails, the API will respond with:

```json
{
  "message": "Unauthorized"
}
```