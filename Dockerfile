FROM node as builder

WORKDIR /app/
COPY . .
RUN npm install -g pnpm
RUN pnpm install
RUN pnpm generate

FROM nginx

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/.output/public /usr/share/nginx/html/