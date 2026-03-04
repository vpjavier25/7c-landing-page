"use server"

import * as google from "google-auth-library"
import * as googleapis from "googleapis"

const RANGE = "'datos'!A2:D2";

export async function appendToSpreadsheet(data:any) {
    const auth = new google.GoogleAuth({
        credentials: {
            client_email: process.env.GOOGLE_CLIENT_EMAIL,
            private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n")
        },
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = googleapis.google.sheets({ version: "v4", auth });

    const response = await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.GOOGLE_SHEET_ID,
        range: RANGE,
        valueInputOption: "USER_ENTERED",
        requestBody: {
            values: [Object.values(data)],
        },
    });


    return JSON.parse(JSON.stringify({ success: true }));
}