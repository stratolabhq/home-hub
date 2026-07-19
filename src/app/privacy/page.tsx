import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy - Home Hub',
  description: 'How Home Hub collects, uses, and protects your information.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-[#f0f9f2] to-[#d1ecd7] py-14">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-700">Last updated: July 2026</p>
        </div>
      </section>

      {/* ── Content ──────────────────────────────────────────────────── */}
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4 space-y-10 text-gray-600 leading-relaxed">

          <p>
            This policy explains what information Home Hub collects when you use the
            site, why we collect it, and what choices you have. It&apos;s written in plain
            language on purpose — if anything is unclear, email us and we&apos;ll clarify
            it (and probably rewrite this page).
          </p>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Information we collect</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Account information.</strong> If you create an account, we
                collect your email address and password via Supabase Authentication,
                our authentication provider. We never see or store your raw password —
                Supabase handles that securely.
              </li>
              <li>
                <strong>Device inventory.</strong> If you add devices to &quot;My
                Products,&quot; we store what you entered (device, room, notes) so you
                can track your own smart home setup and check compatibility against it.
              </li>
              <li>
                <strong>Usage data.</strong> We log basic actions like which Amazon
                affiliate links are clicked, so we can tell which devices are actually
                useful to visitors. We do not sell this data.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">How we use your information</h2>
            <p>
              We use account and device data to run the features you&apos;re using
              (compatibility checking, your device dashboard, saved filters) and to
              improve the device database over time. We do not sell your personal
              information to third parties.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Cookies &amp; local storage</h2>
            <p>
              Home Hub uses your browser&apos;s local storage to remember filter
              preferences on the Compatibility page (like your last-selected platform
              or price range) so the site feels consistent between visits. This stays
              on your device and isn&apos;t sent to us. Supabase Authentication may also
              set a session cookie so you stay signed in.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Amazon affiliate links</h2>
            <p>
              Home Hub is a participant in the Amazon Services LLC Associates Program.
              When you click a &quot;Buy on Amazon&quot; link, Amazon may set its own
              cookies and collect information according to{' '}
              <a
                href="https://www.amazon.com/gp/help/customer/display.html?nodeId=468496"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2e6f40] font-medium hover:underline"
              >
                Amazon&apos;s own privacy policy
              </a>
              . We don&apos;t control that tracking and it&apos;s outside this policy.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Data sharing</h2>
            <p>
              We share data only with the service providers that make the site work —
              Supabase (database and authentication) and Vercel (hosting) — under
              their own privacy and security terms. We don&apos;t sell your data or share
              it with advertisers.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Your choices</h2>
            <p>
              You can update or delete your device inventory at any time from your
              dashboard. To delete your account entirely or ask what data we hold about
              you, email us and we&apos;ll take care of it.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Children&apos;s privacy</h2>
            <p>
              Home Hub is not directed at children under 13, and we do not knowingly
              collect information from them.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Changes to this policy</h2>
            <p>
              If this policy changes in a meaningful way, we&apos;ll update the date at
              the top of this page.
            </p>
          </div>

          <div className="bg-[#f0f9f2] border border-[#d1ecd7] rounded-xl p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Contact us</h2>
            <p>
              Questions about this policy or your data? Email{' '}
              <a href="mailto:stratolabhq@gmail.com" className="text-[#2e6f40] font-medium hover:underline">
                stratolabhq@gmail.com
              </a>
              .
            </p>
          </div>

          <div className="text-center pt-4">
            <Link href="/terms" className="text-[#2e6f40] font-semibold hover:text-[#1f4d2b] transition-colors">
              Read our Terms of Service →
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
