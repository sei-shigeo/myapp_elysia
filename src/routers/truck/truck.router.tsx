import { html } from "@elysiajs/html";
import { Elysia, t } from "elysia";
import { BaseHtml } from "../../components/html/Base";

// トラック 関連
export const truckRouter = new Elysia().group("/truck", (app) =>
  app
    .use(html())
    .get("/", ({ html }) => html(truckPage))
    .get("/:id", ({ params: { id }, html }) => html(truckDtailPage(id)))
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

const truckPage = () => {
  return (
    <BaseHtml>
      <div>
        <h1>Truck Page</h1>
        <p>トラック 一覧表</p>
      </div>
    </BaseHtml>
  );
};
// 詳細
const truckDtailPage = (id: string) => {
  return (
    <BaseHtml>
      <div>
        <h1>Truck Dtail Page</h1>
        <p>トラック 詳細</p>
      </div>
    </BaseHtml>
  );
};
