import Link from "next/link";

const navActions = [
  { title: "How it Works", route: "#how-it-works" },
  { title: "About", route: "#about-us" },
  { title: "Testimonials", route: "#testimonials" },
  { title: "Faqs", route: "faqs" },
  { title: "Contact", route: "#contact" },
];

const authActions = [
  { title: "Login", route: "login", filled: false },
  { title: "Sign Up", route: "register", filled: true },
];

export default function Index() {
  return (
    <div className="p-4 md:p-8 pb-20">
      <div className="grid md:grid-cols-[1fr,2fr,1fr] items-center lg:px-small">
        <Link href="/" className="text-2xl font-bold text-brand-500">
          Lite Pay
        </Link>
        <div className="hidden md:flex gap-x-4">
          {navActions.map((navAction, index) => (
            <Link
              key={index}
              href={navAction.route}
              className="md:text-sm lg:text-base hover:font-bold hover:text-brand"
            >
              {navAction.title}
            </Link>
          ))}
        </div>
        <div className=" hidden md:flex justify-end space-x-4">
          {authActions.map((route, index) => (
            <Link
              key={index}
              href={route.route}
              className={`justify-self-end rounded-[5rem] border md:px-4 2xl:px-8 py-2 text-[0.8rem] lg:text-[1rem] font-semibold transition-transform duration-300 ease-in-out ${
                route.filled
                  ? "border-white bg-brand text-white hover:bg-brand-600"
                  : "border-brand bg-white text-brand hover:text-white hover:border-white hover:bg-brand"
              }`}
            >
              {route.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
