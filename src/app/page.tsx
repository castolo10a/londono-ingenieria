"use client";

import { Reveal } from "@/components";
import { AboutUs, ContactForm, Home, Services } from "@/templates";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const section = document.querySelector(hash);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, []);

  return (
    <div>
      <Reveal>
        <Home />
      </Reveal>
      <Reveal delay={0.2}>
        <AboutUs />
      </Reveal>
      <Reveal delay={0.4}>
        <Services />
      </Reveal>
      <Reveal delay={0.6}>
        <ContactForm />
      </Reveal>
    </div>
  );
}
