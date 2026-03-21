"use client";

import emailjs from "@emailjs/browser";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FiSend } from "react-icons/fi";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let errors = {};
    if (!formData.name) {
      errors.name = "Name is required";
    }
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (
      !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(formData.email)
    ) {
      errors.email = "Invalid email format";
    }
    if (!formData.message) {
      errors.message = "Message is required";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setIsSending(true);

      emailjs
        .send(
          process.env.NEXT_PUBLIC_SERVICE_ID,
          process.env.NEXT_PUBLIC_TEMPLATE_ID,
          formData,
          process.env.NEXT_PUBLIC_PUBLIC_KEY
        )
        .then(() => {
          toast.success("Message sent successfully");
          setFormData({ name: "", email: "", message: "" });
        })
        .catch((error) => {
          console.log("FAILED...", error);
          toast.error("Failed to send message");
        })
        .finally(() => {
          setIsSending(false);
        });
    }
  };

  return (
    <div className="p-6 w-full">
      <Toaster />

      <div>
        <form onSubmit={handleSubmit} className="mt-10 w-full">
          <div className="mb-4 flex flex-col gap-4 w-full">
            <div className="w-full">
              <Input
                type="text"
                name="name"
                value={formData.name}
                placeholder="Name"
                onChange={handleChange}
              />
              {errors.name && (
                <p className="text-sm text-rose-800">{errors.name}</p>
              )}
            </div>

            <div className="w-full">
              <Input
                type="email"
                name="email"
                value={formData.email}
                placeholder="Email"
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-sm text-rose-800">{errors.email}</p>
              )}
            </div>
          </div>

          <div className="mb-4">
            <Textarea
              name="message"
              value={formData.message}
              placeholder="Message"
              onChange={handleChange}
              rows="6"
            />
            {errors.message && (
              <p className="text-sm text-rose-800">{errors.message}</p>
            )}
          </div>

          <Button
            variant="secondary"
            type="submit"
            className={`mb-8 w-full ${
              isSending ? "cursor-not-allowed opacity-50" : ""
            }`}
            disabled={isSending}
          >
            <div className="flex items-center justify-center gap-2">
              {isSending ? "Sending..." : "Send"}
              <FiSend />
            </div>
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
