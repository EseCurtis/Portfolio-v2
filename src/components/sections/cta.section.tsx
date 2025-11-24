import { Instagram, Mail, Phone, Twitter } from "lucide-react";

export function CTASection() {
  return (
    <div className="z-10  w-full flex flex-col items-center justify-center py-mg">
      <h3 className="text-4xl font-mona-sans-exp font-bold text-center">
        Do You Have Any Ideas?
      </h3>
      <p className="text-center">
        Whether you’re creating something new or improving what you already
        have, <br />I can help elevate your product experience.
        Don’t hesitate to get in touch.
      </p>

      <div className=" gap-7 flex items-center mt-mg">
        <div className="flex gap-3 items-center">
          <Mail size={17} />
          <span className="font-mona-sans-exp">curtisese52@gmail.com</span>
        </div>
        <span>•</span>
        <div className="flex gap-3 items-center">
          <Phone size={17} />
          <span className="font-mona-sans-exp">+234 81 360 468 62</span>
        </div>
        <span>•</span>
        <div className="flex gap-7">
          <Instagram size={24} />
          <span>•</span>
          <Twitter size={24} />
        </div>
      </div>
    </div>
  );
}
