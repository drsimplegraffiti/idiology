> yarn add pg typeorm @nestjs/typeorm

##### Connect to db

psql -U posgtres

#### Create ormconfig file

> touch ormconfig.json

#### linter

> yarn run lint --fix

---

#### add the following to your package.json file

```json
"typeorm": "ts-node -r tsconfig-paths/register ./node_modules/.bin/typeorm",
"migration:generate": "npm run typeorm -- migration:generate --config src/config/ormconfig.json --connection  --name ",
"migration:run": "npm run typeorm -- migration:run"

```
