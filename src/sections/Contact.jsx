import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  // Initialize EmailJS with public key if available
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  if (publicKey) {
    emailjs.init(publicKey);
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Basic validation
    if (!formData.name.trim()) {
      setIsLoading(false);
      showAlertMessage("danger", "Please enter your name.");
      return;
    }

    if (!formData.email.trim()) {
      setIsLoading(false);
      showAlertMessage("danger", "Please enter your email.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setIsLoading(false);
      showAlertMessage("danger", "Please enter a valid email address.");
      return;
    }

    if (!formData.message.trim()) {
      setIsLoading(false);
      showAlertMessage("danger", "Please enter a message.");
      return;
    }

    if (formData.message.trim().length < 10) {
      setIsLoading(false);
      showAlertMessage("danger", "Please enter a message with at least 10 characters.");
      return;
    }

    // Check if EmailJS environment variables are configured
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    
    if (!serviceId || !templateId || !publicKey) {
      setIsLoading(false);
      console.error("EmailJS configuration missing:", {
        serviceId: !!serviceId,
        templateId: !!templateId,
        publicKey: !!publicKey,
      });
      showAlertMessage(
        "danger",
        "Contact form is not configured. Please contact the site owner."
      );
      return;
    }

    try {
      console.log("Form submitted:", formData);
      const response = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          to_name: "Rijul",
          from_email: formData.email,
          to_email: "rijulyadav2002@gmail.com",
          message: formData.message,
        }
      );
      console.log("EmailJS Success:", response);
      setIsLoading(false);
      setFormData({ name: "", email: "", message: "" });
      showAlertMessage("success", "Your message has been sent successfully!");
    } catch (error) {
      setIsLoading(false);
      console.error("EmailJS Error:", error);
      console.error("Error details:", error.text || error.message || error);
      
      // Provide more specific error messages
      let errorMessage = "Something went wrong! Please try again later.";
      if (error.text) {
        errorMessage = `Error: ${error.text}`;
      } else if (error.message) {
        errorMessage = `Error: ${error.message}`;
      }
      
      showAlertMessage("danger", errorMessage);
    }
  };
  return (
    <section id="contact" className="relative flex items-center c-space section-spacing">
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      {showAlert && <Alert type={alertType} text={alertMessage} />}
      <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading">Let&apos;s Talk</h2>
          <p className="font-normal text-neutral-400">
            Whether you&apos;re looking to build a new website, improve your existing
            platform, or bring a unique project to life, I&apos;m here to help
          </p>
          <div className="flex flex-col gap-3 pt-5 border-t border-white/10 w-full">
            <h3 className="text-lg font-semibold text-white">Contact Information</h3>
            <div className="flex flex-col gap-2 text-neutral-400">
              <a href="tel:+918218859582" className="flex items-center gap-2 hover:text-white transition-colors">
                <span className="font-medium">Phone:</span>
                <span>+91 8218859582</span>
              </a>
              <a href="mailto:rijulyadav2002@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <span className="font-medium">Email:</span>
                <span>rijulyadav2002@gmail.com</span>
              </a>
              <div className="flex items-center gap-2">
                <span className="font-medium">LinkedIn:</span>
                <a href="https://www.linkedin.com/in/rijul-yadav-1567b6324/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  linkedin.com/in/rijul-yadav-1567b6324
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">GitHub:</span>
                <a href="https://github.com/rijulyadav" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  github.com/rijulyadav
                </a>
              </div>
            </div>
          </div>
        </div>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="name" className="field-label">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="field-input field-input-focus"
              placeholder="John Doe"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="field-label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="field-input field-input-focus"
              placeholder="JohnDoe@email.com"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="message" className="field-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              type="text"
              rows="4"
              className="field-input field-input-focus"
              placeholder="Share your thoughts..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {!isLoading ? (
              "Send"
            ) : (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Sending...
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
