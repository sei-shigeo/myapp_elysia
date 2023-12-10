import { html } from "@elysiajs/html";
import { Elysia, t } from "elysia";
import { BaseHtml } from "../../components/html/Base";

// クライアントを管理するdashboard
export const adminRouter = new Elysia().group("/admin", (app) =>
  app
    .use(html())
    .get("/", ({ html }) => html(adminPage))
    .get("/:id", ({ params: { id }, html }) => html(adminDtailPage(id)))
    .post(
      "/",
      ({ body }) => {
        const { name, email, password } = body;
        console.log(name, email, password);

        return {
          message: "作成されました。",
        };
      },
      {
        body: t.Object({
          name: t.String(),
          email: t.String(),
          password: t.String(),
        }),
      }
    )
    .put(
      "/:id",
      ({ body, params: { id } }) => {
        const { name, email, password } = body;
        console.log(name, email, password);

        return {
          message: "編集されました。",
        };
      },
      {
        body: t.Object({
          name: t.String(),
          email: t.String(),
          password: t.String(),
        }),
      }
    )
    .delete("/:id", ({ params: { id } }) => {
      return {
        message: "削除されました。",
      };
    })
);

const adminPage = () => {
  return (
    <BaseHtml>
      <div>
        <h1>Admin Page</h1>
        <p>管理者 一覧表</p>
      </div>
    </BaseHtml>
  );
};

// 詳細
const adminDtailPage = (id: string) => {
  return (
    <BaseHtml>
      <div>
        <h1>Admin Dtail Page</h1>
        <p>管理者 詳細</p>
      </div>
    </BaseHtml>
  );
};
