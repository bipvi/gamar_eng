// app/api/contatti/route.ts
// Installa nodemailer: npm install nodemailer @types/nodemailer

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { nomeAzienda, nome, email, messaggio } = await req.json();

  if (!nomeAzienda || !nome || !email || !messaggio) {
    return NextResponse.json({ error: "Campi mancanti" }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    // Usa SMTP del tuo provider (es. Gmail, SendGrid, Resend...)
    // Variabili d'ambiente in .env.local:
    //   SMTP_HOST=smtp.gmail.com
    //   SMTP_PORT=587
    //   SMTP_USER=tua@email.com
    //   SMTP_PASS=app-password
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: `"${nomeAzienda}" <${process.env.SMTP_USER}>`,
    to: "info@gamarengineering.com",
    replyTo: email,
    subject: `[Contatto Web] ${nomeAzienda} — ${nome}`,
    html: `
      <div style="font-family: monospace; background:#010812; color:#93c5fd; padding:32px; border:1px solid #1e3a5f; border-radius:8px;">
        <h2 style="color:#60a5fa; letter-spacing:4px; text-transform:uppercase; margin-bottom:24px;">
          Nuova richiesta dal sito
        </h2>
        <table style="width:100%; border-collapse:collapse;">
          <tr><td style="padding:8px 0; color:#64748b; width:160px;">AZIENDA</td><td style="color:#e2e8f0;">${nomeAzienda}</td></tr>
          <tr><td style="padding:8px 0; color:#64748b;">REFERENTE</td><td style="color:#e2e8f0;">${nome}</td></tr>
          <tr><td style="padding:8px 0; color:#64748b;">EMAIL</td><td style="color:#60a5fa;"><a href="mailto:${email}" style="color:#60a5fa;">${email}</a></td></tr>
        </table>
        <div style="margin-top:24px; padding:16px; background:#0a1628; border-left:2px solid #3b82f6; border-radius:4px;">
          <p style="color:#64748b; text-transform:uppercase; font-size:11px; letter-spacing:2px; margin:0 0 8px;">MESSAGGIO</p>
          <p style="color:#e2e8f0; margin:0; white-space:pre-wrap;">${messaggio}</p>
        </div>
      </div>
    `,
  });

  return NextResponse.json({ ok: true });
}