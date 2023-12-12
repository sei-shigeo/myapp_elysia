import { html } from "@elysiajs/html";
import { Elysia, t } from "elysia";
import { BaseHtml, DashBoard } from "../../components/html/Base";

// 従業員 関連
export const employeeRouter = new Elysia().group("/employee", (app) =>
  app
    .use(html())
    .get("/", ({ html }) => html(employeePage))
    .get("/:id", ({ params: { id }, html }) => html(employeeDtailPage(id)))
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

const employeePage = () => {
  return (
    <DashBoard>
      <div>
        <h1>Employee Page</h1>
        <p>従業員 一覧表</p>
      </div>
    </DashBoard>
  );
};

// 詳細
const employeeDtailPage = (id: string) => {
  return (
    <DashBoard>
      <div>
        <h1>Employee Page</h1>
        <p>従業員 詳細</p>
      </div>
    </DashBoard>
  );
};
