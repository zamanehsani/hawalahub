const contactNumber = "+1 (123) 456-7890";
const socialLinks = [
  { name: "Twitter", url: "https://twitter.com/yourprofile" },
  { name: "LinkedIn", url: "https://linkedin.com/in/yourprofile" },
  { name: "Instagram", url: "https://instagram.com/yourprofile" },
];

const ContactInfo: React.FC = () => (
  <section className="حط-۵ overflow-hidden py-10">
    <div className={`mx-auto w-full text-center`}>
      <h2 className="mb-4 text-3xl leading-tight! font-bold text-black sm:text-4xl md:text-[45px] dark:text-white">
        راه های ارتباطی
      </h2>
      <p className="text-body-color px-5 text-base leading-relaxed! md:text-lg">
        ما هميشه در حدمت مشتریان خود هستیم. از طریق های زیر مستقیم با ما در
        ارتیاط شوید.
      </p>
    </div>
    <div className="container">
      <div className="mt-8 flex justify-center gap-6">
        <a
          href="https://facebook.com/hawalahub"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="rounded-lg border p-3 text-2xl hover:bg-indigo-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-facebook-icon lucide-facebook"
          >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
        </a>
        <a
          href="https://instagram.com/hawalahub"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="rounded-lg border p-3 text-2xl hover:bg-indigo-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-instagram-icon lucide-instagram"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
        </a>
        <a
          href="https://tiktok.com/@hawalahub"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok"
          className="rounded-lg border p-3 text-2xl hover:bg-indigo-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-music2-icon lucide-music-2"
          >
            <circle cx="8" cy="18" r="4" />
            <path d="M12 18V2l7 4" />
          </svg>
        </a>
        <a
          href="https://wa.me/971566652534"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="rounded-lg border p-3 text-2xl hover:bg-indigo-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-phone-call-icon lucide-phone-call"
          >
            <path d="M13 2a9 9 0 0 1 9 9" />
            <path d="M13 6a5 5 0 0 1 5 5" />
            <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
          </svg>
        </a>
        <a
          href="https://x.com/hawalahub"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="rounded-lg border p-3 text-2xl hover:bg-indigo-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-twitter-icon lucide-twitter"
          >
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
          </svg>
        </a>
      </div>
    </div>
  </section>
);

export default ContactInfo;
