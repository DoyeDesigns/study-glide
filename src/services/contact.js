import { apiRequest } from '../lib/api'

export async function submitContactMessage(form) {
  await apiRequest('/contact.php', {
    method: 'POST',
    body: {
      first_name: form.first_name.trim(),
      last_name: form.last_name.trim(),
      email: form.email.trim().toLowerCase(),
      phone: form.phone?.trim() || null,
      message: form.message.trim(),
    },
  })
}
