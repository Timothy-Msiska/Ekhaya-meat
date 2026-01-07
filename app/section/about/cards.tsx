"use client";

import Image from "next/image";

export default function CardsSection() {
  return (
    <section className="w-full bg-[#F8F7F4] py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* CARD 1 */}
        <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-200 text-center">
          <Image src="/icons/temp.png" alt="" width={40} height={40} className="mx-auto"/>
          <h3 className="font-semibold text-lg mt-3">Quality Assurance</h3>
          <p className="text-gray-700 mt-2 text-sm">
            We maintain strict quality and temperature standards to ensure every product is safe and fresh.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-200 text-center">
          <Image src="/icons/lab.png" alt="" width={40} height={40} className="mx-auto"/>
          <h3 className="font-semibold text-lg mt-3">Laboratory Testing</h3>
          <p className="text-gray-700 mt-2 text-sm">
            Each batch undergoes thorough testing to guarantee the highest standards of hygiene and quality.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-200 text-center">
          <Image src="/icons/inspection.png" alt="" width={40} height={40} className="mx-auto"/>
          <h3 className="font-semibold text-lg mt-3">Customer Safety</h3>
          <p className="text-gray-700 mt-2 text-sm">
            Our processes ensure safe, healthy, and trustworthy meat products for our valued customers.
          </p>
        </div>

        {/* CARD 4 */}
        <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-200 text-center">
          <Image src="/icons/fresh.png" alt="" width={40} height={40} className="mx-auto"/>
          <h3 className="font-semibold text-lg mt-3">Freshness Guarantee</h3>
          <p className="text-gray-700 mt-2 text-sm">
            We deliver only the freshest meat, sourced and processed daily to maintain quality.
          </p>
        </div>

        {/* CARD 5 */}
        <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-200 text-center">
          <Image src="/icons/trust.png" alt="" width={40} height={40} className="mx-auto"/>
          <h3 className="font-semibold text-lg mt-3">Trusted by Clients</h3>
          <p className="text-gray-700 mt-2 text-sm">
            Ekhaya Meats is a trusted supplier for local businesses and households alike.
          </p>
        </div>

        {/* CARD 6 */}
        <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-200 text-center">
          <Image src="/icons/eco-1.png" alt="" width={40} height={40} className="mx-auto"/>
          <h3 className="font-semibold text-lg mt-3">Sustainable Practices</h3>
          <p className="text-gray-700 mt-2 text-sm">
            We follow eco-friendly and responsible practices throughout our supply chain.
          </p>
        </div>

      </div>
    </section>
  );
}
