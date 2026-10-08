/**
 * Unified Failsafe Form Submission Utility
 * Sends form data to info.selestiarituel@gmail.com via FormSubmit with CORS & AJAX fallbacks
 */
export const submitToFormSubmit = async (
  payload: Record<string, string>,
  subject: string
): Promise<boolean> => {
  const data = {
    ...payload,
    _subject: subject,
    _template: 'table',
    _captcha: 'false',
  };

  // 1. Try Primary AJAX JSON Submission
  try {
    const res = await fetch('https://formsubmit.co/ajax/info.selestiarituel@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      const json = await res.json();
      if (json.success === 'true' || json.success === true) {
        return true;
      }
    }
  } catch (err) {
    console.warn('AJAX FormSubmit failed, attempting FormData no-cors fallback:', err);
  }

  // 2. Fallback: Standard FormData Opaque POST (Bypasses CORS restrictions on live domains)
  try {
    const formData = new FormData();
    Object.entries(data).forEach(([key, val]) => {
      formData.append(key, val);
    });

    await fetch('https://formsubmit.co/info.selestiarituel@gmail.com', {
      method: 'POST',
      mode: 'no-cors',
      body: formData,
    });
    return true;
  } catch (fallbackErr) {
    console.error('All form submission attempts failed:', fallbackErr);
    return false;
  }
};
