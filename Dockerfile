FROM node:lts-alpine AS builder
WORKDIR /app
 
COPY . .

RUN npm i -g pnpm && pnpm i --frozen-lockfile && pnpm build

FROM node:lts-alpine AS runner
WORKDIR /app

COPY --from=builder /app/package.json /app/pnpm-lock.yaml /app/build ./

RUN npm i -g pnpm && pnpm i --frozen-lockfile --prod

CMD [ "node", "index.js" ]