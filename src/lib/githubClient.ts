export const triggerNexusBuild = async (url: string, appName: string) => {
  const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

  // فحص أمني: هل التوكن مقروء؟
  if (!GITHUB_TOKEN) {
    console.error("❌ Nexus Error: التوكن غير موجود في ملف .env أو لم يبدأ بـ VITE_");
    throw new Error('GitHub token not found');
  }

  const host = new URL(url).hostname;
  const cleanAppName = appName.replace(/\s+/g, '');

  const response = await fetch(
    `https://api.github.com/repos/smart346965-cloud/nexus-auto/dispatches`,
    {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GITHUB_TOKEN}`, // تم التغيير لـ Bearer
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        event_type: 'build_app', // تأكد أن هذا الاسم مطابق لما هو موجود داخل build-twa.yml
        client_payload: {
          host: host,
          name: appName,
          appName: cleanAppName
        }
      })
    }
  );

  return response;
};
