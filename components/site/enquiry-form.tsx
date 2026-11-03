"use client"

import { useState, type FormEvent } from "react"
import { ArrowUpRight, Check } from "lucide-react"

type FormMode = "umm-contact" | "nabat-contact" | "admissions"

type Field = {
  name: string
  label: string
  type?: "text" | "email" | "tel" | "date" | "select" | "textarea"
  required?: boolean
  options?: string[]
  wide?: boolean
}

const formFields: Record<FormMode, Field[]> = {
  "umm-contact": [
    { name: "name", label: "Name", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "phone", label: "Phone / WhatsApp", type: "tel" },
    { name: "programme", label: "Programme of interest", type: "select", options: ["Nabat Learning House", "Qur'an Reading & Hifz", "Women's Programme", "Weekend Programme", "Seasonal & Ramadan Programmes", "General enquiry"] },
    { name: "message", label: "Message", type: "textarea", required: true, wide: true },
  ],
  "nabat-contact": [
    { name: "parentName", label: "Parent / Guardian name", required: true },
    { name: "childName", label: "Child name" },
    { name: "phone", label: "Phone / WhatsApp", type: "tel", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "subject", label: "Subject", required: true, wide: true },
    { name: "message", label: "Message", type: "textarea", required: true, wide: true },
  ],
  admissions: [
    { name: "parentName", label: "Parent / Guardian name", required: true },
    { name: "phone", label: "Phone", type: "tel", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "childName", label: "Child name", required: true },
    { name: "dateOfBirth", label: "Date of birth", type: "date", required: true },
    { name: "desiredLevel", label: "Desired age stage", type: "select", options: ["Age 3", "Age 4", "Age 5", "Age 6", "Age 7", "Not sure yet"] },
    { name: "experience", label: "Previous learning experience", type: "textarea", wide: true },
    { name: "additionalInformation", label: "Additional information", type: "textarea", wide: true },
  ],
}

const formCopy: Record<FormMode, { submit: string; note: string }> = {
  "umm-contact": { submit: "Send enquiry", note: "Please do not include sensitive personal information in this form." },
  "nabat-contact": { submit: "Contact us", note: "Please do not include sensitive personal information in this form." },
  admissions: { submit: "Submit application enquiry", note: "This is an enquiry form, not an admission decision. Official application steps will be confirmed by the institution." },
}

export function EnquiryForm({ mode }: { mode: FormMode }) {
  const [submitted, setSubmitted] = useState(false)
  const fields = formFields[mode]

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!event.currentTarget.reportValidity()) return
    setSubmitted(true)
  }

  return (
    <div className="enquiry-form-wrap">
      <form className="enquiry-form" onSubmit={handleSubmit}>
        <div className="enquiry-form__grid">
          {fields.map((field) => {
            const id = `${mode}-${field.name}`
            return (
              <div className={`enquiry-form__field${field.wide ? " is-wide" : ""}`} key={field.name}>
                <label htmlFor={id}>{field.label}{field.required && <span aria-hidden="true"> *</span>}</label>
                {field.type === "textarea" ? (
                  <textarea autoComplete="off" id={id} name={field.name} required={field.required} rows={4} />
                ) : field.type === "select" ? (
                  <select defaultValue="" id={id} name={field.name} required={field.required}>
                    <option value="" disabled>Select an option</option>
                    {field.options?.map((option) => <option key={option} value={option}>{option}</option>)}
                  </select>
                ) : (
                  <input autoComplete={field.type === "email" ? "email" : field.name === "phone" ? "tel" : field.name === "name" || field.name === "parentName" ? "name" : "off"} id={id} name={field.name} required={field.required} type={field.type ?? "text"} />
                )}
              </div>
            )
          })}
        </div>
        <div className="enquiry-form__actions">
          <p>{formCopy[mode].note}</p>
          <button className="site-button site-button--primary" type="submit">
            <span>{formCopy[mode].submit}</span><ArrowUpRight aria-hidden="true" className="button-arrow" size={16} strokeWidth={1.6} />
          </button>
        </div>
      </form>
      {submitted && (
        <div className="form-status" role="status">
          <span className="form-status__icon"><Check aria-hidden="true" size={17} /></span>
          <div>
            <strong>Your details are ready.</strong>
            <p>Live delivery is not connected yet. The institution’s official inbox and privacy notice must be confirmed before this form can receive enquiries.</p>
          </div>
        </div>
      )}
    </div>
  )
}
