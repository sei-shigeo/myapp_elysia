import staticPlugin from "@elysiajs/static";
import { Elysia } from "elysia";
import { authRouter } from "./routers/auth/auth.router";
import { employeeRouter } from "./routers/employee/employee.router";
import { luggageRouter } from "./routers/luggage/luggage.router";
import { truckRouter } from "./routers/truck/truck.router";
import { adminRouter } from "./routers/admin/admin.router";
import { ordersRouter } from "./routers/orders/orders.router";
import { html } from "@elysiajs/html";
import { topPage } from "./components/html/Main";

const app = new Elysia()
  .use(staticPlugin())
  .use(html())
  .use(authRouter)
  .use(adminRouter)
  .use(employeeRouter)
  .use(truckRouter)
  .use(luggageRouter)
  .use(ordersRouter)
  .get("/", ({ html }) => html(topPage))
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
