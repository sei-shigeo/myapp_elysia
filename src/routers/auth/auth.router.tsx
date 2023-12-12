import { html } from "@elysiajs/html";
import { Elysia, t } from "elysia";
import { BaseHtml } from "../../components/html/Base";
import { authModel, authType } from "./auth.model";

export const authRouter = new Elysia().group("/auth", (app) =>
  app
    .use(authModel)
    .use(html())
    .get("/sign-in", ({ html }) => html(signIn))
    .post(
      "/sign-in",
      ({ body }) => {
        const { email, password } = body;

        return {
          message: "サインイン できました。",
        };
      },
      {
        body: "auth.signin",
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
        body: "auth.signup",
      }
    )
);

interface clientFormProps {
  title: string;
  name?: string;
  email: string;
  password: string;
  status?: boolean;
}
const signIn = () => {
  return (
    <BaseHtml>
      <ClientForm
        title="Sign In"
        name="name"
        email="email"
        password="passward"
      />
    </BaseHtml>
  );
};

const signUp = () => {
  return (
    <BaseHtml>
      <ClientForm
        title="Sign Up"
        email="email"
        password="passward"
        status
      />
    </BaseHtml>
  );
};

const ClientForm = (props: clientFormProps) => {
  return (
    <main class="flex justify-center w-full ">
      <section class="w-[560px] m-36">
        <h1>{props.title}</h1>
        <div class="my-10 py-10 px-6 border rounded shadow-xl">
          <form action="" method="POST">
            {props.status && (
              <div class="mb-4 flex items-center ">
                <label for={props.name} class="flex-none w-32">
                  {props.name}
                </label>
                <input
                  type="text"
                  name={props.name}
                  id={props.name}
                  placeholder={props.name}
                  class="flex-1"
                />
              </div>
            )}
            <div class="mb-4 flex items-center ">
              <label for={props.email} class="flex-none w-32">
                {props.email}
              </label>
              <input
                type={props.email}
                name={props.email}
                id={props.email}
                placeholder={props.email}
                class="flex-1"
              />
            </div>
            <div class="mt-4 flex items-center">
              <label for={props.password} class="flex-none w-32">
                {props.password}
              </label>
              <input
                type={props.password}
                name={props.password}
                id={props.password}
                placeholder={props.password}
                class="flex-1"
              />
            </div>
          </form>
        </div>
        <button type="submit" class="primary_button">
          {props.title}
        </button>
      </section>
    </main>
  );
};
