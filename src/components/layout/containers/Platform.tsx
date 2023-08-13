import { Slot, component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <div id="menu-sidebar" class="bg-gray-800 py-4 px-8">
        <ul>
          <li>
            <Link href="./">Home</Link>
          </li>
        </ul>
        <Slot name="sidebar" />
      </div>

      <Slot />
    </>
  );
});
