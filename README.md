## Chemcycled Backend

### Code Style Guide

Following folder structure is used

- `src/controllers`
- `src/middlewares`
- `src/models`
- `src/schema`
- `src/services`
- `src/templates`
- `src/utilities`

### Seeding Database

Seeding scripts are provided for `Company`, `Address` (for `shippingaddresses`),
`Products`, `Orders`, `Query` and `Admin` collection.

All company account have default password `Abc@1234`.

For Admin account email is `admin@chemcycled.in`

IMPORTANT!

MAKE SURE DB NAME IS CORRECT IN YOUR `.env` FILE OR ELSE IT WILL DROP YOUR DB
AS A SAFE GUARD SEEDER WILL ONLY RUN IN `dev` ENVIRONMENT.

#### Usage

You can seed the database by running

```bash
yarn seed:all
```

this will drop the existing database and populate new data

You can also seed an individual collection by running

```bash
yarn seed:company
```

Specify `-d` option to create new collection

```bash
yarn seed:order -d
```
