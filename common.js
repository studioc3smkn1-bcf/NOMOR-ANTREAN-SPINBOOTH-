// ISI DARI SUPABASE: Project Settings > API
const SUPABASE_URL = "https://XXXX.supabase.co";
const SUPABASE_KEY = "ISI_ANON_PUBLIC_KEY";
const sb = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
const LETTERS = ["A","B","C","D","E"];
const fmt = t => t.letter + "-" + String(t.num).padStart(3,"0");
const today = () => new Date().toLocaleDateString("sv-SE",{timeZone:"Asia/Jakarta"});
const css = `*{box-sizing:border-box}body{margin:0;font-family:system-ui,sans-serif;background:#DCEED1;color:#1F487E;padding:16px}
h1{margin:0 0 12px}button{font:inherit;font-weight:700;border:0;border-radius:14px;padding:16px;background:#1F487E;color:#fff;width:100%;margin:6px 0}
button.y{background:#F2C230;color:#1F487E}.card{background:#fff;border-radius:16px;padding:16px;margin:8px 0;border:2px solid #AAC0AA}
.big{font-size:56px;font-weight:800;line-height:1.1}.grid{display:grid;grid-template-columns:repeat(2,1fr);gap:10px}input{font:inherit;padding:12px;border-radius:10px;border:2px solid #AAC0AA;width:100%}`;
document.head.insertAdjacentHTML("beforeend","<style>"+css+"</style>");
