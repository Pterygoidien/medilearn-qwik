import { component$ } from "@builder.io/qwik";
import Platform from "~/components/layout/containers/Platform";
import Section from "~/components/layout/containers/Section";

export default component$(() => {
  return (
    <Platform>
      <div q:slot="sidebar">Sidebar</div>
      <Section>Section 1</Section>
    </Platform>
  );
});
