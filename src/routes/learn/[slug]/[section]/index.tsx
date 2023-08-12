import { component$ } from "@builder.io/qwik";
import Section from "~/components/layout/containers/Section";

export default component$(() => {
  return (
    <>
      <nav q:slot="menu">
        <ol class="inline-flex items-center space-x-1 md:space-x-3">
          <li class="inline-flex items-center">
            <a
              href="#"
              class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              hello
            </a>
          </li>
        </ol>
      </nav>
      <div q:slot="content">
        <Section class="flex">Section 1sdfdsfds</Section>;
      </div>
    </>
  );
});
