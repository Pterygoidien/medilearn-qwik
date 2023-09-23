import { component$ } from "@builder.io/qwik";
import Platform from "~/components/layout/containers/Platform";
import Section from "~/components/layout/containers/Section";

export default component$(() => {
  return (
    <Platform>
      <div q:slot="sidebar">Sidebar</div>
      <Section class="w-full text-left">
        <h1>Chapitres de cette section</h1>
        <p>Description de cette section</p>
        <table class="w-full">
          <thead>
            <tr>
              <th>Chapitre</th>
              <th>Titre</th>
              <th>Durée</th>
              <th>Exercices</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Titre du chapitre</td>
              <td>2:30</td>
              <td>3</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Titre du chapitre</td>
              <td>2:30</td>
              <td>3</td>
            </tr>
          </thead>
        </table>
      </Section>
    </Platform>
  );
});
