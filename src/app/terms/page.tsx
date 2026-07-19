import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service - Home Hub',
  description: 'The terms that govern your use of Home Hub.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-[#f0f9f2] to-[#d1ecd7] py-14">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-lg text-gray-700">Last updated: July 2026</p>
        </div>
      </section>

      {/* ── Content ──────────────────────────────────────────────────── */}
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4 space-y-10 text-gray-600 leading-relaxed">

          <p>
            These terms cover your use of Home Hub. By using the site, you agree to
            them. This is starter boilerplate written for a small, independent site —
            not a substitute for legal advice if you need something more formal.
          </p>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Acceptable use</h2>
            <p>
              Use Home Hub for its intended purpose: researching and checking
              compatibility for smart home devices. Don&apos;t scrape the site at scale,
              attempt to disrupt it, or use it to submit false device requests or
              spam. We may suspend accounts that abuse the service.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">No compatibility guarantee</h2>
            <p>
              Product and compatibility information on Home Hub is provided for
              informational purposes and is sourced from manufacturer listings and
              public data. We work to keep it accurate, but manufacturers change specs,
              firmware, and supported ecosystems without notice. <strong>Always verify
              compatibility with the manufacturer or retailer before purchasing</strong>,
              especially for devices requiring a specific hub or protocol. Home Hub is
              not liable for a device that doesn&apos;t work as listed.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Affiliate relationship</h2>
            <p>
              Home Hub participates in the Amazon Services LLC Associates Program, an
              affiliate advertising program. We earn a commission on qualifying
              purchases made through links on this site, at no additional cost to you.
              This does not influence which devices we list or how compatibility
              information is presented.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Accounts</h2>
            <p>
              If you create an account, you&apos;re responsible for keeping your
              credentials secure and for the accuracy of the information you submit
              (like your device inventory or device requests). You can delete your
              account at any time by contacting us.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Intellectual property</h2>
            <p>
              The Home Hub name, design, and original content belong to us. Product
              names, images, and trademarks belong to their respective owners and are
              used for identification purposes only.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Limitation of liability</h2>
            <p>
              Home Hub is provided &quot;as is,&quot; without warranties of any kind. To
              the fullest extent permitted by law, we are not liable for any indirect,
              incidental, or consequential damages arising from your use of the site
              or reliance on information provided here — including a purchased device
              turning out to be incompatible with your setup.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Changes to these terms</h2>
            <p>
              We may update these terms as the site evolves. Continued use after a
              change means you accept the updated terms. We&apos;ll update the date at
              the top of this page when that happens.
            </p>
          </div>

          <div className="bg-[#f0f9f2] border border-[#d1ecd7] rounded-xl p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Contact us</h2>
            <p>
              Questions about these terms? Email{' '}
              <a href="mailto:stratolabhq@gmail.com" className="text-[#2e6f40] font-medium hover:underline">
                stratolabhq@gmail.com
              </a>
              .
            </p>
          </div>

          <div className="text-center pt-4">
            <Link href="/privacy" className="text-[#2e6f40] font-semibold hover:text-[#1f4d2b] transition-colors">
              Read our Privacy Policy →
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
