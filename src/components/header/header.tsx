import { component$ } from "@builder.io/qwik";
import { QwikLogo } from "../icons/qwik";

export default component$(() => {
  return (
    <header class="flex justify-between items-center capitalize">
      <div class="">
        <a href="/" title="qwik">
          <QwikLogo />
        </a>
      </div>
      <ul class="flex gap-4">
        <li>
          <a href="/todolist">todo</a>
        </li>
        <li>
          <a href="/flower">flower</a>
        </li>
        {/* <li>
          <a href="/">Tutorials</a>
        </li> */}
      </ul>
    </header>
  );
});
