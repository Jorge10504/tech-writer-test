# Overview

Transactionify is a lightweight REST API for managing accounts and financial transactions.

It allows you to:

- Create currency-based accounts (USD, EUR, GBP)
- Submit payments to accounts
- Retrieve real-time balances
- List transaction history with cursor-based pagination

---

## Base URL

`https://gj7edrv1il.execute-api.us-east-1.amazonaws.com`


All requests must include an API key in the `Authorization` header.

---

## Core APIs

### Accounts
An account represents a currency wallet for a user. Each account is tied to a single currency.

### Payments
Payments add funds to an account. The payment currency must match the account currency.

### Balance
Balances reflect the current total value stored in the account.

### Transactions
Each payment generates a transaction record. Transactions can be retrieved using cursor-based pagination.

---

## Supported Currencies

- USD
- EUR
- GBP

All monetary values are represented as strings with exactly two decimal places.