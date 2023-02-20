import { component$ } from "@builder.io/qwik";
import { action$, loader$, Form, zod$, z } from "@builder.io/qwik-city";

interface ContactDetails {
  name: string;
  age: string;
  city: string;
  state: string;
  pincode: string;
  business: string;
}

export const contactDetails: ContactDetails[] = [];

export const contactLoader = loader$(() => {
  return contactDetails;
});

export const formAction = action$(
  (item) => {
    console.log(item);
    contactDetails.push(item);
    return {
      success: true,
    };
  },
  zod$({
    name: z.string(),
    age: z.number(),
    city: z.string(),
    state: z.string(),
    pincode: z.number(),
    business: z.string(),
  })
);

export default component$(() => {
  const contact = contactLoader();
  const action = formAction();
  console.log("action", contact);
  return (
    <div class="w-[450px] mx-auto shadow-md rounded-md p-4 mt-30">
      <h1 class="text-center font-semibold text-lg text-orange-400 underline mb-5">
        Contact Details
      </h1>
      <Form action={action} class="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label class="text-md font-semibold text-blue-400">Full Name *</label>
          <input
            type="text"
            class="h-10 rounded-lg border shadow p-3"
            placeholder="Write your full name"
            name="name"
          />
          {action?.fail?.fieldErrors.name && <div>{action?.fail?.message}</div>}
          {action.value?.success && <div>User added successfully</div>}
        </div>
        <div className="flex flex-col gap-1">
          <label class="text-md font-semibold text-blue-400">Age *</label>
          <input
            type="number"
            class="h-10 rounded-lg border shadow p-3"
            placeholder="Your age"
            name="age"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label class="text-md font-semibold text-blue-400">City *</label>
          <input
            type="text"
            class="h-10 rounded-lg border shadow p-3"
            placeholder="Write your city"
            name="city"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label class="text-md font-semibold text-blue-400">State *</label>
          <input
            type="text"
            class="h-10 rounded-lg border shadow p-3"
            placeholder="Write your State"
            name="state"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label class="text-md font-semibold text-blue-400">Pincode *</label>
          <input
            type="number"
            class="h-10 rounded-lg border shadow p-3"
            placeholder="Write your Pincode"
            name="pincode"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label class="text-md font-semibold text-blue-400">Business *</label>
          <input
            type="text"
            class="h-10 rounded-lg border shadow p-3"
            placeholder="Write your business"
            name="business"
          />
        </div>
        <button
          type="submit"
          class={
            "bg-orange-500 h-8 rounded-md uppercase text-white font-semibold"
          }
        >
          submit
        </button>
      </Form>
    </div>
  );
});
