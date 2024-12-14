import SubHeader from "@/src/components/subHeader";

export default function Info() {
  return (
    <div className="md:mt-16 mt-16 mx-4 md:mx-16">
      <p className="md:text-4xl text-3xl w-5/6 font-br-firma-medium leading-8 mb-8">
        Hey! I’m Daniel Adonis — a freelance graphic designer based in Abuja,
        Nigeria.
      </p>
      <div>
        <SubHeader subheading="About"></SubHeader>
        <p className="mt-4">
          My work is both character and colour-driven, and whilst graphic, it
          retains a tactile warmth and quirkiness. I aim to show intimate
          moments in familiar worlds that have been featured in editorials, book
          covers, branding and advertising campaigns.
        </p>
      </div>
    </div>
  );
}
