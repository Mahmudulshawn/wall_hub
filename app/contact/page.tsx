import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <div className="max-w-5xl mx-auto mt-16">
      <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>

      <div className="w-full flex justify-center items-center bg-card rounded-lg outline">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
