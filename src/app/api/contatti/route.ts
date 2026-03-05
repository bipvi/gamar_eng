// app/api/contatti/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { nomeAzienda, nome, email, messaggio } = body;

    // 1. Log dei dati in ingresso
    console.log("--- NUOVA RICHIESTA CONTATTO ---");
    console.log("Dati ricevuti:", { nomeAzienda, nome, email, messaggio });

    if (!nomeAzienda || !nome || !email || !messaggio) {
      console.warn("Attenzione: Campi obbligatori mancanti nel body");
      return NextResponse.json({ error: "Campi mancanti" }, { status: 400 });
    }

    // 2. Log della configurazione SMTP (senza loggare la password per sicurezza!)
    console.log("Configurazione SMTP:", {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      user: process.env.SMTP_USER,
    });

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false, // true per porta 465, false per altre
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        // Microsoft richiede TLS 1.2 o superiore
        ciphers: 'SSLv3',
        rejectUnauthorized: false
      }
    });

    // 3. Invio email e cattura risultato
    console.log("Tentativo di invio email in corso...");

    const info = await transporter.sendMail({
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

    console.log("Email inviata con successo! MessageId:", info.messageId);

    return NextResponse.json({ ok: true });

  } catch (error: any) {
    // 4. Log dettagliato dell'errore
    console.error("ERRORE DURANTE L'INVIO EMAIL:");
    console.error("Messaggio:", error.message);
    if (error.code) console.error("Codice Errore:", error.code);
    if (error.command) console.error("Comando fallito:", error.command);

    return NextResponse.json(
      { error: "Errore interno del server", details: error.message },
      { status: 500 }
    );
  }
}