import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { QwikReveal } from "@lgr.dev/qwik-reveal";

import { Screen } from "../components/screen";
import { ScrollContainer } from "../components/scroll-container";
import { AppleImplementation } from "../components/sections/apple";
import { GenericImplementation } from "../components/sections/generic";
import { Hero } from "../components/sections/hero";


export default component$(() => {
  return (
    <>
      <QwikReveal/>
      <ScrollContainer>
        <Screen>
          <Hero/>
        </Screen>

        <Screen>
          <AppleImplementation/>
        </Screen>

        <Screen>
          <GenericImplementation/>
        </Screen>
      </ScrollContainer>
    </>
  );
});

export const head: DocumentHead = {
  title: "Qwik Squircle - @lgr.dev/qwik-squircle",
  meta: [
    {
      name: "description",
      content: "Squircle shapes for Qwik applications",
    },
  ],
};
