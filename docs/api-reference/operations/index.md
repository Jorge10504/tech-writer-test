---
title: API Reference
layout: doc
editLink: false
---

# API Reference

## Developer Access

Developer Access can be granted to test the integration or application you are developing against your company's data in a safe sandbox environment. In order to gain access you will need an API Key for the sandbox environment.

::: tip
To request an API Key please contact your administrator.
:::

Developer sandbox access should be used when:

- Developing your integration
- Testing and tuning your application integration
- Testing data creation before posting to Production


## Core Concepts

Below are some of the core concepts necessary to ensure the correct functioning of your integration.

- [Requests](#requests)
- [Responses](#responses)
- [Date Format](#date-format)
- [Pagination](#pagination)
- [HTTP Status Codes](#http-status-codes)
- [Authentication](#authentication)

### Requests

When performing a API request you will need to use JSON body format. Make sure you provide Content-Type: application/json in the HTTP request header to ensure a properly formatted request.

::: info
All requests to the API must use a secure connection via https and support TLSv1.2
:::

The API uses appropriate HTTP verbs for each action. Access to certain actions may be limited by the access rights of the API Key.

| Verb     | Description                                   |
|----------|-----------------------------------------------|
| GET    | Used to retrieve records from the system        |
| POST   | Used to create records in the system            |
| PUT    | Used to replace records in the system           |
| PATCH  | Used to update part of a record in the system   |
| DELETE | Used to delete records from the system          |

#### URL Format

The naming convention for the URL is based on the following.

- Each request must be made to the API root for the desired version followed by the plural name of the object. For example https://api.service.com/latest/tickets
- When the endpoint supports it and only a single record is requested, the ID of hte item must be appended to the URL. For example https://api.service.com/latest/tickets/1234
- When requesting child objects of an object you can append the child object after the object id. For example https://api.service.com/latest/tickets/1234/products

### Responses

Each response sent from the API contains a success parameter which is of boolean type, indicating whether the request was successful or not. Upon success being false, an optional error parameter (string) may be given. In case of success is true, the response is always contained within a payload parameter, and additional metadata may be carried inside an additional_data parameter.

::: info
All data is sent and received in JSON format.
:::

::: details Success Response
```json
{
    "success": true, //boolean, shows if operation succeeded (similar to HTTP status)
    "payload": null, //object in other cases
    "additional_data": {
        "pagination": { //for endpoints that list data
            "start": "0",
            "limit": "100",
            "more_items": false
        }
    }
}
```
:::

::: details Error Response
```json
{
    "success": false,
    "error": "Requested service is not availabile", //main error message
    "error_info": "Please check developers.service.com",
    "payload": null,
    "additional_data": null
}
```
:::

### Date Format

All dates and times used by the API will be in ISO 8601 format 2019-01-22 08:55:59 (would be the same as 2019-01-22T08:55:59).

::: info
All times received by the API will be in UTC timezone.
:::

The times that are sent to the API should also be converted to the UTC timezone before being sent or include the ISO 8601 offset indicator as follows 2019-01-22T08:55:59-05:00.

### Pagination

Most of the lists/item collections are paginated. The parameters that control the pagination are start and limit, indicating the desired offset and the items per page values.

Within the response's additional_data object, a pagination object will be set upon pagination. The additional_data.pagination will contain the given start and limit, as well as the more_items flag, indicating whether there are more items that can be fetched after the current batch. When there are, next_start will also be set which can be used for the next offset pointer.

The maximum limit value is 500.

### HTTP Status Codes

This is a list of status codes returned by RESTful APIs.

| Status Code | Name                   | Description                                         |
|-------------|------------------------|-----------------------------------------------------|
| 200       | OK                     | Request completed                                   |
| 201       | Created                | New record was created                              |
| 400       | Bad Request            | Request was not understood                          |
| 401       | Unauthorized           | Invalid API token or access to endpoint not allowed |
| 403       | Forbidden              | Request not allowed                                 |
| 404       | Not Found              | Resource unavailable                                |
| 410       | Gone                   | Old resource permanently removed                    |
| 415       | Unsupported Media Type | Feature is not enabled                              |
| 429       | Too Many Requests      | Rate limit has been exceeded                        |
| 500       | Internal Server Error  | Invalid method                                      |
| 501       | Not Implemented        | Non-existent functionality                          |
| 503       | Service Unavailable    | Down for maintenance                                |

### Authentication

The API Key must be provided as part of the request headers using the X-API-KEY header.

::: warning
All API requests must be authenticated.
:::

An API key is tied to a specific company, giving access to all the company's data. You can only have one active API key at any time. If you change the API key, all existing integrations using this API key will not be able to make successful requests against our API and stop working.

Keep in mind that API Keys should be rotated at least every 90 days.