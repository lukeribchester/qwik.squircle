import { component$ } from "@builder.io/qwik";

export const GenericImplementation = component$(() => {
  return (
    <div id="generic">
      <h2 class="reveal reveal--time reveal-from--left">
        <span class="text-(--color-purple) block">Generic</span> implementation
      </h2>

      <ul class="reveal-group reveal-stagger reveal--time">
        <li>TK</li>
        <li>TK</li>
        <li>TK</li>
      </ul>
    </div>
  );
});
