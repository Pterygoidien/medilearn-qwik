import { component$ } from "@builder.io/qwik";
import { useAuthSignin } from "~/routes/plugin@auth";
import { Form } from "@builder.io/qwik-city";
export default component$(() => {
  const signIn = useAuthSignin();
  console.log("signIn", signIn);
  return (
    <>
      <Form action={signIn}>
        <input type="hidden" name="proviedId" value="github" />
        <input
          type="hidden"
          name="options.callbackUrl"
          value="http://localhost:5000/auth/github/callback"
        />
        <button>Sign in</button>
      </Form>
    </>
  );
});
