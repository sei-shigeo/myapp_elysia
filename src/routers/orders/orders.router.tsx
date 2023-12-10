import { html } from "@elysiajs/html";
import { Elysia, t } from "elysia";
import { BaseHtml } from "../../components/html/Base";

// 受注 関連
export const ordersRouter = new Elysia().group("/orders", (app) =>
  app
    .use(html())
    .get("/", ({ html }) => html(ordersPage))
    .get("/:id", ({ params: { id }, html }) => html(ordersDtailPage(id)))
    .post(
      "/",
      ({ body }) => {
        const { name, licensePlate } = body;
        console.log(name, licensePlate);

        return {
          message: "作成されました。",
        };
      },
      {
        body: t.Object({
          name: t.String(),
          licensePlate: t.String(),
        }),
      }
    )
    .put(
      "/:id",
      ({ body, params: { id } }) => {
        const { name, licensePlate } = body;
        console.log(name, licensePlate);

        return {
          message: "編集されました。",
        };
      },
      {
        body: t.Object({
          name: t.String(),
          licensePlate: t.String(),
        }),
      }
    )
    .delete("/:id", ({ params: { id } }) => {
      return {
        message: "削除されました。",
      };
    })
);

const ordersPage = () => {
  return (
    <BaseHtml>
      <div>
        <h1>Orders Page</h1>

        <p>トラック 一覧表</p>
      </div>
    </BaseHtml>
  );
};
// 詳細
const ordersDtailPage = (id: string) => {
  return (
    <BaseHtml>
      <div>
        <h1>Orders Dtail Page</h1>
        <p>受注 詳細</p>
      </div>
    </BaseHtml>
  );
};
