import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};

type FormValues = {
  name: string;
  subject: string;
  email: string;
  message: string;
};

function Contact({}: Props) {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (formData) =>
    (window.location.href = `mailto:gthelight@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`);

  return (
    <div className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 mx-auto  justify-end md:justify-evenly items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-4 md:space-y-10">
        <h4 className="text-2xl md:text-4xl font-semibold text-center mb-2">
          I've got just what you need. <br />
          <span className="underline decoration-[#F7AB0A]/50">Let's Talk.</span>
        </h4>
        <div className="mt-4 space-y-2 md:space-y-10">
          <div className="flex justify-center items-center space-x-5">
            <PhoneIcon className="text-[#F7AB0A] w-7 h-7" />
            <p>407-427-6847</p>
          </div>
          <div className="flex justify-center items-center space-x-5">
            <EnvelopeIcon className="text-[#F7AB0A] w-7 h-7 animate-pulse" />
            <p>gthelight@gmail.com</p>
          </div>
          <div className="flex justify-center items-center space-x-5 mb-4">
            <MapPinIcon className="text-[#F7AB0A] w-7- h-7" />
            <p>Orlando, Florida</p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-2 w-fit mx-auto"
          >
            <div className="flex-col space-y-2 md:flex md:space-x-2">
              <input
                // register FormValues
                {...register("name")}
                className="contactInput w-[295px] sm:w-[225px] h-[48px] sm:h-[57px]"
                type="text"
                placeholder="Name"
              />
              <input
                {...register("email")}
                className="contactInput w-[295px] sm:w-[225px] h-[48px] sm:h-[57px]"
                type="email"
                placeholder="Email"
              />
            </div>
            <input
              {...register("subject")}
              className="contactInput h-[48px] sm:h-[57px]"
              type="text"
              placeholder="Subject"
            />
            <textarea
              {...register("message")}
              className="contactInput"
              placeholder="Enter message here..."
            />
            <button
              className="bg-[#F7AB0A] px-10 py-5 rounded-md font-bold text-black mb-20 sm:mb-0"
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
