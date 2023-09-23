import { Slot, component$ } from "@builder.io/qwik";

import Platform from "~/components/layout/containers/Platform";

export default component$(() => {
  return (
    <main class="flex">
      <Slot />
    </main>
  );
});
