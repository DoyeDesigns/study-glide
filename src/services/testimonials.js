import { apiRequest, isApiConfigured } from '../lib/api'

export async function fetchPublishedTestimonials() {
  if (!isApiConfigured()) {
    return []
  }

  const data = await apiRequest('/testimonials.php')
  const rows = Array.isArray(data.testimonials) ? data.testimonials : []

  return rows
    .map((row) => ({
      id: row.id,
      name: row.name,
      school: row.school,
      country: row.country,
      videoUrl: row.videoUrl,
    }))
    .filter((row) => row.videoUrl)
}
