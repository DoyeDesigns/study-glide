import { apiRequest } from '../lib/api'

export function buildApplicationRow(form, source) {
  const age = form.age === '' || form.age == null ? null : Number.parseInt(String(form.age), 10)

  return {
    source,
    full_name: form.full_name.trim(),
    age: Number.isFinite(age) ? age : null,
    phone_number: form.phone_number.trim(),
    email: form.email.trim().toLowerCase(),
    gender: form.gender,
    preferred_study_destination: form.preferred_study_destination,
    other_countries_interested: form.other_countries_interested?.trim() || null,
    program_interested: form.program_interested,
    intake_period: form.intake_period,
    highest_qualification: form.highest_qualification,
    other_qualification: form.other_qualification?.trim() || null,
    previous_visa_refusal: form.previous_visa_refusal,
    referral_source: form.referral_source,
  }
}

export async function submitApplication(form, source) {
  const row = buildApplicationRow(form, source)
  await apiRequest('/applications.php', { method: 'POST', body: row })
}
