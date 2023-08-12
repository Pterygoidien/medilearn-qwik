import { Slot, component$ } from "@builder.io/qwik";
import Footer from "~/components/layout/footer/Footer";

export default component$(() => {
  return (
    <>
      <main>
        <Slot />
      </main>
      <Footer />
    </>
  );
});
