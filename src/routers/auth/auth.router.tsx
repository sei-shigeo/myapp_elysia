import { html } from "@elysiajs/html";
import { Elysia, t } from "elysia";
import { BaseHtml } from "../../components/html/Base";

export const authRouter = new Elysia().group("/auth", (app) =>
  app
    .use(html())
    .get("/sign-in", ({ html }) => html(signIn))
    .post(
      "/sign-in",
      ({ body }) => {
        const { name, email } = body;

        return {
          message: "サインイン できました。",
        };
      },
      {
        body: t.Object({
          name: t.String(),
          email: t.String(),
        }),
      }
    )
    .get("/sign-up", ({ html }) => html(signUp))
    .post(
      "/sign-up",
      ({ body }) => {
        const { name, email, password } = body;

        return {
          message: "サインイン できました。",
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
);

const signIn = () => {
  return (
    <BaseHtml>
      <div>
        <h1>サインイン 画面</h1>
        <div>
          <form action="" method="POST">
            <div>
              <label for="email">Email</label>
              <input type="email" name="email" id="email" />
            </div>
            <div>
              <label for="passward">Passward</label>
              <input type="password" name="passward" id="passward" />
            </div>
            <button type="submit">Sing In</button>
          </form>
        </div>
      </div>
    </BaseHtml>
  );
};

const signUp = () => {
  return (
    <BaseHtml>
      <div>
        <h1>サインアップ 画面</h1>
        <div>
          <form action="" method="POST">
            <div>
              <label for="name">Name</label>
              <input type="name" name="name" id="name" />
            </div>
            <div>
              <label for="email">Email</label>
              <input type="email" name="email" id="email" />
            </div>
            <div>
              <label for="passward">Passward</label>
              <input type="password" name="passward" id="passward" />
            </div>
            <button type="submit">Sing Up</button>
          </form>
        </div>
      </div>
    </BaseHtml>
  );
};
