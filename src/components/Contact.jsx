import { useState, useRef } from 'react';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import PageMeta from './PageMeta';

export default function Contact() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaToken, setCaptchaToken] = useState("");
  const captchaRef = useRef(null);

  const onCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!captchaToken) {
      setResult("captcha");
      return;
    }

    setIsSubmitting(true);
    setResult("");

    try {
      const formData = new FormData(event.target);
      formData.append("access_key", "a023de76-a415-41c2-86a2-a0fad03e8061");
      formData.append("h-captcha-response", captchaToken);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("success");
        event.target.reset();
        setCaptchaToken("");
        captchaRef.current?.resetCaptcha();
      } else {
        setResult("error");
      }
    } catch {
      setResult("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="px-6 py-20 md:py-28">
      <PageMeta title="Contact" description="Get in touch with Casey Chalfant. Send a message about product management opportunities." />
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
          Get in touch
        </h2>
        <p className="text-[#9ca3af] mb-10">
          Fill out the form below and I'll be in touch.
        </p>

        <form onSubmit={onSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
              Name <span className="text-[#3b82f6]">*</span>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="w-full px-4 py-3 rounded-lg text-sm text-white placeholder-[#9ca3af] bg-[#1a1d27] border border-[#2a2d37] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
              Email <span className="text-[#3b82f6]">*</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full px-4 py-3 rounded-lg text-sm text-white placeholder-[#9ca3af] bg-[#1a1d27] border border-[#2a2d37] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
              Message <span className="text-[#3b82f6]">*</span>
            </label>
            <textarea
              name="message"
              id="message"
              required
              rows={5}
              className="w-full px-4 py-3 rounded-lg text-sm text-white placeholder-[#9ca3af] resize-y bg-[#1a1d27] border border-[#2a2d37] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]"
              placeholder="What would you like to talk about?"
            />
          </div>

          <div>
            <HCaptcha
              sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
              reCaptchaCompat={false}
              onVerify={onCaptchaChange}
              theme="dark"
              ref={captchaRef}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary px-6 py-3 font-medium text-sm rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send"}
          </button>

          {result === "captcha" && (
            <p className="text-[#f59e0b] text-sm font-medium" role="alert" aria-live="polite">
              Please complete the captcha before sending.
            </p>
          )}
          {result === "success" && (
            <p className="text-[#10b981] text-sm font-medium" role="status" aria-live="polite">
              Message sent! I'll get back to you soon.
            </p>
          )}
          {result === "error" && (
            <p className="text-red-400 text-sm font-medium" role="alert" aria-live="polite">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
