import { NextResponse } from "next/server"

export const dynamic = 'force-static'
 
export async function GET() {
 
  return new NextResponse(`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.waehlerbriefe.de</loc>
    <lastmod>${(new Date()).toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1</priority>
  </url>
</urlset>`, {
    headers: {
        "Content-Type": "application/xml"
    }
  })
}