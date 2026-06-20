"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Mail, Phone, MapPin, Shield } from "lucide-react"
import { siteConfig } from "@/data/site"

const sections = [
  { id: "introduction", title: "Introduction" },
  { id: "eligibility", title: "User Eligibility & Accepting Terms on Behalf of an Entity" },
  { id: "registration", title: "Account Registration & Security" },
  { id: "communications", title: "User Communications" },
  { id: "purchases", title: "Purchases & Payment" },
  { id: "subscriptions", title: "Subscriptions" },
  { id: "prohibited", title: "Prohibited Activities" },
  { id: "ugc", title: "User Generated Content" },
  { id: "contribution-license", title: "Content Contribution & License" },
  { id: "third-party", title: "Third-Party Websites & Content" },
  { id: "advertising", title: "Advertising" },
  { id: "copyright", title: "Copyright Infringement" },
  { id: "ip", title: "Intellectual Property" },
  { id: "dmca", title: "Digital Millennium Copyright Act (DMCA) Notice" },
  { id: "errors", title: "Errors, Inaccuracies, and Omissions" },
  { id: "disclaimer", title: "Disclaimer of Warranties" },
  { id: "liability", title: "Limitation of Liability" },
  { id: "indemnification", title: "Indemnification" },
  { id: "release", title: "Release and Hold Harmless" },
  { id: "governing-law", title: "Governing Law" },
  { id: "dispute-resolution", title: "Dispute Resolution" },
  { id: "class-action", title: "Class Action Waiver" },
  { id: "waiver", title: "Waiver and Severability" },
  { id: "changes-terms", title: "Changes to Terms" },
  { id: "changes-service", title: "Changes to Service" },
  { id: "electronic", title: "Electronic Communications" },
  { id: "payment", title: "Payment Terms" },
  { id: "refund", title: "Refund Policy" },
  { id: "user-data", title: "User Data & Privacy" },
  { id: "esignatures", title: "Electronic Signatures" },
  { id: "ip-notice", title: "IP Notice & Feedback" },
  { id: "termination", title: "Termination" },
  { id: "contact", title: "Contact Information" },
]

