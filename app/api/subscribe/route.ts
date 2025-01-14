/**
 * Handles the POST request to subscribe an email to a Google Sheet.
 *
 * This function expects a JSON payload with an `email` field. It uses the Google Sheets API
 * to append the provided email to a specified Google Sheet.
 *
 * @param {Request} req - The incoming HTTP request.
 * @returns {Promise<NextResponse>} - The response indicating the result of the subscription attempt.
 *
 * @throws {Error} - If there is an issue with the subscription process, an error is logged and a 500 status is returned.
 */
import { NextResponse } from 'next/server'
import { google } from 'googleapis'

export async function POST(req: Request) {
  if (req.method === 'POST') {
    try {
      const { email } = await req.json()

      // Load the Google Sheets API credentials
      const auth = new google.auth.GoogleAuth({
        credentials: JSON.parse(process.env.NEXT_PUBLIC_GOOGLE_SHEETS_CREDENTIALS || ''),
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      })

      const sheets = google.sheets({ version: 'v4', auth })

      // Append the email to the Google Sheet
      await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.GOOGLE_SHEET_ID,
        range: 'Sheet1!A:A', // Adjust this to match your sheet's structure
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: [[email]],
        },
      })

      return NextResponse.json({ message: 'Subscription successful' }, { status: 200 })
    } catch (error) {
      console.error('Subscription error:', error)
      return NextResponse.json({ message: 'Subscription failed' }, { status: 500 })
    }
  } else {
    return NextResponse.json({ message: 'Method not allowed' }, { status: 405 })
  }
}