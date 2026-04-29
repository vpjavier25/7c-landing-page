"use server"

import * as google from "google-auth-library"
import * as googleapis from "googleapis"
import nodemailer from "nodemailer"
import SMTPTransport from "nodemailer/lib/smtp-transport"

const RANGE = "'datos'!A2:D2";
const COMMERCIAL_EMAIL = "comercial@atrium.com.co";
const BRAND_NAME = "7 Cielos Rooftop";

type ContactFormData = {
    nombre: string;
    email: string;
    telefono: string;
    mensaje: string;
}

function normalizeValue(value: unknown) {
    if (typeof value !== "string") {
        return "";
    }

    return value.trim();
}

function getEnv(name: string) {
    return process.env[name]?.trim() ?? "";
}

function escapeHtml(value: string) {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function buildContactData(data: Record<string, unknown>): ContactFormData {
    return {
        nombre: normalizeValue(data.nombre),
        email: normalizeValue(data.email),
        telefono: normalizeValue(data.telefono),
        mensaje: normalizeValue(data.mensaje),
    };
}

async function sendCommercialEmail(data: ContactFormData) {
    const user = getEnv("GOOGLE_MAIL_USER");
    const clientId = getEnv("GOOGLE_OAUTH_CLIENT_ID");
    const clientSecret = getEnv("GOOGLE_OAUTH_CLIENT_SECRET");
    const refreshToken = getEnv("GOOGLE_OAUTH_REFRESH_TOKEN");

    if (!user || !clientId || !clientSecret || !refreshToken) {
        throw new Error("Missing Google OAuth configuration");
    }

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            type: "OAuth2",
            user,
            clientId,
            clientSecret,
            refreshToken,
        },
    } as SMTPTransport.Options);

    const nombre = escapeHtml(data.nombre);
    const email = escapeHtml(data.email);
    const telefono = escapeHtml(data.telefono);
    const mensaje = escapeHtml(data.mensaje).replace(/\n/g, "<br />");

    try {
        await transporter.sendMail({
            from: getEnv("GOOGLE_MAIL_FROM") || `"${BRAND_NAME}" <${user}>`,
            to: [COMMERCIAL_EMAIL, data.email].filter(Boolean).join(", "),
            replyTo: data.email || undefined,
            subject: `Nuevo contacto desde la landing de ${BRAND_NAME}: ${data.nombre || "Sin nombre"}`,
            text: [
                `Nuevo contacto desde la landing de ${BRAND_NAME}`,
                "",
                `Nombre: ${data.nombre || "No proporcionado"}`,
                `Email: ${data.email || "No proporcionado"}`,
                `Telefono: ${data.telefono || "No proporcionado"}`,
                "",
                "Mensaje:",
                data.mensaje || "No proporcionado",
            ].join("\n"),
            html: `
                <div style="margin:0;padding:24px;background-color:#f4f1ea;font-family:Arial,sans-serif;color:#1f2937;">
                    <div style="max-width:640px;margin:0 auto;background-color:#ffffff;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;">
                        <div style="padding:24px 28px;background-color:#111827;color:#ffffff;">
                            <p style="margin:0;font-size:12px;letter-spacing:1.6px;text-transform:uppercase;opacity:0.8;">${BRAND_NAME}</p>
                            <h1 style="margin:8px 0 0;font-size:24px;line-height:1.3;">Nuevo contacto desde la landing de ${BRAND_NAME}</h1>
                        </div>
                        <div style="padding:28px;">
                            <p style="margin:0 0 20px;font-size:15px;line-height:1.6;">
                                Se recibió una nueva solicitud a través del formulario del sitio web.
                            </p>
                            <table style="width:100%;border-collapse:collapse;font-size:14px;line-height:1.6;">
                                <tr>
                                    <td style="padding:10px 0;border-bottom:1px solid #e5e7eb;font-weight:700;width:160px;">Nombre</td>
                                    <td style="padding:10px 0;border-bottom:1px solid #e5e7eb;">${nombre || "No proporcionado"}</td>
                                </tr>
                                <tr>
                                    <td style="padding:10px 0;border-bottom:1px solid #e5e7eb;font-weight:700;">Email</td>
                                    <td style="padding:10px 0;border-bottom:1px solid #e5e7eb;">${email || "No proporcionado"}</td>
                                </tr>
                                <tr>
                                    <td style="padding:10px 0;border-bottom:1px solid #e5e7eb;font-weight:700;">Telefono</td>
                                    <td style="padding:10px 0;border-bottom:1px solid #e5e7eb;">${telefono || "No proporcionado"}</td>
                                </tr>
                                <tr>
                                    <td style="padding:10px 0 0;font-weight:700;vertical-align:top;">Mensaje</td>
                                    <td style="padding:10px 0 0;">${mensaje || "No proporcionado"}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            `,
        });
    } catch (error) {
        const message = error instanceof Error ? error.message : "Unknown mail error";
        throw new Error(`Google mail send failed: ${message}`);
    }
}

export async function appendToSpreadsheet(data: Record<string, unknown>) {
    const contactData = buildContactData(data);

    await sendCommercialEmail(contactData);

    const auth = new google.GoogleAuth({
        credentials: {
            client_email: getEnv("GOOGLE_CLIENT_EMAIL"),
            private_key: getEnv("GOOGLE_PRIVATE_KEY").replace(/\\n/g, "\n")
        },
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = googleapis.google.sheets({ version: "v4", auth });

    await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.GOOGLE_SHEET_ID,
        range: RANGE,
        valueInputOption: "USER_ENTERED",
        requestBody: {
            values: [[
                contactData.nombre,
                contactData.email,
                contactData.telefono,
                contactData.mensaje,
            ]],
        },
    });

    return JSON.parse(JSON.stringify({ success: true }));
}
