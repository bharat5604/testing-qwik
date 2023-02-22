import { component$, Slot } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div>
      <p>adding this layout to feature</p>
      <div>
        <Slot />
      </div>
    </div>
  );
});
