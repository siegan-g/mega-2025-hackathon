"use server";
import { z } from "zod";

const schema = z.object({
  firstName: z.string().min(1, "Please enter your name"),
  lastName: z.string().min(1, "Please enter your name"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(1, "Please enter a message"),
});

export async function submitForm(initialState, formData) {
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const email = formData.get("email");
  const message = formData.get("message");

  try {
    // Validate the form data
    const result = schema.safeParse({
      firstName,
      lastName,
      email,
      message,
    });
    console.log(result);

    if (!result.success) {
      // Return validation errors
      initialState.returnMessage = "Please fill out all required fields";
      return {
        ...initialState,
        errors: result.error.flatten().fieldErrors,
      };
    }

    // Process the form data (e.g., send email)
    // ...

    // Return success state
    return {
      firstName,
      lastName,
      email,
      message,
      returnMessage: "Message Sent Successfully",
    };
  } catch (error) {
    // Handle any errors
    return {
      ...data,
      returnMessage: "Something went wrong try again later",
    };
  }
}
