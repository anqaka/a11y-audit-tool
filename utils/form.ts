import type { InvalidSubmissionContext } from 'vee-validate'

const displayFirstError = async (errors: Partial<InvalidSubmissionContext>) => {
  if (Object.keys(errors).length) {
    const firstError: HTMLElement | null = document.querySelector(
      `[name="${Object.keys(errors)[0]}"]`
    )
    await nextTick(() => {
      firstError?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      })

      firstError?.focus({ preventScroll: true })
    })
  }
}

export { displayFirstError }
