import { component$ } from "@builder.io/qwik";
import Section from "~/components/layout/containers/Section";

export default component$(() => {
  return (
    <main>
      <Section class="flex">
        <ol class="inline-flex items-center space-x-1 md:space-x-3">
          <li class="inline-flex items-center">
            <a
              href="#"
              class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              <svg
                class="w-3 h-3 mr-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
              </svg>
            </a>
          </li>
          <li>
            <div class="flex items-center">
              <svg
                class="w-3 h-3 text-gray-400 mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <a
                href="#"
                class="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
              >
                Nom du cours
              </a>
            </div>
          </li>
          <li>
            <div class="flex items-center">
              <svg
                class="w-3 h-3 text-gray-400 mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <a
                href="#"
                class="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
              >
                Sections
              </a>
            </div>
          </li>

          <li aria-current="page">
            <div class="flex items-center">
              <svg
                class="w-3 h-3 text-gray-400 mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                Nom du cours
              </span>
            </div>
          </li>
        </ol>
      </Section>
      <Section class="bg-slate-600 py-8">
        <h1 class="text-3xl">Nom du cours</h1>
        <h2 class="text-xl">Sous-titre du cours</h2>
        <p>Description</p>
      </Section>
      <Section class=" py-8">
        <h2 class="text-2xl">Sections</h2>
        <div
          class="
        flex flex-row
        "
          id="Sections"
        >
          <article class="flex gap-4 w-full">
            <h3 class="text-xl">Section 1</h3>
            <table class="w-full text-left">
              <thead>
                <tr>
                  <th>Chapitre</th>
                  <th>Durée</th>
                  <th>Progression</th>
                  <th>Questions</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b-2">
                  <td>Chapitre 1</td>
                  <td>1h</td>
                  <td>0%</td>
                  <td>0/0</td>
                </tr>
                <tr class="border-b-2">
                  <td>Chapitre 1</td>
                  <td>1h</td>
                  <td>0%</td>
                  <td>0/0</td>
                </tr>

                <tr class="border-b-2">
                  <td>Chapitre 1</td>
                  <td>1h</td>
                  <td>0%</td>
                  <td>0/0</td>
                </tr>

                <tr class="border-b-2">
                  <td>Chapitre 1</td>
                  <td>1h</td>
                  <td>0%</td>
                  <td>0/0</td>
                </tr>
              </tbody>
            </table>
          </article>
        </div>
      </Section>
    </main>
  );
});
