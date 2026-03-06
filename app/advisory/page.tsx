import React from "react";
import Image from "next/image";
const Page = () => {
  return (
    //  ADVISORY COUNCIL (ABUJA)
    <section
      id="advisory"
      className="py-24 bg-[#FDFBF7] border-t border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h4 className="text-[#C5A059] uppercase tracking-widest text-sm font-bold mb-4">
            Strategic Guidance
          </h4>
          <h2 className="font-serif text-4xl text-[#1A202C]">
            The Advisory Council
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto font-serif italic">
            Guided by leaders in medicine and enterprise strategy.
          </p>
        </div>
        <div className="space-y-24">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="relative w-full md:w-1/3">
            <Image src='/images/advisory/Charles.JPG'
            alt="Professor Charles Ameh"
            width={400}
            height={500}
            className="w-full h-auto"
            />
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="font-serif text-2xl mb-1 text-[#1A202C]">
                Professor Charles Ameh
              </h3>
              <p className="text-xs text-[#C5A059] uppercase tracking-widest font-bold mb-6">
                PhD, MPH, FWACS, FRSPH, FRCOG, SFHEA
              </p>
              <div className="space-y-4 text-sm text-gray-700 leading-relaxed text-justify">
                <p>
                  Professor Charles Ameh is a Professor of Global Maternal
                  Health at the Liverpool School of Tropical Medicine, United
                  Kingdom, and a consultant obstetrician with over 20 years of
                  clinical, academic, and global leadership experience in
                  women’s health. His work focuses on improving the quality,
                  safety, and experience of care for women across the life
                  course, including pregnancy preparation, childbirth,
                  postpartum recovery, and the management of complex maternal
                  health conditions.
                </p>
                <p>
                  He is internationally recognised for his leadership in
                  advancing evidence-based maternal and pelvic health care,
                  particularly in strengthening systems that support safe
                  childbirth, postnatal recovery, and long-term physical
                  wellbeing for women. Professor Ameh has led major global
                  health programmes across Africa and Asia in collaboration with
                  WHO, UNICEF, UNFPA, and national governments, helping to
                  translate global standards of care into practical, accessible
                  services that improve outcomes and restore women’s health and
                  function.
                </p>
                <p>
                  His expertise spans clinical obstetrics, postpartum recovery,
                  fertility and pre-pregnancy optimisation, and the integration
                  of innovative care models that bridge the gap between acute
                  medical care and full functional recovery. He has published
                  extensively in leading international journals and has played
                  key advisory roles in shaping maternal health policy,
                  quality-of-care frameworks, and clinical practice standards
                  globally.
                </p>
                <p>
                  As an Advisory Board Member at J&I Elite Health & Wellness,
                  Professor Ameh provides strategic clinical and scientific
                  guidance to support the delivery of world-class,
                  evidence-based restorative care for women. His role supports
                  the organisation’s mission to bring global standards of
                  maternal, pelvic, and restorative health care closer to home,
                  ensuring women receive the highest quality care to prepare for
                  childbirth, recover fully after delivery, and maintain
                  lifelong health and wellbeing.
                </p>
              </div>
            </div>
          </div>

          {/* Mariam Momodu  */}
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="relative w-full md:w-1/3">
            <Image src='/images/advisory/Mariam.JPG'
            alt="Mariam Momodu"
            width={400}
            height={500}
            className="w-full h-auto"
            />
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="font-serif text-2xl mb-1 text-[#1A202C]">
                Mariam Momodu
              </h3>
              <p className="text-xs text-[#C5A059] uppercase tracking-widest font-bold mb-6">
                Strategic Business Advisor
              </p>
              <div className="space-y-4 text-sm text-gray-700 leading-relaxed text-justify">
                <p>
                  Mariam Momodu is a strategic business leader with over 22
                  years of cross-border experience spanning financial services,
                  market intelligence, and enterprise transformation. She has
                  led multi-billion-naira portfolio management at Zenith Bank,
                  providing strategic wealth advisory and risk oversight to
                  high-net-worth clients within a regulated banking environment.
                </p>
                <p>
                  An accomplished entrepreneur, she successfully restructured
                  and repositioned a distressed business into a profitable and
                  sustainable operation through disciplined operational redesign
                  and financial governance.
                </p>
                <p>
                  She currently serves as a Business Strategist to a U.S.-based
                  eyewear company, advising on growth strategy, operational
                  scalability, and performance optimisation. Mariam holds
                  executive certifications from the Wharton School of the
                  University of Pennsylvania and Harvard University. She brings
                  strategic clarity, governance discipline, and a strong bias
                  for sustainable value creation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
