"use client";
import React, { useActionState } from "react";
import { Label } from "./Label";
import { Input } from "./Input";
import { cn } from "../lib/utils";
import { Github } from "lucide-react";
import { Header } from "./Header";
import { submitForm } from "../actions/submit-form";

export default function Form() {
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    returnMessage: "",
    errors: {},
  };
  const [state, formAction] = useActionState(submitForm, initialState);

  const handleClick = () => {
    window.open("https://github.com/siegan-g/mega-2025-hackathon", "_blank");
  };
  return (
    <section id="contact" className="pt-30 px-12">
      <Header
        heading="Any Questions? Send Us A Message"
        subtitle="Want to know more about our platform? Did something break? We're here to help!"
      />
      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:px-8 shadow-input bg-white dark:bg-black">
        <form className="my-8" action={formAction}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="firstname">First name</Label>
              <Input
                id="firstname"
                name="firstName"
                placeholder="John"
                defaultValue={state.firstName}
                type="text"
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname">Last name</Label>
              <Input
                id="lastname"
                name="lastName"
                placeholder="Doe"
                defaultValue={state.lastName}
                type="text"
              />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              placeholder="johndoe@hotmail.com"
              defaultValue={state.email}
              type="email"
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="message">Message</Label>
            <Input
              id="message"
              name="message"
              placeholder="Send Message"
              defaultValue={state.message}
              type="text"
              textArea={true}
              className="h-20"
            />
          </LabelInputContainer>{" "}
          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] cursor-pointer"
            type="submit"
          >
            {state.returnMessage ? state.returnMessage : "Send Message"}
            <BottomGradient />
          </button>
          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
          <div className="flex flex-col space-y-4">
            <button
              className=" relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)] cursor-pointer"
              type="submit"
              onClick={handleClick}
            >
              <Github className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
              <span className="text-neutral-700 dark:text-neutral-300 text-sm font-semibold ">
                GitHub
              </span>
              <BottomGradient />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
