"use client";
import BrandLogos from "@/src/components/brandLogos";
import SubHeader from "@/src/components/subHeader";

export default function Info() {
  return (
    <div className="md:mt-16 mt-16 mx-4 md:mx-16">
      <p className="md:text-4xl text-4xl w-full font-br-firma-medium leading-10 mb-8 tracking-tight">
        Hey! I’m Daniel Adonis, a Freelance Graphic Designer and Web Developer
        based in Abuja, Nigeria.
      </p>
      <div className="mb-4">
        <SubHeader subheading="About" classes=""></SubHeader>
        <p className="mt-4 md:w-4/6 font-br-firma-medium leading-7 tracking-tight">
          My work is both character and colour-driven, and whilst graphic, it
          retains a tactile warmth and quirkiness. I aim to show intimate
          moments in familiar worlds that have been featured in editorials, book
          covers, branding and advertising campaigns.
        </p>
      </div>
      <section>
        <SubHeader subheading="Work Experience"></SubHeader>
        <div>
          <h1 className="text-2xl font-br-firma-medium tracking-tight my-4">
            I have worked in all of these places
          </h1>
          <div className="mb-4">
            <h1>Graphic Designer</h1>
            <h3>Lumini Design Agency</h3>
            <p>2023 - 2024</p>
          </div>
        </div>
      </section>
      <section className="mb-4">
        <SubHeader
          subheading="Brands I’ve partnered With"
          classes={"mb-4"}
        ></SubHeader>
        <div className="grid grid-cols-3 gap-4 ">
          <BrandLogos />
        </div>
      </section>
    </div>
  );
}
