import { html } from "@elysiajs/html";
import { Elysia, t } from "elysia";
import { BaseHtml, DashBoard } from "../../components/html/Base";

// 受注 関連
export const luggageRouter = new Elysia().group("/luggage", (app) =>
  app
    .use(html())
    .get("/", ({ html }) => html(luggagePage))
    .get("/:id", ({ params: { id }, html }) => html(luggageDtailPage(id)))
    .post(
      "/",
      ({ body }) => {
        const { name, description, price, count } = body;
        console.log(name, description, price, count);

        return {
          message: "作成されました。",
        };
      },
      {
        body: t.Object({
          name: t.String(),
          description: t.String(),
          price: t.String(),
          count: t.Number(),
        }),
      }
    )
    .put(
      "/:id",
      ({ body, params: { id } }) => {
        const { name, description, price, count } = body;
        console.log(name, description, price, count);

        return {
          message: "編集されました。",
        };
      },
      {
        body: t.Object({
          name: t.String(),
          description: t.String(),
          price: t.String(),
          count: t.Number(),
        }),
      }
    )
    .delete("/:id", ({ params: { id } }) => {
      return {
        message: "削除されました。",
      };
    })
);

const luggagePage = () => {
  return (
    <DashBoard>
      <div>
        <h1>luggage Page</h1>
        <p>商品 一覧表</p>
      </div>
    </DashBoard>
  );
};

// 詳細
const luggageDtailPage = (id: string) => {
  return (
    <DashBoard>
      <div>
        <h1>Luggage Dtail Page</h1>
        <p>商品 詳細</p>
      </div>
    </DashBoard>
  );
};