function SectionWrapper({
  id,
  number,
  title,
  children,
}: {
  id: string
  number: number
  title: string
  children: React.ReactNode
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="scroll-mt-24"
    >
      <div className="flex items-start gap-4 mb-4">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary text-sm font-bold">
          {number}
        </span>
        <h2 className="text-xl sm:text-2xl font-bold text-foreground pt-0.5">
          {title}
        </h2>
      </div>
      <div className="ml-12 space-y-3 text-sm sm:text-base leading-relaxed text-secondary">
        {children}
      </div>
      <div className="ml-12 my-8 h-px bg-gradient-to-r from-primary/20 via-primary/10 to-transparent" />
    </motion.section>
  )
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function TermsContent() {
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-nav-bg backdrop-blur-md border-b border-border">
        <div className="mx-auto max-w-5xl px-6 h-16 flex items-center justify-between">
          <a
            href="/"
            className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft size={16} />
            {siteConfig.name}
          </a>
          <span className="text-xs text-secondary">Terms & Conditions</span>
        </div>
      </header>

      <main className="pt-24 pb-16 px-6">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              Terms &{" "}
              <span className="animate-gold-shimmer bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent">
                Conditions
              </span>
            </h1>
            <p className="mt-2 text-sm text-muted">
              Last updated: June 1, 2026
            </p>
            <p className="mt-6 text-secondary text-sm sm:text-base leading-relaxed">
              Please read these Terms & Conditions carefully before using the
              ZRAX SOFTWARES website or engaging our services. By accessing or
              using our platform, you agree to be bound by these Terms. If you
              do not agree, please do not use our services.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-12 rounded-2xl border border-card-border bg-card-bg p-6 sm:p-8"
          >
            <h2 className="text-lg font-bold text-foreground mb-4">
              Table of Contents
            </h2>
            <nav className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
              {sections.map((s, i) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors group"
                >
                  <span className="text-xs text-muted group-hover:text-primary/60 w-5 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{s.title}</span>
                </a>
              ))}
            </nav>
          </motion.div>

          <div className="mt-16 space-y-2">
            <SectionWrapper id="introduction" number={1} title="Introduction">
              <p>
                Welcome to ZRAX SOFTWARES (&ldquo;Company,&rdquo;
                &ldquo;we,&rdquo; &ldquo;our,&rdquo; &ldquo;us&rdquo;). These
                Terms & Conditions (&ldquo;Terms&rdquo;) govern your access to
                and use of our website, products, and software development
                services (collectively, the &ldquo;Services&rdquo;).
              </p>
              <p>
                By accessing our website or engaging our Services, you enter
                into a legally binding agreement with ZRAX SOFTWARES, located
                in Nairobi, Republic of Kenya. These Terms apply to all
                visitors, users, and clients who access or use our Services.
              </p>
              <p>
                We reserve the right to update or modify these Terms at any
                time. Continued use of our Services after any changes
                constitutes acceptance of the new Terms. It is your
                responsibility to review these Terms periodically.
              </p>
            </SectionWrapper>

            <SectionWrapper
              id="eligibility"
              number={2}
              title="User Eligibility & Accepting Terms on Behalf of an Entity"
            >
              <p>
                By using our Services, you represent and warrant that you are
                at least eighteen (18) years of age or the age of majority in
                your jurisdiction. If you are accessing our Services on behalf
                of a legal entity, you represent and warrant that you have the
                authority to bind that entity to these Terms.
              </p>
              <p>
                If you do not meet these eligibility requirements, you must not
                access or use the Services. We reserve the right to refuse
                service, terminate accounts, or cancel orders at our sole
                discretion.
              </p>
            </SectionWrapper>

            <SectionWrapper
              id="registration"
              number={3}
              title="Account Registration & Security"
            >
              <p>
                When you create an account with us, you must provide accurate,
                complete, and current information at all times. Failure to do
                so constitutes a breach of these Terms, which may result in
                immediate termination of your account.
              </p>
              <p>
                You are responsible for safeguarding the password and any
                authentication credentials you use to access the Services. You
                agree not to disclose your credentials to any third party. You
                must notify us immediately of any unauthorized use of your
                account or any other breach of security.
              </p>
              <p>
                We employ industry-standard security measures including
                encryption, access controls, and monitoring. However, we cannot
                guarantee absolute security. You are responsible for
                maintaining the confidentiality of your account and for all
                activities that occur under your account.
              </p>
            </SectionWrapper>

            <SectionWrapper
              id="communications"
              number={4}
              title="User Communications"
            >
              <p>
                By creating an account or contacting us, you agree to receive
                electronic communications from us, including emails, SMS, or
                in-app notifications. These communications may relate to your
                account, transactions, service updates, or promotional
                materials.
              </p>
              <p>
                You may opt out of marketing communications at any time by
                following the unsubscribe link in our emails or contacting us
                directly. However, you acknowledge that certain service-related
                communications (e.g., payment confirmations, security alerts)
                are mandatory and cannot be opted out.
              </p>
            </SectionWrapper>

            <SectionWrapper
              id="purchases"
              number={5}
              title="Purchases & Payment"
            >
              <p>
                All purchases of our Services are subject to these Terms. When
                you place an order, you agree to pay the full amount specified
                in the applicable quote, invoice, or service agreement. All
                payments are processed securely through our payment partners.
              </p>
              <p>
                We accept the following payment methods:{" "}
                <strong>Mpesa</strong> (mobile money), <strong>PayPal</strong>,
                and bank transfers. All transactions are processed in{" "}
                <strong>United States Dollars (USD)</strong> unless otherwise
                agreed in writing. Prices are subject to change without notice,
                but changes will not affect orders already accepted.
              </p>
              <p>
                We reserve the right to refuse or cancel any order for any
                reason, including but not limited to: suspected fraud,
                unauthorized transactions, or violations of these Terms.
              </p>
            </SectionWrapper>

            <SectionWrapper
              id="subscriptions"
              number={6}
              title="Subscriptions"
            >
              <p>
                Some of our Services are offered on a subscription basis.
                Subscription fees, billing cycles, and renewal terms will be
                specified in your service agreement. You authorize us to charge
                the applicable fees to your selected payment method on each
                billing date.
              </p>
              <p>
                Subscriptions automatically renew unless you cancel at least
                fourteen (14) days before the next billing period. Cancellation
                takes effect at the end of the current billing period. No
                partial refunds are provided for unused portions of a
                subscription period.
              </p>
            </SectionWrapper>

            <SectionWrapper
              id="prohibited"
              number={7}
              title="Prohibited Activities"
            >
              <p>
                You may not access or use the Services for any purpose other
                than that for which we make them available. The Services may
                not be used in connection with any commercial endeavors except
                those specifically endorsed or approved by us.
              </p>
              <p>As a user of the Services, you agree not to:</p>
              <List
                items={[
                  "Engage in any activity that infringes or violates the rights of others, including intellectual property rights, privacy, or confidentiality.",
                  "Attempt to probe, scan, or test the vulnerability of any system or network, breach security or authentication measures, or otherwise gain unauthorized access to our systems or data.",
                  "Use any robot, spider, scraper, or other automated means to access the Services for any purpose without our express written permission.",
                  "Introduce any viruses, Trojan horses, worms, logic bombs, or other material that is malicious or technologically harmful.",
                  "Interfere with or disrupt the integrity or performance of the Services, servers, or networks connected to the Services.",
                  "Impersonate any person or entity, or falsely state or misrepresent your affiliation with any person or entity.",
                  "Engage in any activity that could damage, disable, overburden, or impair the proper working of the Services.",
                  "Use the Services for any illegal, fraudulent, or unauthorized purpose, or in violation of any applicable laws or regulations.",
                ]}
              />
              <p>
                Any violation of this section may result in immediate
                termination of your access to the Services and may subject you
                to legal liability. We reserve the right to cooperate fully
                with law enforcement authorities in investigating any
                violations.
              </p>
            </SectionWrapper>

            <SectionWrapper
              id="ugc"
              number={8}
              title="User Generated Content"
            >
              <p>
                The Services may permit you to submit, post, or share content
                including but not limited to text, images, code, feedback, and
                other materials (&ldquo;User Content&rdquo;). You retain
                ownership of your User Content, but you grant us a license to
                use it as described in these Terms.
              </p>
              <p>
                You represent and warrant that: (i) you own or have the
                necessary rights to your User Content; (ii) your User Content
                does not violate the privacy, publicity, or intellectual
                property rights of any third party; and (iii) your User Content
                complies with these Terms and all applicable laws.
              </p>
              <p>
                We reserve the right, but have no obligation, to monitor,
                edit, or remove User Content that we determine in our sole
                discretion to be unlawful, offensive, threatening, libelous,
                defamatory, obscene, or otherwise objectionable.
              </p>
            </SectionWrapper>

            <SectionWrapper
              id="contribution-license"
              number={9}
              title="Content Contribution & License"
            >
              <p>
                By submitting User Content to the Services, you grant ZRAX
                SOFTWARES a non-exclusive, worldwide, royalty-free,
                sub-licensable, and transferable license to use, reproduce,
                distribute, prepare derivative works of, display, and perform
                your User Content in connection with the operation and
                improvement of the Services.
              </p>
              <p>
                This license continues even after you stop using the Services,
                solely to the extent necessary for us to fulfill our
                obligations to you and to maintain reasonable backups of the
                Services.
              </p>
            </SectionWrapper>

            <SectionWrapper
              id="third-party"
              number={10}
              title="Third-Party Websites & Content"
            >
              <p>
                Our Services may integrate with or link to third-party
                websites, services, or content (&ldquo;Third-Party
                Content&rdquo;). ZRAX SOFTWARES takes full responsibility for
                the Third-Party Content we choose to integrate into our
                Services. We carefully vet and monitor all integrated
                third-party services to ensure they meet our security and
                quality standards.
              </p>
              <p>
                If you encounter any issues with Third-Party Content accessed
                through our Services, please report it to us immediately at{" "}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-primary-dark hover:text-primary hover:underline"
                >
                  {siteConfig.contact.email}
                </a>
                . We will investigate and take appropriate action, which may
                include removing or replacing the third-party integration.
              </p>
              <p>
                Notwithstanding the foregoing, we are not responsible for the
                content, privacy policies, or practices of any third-party
                websites or services that are not integrated into our Services
                but are merely linked to for your convenience. Accessing such
                external links is at your own risk.
              </p>
            </SectionWrapper>

            <SectionWrapper id="advertising" number={11} title="Advertising">
              <p>
                We may display advertisements or sponsored content within the
                Services. The position, frequency, and format of advertisements
                are at our sole discretion.
              </p>
              <p>
                We are not responsible for the accuracy or legality of
                advertisements displayed through the Services. Advertisers are
                solely responsible for their content and compliance with
                applicable laws.
              </p>
            </SectionWrapper>

            <SectionWrapper
              id="copyright"
              number={12}
              title="Copyright Infringement"
            >
              <p>
                We respect the intellectual property rights of others and
                expect our users to do the same. It is our policy to respond
                promptly to claims of copyright infringement submitted in
                accordance with applicable law.
              </p>
              <p>
                If you believe that any material available on or through the
                Services infringes your copyright, you should notify us
                immediately. We will take appropriate action, which may
                include removing or disabling access to the infringing
                material.
              </p>
            </SectionWrapper>

            <SectionWrapper
              id="ip"
              number={13}
              title="Intellectual Property"
            >
              <p>
                The Services, including all content, features, functionality,
                design, source code, databases, and documentation
                (&ldquo;ZRAX IP&rdquo;), are owned by ZRAX SOFTWARES, its
                licensors, or other providers of such material and are
                protected by copyright, trademark, patent, trade secret, and
                other intellectual property or proprietary rights laws.
              </p>
              <p>
                You may not reproduce, distribute, modify, create derivative
                works of, publicly display, publicly perform, republish,
                download, store, or transmit any ZRAX IP without our prior
                written consent.
              </p>
              <p>
                Upon completion of a project and full payment, we grant you a
                license to use the deliverables specifically created for you.
                Source code ownership terms are defined in the applicable
                service agreement. ZRAX retains the right to use general
                skills, knowledge, and experience gained during the engagement.
              </p>
            </SectionWrapper>

            <SectionWrapper id="dmca" number={14} title="DMCA Notice">
              <p>
                If you are a copyright owner or an agent thereof and believe
                that any content on our Services infringes your copyright, you
                may submit a notification pursuant to the Digital Millennium
                Copyright Act (DMCA) by providing our Designated Copyright
                Agent with the following information in writing:
              </p>
              <List
                items={[
                  "A physical or electronic signature of a person authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.",
                  "Identification of the copyrighted work claimed to have been infringed.",
                  "Identification of the material that is claimed to be infringing and information reasonably sufficient to permit us to locate the material.",
                  "Your address, telephone number, and email address.",
                  "A statement that you have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law.",
                  "A statement that the information in the notification is accurate, and under penalty of perjury, that you are authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.",
                ]}
              />
              <p>
                Our designated Copyright Agent for notice of claims of
                copyright infringement can be reached at:{" "}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-primary-dark hover:text-primary hover:underline"
                >
                  {siteConfig.contact.email}
                </a>
                .
              </p>
            </SectionWrapper>

            <SectionWrapper
              id="errors"
              number={15}
              title="Errors, Inaccuracies, and Omissions"
            >
              <p>
                We strive to ensure that all information on our Services is
                accurate and complete. However, we do not warrant that any
                information, including descriptions, pricing, or technical
                specifications, is error-free.
              </p>
              <p>
                We reserve the right to correct any errors, inaccuracies, or
                omissions and to change or update information at any time
                without prior notice. We apologize for any inconvenience this
                may cause.
              </p>
            </SectionWrapper>

            <SectionWrapper
              id="disclaimer"
              number={16}
              title="Disclaimer of Warranties"
            >
              <p>
                THE SERVICES ARE PROVIDED ON AN &ldquo;AS IS&rdquo; AND
                &ldquo;AS AVAILABLE&rdquo; BASIS. TO THE FULLEST EXTENT
                PERMITTED BY APPLICABLE LAW, ZRAX SOFTWARES DISCLAIMS ALL
                WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING
                BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY,
                FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
              </p>
              <p>
                WE DO NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED,
                TIMELY, SECURE, OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED,
                OR THAT THE SERVICES ARE FREE OF VIRUSES OR OTHER HARMFUL
                COMPONENTS. NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN,
                OBTAINED BY YOU FROM US SHALL CREATE ANY WARRANTY NOT EXPRESSLY
                STATED IN THESE TERMS.
              </p>
            </SectionWrapper>

            <SectionWrapper
              id="liability"
              number={17}
              title="Limitation of Liability"
            >
              <p>
                TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT
                SHALL ZRAX SOFTWARES, ITS DIRECTORS, EMPLOYEES, PARTNERS,
                AGENTS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
                SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT
                LIMITED TO LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER
                INTANGIBLE LOSSES, ARISING OUT OF OR IN CONNECTION WITH YOUR
                USE OF THE SERVICES.
              </p>
              <p>
                THIS LIMITATION APPLIES REGARDLESS OF WHETHER THE LIABILITY
                ARISES FROM CONTRACT, TORT (INCLUDING NEGLIGENCE), STRICT
                LIABILITY, OR ANY OTHER LEGAL THEORY, AND EVEN IF WE HAVE BEEN
                ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
              </p>
              <p>
                FOR ANY CLAIM ARISING OUT OF OR RELATING TO THESE TERMS OR THE
                SERVICES, OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT PAID
                BY YOU TO US DURING THE TWELVE (12) MONTHS PRECEDING THE EVENT
                GIVING RISE TO THE CLAIM. THIS CAP IS AN AGGREGATE LIMIT AND
                APPLIES TO ALL CLAIMS OF EVERY KIND.
              </p>
              <p>
                NOTHING IN THESE TERMS SHALL LIMIT OR EXCLUDE LIABILITY FOR
                FRAUD, DEATH OR PERSONAL INJURY CAUSED BY NEGLIGENCE, OR ANY
                OTHER LIABILITY THAT CANNOT BE LIMITED OR EXCLUDED UNDER
                APPLICABLE LAW.
              </p>
            </SectionWrapper>

            <SectionWrapper
              id="indemnification"
              number={18}
              title="Indemnification"
            >
              <p>
                You agree to defend, indemnify, and hold harmless ZRAX
                SOFTWARES, its affiliates, directors, officers, employees, and
                agents from and against any and all claims, damages,
                obligations, losses, liabilities, costs, and expenses
                (including reasonable legal fees) arising out of or related to:
              </p>
              <List
                items={[
                  "Your use of or access to the Services.",
                  "Your violation of any term of these Terms.",
                  "Your violation of any third-party right, including but not limited to intellectual property, privacy, or confidentiality rights.",
                  "Any breach of security caused by your negligence or willful misconduct.",
                  "Any harmful activity conducted through your account, whether authorized by you or not.",
                  "Your User Content or any content you submit, post, or transmit through the Services.",
                ]}
              />
              <p>
                We reserve the right, at our own expense, to assume the
                exclusive defense and control of any matter otherwise subject
                to indemnification by you, in which event you will cooperate
                with us in asserting any available defenses.
              </p>
            </SectionWrapper>

            <SectionWrapper
              id="release"
              number={19}
              title="Release and Hold Harmless"
            >
              <p>
                To the maximum extent permitted by applicable law, you release
                ZRAX SOFTWARES from any and all claims, demands, and damages of
                every kind arising out of or in any way connected with disputes
                between you and other users of the Services or third parties.
              </p>
              <p>
                You expressly waive any rights you may have under California
                Civil Code § 1542 (or any analogous statute of any other
                jurisdiction), which states: &ldquo;A general release does not
                extend to claims that the creditor or releasing party does not
                know or suspect to exist in his or her favor at the time of
                executing the release and that, if known by him or her, would
                have materially affected his or her settlement with the debtor
                or released party.&rdquo;
              </p>
            </SectionWrapper>

            <SectionWrapper
              id="governing-law"
              number={20}
              title="Governing Law"
            >
              <p>
                These Terms shall be governed by and construed in accordance
                with the laws of the{" "}
                <strong>Republic of Kenya</strong>, without regard to its
                conflict of law provisions. The United Nations Convention on
                Contracts for the International Sale of Goods shall not apply
                to these Terms.
              </p>
              <p>
                Our failure to enforce any right or provision of these Terms
                will not be considered a waiver of those rights. If any
                provision of these Terms is held to be invalid or
                unenforceable by a court, the remaining provisions of these
                Terms will remain in effect.
              </p>
            </SectionWrapper>

            <SectionWrapper
              id="dispute-resolution"
              number={21}
              title="Dispute Resolution"
            >
              <p>
                Any dispute, controversy, or claim arising out of or relating
                to these Terms or the Services shall first be attempted to be
                resolved through good-faith negotiations between the parties.
              </p>
              <p>
                If the dispute cannot be resolved within thirty (30) days of
                written notice, the parties agree to submit the dispute to
                mediation in Nairobi, Kenya, before resorting to arbitration or
                litigation.
              </p>
              <p>
                Any unresolved disputes shall be finally settled by binding
                arbitration in Nairobi, Kenya, in accordance with the
                Arbitration Act of Kenya. The language of the arbitration shall
                be English. Each party shall bear its own costs, and the
                arbitral costs shall be shared equally unless otherwise
                determined by the arbitral tribunal.
              </p>
            </SectionWrapper>

            <SectionWrapper
              id="class-action"
              number={22}
              title="Class Action Waiver"
            >
              <p>
                ANY DISPUTE PROCEEDINGS, WHETHER IN ARBITRATION OR COURT, WILL
                BE CONDUCTED SOLELY ON AN INDIVIDUAL BASIS AND NOT IN A CLASS,
                CONSOLIDATED, OR REPRESENTATIVE ACTION. YOU EXPRESSLY WAIVE
                YOUR RIGHT TO PARTICIPATE IN ANY CLASS ACTION OR SIMILAR
                PROCEEDING AGAINST ZRAX SOFTWARES.
              </p>
              <p>
                If a court or arbitrator determines that this class action
                waiver is unenforceable, then the preceding dispute resolution
                provisions shall be null and void, and the dispute shall be
                resolved in the courts of the Republic of Kenya.
              </p>
            </SectionWrapper>

            <SectionWrapper
              id="waiver"
              number={23}
              title="Waiver and Severability"
            >
              <p>
                No waiver of any term of these Terms shall be deemed a further
                or continuing waiver of such term or any other term, and our
                failure to assert any right or provision under these Terms
                shall not constitute a waiver of such right or provision.
              </p>
              <p>
                If any provision of these Terms is held by a court or other
                tribunal of competent jurisdiction to be invalid, illegal, or
                unenforceable for any reason, such provision shall be
                eliminated or limited to the minimum extent such that the
                remaining provisions of the Terms will continue in full force
                and effect.
              </p>
            </SectionWrapper>

            <SectionWrapper
              id="changes-terms"
              number={24}
              title="Changes to Terms"
            >
              <p>
                We reserve the right, at our sole discretion, to modify or
                replace these Terms at any time. If a revision is material, we
                will make reasonable efforts to provide at least thirty (30)
                days&apos; notice prior to any new terms taking effect. What
                constitutes a material change will be determined at our sole
                discretion.
              </p>
              <p>
                By continuing to access or use our Services after any revisions
                become effective, you agree to be bound by the revised Terms.
                If you do not agree to the new terms, you are no longer
                authorized to use the Services.
              </p>
            </SectionWrapper>

            <SectionWrapper
              id="changes-service"
              number={25}
              title="Changes to Service"
            >
              <p>
                We reserve the right to withdraw or amend our Services, and any
                content or feature we provide, without notice. We will not be
                liable if for any reason all or any part of the Services is
                unavailable at any time or for any period.
              </p>
              <p>
                We may from time to time introduce new features, modify or
                eliminate existing features, or suspend or discontinue the
                Services (or any part thereof) temporarily or permanently. We
                will use reasonable efforts to notify you of any changes that
                materially affect your use of the Services.
              </p>
            </SectionWrapper>

            <SectionWrapper
              id="electronic"
              number={26}
              title="Electronic Communications"
            >
              <p>
                By using the Services or communicating with us electronically,
                you consent to receive electronic communications from us. You
                agree that all agreements, notices, disclosures, and other
                communications that we provide to you electronically satisfy
                any legal requirement that such communications be in writing.
              </p>
              <p>
                We may communicate with you via email, through the Services, or
                by posting notices on our website. You may retain copies of
                these electronic communications for your records.
              </p>
            </SectionWrapper>

            <SectionWrapper
              id="payment"
              number={27}
              title="Payment Terms"
            >
              <p>
                All fees for Services are quoted in United States Dollars (USD)
                unless otherwise agreed in writing. Payments may be made in KES
                at the prevailing exchange rate. We accept Mpesa, PayPal, and
                bank transfers as payment methods.
              </p>
              <p>
                Invoices are due within thirty (30) days of the invoice date
                unless otherwise specified in your service agreement. Late
                payments shall incur interest at a rate of one and one-half
                percent (1.5%) per month, or the maximum rate permitted by
                applicable law, whichever is lower, plus all reasonable costs
                of collection.
              </p>
              <p>
                All sales are final upon acceptance of a quote or issuance of a
                work order. We reserve the right to suspend or terminate
                Services for non-payment. We use industry-standard encryption
                and secure payment gateways to protect all payment information.
                We do not store full credit/debit card numbers on our servers.
              </p>
            </SectionWrapper>

            <SectionWrapper
              id="refund"
              number={28}
              title="Refund Policy"
            >
              <p>
                <strong>All sales are final.</strong> ZRAX SOFTWARES does not
                offer refunds for any services rendered, including but not
                limited to software development, consulting, design, or
                subscription fees, unless otherwise explicitly stated in a
                signed service agreement.
              </p>
              <p>
                In the event of a project cancellation by the client after work
                has commenced, fees paid for completed work are non-refundable.
                Any prepaid but unused retainer fees may be refunded at our
                sole discretion, minus a reasonable administrative fee.
              </p>
            </SectionWrapper>

            <SectionWrapper
              id="user-data"
              number={29}
              title="User Data & Privacy"
            >
              <p>
                We take your privacy and data security seriously. Our
                collection, use, and disclosure of personal information is
                governed by our Privacy Policy, which is incorporated into
                these Terms by reference.
              </p>
              <p>
                We implement appropriate technical and organizational security
                measures to protect your data against unauthorized access,
                alteration, disclosure, or destruction. These measures include
                encryption, access controls, regular security audits, and
                employee training.
              </p>
              <p>
                You are responsible for ensuring that any data you provide to
                us is accurate, complete, and collected in compliance with
                applicable laws. We process data in accordance with our
                Privacy Policy and applicable data protection laws.
              </p>
            </SectionWrapper>

            <SectionWrapper
              id="esignatures"
              number={30}
              title="Electronic Signatures"
            >
              <p>
                You acknowledge and agree that by clicking &ldquo;I
                Agree,&rdquo; &ldquo;Accept,&rdquo; &ldquo;Submit,&rdquo; or
                similar buttons or checkboxes, or by signing electronically
                through our platform, you are providing an electronic signature
                that is legally binding. You agree that electronic signatures
                and contracts are valid and enforceable to the same extent as
                handwritten signatures.
              </p>
              <p>
                You waive any right to challenge the validity or enforceability
                of any agreement solely on the ground that it was electronically
                signed or executed.
              </p>
            </SectionWrapper>

            <SectionWrapper
              id="ip-notice"
              number={31}
              title="IP Notice & Feedback"
            >
              <p>
                All intellectual property rights in and to the Services, ZRAX
                IP, and any derivatives thereof are and shall remain the sole
                property of ZRAX SOFTWARES. Nothing in these Terms grants you
                any right, title, or interest in the ZRAX IP except as
                expressly provided.
              </p>
              <p>
                If you provide us with any suggestions, ideas, feedback, or
                recommendations (&ldquo;Feedback&rdquo;), we may use such
                Feedback without any obligation to you. You hereby grant us a
                perpetual, irrevocable, worldwide, royalty-free, and fully
                sub-licensable license to use, incorporate, and commercialize
                your Feedback in any manner we deem appropriate, without
                compensation or attribution to you.
              </p>
              <p>
                If you believe that any ZRAX IP or content on our Services
                infringes your intellectual property rights, please contact our
                Designated Copyright Agent at{" "}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-primary-dark hover:text-primary hover:underline"
                >
                  {siteConfig.contact.email}
                </a>{" "}
                with a detailed description of the alleged infringement. We
                will investigate and take appropriate action as required by
                applicable law, which may include removal of the infringing
                material.
              </p>
            </SectionWrapper>

            <SectionWrapper
              id="termination"
              number={32}
              title="Termination"
            >
              <p>
                We may terminate or suspend your account and access to the
                Services immediately, without prior notice or liability, for
                any reason whatsoever, including without limitation if you
                breach these Terms.
              </p>
              <p>
                Grounds for termination include, but are not limited to:
                violation of any provision of these Terms, fraudulent or
                unlawful activity, non-payment of fees, or conduct that we
                determine to be harmful to other users, third parties, or our
                business interests.
              </p>
              <p>
                Accounts inactive for a continuous period of twelve (12) months
                may be terminated at our discretion. Upon termination, your
                right to use the Services will immediately cease. Any
                provisions of these Terms that by their nature should survive
                termination shall survive, including but not limited to
                intellectual property provisions, warranty disclaimers, and
                limitations of liability.
              </p>
            </SectionWrapper>

            <SectionWrapper
              id="contact"
              number={33}
              title="Contact Information"
            >
              <p>
                If you have any questions, concerns, or requests regarding these
                Terms, please contact us:
              </p>
              <div className="mt-4 space-y-3">
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-3 text-secondary hover:text-primary transition-colors group"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                    <Mail size={18} />
                  </span>
                  <span className="text-sm">{siteConfig.contact.email}</span>
                </a>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="flex items-center gap-3 text-secondary hover:text-primary transition-colors group"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                    <Phone size={18} />
                  </span>
                  <span className="text-sm">{siteConfig.contact.phone}</span>
                </a>
                <div className="flex items-center gap-3 text-secondary">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                    <MapPin size={18} />
                  </span>
                  <span className="text-sm">Kenya</span>
                </div>
              </div>
            </SectionWrapper>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8 text-center"
          >
            <Shield size={32} className="mx-auto text-primary mb-4" />
            <h3 className="text-lg font-bold text-foreground mb-2">
              Questions About These Terms?
            </h3>
            <p className="text-sm text-secondary mb-6 max-w-md mx-auto">
              We&apos;re here to help. Reach out to our team and we&apos;ll
              get back to you within 24 hours.
            </p>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-primary-dark transition-colors"
            >
              <Mail size={16} />
              Contact Us
            </a>
          </motion.div>

          <div className="mt-12 text-center">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors"
            >
              <ArrowLeft size={14} />
              Back to Home
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}
