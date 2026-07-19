import Link from 'next/link';

export const metadata = {
  title: 'About - Home Hub',
  description: 'What Home Hub is and how it works.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-[#f0f9f2] to-[#d1ecd7] py-14">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Home Hub</h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            A beginner-friendly guide to smart home devices — built so you can shop
            with confidence instead of guessing.
          </p>
        </div>
      </section>

      {/* ── Content ──────────────────────────────────────────────────── */}
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4 space-y-10">

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">What Home Hub is</h2>
            <p className="text-gray-600 leading-relaxed">
              Smart home shopping is confusing. A product might say &quot;works with
              Alexa&quot; but not Google Home, need a hub you don&apos;t own, or use a
              protocol that&apos;s incompatible with your setup. Home Hub exists to answer
              one question before you buy: <strong>will this actually work with what I
              already have?</strong>
            </p>
            <p className="text-gray-600 leading-relaxed mt-3">
              Pick the platform you use — Amazon Alexa, Google Home, Apple HomeKit, or
              Home Assistant — and we show you devices that are confirmed to work with
              it, starting with a short list of popular, easy starter picks rather than
              a wall of thousands of options.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">How we make money</h2>
            <p className="text-gray-600 leading-relaxed">
              Home Hub is free to use. When you click through to buy a device on
              Amazon, we may earn a small commission as an Amazon Associate — at no
              extra cost to you. This is what keeps the site running and the device
              database up to date. We don&apos;t accept payment from brands to rank their
              products higher, and compatibility information isn&apos;t for sale.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Who this is for</h2>
            <p className="text-gray-600 leading-relaxed">
              Home Hub is built for people who are new to smart homes and don&apos;t want
              to learn Zigbee vs. Z-Wave vs. Matter just to buy a light bulb. If you
              already run Home Assistant and want deep protocol-level controls, those
              tools exist here too — they&apos;re just tucked out of the way so they don&apos;t
              overwhelm everyone else.
            </p>
          </div>

          <div className="bg-[#f0f9f2] border border-[#d1ecd7] rounded-xl p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Questions or feedback?</h2>
            <p className="text-gray-600 leading-relaxed">
              Reach us at{' '}
              <a href="mailto:stratolabhq@gmail.com" className="text-[#2e6f40] font-medium hover:underline">
                stratolabhq@gmail.com
              </a>
              . We&apos;re a small team and read everything.
            </p>
          </div>

          <div className="text-center pt-4">
            <Link
              href="/compatibility"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#2e6f40] text-white rounded-xl font-semibold hover:bg-[#3d8b54] transition-colors shadow-sm"
            >
              Browse Devices
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
