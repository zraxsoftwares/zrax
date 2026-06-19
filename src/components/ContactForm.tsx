"use client"

import { useState, type FormEvent, type ChangeEvent } from "react"
import { motion } from "framer-motion"
import { Send, CheckCircle, AlertCircle } from "lucide-react"
import { siteConfig } from "@/data/site"

interface FormFields {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

const initialFields: FormFields = {
  name: "",
  email: "",
  subject: "",
  message: "",
}

function validate(fields: FormFields): FormErrors {
  const errors: FormErrors = {}
  if (!fields.name.trim()) errors.name = "Name is required"
  if (!fields.email.trim()) {
    errors.email = "Email is required"
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = "Please enter a valid email"
  }
  if (!fields.subject.trim()) errors.subject = "Subject is required"
  if (!fields.message.trim()) {
    errors.message = "Message is required"
  } else if (fields.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters"
  }
  return errors
}

export function ContactForm() {
  const [fields, setFields] = useState<FormFields>(initialFields)
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Set<string>>(new Set())
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle")

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target
    const next = { ...fields, [name]: value }
    setFields(next)
    if (touched.has(name)) {
      setErrors(validate(next))
    }
  }

  function handleBlur(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name } = e.target
    setTouched((prev) => new Set(prev).add(name))
    setErrors(validate(fields))
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const validation = validate(fields)
    setErrors(validation)
    setTouched(new Set(["name", "email", "subject", "message"]))
    if (Object.keys(validation).length > 0) return

    setStatus("submitting")
    try {
      const res = await fetch(siteConfig.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      })
      if (!res.ok) throw new Error("Failed to send")
      setStatus("success")
      setFields(initialFields)
      setTouched(new Set())
    } catch {
      setStatus("error")
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="w-full"
    >
      {status === "success" ? (
        <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-8 text-center">
          <CheckCircle size={40} className="mx-auto text-emerald-400 mb-4" />
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Message Sent!
          </h3>
          <p className="text-sm text-secondary">
            Thank you for reaching out. We&apos;ll get back to you within 24 hours.
          </p>
        </div>
      ) : status === "error" ? (
        <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-8 text-center">
          <AlertCircle size={40} className="mx-auto text-red-400 mb-4" />
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Something went wrong
          </h3>
          <p className="text-sm text-secondary mb-4">
            We couldn&apos;t send your message. Please try again or email us
            directly.
          </p>
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="text-sm font-medium text-primary hover:text-primary-light transition-colors"
          >
            {siteConfig.contact.email}
          </a>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Field
              label="Your Name"
              name="name"
              type="text"
              value={fields.name}
              error={errors.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Field
              label="Email Address"
              name="email"
              type="email"
              value={fields.email}
              error={errors.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <Field
            label="Subject"
            name="subject"
            type="text"
            value={fields.subject}
            error={errors.subject}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-secondary mb-1.5"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={fields.message}
              onChange={handleChange}
              onBlur={handleBlur}
               className={`w-full rounded-xl border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors resize-none ${
                 errors.message
                   ? "border-red-500/50"
                   : "border-border hover:border-primary/30"
               }`}
              placeholder="Tell us about your project..."
            />
            {errors.message && (
              <p className="mt-1 text-xs text-red-400">{errors.message}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-primary-light hover:shadow-lg hover:shadow-primary/25 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "submitting" ? (
              <>
                <span className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send Your Inquiry
                <Send size={16} />
              </>
            )}
          </button>
        </form>
      )}
    </motion.div>
  )
}

function Field({
  label,
  name,
  type,
  value,
  error,
  onChange,
  onBlur,
}: {
  label: string
  name: string
  type: string
  value: string
  error?: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onBlur: (e: ChangeEvent<HTMLInputElement>) => void
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-secondary mb-1.5"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`w-full rounded-xl border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors ${
          error
            ? "border-red-500/50"
            : "border-border hover:border-primary/30"
        }`}
        placeholder={label}
      />
      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  )
}
