import { Slot, component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="flex">
      <div class="bg-gray-700 px-4 py-2" id="course-menu">
        Menu
        <nav>
          <ul>
            <li>Chapitre 1</li>
            <li>Chapitre 2</li>
            <li>Chapitre 3</li>
            <li>Chapitre 4</li>
            <li>Chapitre 5</li>
          </ul>
        </nav>
      </div>
      <Slot />
    </div>
  );
});
