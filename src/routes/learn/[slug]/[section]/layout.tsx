import { Slot, component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <main class="flex">
      <div class="bg-gray-700 px-4 py-2" id="course-menu">
        Menu
        <Slot name="menu" />
      </div>
      <Slot name="content" />
    </main>
  );
});
