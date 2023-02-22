import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { QwikLogo } from "../icons/qwik";

export default component$(() => {
  return (
    <header class="flex justify-between items-center capitalize">
      <div class="">
        <Link href="/" title="qwik">
          <QwikLogo />
        </Link>
      </div>
      <ul class="flex gap-4">
        <li>
          <Link href="/todolist">todo</Link>
        </li>
        <li>
          <Link href="/flower">flower</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/test">test</Link>
        </li>
        <li>
          <Link href="/fundamental/">Features</Link>
        </li>
      </ul>
    </header>
  );
});
