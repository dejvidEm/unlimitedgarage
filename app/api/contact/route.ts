import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, contact, message } = body

    // Validate required fields
    if (!name || !contact || !message) {
      return NextResponse.json(
        { error: 'Všetky polia sú povinné' },
        { status: 400 }
      )
    }

    // Initialize Resend only when needed (at runtime, not build time)
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error('RESEND_API_KEY is not set')
      return NextResponse.json(
        { error: 'Email služba nie je nakonfigurovaná' },
        { status: 500 }
      )
    }

    const resend = new Resend(apiKey)

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Unlimited garage <onboarding@resend.dev>', // Update this with your verified domain
      to: ['info@unlimitedgarage.sk'], // Update with your email
      subject: `Nová požiadavka od ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #d4af37;">Nová požiadavka z kontaktného formulára</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Meno:</strong> ${name}</p>
            <p><strong>Kontakt:</strong> ${contact}</p>
            <p><strong>Správa:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            Tento email bol odoslaný z kontaktného formulára na webovej stránke Unlimited garage.
          </p>
        </div>
      `,
      text: `
Nová požiadavka z kontaktného formulára

Meno: ${name}
Kontakt: ${contact}

Správa:
${message}

---
Tento email bol odoslaný z kontaktného formulára na webovej stránke Unlimited garage.
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Nepodarilo sa odoslať email' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Email bol úspešne odoslaný', data },
      { status: 200 }
    )
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Nastala chyba pri spracovaní požiadavky' },
      { status: 500 }
    )
  }
}

