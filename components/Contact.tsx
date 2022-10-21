import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};

type FormValues = {
  firstName: string;
  lastName: string;
  subject: string;
  email: string;
};

function Contact({}: Props) {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (formData) =>
    console.log(formData);

  return (
    <div className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 mx-auto  justify-evenly items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I've got just what you need.{" "}
          <span className="underline decoration-[#F7AB0A]/50">Let's Talk.</span>
        </h4>
        <div className="space-y-10">
          <div className="flex justify-center items-center space-x-5">
            <PhoneIcon className="text-[#F7AB0A] w-7 h-7" />
            <p>407-427-6847</p>
          </div>
          <div className="flex justify-center items-center space-x-5">
            <EnvelopeIcon className="text-[#F7AB0A] w-7 h-7 animate-pulse" />
            <p>gthelight@gmail.com</p>
          </div>
          <div className="flex justify-center items-center space-x-5">
            <MapPinIcon className="text-[#F7AB0A] w-7- h-7" />
            <p>123 Developer Lane</p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-2 w-fit mx-auto"
          >
            <div className="flex space-x-2">
              <input className="contactInput" type="text" placeholder="Name" />
              <input
                className="contactInput"
                type="email"
                placeholder="Email"
              />
            </div>
            <input className="contactInput" type="text" placeholder="Subject" />
            <textarea
              className="contactInput"
              placeholder="Enter message here..."
            />
            <button
              className="bg-[#F7AB0A] px-10 py-5 rounded-md font-bold text-black"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
