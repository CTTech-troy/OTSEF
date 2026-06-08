const MAX_FIELD_LENGTH = 4000
const RESEND_ENDPOINT = 'https://api.resend.com/emails'
const RESEND_FROM = 'support@otsef.org'

function clean(value) {
  return String(value || '').trim().slice(0, MAX_FIELD_LENGTH)
}

function cleanHeader(value) {
  return clean(value).replace(/[\r\n]+/g, ' ')
}

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function escapeHtml(value) {
  return clean(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

function emailLayout({ eyebrow, title, preview, body, footer }) {
  return `
    <!doctype html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>${escapeHtml(title)}</title>
      </head>
      <body style="margin:0;background:#f8fafc;color:#0f172a;font-family:Inter,Arial,sans-serif;">
        <div style="display:none;max-height:0;overflow:hidden;opacity:0;">
          ${escapeHtml(preview)}
        </div>
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f8fafc;padding:32px 12px;">
          <tr>
            <td align="center">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;background:#ffffff;border:1px solid #e2e8f0;border-radius:20px;overflow:hidden;">
                <tr>
                  <td style="padding:32px 32px 22px;background:#0a2540;">
                    <p style="margin:0 0 12px;color:#93c5fd;font-size:12px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;">
                      ${escapeHtml(eyebrow)}
                    </p>
                    <h1 style="margin:0;color:#ffffff;font-size:32px;line-height:1.12;font-weight:800;">
                      ${escapeHtml(title)}
                    </h1>
                  </td>
                </tr>
                <tr>
                  <td style="padding:32px;">
                    ${body}
                  </td>
                </tr>
                <tr>
                  <td style="padding:20px 32px;background:#f8fafc;border-top:1px solid #e2e8f0;">
                    <p style="margin:0;color:#64748b;font-size:13px;line-height:1.6;">
                      ${footer}
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `
}

function adminTemplate({ name, email, interest, message, source }) {
  return emailLayout({
    eyebrow: 'OTSEF Website',
    title: 'New contact form submission',
    preview: `${name} submitted a message through ${source}.`,
    body: `
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">
        ${[
          ['Source', source],
          ['Name', name],
          ['Email', email],
          ['Interested in', interest],
        ]
          .map(
            ([label, value]) => `
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #e2e8f0;color:#64748b;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;width:150px;">
                  ${escapeHtml(label)}
                </td>
                <td style="padding:12px 0;border-bottom:1px solid #e2e8f0;color:#0f172a;font-size:15px;font-weight:600;">
                  ${escapeHtml(value)}
                </td>
              </tr>
            `,
          )
          .join('')}
      </table>
      <div style="margin-top:26px;">
        <p style="margin:0 0 10px;color:#64748b;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;">Message</p>
        <div style="padding:18px 20px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:14px;color:#334155;font-size:15px;line-height:1.7;">
          ${escapeHtml(message).replace(/\n/g, '<br />')}
        </div>
      </div>
    `,
    footer:
      'Reply directly to this email to continue the conversation with the sender.',
  })
}

function confirmationTemplate({
  name,
  interest,
  siteUrl,
  donateUrl,
  donationAccountName,
  donationBank,
  donationAccountNumber,
}) {
  const safeName = escapeHtml(name)
  const safeInterest = escapeHtml(interest)
  const safeDonateUrl = escapeHtml(donateUrl)
  const safeSiteUrl = escapeHtml(siteUrl)
  const safeDonationAccountName = escapeHtml(donationAccountName)
  const safeDonationBank = escapeHtml(donationBank)
  const safeDonationAccountNumber = escapeHtml(donationAccountNumber)

  return emailLayout({
    eyebrow: 'Message Received',
    title: 'Thank you for reaching out to OTSEF',
    preview:
      'We received your message and will respond soon. You can also support our book distribution work.',
    body: `
      <p style="margin:0 0 18px;color:#334155;font-size:16px;line-height:1.7;">
        Hello ${safeName},
      </p>
      <p style="margin:0 0 18px;color:#334155;font-size:16px;line-height:1.7;">
        Thank you for contacting Off The Streets Educational Foundation. We received your message about <strong>${safeInterest}</strong>, and our team will review it carefully.
      </p>
      <p style="margin:0 0 26px;color:#334155;font-size:16px;line-height:1.7;">
        We usually respond within 48 hours. Your interest helps us keep building pathways for children and young people to learn, grow, and prepare for meaningful futures.
      </p>

      <div style="margin:28px 0;padding:24px;background:#eff6ff;border:1px solid #bfdbfe;border-radius:18px;">
        <p style="margin:0 0 8px;color:#1d4ed8;font-size:12px;font-weight:800;letter-spacing:0.12em;text-transform:uppercase;">
          Support the mission
        </p>
        <h2 style="margin:0 0 12px;color:#0f172a;font-size:22px;line-height:1.25;">
          Donate to the Book Distribution Initiative
        </h2>
        <p style="margin:0 0 20px;color:#334155;font-size:15px;line-height:1.7;">
          Your support can help provide books and educational resources to school and public libraries. You can donate using the account details below.
        </p>
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin:0 0 20px;border-collapse:collapse;background:#ffffff;border:1px solid #bfdbfe;border-radius:14px;overflow:hidden;">
          <tr>
            <td style="padding:14px 16px;border-bottom:1px solid #dbeafe;color:#64748b;font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:0.08em;">
              Account Name
            </td>
            <td style="padding:14px 16px;border-bottom:1px solid #dbeafe;color:#0f172a;font-size:14px;font-weight:700;text-align:right;">
              ${safeDonationAccountName}
            </td>
          </tr>
          <tr>
            <td style="padding:14px 16px;border-bottom:1px solid #dbeafe;color:#64748b;font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:0.08em;">
              Bank
            </td>
            <td style="padding:14px 16px;border-bottom:1px solid #dbeafe;color:#0f172a;font-size:14px;font-weight:700;text-align:right;">
              ${safeDonationBank}
            </td>
          </tr>
          <tr>
            <td style="padding:14px 16px;color:#64748b;font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:0.08em;">
              Account Number
            </td>
            <td style="padding:14px 16px;color:#0f172a;font-size:18px;font-weight:800;text-align:right;">
              ${safeDonationAccountNumber}
            </td>
          </tr>
        </table>
        <a href="${safeDonateUrl}" style="display:inline-block;background:#2563eb;color:#ffffff;text-decoration:none;font-size:15px;font-weight:700;padding:13px 20px;border-radius:999px;">
          Visit OTSEF
        </a>
      </div>

      <p style="margin:0;color:#334155;font-size:15px;line-height:1.7;">
        Warm regards,<br />
        <strong>OTSEF Foundation</strong>
      </p>
    `,
    footer: `Off The Streets Educational Foundation. Visit ${safeSiteUrl} for more information.`,
  })
}

async function sendResendEmail({ to, from, replyTo, subject, html, text }) {
  const apiKey = process.env.RESEND_API_KEY

  if (!apiKey) {
    throw new Error('RESEND_API_KEY is not configured.')
  }

  console.info('[OTSEF email] Resend send attempt', {
    from,
    to,
    resendApiKeyPrefix: apiKey.slice(0, 5),
    resendApiKeySource: 'RESEND_API_KEY',
    environment:
      process.env.VERCEL_ENV || process.env.NODE_ENV || 'development',
  })

  const response = await fetch(RESEND_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
      'User-Agent': 'otsef-website/1.0',
    },
    body: JSON.stringify({
      from,
      to,
      subject,
      html,
      text,
      reply_to: replyTo,
    }),
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(`Resend email failed: ${errorText}`)
  }

  return response.json()
}

function publicServerError(error) {
  if (process.env.NODE_ENV !== 'production' && error instanceof Error) {
    return error.message
  }

  return 'Unable to send message right now.'
}

function publicConfirmationError(error) {
  if (process.env.NODE_ENV !== 'production' && error instanceof Error) {
    return error.message
  }

  return undefined
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const payload =
      typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {}

    const name = clean(payload.name)
    const email = clean(payload.email)
    const interest = clean(payload.interest || payload.subject)
    const message = clean(payload.message)
    const source = clean(payload.source || 'Website contact form')

    if (!name || !email || !interest || !message) {
      return res.status(400).json({ error: 'Please complete all required fields.' })
    }

    if (!isEmail(email)) {
      return res.status(400).json({ error: 'Please enter a valid email address.' })
    }

    const mailTo = process.env.MAIL_TO || 'contactotsef@gmail.com'
    const mailFrom = RESEND_FROM
    const siteUrl = process.env.SITE_URL || 'https://otsef.org'
    const donateUrl = process.env.DONATE_URL || `${siteUrl}/contact`
    const donationAccountName =
      process.env.DONATION_ACCOUNT_NAME ||
      'Off The Streets Educational Foundation'
    const donationBank = process.env.DONATION_BANK || 'Zenith Bank'
    const donationAccountNumber =
      process.env.DONATION_ACCOUNT_NUMBER || '1312027932'

    await sendResendEmail({
      from: mailFrom,
      to: [mailTo],
      replyTo: email,
      subject: `OTSEF Website Message: ${cleanHeader(interest)}`,
      text: [
        'New OTSEF website message',
        '',
        `Source: ${source}`,
        `Name: ${name}`,
        `Email: ${email}`,
        `Interested in: ${interest}`,
        '',
        'Message:',
        message,
      ].join('\n'),
      html: adminTemplate({ name, email, interest, message, source }),
    })

    let confirmationSent = true
    let confirmationErrorMessage

    try {
      await sendResendEmail({
        from: mailFrom,
        to: [email],
        replyTo: mailTo,
        subject: 'We received your message - OTSEF',
        text: [
          `Hello ${name},`,
          '',
          `Thank you for contacting OTSEF. We received your message about ${interest}, and our team will review it carefully.`,
          '',
          'We usually respond within 48 hours.',
          '',
          'Support the mission:',
          'Donate to OTSEF.',
          `Account Name: ${donationAccountName}`,
          `Bank: ${donationBank}`,
          `Account Number: ${donationAccountNumber}`,
          `Website: ${donateUrl}`,
          '',
          'Warm regards,',
          'OTSEF Foundation',
        ].join('\n'),
        html: confirmationTemplate({
          name,
          interest,
          siteUrl,
          donateUrl,
          donationAccountName,
          donationBank,
          donationAccountNumber,
        }),
      })
    } catch (confirmationError) {
      confirmationSent = false
      confirmationErrorMessage = publicConfirmationError(confirmationError)
      console.error('OTSEF confirmation email failed:', confirmationError)
    }

    return res.status(200).json({
      ok: true,
      confirmationSent,
      confirmationError: confirmationErrorMessage,
    })
  } catch (error) {
    console.error('OTSEF contact email failed:', error)
    return res.status(500).json({ error: publicServerError(error) })
  }
}
