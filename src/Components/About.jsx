import React from 'react';
function About() {
  return (
    <section id="about" className="grid  gap-6 p-10 md:grid-cols-2 ">
      <div className="text-center place-content-center">
        <h2 className="text-4xl font-semibold">About Us</h2>
      </div>

      <section id="vision" className="rounded-3xl bg-slate-100 p-5">
        <h3 className="text-2xl font-semibold">Our Vision</h3>
        <p className="mt-4 text-sm leading-7 text-slate-700">
          To revolutionize how businesses connect with their audiences by creating lasting, human-centered digital experiences.
        </p>
      </section>

      <section id="mission" className="rounded-3xl bg-slate-100 p-5">
        <h3 className="text-2xl font-semibold">Our Mission</h3>
        <p className="mt-4 text-sm leading-7 text-slate-700">
          To deliver exceptional ROI by transforming digital challenges into creative, measurable, and impactful solutions.
        </p>
      </section>

      <section id="values" className="rounded-3xl bg-slate-100 p-5">
        <h3 className="text-2xl font-semibold">Our Values</h3>
        <p className="mt-4 text-sm leading-7 text-slate-700">
          To foster authentic digital connections between brands and consumers through transparency, creativity, and cutting-edge technology.
        </p>
      </section>
    </section>
  );
}

export default About;
