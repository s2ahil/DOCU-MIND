import { Faqs } from "./components/faqs";
import { Feature } from "./components/feature";
import { Pricing } from "./components/pricing";
import Link from "next/link";
export default function Home() {
  const faqItems = [
    {
      question: 'Can I get a refund?',
      answer:
        'Yes, you can get a refund within 30 days of your purchase. No questions asked.',
    },
    {
      question: 'What technologies are used?',
      answer:
        'We use Next.js, Tailwind CSS, and Vercel for the deployment.',
    },
    {
      question: 'What do I get if I pre-order?',
      answer:
        'With the pre-order, you get a 50% discount on the final price and a lifetime license for the generated code.',
    },
  ]

  return (
    <main className="prose-base md:prose-xl lg:prose-2xl max-w-[100%]">
      {/* navbar */}
      <div className="navbar">
        <div className="navbar-start">
          <div className="bg-gradient-to-l from-primary to-secondary bg-clip-text text-lg font-bold text-transparent">
          🧠
          </div>
        </div>
        <div className="navbar-center gap-x-6 hidden lg:block">
          <a className="btn btn-ghost hover:bg-transparent relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:w-full after:origin-bottom after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom hover:after:scale-x-100" href="#pricing">Pricing</a>
          <a className="btn btn-ghost hover:bg-transparent relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:w-full after:origin-bottom after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom hover:after:scale-x-100" href="#feature">How it works</a>
          <a className="btn btn-ghost hover:bg-transparent relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:w-full after:origin-bottom after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom hover:after:scale-x-100" href="#faqs">Faqs</a>
        </div>
     
        <div className="navbar-end">
        <Link href="chat-with-docs">
         <button className="btn bg-gradient-to-tl from-primary to-secondary rounded-full text-white" >Start for free</button>
         </Link>
        </div>
     
      </div>
      <div className="relative">
        <div className="absolute inset-0 -z-10 bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
        {/* hero */}
        <div className="hero min-h-screen relative">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,var(--primary-color-light-300),transparent)] lg:bg-[radial-gradient(circle_500px_at_20%_200px,var(--primary-color-light-300),transparent)]"></div>
          <div className="hero-content flex-col lg:flex-row">
            <div className="flex flex-col items-center text-center lg:text-start lg:items-start">
             
              <h2 className="!mt-5 !mb-5">
                Docu-Mind 
              </h2>
              <h2 className="mr-[-0.4em] ml-[-0.4em] text-current bg-[linear-gradient(to_right,var(--primary-color-light-500),var(--primary-color)_4%,var(--primary-color-light-500))] box-decoration-clone my-[0em] px-[0.4em] py-[0.1em] rounded-[0.8em_0.3em] bg-transparent"> PDF chatbot</h2>
              <p className="font-twklausanne-200 text-base p-2">
              Now chat with your  <span className="text-primary underline underline-offset-4 font-extrabold italic">pdf{' '}</span>
              </p>
              <Link href="chat-with-docs" >
              <button className="btn bg-gradient-to-tl from-primary to-secondary rounded-full text-white" href="#">Get Start For Free</button>
              </Link>
              <p className="text-base flex items-center gap-1">
                <span className="text-primary font-semibold animate-pulse inline-flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                  </svg>
                  100% off
                </span>
                for the first 100 customers (10 left)
              </p>
              <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-3">
                <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                  <div className="avatar">
                    <div className="w-12">
                      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                  </div>
                  <div className="avatar">
                    <div className="w-12">
                      <img src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZXxlbnwwfHwwfHx8MA%3D%3D" />
                    </div>
                  </div>
                  <div className="avatar">
                    <div className="w-12">
                      <img src="https://images.unsplash.com/photo-1524666041070-9d87656c25bb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFsZXxlbnwwfHwwfHx8MA%3D%3D" />
                    </div>
                  </div>
                  <div className="avatar">
                    <div className="w-12">
                      <img src="https://media.istockphoto.com/id/1305283732/photo/young-business-woman-stock-photo.webp?b=1&s=170667a&w=0&k=20&c=2V2fQ5hZKB-ijC-KbN8IZhnGRQKWewNUIWfS9_NjWRE=" />
                    </div>
                  </div>
                  
                </div>
                <div className="relative flex flex-col">
                  <span className="absolute animate-ping top-[-25%] left-[48%] lg:top-[40%] lg:left-[-5%] h-[8px] w-[8px] rounded-full opacity-50 bg-primary"></span>
                  <div className="inline-flex justify-center lg:justify-start text-secondary">
                    <svg className="w-5 h-5 text-secondary" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20"><path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"></path></svg>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20"><path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"></path></svg>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20"><path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"></path></svg>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20"><path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"></path></svg>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20"><path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"></path></svg>
                  </div>
                  <span className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                    loved by 2500+ customers
                  </span>
                </div>
              </div>
            </div>
              <iframe
        className="w-full ml-10 lg:max-w-lg rounded-lg shadow-[0_10px_20px_rgba(251,_171,_126,_0.9)]"
        src="https://youtu.be/dAbuybwiPOE?si=fiQ7avvO9MP2ZbU8"
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
          </div>
        </div>

        {/* promise */}
        <Feature/>

        {/* pricing */}
        <Pricing/>

        {/* faqs */}
        <Faqs items={faqItems}/>
      </div>

      {/* footer */}
      <footer className="footer p-10  bg-primary-500 text-gray-800">
        <aside className="w-72">
          <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
          <p>
         Talk with your docs anytime 
          </p>
        </aside>
        {/* <nav>
          <h6 className="footer-title">Product</h6>
          <a className="link link-hover">Pricing</a>
          <a className="link link-hover">Chrome Extension</a>
        </nav> */}
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Security and Privacy</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Terms of Service</a>
          <a className="link link-hover">Contact</a>
        </nav>
      </footer>
    </main>
  );
}
