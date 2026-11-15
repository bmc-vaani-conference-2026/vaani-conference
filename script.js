/**
 * AI & DATA SCIENCE: CONCEPTS, SKILLS & SOCIETY
 * Bharata Mata College (Autonomous) · AICTE-VAANI Scheme
 * script.js — Interactive Client Logic
 */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

  /* ========================================================================== */
  /* >>>>> START SCRIPT PART 00: BILINGUAL I18N SYSTEM (MALAYALAM & ENGLISH) <<<<< */
  /* ========================================================================== */
  const TRANSLATIONS = {
    ml: {
      page_title: "എ ഐ & ഡാറ്റാ സയൻസ്: സങ്കല്പനം, സാങ്കേതികത, സമൂഹം | ഭാരത മാതാ കോളേജ്",
      meta_desc: "എ ഐ & ഡാറ്റാ സയൻസ്: സങ്കല്പനം, സാങ്കേതികത, സമൂഹം — ഭാരത മാതാ കോളേജ് (ഓട്ടോണമസ്), തൃക്കാക്കര സംഘടിപ്പിക്കുന്ന ദ്വിദിന ദേശീയ കോൺഫറൻസ്. 2026 ഡിസംബർ 8-9.",
      nav_register: "രജിസ്ട്രേഷൻ",
      nav_submit: "പ്രബന്ധം സമർപ്പിക്കുക",
      nav_contact: "ബന്ധപ്പെടുക",
      sidebar_title: "ഭാരത മാതാ കോളേജ്",
      sidebar_subtitle: "AICTE-വാണി കോൺഫറൻസ്",
      sidebar_lang_label: "ഭാഷ / Language:",
      sidebar_btn_register: "രജിസ്റ്റർ ചെയ്യുക (ATAL പോർട്ടൽ)",
      sidebar_btn_submit: "പ്രബന്ധം സമർപ്പിക്കുക",
      sidebar_btn_contact: "സ്ഥലവും വിവരങ്ങളും",
      sidebar_nav_heading: "നാവിഗേഷൻ",
      sidebar_nav_home: "ഹോം",
      sidebar_nav_about: "കോൺഫറൻസിനെക്കുറിച്ച്",
      sidebar_nav_countdown: "കൗണ്ട്ഡൗൺ",
      sidebar_nav_college: "ഭാരത മാതാ കോളേജ്",
      sidebar_nav_tracks: "വിഷയമേഖലകൾ",
      sidebar_nav_dates: "പ്രധാന തീയതികൾ",
      sidebar_nav_papers: "പ്രബന്ധങ്ങൾ ക്ഷണിക്കുന്നു",
      sidebar_nav_speakers: "പ്രധാന പ്രഭാഷകർ",
      sidebar_nav_registration: "രജിസ്ട്രേഷൻ",
      sidebar_nav_contact: "വേദിയും സംഘാടകരും",

      hero_scheme_title: "AICTE – ATAL- ധനസഹായത്തോടെ സംഘടിപ്പിക്കുന്ന ദേശീയ കോൺഫറൻസ്",
      hero_date_month: "ഡിസം",
      hero_date_days: "8-9",
      hero_date_year: "2026",
      hero_overline: "ദേശീയ കോൺഫറൻസ്",
      hero_title: "എ ഐ &amp; ഡാറ്റാ സയൻസ്:<br />സങ്കല്പനം, സാങ്കേതികത, സമൂഹം",
      hero_medium_pill: "കോൺഫറൻസ് മാധ്യമം: <strong>മലയാളം</strong>",
      hero_org_label: "സംയുക്തമായി സംഘടിപ്പിക്കുന്നത്",
      hero_org_depts: "കമ്പ്യൂട്ടർ സയൻസ് വിഭാഗവും<br />മലയാളവിഭാഗവും",
      hero_org_institution: "ഭാരത മാതാ കോളേജ് (ഓട്ടോണമസ്), തൃക്കാക്കര, കൊച്ചി-21",

      cd_eyebrow: "കോൺഫറൻസ് ആരംഭിക്കാൻ ഇനി",
      cd_days: "ദിനങ്ങൾ",
      cd_hours: "മണിക്കൂറുകൾ",
      cd_minutes: "മിനിറ്റുകൾ",
      cd_seconds: "സെക്കൻഡുകൾ",
      cd_date_main: "ഡിസംബർ 8 &ndash; 9, 2026",
      cd_date_time: "രാവിലെ 9:30 IST",

      about_heading: "ദേശീയ കോൺഫറൻസിനെക്കുറിച്ച്…",
      about_caption: "AICTE-VAANI പദ്ധതിയുടെ കീഴിൽ സംഘടിപ്പിക്കുന്ന ദ്വിദിന ദേശീയ കോൺഫറൻസ്",
      about_lead: "വിദ്യാഭ്യാസം, ആരോഗ്യസംരക്ഷണം, കൃഷി, ഭരണം, വ്യവസായം തുടങ്ങി വിവിധ മേഖലകളിൽ നിർമ്മിതബുദ്ധിയും ഡാറ്റാ സയൻസും അതിവേഗം പരിവർത്തന സാധ്യതകൾ തുറക്കുകയാണ്.",
      about_p1: "AICTE-VAANI പദ്ധതിയുടെ കീഴിൽ സംഘടിപ്പിക്കുന്ന ഈ ദ്വിദിന കോൺഫറൻസ് മലയാളത്തിലുള്ള സാങ്കേതിക പരിജ്ഞാനത്തിന്റെ വളർച്ചയും എ ഐയിലും അനുബന്ധ സാങ്കേതികവിദ്യകളിലും ഉയർന്നുവരുന്ന വികസനങ്ങളെക്കുറിച്ചുള്ള അവബോധ രൂപീകരണവും ലക്ഷ്യമിടുന്നു.",
      about_p2: "അക്കാദമിക് വിദഗ്‌ധർ, ഗവേഷകർ, വിദ്യാർത്ഥികൾ, വ്യവസായരംഗത്തെ പ്രമുഖർ തുടങ്ങിയവർക്ക് എ ഐ, ഡാറ്റാ സയൻസ് എന്നിവയിലെ സമകാലിക മുന്നേറ്റങ്ങൾ അവതരിപ്പിക്കാനും ആശയങ്ങൾ കൈമാറാനും മികച്ച സാങ്കേതിക സെഷനുകളിലൂടെ അവയുടെ പ്രയോഗങ്ങളെയും സാമൂഹിക സ്വാധീനത്തെയും കുറിച്ച് മനസ്സിലാക്കാനും ചർച്ച ചെയ്യാനുമുള്ള ഒരു പൊതുവേദിയാണ് ഈ കോൺഫറൻസ്.",
      about_focus_title: "കോൺഫറൻസിന്റെ മുഖ്യ ലക്ഷ്യങ്ങൾ",
      about_point1: "<strong>മലയാളഭാഷയിലൂടെ സാങ്കേതികതയെ മനസ്സിലാക്കുക:</strong> മലയാളത്തിലുള്ള സാങ്കേതിക പരിജ്ഞാനത്തിന്റെ വളർച്ചയും പ്രാദേശിക ഭാഷാ കമ്പ്യൂട്ടിംഗും പ്രോത്സാഹിപ്പിക്കുക.",
      about_point2: "<strong>ഗവേഷണവും അക്കാദമിക കൈമാറ്റവും:</strong> നൂതന ആശയങ്ങളും പ്രബന്ധങ്ങളും അവതരിപ്പിക്കാൻ അധ്യാപകർക്കും ഗവേഷകർക്കും വിദ്യാർത്ഥികൾക്കും വേദി നൽകുക.",
      about_point3: "<strong>സാമൂഹിക സ്വാധീനം:</strong> ആരോഗ്യം, ഭരണം തുടങ്ങിയ മേഖലകളിൽ നിർമ്മിതബുദ്ധിയുടെ ഉത്തരവാദിത്തപരമായ പ്രയോഗങ്ങളും സാമൂഹിക സ്വാധീനവും ചർച്ച ചെയ്യുക.",
      about_panel_title: "കോൺഫറൻസ് വിശേഷങ്ങൾ",
      about_panel_subtitle: "ഔദ്യോഗിക AICTE-VAANI പരിപാടി",
      about_card1_label: "പദ്ധതിയും ധനസഹായവും",
      about_card1_heading: "AICTE-VAANI പദ്ധതി",
      about_card1_text: "ഭാരതീയ ഭാഷകളുടെ പ്രോത്സാഹനത്തിനും വളർച്ചയ്ക്കുമായുള്ള പദ്ധതി. മലയാളത്തിലൂടെയുള്ള സാങ്കേതിക വിദ്യാഭ്യാസവും പ്രാദേശിക ഭാഷാ കമ്പ്യൂട്ടിംഗും പ്രോത്സാഹിപ്പിക്കുന്നു.",
      about_card2_label: "രജിസ്ട്രേഷൻ",
      about_card2_heading: "സൗജന്യ രജിസ്ട്രേഷൻ",
      about_card2_text: "AICTE അടൽ അക്കാദമിയുടെ പിന്തുണയോടെ. അധ്യാപകർക്കും ഗവേഷകർക്കും വിദ്യാർത്ഥികൾക്കും രജിസ്ട്രേഷൻ തികച്ചും സൗജന്യമാണ്.",
      about_card3_label: "പ്രസിദ്ധീകരണം",
      about_card3_heading: "ISBN സഹിതമുള്ള പ്രൊസീഡിംഗ്സ്",
      about_card3_text: "തിരഞ്ഞടുക്കപ്പെടുന്ന പ്രബന്ധങ്ങൾ ISBN <strong>978-81-985405-9-1</strong> നമ്പറോടുകൂടിയ കോൺഫറൻസ് പ്രൊസീഡിംഗ്‌സിൽ പ്രസിദ്ധീകരിക്കും.",
      about_meta_dates_label: "തീയതികൾ",
      about_meta_dates_val: "ഡിസംബർ 8–9, 2026",
      about_meta_medium_label: "മാധ്യമം",
      about_meta_medium_val: "മലയാളം",
      about_meta_venue_label: "വേദി",
      about_meta_venue_val: "ഭാരത മാതാ കോളേജ്",

      college_heading: "ഭാരത മാതാ കോളേജ്",
      college_caption: "ഓട്ടോണമസ് സ്ഥാപനം · മഹാത്മാഗാന്ധി സർവകലാശാല അഫിലിയേഷൻ · NAAC A+ അക്രഡിറ്റേഷൻ",
      college_badge_grade: "NAAC A+ അക്രഡിറ്റേഷൻ",
      college_badge_est: "1965-ൽ സ്ഥാപിതം",
      college_badge_tag: "ഓട്ടോണമസ്",
      college_motto_label: "കോളേജ് ആപ്തവാക്യം",
      college_motto_text: '"ദൈവത്തിനും രാജ്യത്തിനും വേണ്ടി" (For God and Country)',
      college_p1: "1965-ൽ 'ഭാരത മാതാ എഡ്യൂക്കേഷണൽ ട്രസ്റ്റി'നു കീഴിൽ സ്ഥാപിതമായ ഭാരത മാതാ കോളേജ് (ഓട്ടോണമസ്), തൃക്കാക്കര, മഹാത്മാഗാന്ധി സർവകലാശാലയിൽ അഫിലിയേറ്റ് ചെയ്യപ്പെട്ട എറണാകുളം-അങ്കമാലി അതിരൂപതയുടെ കീഴിൽ പ്രവർത്തിക്കുന്ന ഒരു പ്രമുഖ വിദ്യാഭ്യാസ സ്ഥാപനമാണ്.",
      college_p2: "കൊച്ചി, കാക്കനാട്- തൃക്കാക്കര സീപോർട്ട്-എയർപോർട്ട് റോഡിന് സമീപത്തായി സ്ഥിതി ചെയ്യുന്നു. 2019-ൽ നാഷണൽ അസസ്മെന്റ് ആൻഡ് അക്രഡിറ്റേഷൻ കൗൺസിലിന്റെ (NAAC) 'A+' ഗ്രേഡ് കരസ്ഥമാക്കി.",
      college_p3: '"ദൈവത്തിനും രാജ്യത്തിനും വേണ്ടി" (For God and Country) എന്ന ആപ്തവാക്യം ഉയർത്തിപ്പിടിക്കുന്ന കോളേജ്, ഉത്തരവാദിത്തമുള്ള പൗരത്വം, മതേതര കാഴ്ചപ്പാട്, ധാർമ്മിക മൂല്യങ്ങൾ എന്നിവയ്ക്ക് മുൻഗണന നൽകിക്കൊണ്ടുള്ള സമഗ്രമായ വിദ്യാഭ്യാസാനുഭവമാണ് വിദ്യാർത്ഥികൾക്ക് പകർന്നുനൽകുന്നത്. ആഗോള വെല്ലുവിളികളെ നേരിടാൻ സജ്ജരായ അക്കാദമികമായ അറിവും സമൂഹത്തിൽ സജീവമായി ഇടപെടുന്നതിന് ധാർമ്മിക അടിത്തറയുമുള്ള വിദ്യാർത്ഥികളെ വളർത്തിയെടുക്കാൻ ഈ സ്ഥാപനം ശ്രദ്ധ കേന്ദ്രീകരിക്കുന്നു.',
      college_meta_accred_label: "അക്രഡിറ്റേഷൻ",
      college_meta_accred_val: "NAAC A+ (2019)",
      college_meta_status_label: "പദവി",
      college_meta_status_val: "ഓട്ടോണമസ്",
      college_meta_affil_label: "അഫിലിയേഷൻ",
      college_meta_affil_val: "എം.ജി. സർവകലാശാല",
      college_meta_founded_label: "സ്ഥാപിതം",
      college_meta_founded_val: "1965",
      college_portal_btn: "ഔദ്യോഗിക കോളേജ് വെബ്സൈറ്റ് സന്ദർശിക്കുക",

      depts_heading: "കോൺഫറൻസ് സംഘടിപ്പിക്കുന്ന വകുപ്പുകൾ",
      dept1_tag: "ഗവൺമെന്റ് എയ്ഡഡ് വിഭാഗം",
      dept1_title: "കമ്പ്യൂട്ടർ സയൻസ് വിഭാഗം",
      dept1_desc1: "2021 ജനുവരിയിൽ സർക്കാർ ധനസഹായത്തോടെ സ്ഥാപിതമായ കമ്പ്യൂട്ടർ സയൻസ് വകുപ്പ്, ആർട്ടിഫിഷ്യൽ ഇന്റലിജൻസ്, മെഷീൻ ലേണിംഗ് എന്നിവയിൽ ഇന്റഗ്രേറ്റഡ് എം.എസ്‌.സി. കോഴ്സ് നടത്തിവരുന്നു.",
      dept1_desc2: "പ്രായോഗിക കഴിവുകളും സൈദ്ധാന്തിക അറിവും സമന്വയിപ്പിക്കുന്ന ഈ പാഠ്യപദ്ധതി, വിവിധ വ്യവസായ മേഖലകളിലെ ആധുനിക സാങ്കേതിക വെല്ലുവിളികളെ നേരിടാൻ സാമൂഹിക ഉത്തരവാദിത്തമുള്ള ബിരുദധാരികളെ സജ്ജമാക്കുന്നു.",
      dept2_tag: "വൊക്കേഷണൽ മലയാളത്തിന്റെ തുടക്കക്കാർ",
      dept2_title: "മലയാളവിഭാഗം",
      dept2_desc1: "1965-ൽ രണ്ടാം ഭാഷ മലയാളത്തിനായി സ്ഥാപിതമായ മലയാളവിഭാഗം, 1998-ൽ പ്രൊഫ. സോമവർമ രാജയുടെ കീഴിൽ കേരളത്തിലെ ആദ്യത്തെ ബി.എ. മലയാളം കോപ്പിറൈറ്റിംഗ് (വൊക്കേഷണൽ) കോഴ്‌സ് ആരംഭിച്ചു.",
      dept2_desc2: "തൊഴിലധിഷ്ഠിത കോഴ്‌സ് എന്ന നിലയിൽ പരസ്യ-മാധ്യമ- ചലച്ചിത്ര മേഖലകളിൽ പ്രവർത്തിക്കുന്ന നിരവധി പ്രൊഫഷണലുകളെ വാർത്തെടുക്കാൻ ഈ കോഴ്‌സിന് കഴിഞ്ഞിട്ടുണ്ട്.",

      objectives_heading: "കോൺഫറൻസിന്റെ ലക്ഷ്യങ്ങൾ",
      obj_title_1: "മലയാളഭാഷയിലൂടെ സാങ്കേതികതയെ മനസ്സിലാക്കുക",
      obj_desc_1: "മലയാളത്തിലുള്ള സാങ്കേതിക പരിജ്ഞാനത്തിന്റെ വളർച്ചയും പ്രാദേശിക ഭാഷാ കമ്പ്യൂട്ടിംഗും പ്രോത്സാഹിപ്പിക്കുക.",
      obj_title_2: "വളർന്നുവരുന്ന സാങ്കേതികവിദ്യകളെ പ്രോത്സാഹിപ്പിക്കുക",
      obj_desc_2: "എ ഐയിലും അനുബന്ധ സാങ്കേതികവിദ്യകളിലും ഉയർന്നുവരുന്ന വികസനങ്ങളെക്കുറിച്ചുള്ള അവബോധ രൂപീകരണം.",
      obj_title_3: "ഗവേഷണത്തെയും പുതിയ അന്വേഷണങ്ങളെയും പ്രോത്സാഹിപ്പിക്കുക",
      obj_desc_3: "ഗവേഷകർക്കും വിദ്യാർത്ഥികൾക്കും തങ്ങളുടെ നൂതന ആശയങ്ങളും പ്രബന്ധങ്ങളും അവതരിപ്പിക്കാൻ മികച്ച വേദി ഒരുക്കുക.",
      obj_title_4: "അക്കാദമിക്-വ്യവസായ സഹകരണം ശക്തിപ്പെടുത്തുക",
      obj_desc_4: "വിദ്യാഭ്യാസ സ്ഥാപനങ്ങളും ഇൻഫോപാർക്ക് ഉൾപ്പെടെയുള്ള പ്രമുഖ ഐ.ടി. വ്യവസായ സംരംഭങ്ങളും തമ്മിലുള്ള സഹകരണം വർദ്ധിപ്പിക്കുക.",
      obj_title_5: "സമഗ്രമായ സാങ്കേതിക വിദ്യാഭ്യാസത്തിന് വഴിയൊരുക്കുക",
      obj_desc_5: "എല്ലാ മേഖലകളിൽ നിന്നുള്ളവർക്കും ആർട്ടിഫിഷ്യൽ ഇന്റലിജൻസ് വിജ്ഞാനം മലയാളത്തിലൂടെ ലളിതമായി ലഭ്യമാക്കുക.",
      obj_title_6: "സാമൂഹിക വെല്ലുവിളികളെ അഭിസംബോധന ചെയ്യുക",
      obj_desc_6: "എ ഐയുടെ ധാർമ്മികത, സുരക്ഷ, പൊതുഭരണം, ഭാഷാസംരക്ഷണം എന്നിവയിലെ പ്രയോഗങ്ങളും വെല്ലുവിളികളും ചർച്ച ചെയ്യുക.",

      participate_heading: "ആർക്കൊക്കെ പങ്കെടുക്കാം?",
      participate_lead: "വിവിധ അക്കാദമിക മേഖലകളിൽ നിന്നുള്ള അധ്യാപകർ, ബിരുദാനന്തര ബിരുദ വിദ്യാർത്ഥികൾ, ഗവേഷകർ, വ്യവസായ രംഗത്തെ പ്രൊഫഷണലുകൾ എന്നിവർക്ക് ഇതിൽ പങ്കെടുക്കാവുന്നതാണ്.",
      participate_muted: "ആർട്ടിഫിഷ്യൽ ഇന്റലിജൻസ്, ഡാറ്റാ സയൻസ്, വളർന്നുവരുന്ന സാങ്കേതികവിദ്യകൾ എന്നീ മേഖലകളിൽ താൽപ്പര്യമുള്ളവർക്ക്, തങ്ങളുടെ ഗവേഷണപ്രബന്ധങ്ങൾ, നൂതന ആശയങ്ങൾ, വിവിധ വിഷയങ്ങളെ സമന്വയിപ്പിക്കുന്ന സംഭാവനകൾ എന്നിവ അവതരിപ്പിക്കാൻ അവസരമുണ്ട്.",

      tracks_heading: "കോൺഫറൻസിന്റെ വിഷയമേഖലകൾ (Conference Tracks)",
      tracks_caption: "താഴെ പറയുന്ന അഞ്ച് പ്രധാന വിഷയമേഖലകളിലായി പ്രബന്ധങ്ങൾ ക്ഷണിക്കുന്നു. AICTE-VAANI പദ്ധതി പ്രകാരം സാങ്കേതിക സെഷനുകളും ചർച്ചകളും മലയാളത്തിലായിരിക്കും.",
      track_badge_1: "ട്രാക്ക് 01",
      track_title_1: "ആർട്ടിഫിഷ്യൽ ഇന്റലിജൻസിന്റെ അടിസ്ഥാനങ്ങളും നൂതന മാതൃകകളും",
      track_badge_2: "ട്രാക്ക് 02",
      track_title_2: "ഇൻഡസ്ട്രി 4.0 / 5.0-ന് വേണ്ടിയുള്ള നൈപുണി വികസനവും പുനർനൈപുണി വികസനവും (Upskilling &amp; Reskilling)",
      track_badge_3: "ട്രാക്ക് 03",
      track_title_3: "സാമൂഹിക സ്വാധീനം, ധാർമ്മികത, സുരക്ഷ, പ്രയോഗങ്ങൾ",
      track_badge_4: "ട്രാക്ക് 04",
      track_title_4: "പ്രാദേശിക ഭാഷാ കമ്പ്യൂട്ടിംഗും ഡിജിറ്റൽ സംരക്ഷണവും",
      track_badge_5: "ട്രാക്ക് 05",
      track_title_5: "ഇ-ഗവേണൻസ്, നയം, പൊതുഭരണം എന്നിവയിൽ കൃത്രിമബുദ്ധിയുടെ ഉപയോഗം",

      dates_heading: "പ്രധാനപ്പെട്ട തീയതികൾ &amp; വിവരങ്ങൾ",
      date_month_1: "ഡിസംബർ 2026",
      date_event_1a: "സംഗ്രഹം/പൂർണ്ണരൂപത്തിലുള്ള പ്രബന്ധം സമർപ്പിക്കേണ്ട അവസാന തീയതി",
      date_event_1b: "രജിസ്ട്രേഷനുള്ള അവസാന തീയതി",
      date_month_2: "ഡിസംബർ 2026",
      date_event_2: "കോൺഫറൻസ് ദിവസങ്ങൾ",

      cfp_title: "പ്രബന്ധങ്ങൾ ക്ഷണിക്കുന്നു",
      cfp_lead: "തിരഞ്ഞടുക്കപ്പെടുന്ന പ്രബന്ധങ്ങൾ, ISBN 978-81-985405-9-1 നമ്പറോടുകൂടിയ കോൺഫറൻസ് പ്രൊസീഡിംഗ്‌സിൽ പ്രസിദ്ധീകരിക്കുന്നതാണ്.",
      isbn_label: "പ്രൊസീഡിംഗ്സ് ISBN",
      cfp_text: "ആർട്ടിഫിഷ്യൽ ഇന്റലിജൻസ്, ഡാറ്റാ സയൻസ് എന്നീ മേഖലകളിലെ ഗവേഷണ പ്രബന്ധങ്ങൾ, കേസ് സ്റ്റഡികൾ, വിവിധ വിഷയങ്ങളെ സമന്വയിപ്പിച്ചുകൊണ്ടുള്ള പഠനങ്ങൾ എന്നിവ സമർപ്പിക്കാം.",
      cfp_btn: "ഓൺലൈനായി പ്രബന്ധം സമർപ്പിക്കുക / രജിസ്റ്റർ ചെയ്യുക →",

      speakers_heading: "പ്രധാന പ്രഭാഷകർ",
      speakers_caption: "വ്യവസായ രംഗം, സർക്കാർ സ്ഥാപനങ്ങൾ, പ്രമുഖ സർവകലാശാലകൾ എന്നിവയിൽ നിന്നുള്ള പ്രമുഖ വിദഗ്ധർ.",
      speaker_name_1: "ബിനു ജനാർദ്ദനൻ",
      speaker_role_1: "സയന്റിസ്റ്റ് F / അസോസിയേറ്റ് ഡയറക്ടർ",
      speaker_org_1: "ഹെൽത്ത് ടെക്നോളജി ഗ്രൂപ്പ്<br />സി-ഡാക് (C-DAC) തിരുവനന്തപുരം",
      speaker_name_2: "ജോയ് സെബാസ്റ്റ്യൻ",
      speaker_role_2: "ചീഫ് എക്സിക്യൂട്ടീവ് ഓഫീസർ (CEO)",
      speaker_org_2: "ടെക്ജെൻഷ്യ<br />ഇൻഫോപാർക്ക്, കൊച്ചി",
      speaker_name_3: "യദു കൃഷ്ണൻ",
      speaker_role_3: "പ്രോഡക്റ്റ് ഡിസൈനർ",
      speaker_org_3: "കീവാല്യൂ സോഫ്റ്റ്‌വെയർ സിസ്റ്റംസ്<br />ഇൻഫോപാർക്ക്, കൊച്ചി",
      speaker_name_4: "ഡോ. വിവേക് പി",
      speaker_role_4: "ഡയറക്ടർ, ഐ.ടി. ഡയറക്ടറേറ്റ് &amp; അസിസ്റ്റന്റ് പ്രൊഫസർ",
      speaker_org_4: "യു.ജി.സി.-എം.എം.ടി.ടി.സി. (UGC-MMTTC)<br />കണ്ണൂർ സർവകലാശാല",
      speaker_name_5: "ഡോ. ബൈജു കെ ബി",
      speaker_role_5: "അസിസ്റ്റന്റ് പ്രൊഫസർ &amp; വകുപ്പ് മേധാവി",
      speaker_org_5: "കമ്പ്യൂട്ടർ സയൻസ് വിഭാഗം<br />എൻ.എം.എസ്.എം. ഗവൺമെന്റ് കോളേജ്",
      speaker_name_6: "ഡോ. ശ്രീരാജ് എം",
      speaker_role_6: "അസിസ്റ്റന്റ് പ്രൊഫസർ",
      speaker_org_6: "കമ്പ്യൂട്ടർ സയൻസ് വിഭാഗം<br />ശ്രീ അയ്യപ്പ കോളേജ്",
      speaker_name_7: "ഡോ. ബെൻസൺ സി സി",
      speaker_role_7: "അസിസ്റ്റന്റ് പ്രൊഫസർ",
      speaker_org_7: "കമ്പ്യൂട്ടർ ആപ്ലിക്കേഷൻസ് വിഭാഗം<br />മാർ ഡയോനിസിയസ് കോളേജ്",
      speaker_name_8: "ഡോ. രാജി എൻ ആർ",
      speaker_role_8: "അസിസ്റ്റന്റ് പ്രൊഫസർ &amp; ഇൻ-ചാർജ്",
      speaker_org_8: "കമ്പ്യൂട്ടർ സയൻസ് വിഭാഗം<br />നിഷ് (NISH)",
      speaker_name_9: "ഡോ. അൽജിനു ഖാദിർ കെ വി",
      speaker_role_9: "അസിസ്റ്റന്റ് പ്രൊഫസർ",
      speaker_org_9: "കമ്പ്യൂട്ടർ സയൻസ് വിഭാഗം<br />കാലിക്കറ്റ് സർവകലാശാല",

      reg_heading: "രജിസ്ട്രേഷൻ വിവരങ്ങൾ",
      reg_free_text: 'രജിസ്ട്രേഷൻ <span class="free-reg-highlight">തികച്ചും സൗജന്യമാണ്</span> (AICTE-VAANI പദ്ധതി)',
      step_title_1: "എ.ഐ.സി.ടി.ഇ. അടൽ അക്കാദമി പോർട്ടൽ സന്ദർശിക്കുക",
      step_text_1: 'ഔദ്യോഗിക പോർട്ടൽ സന്ദർശിക്കുക: <a href="https://atalacademy.aicte.gov.in/" target="_blank" rel="noopener noreferrer">atalacademy.aicte.gov.in</a>',
      step_title_2: "Sign Up / ലോഗിൻ ചെയ്യുക",
      step_text_2: 'പുതിയ ഉപയോക്താക്കൾ "Sign Up" തിരഞ്ഞെടുത്ത് വ്യക്തിഗത വിവരങ്ങൾ നൽകി രജിസ്ട്രേഷൻ പൂർത്തിയാക്കുക: <a href="https://atalacademy.aicte.gov.in/signup" target="_blank" rel="noopener noreferrer">atalacademy.aicte.gov.in/signup</a>',
      step_title_3: "FDPs മെനുവിലേക്ക് പോവുക",
      step_text_3: 'ലോഗിൻ ചെയ്‌ത ശേഷം, FDPs മെനുവിലേക്ക് പോയി താഴെ പറയുന്നവ തിരഞ്ഞെടുക്കുക:<br/><strong>FDP Type: Vaani</strong> | <strong>Month: December</strong> | <strong>Mode: Offline</strong>',
      step_title_4: "കോൺഫറൻസ് തിരയുക",
      step_text_4: '<kbd>Ctrl + F</kbd> ഉപയോഗിച്ച് താഴെ പറയുന്ന തലക്കെട്ട് തിരയുക:<br/><strong>‘എ ഐ & ഡാറ്റാ സയൻസ്- സങ്കല്പനം, സാങ്കേതികത, സമൂഹം’</strong>',
      step_app_num_4: "അപേക്ഷ നമ്പർ: <code>2574946848</code>",
      step_title_5: "ഭാരത മാതാ കോളേജ് തിരഞ്ഞെടുക്കുക",
      step_text_5: "ഭാരത മാതാ കോളേജ്, കമ്പ്യൂട്ടർ സയൻസ് വിഭാഗ(AI & ML)വും മലയാളവിഭാഗവും സംയുക്തമായി സംഘടിപ്പിക്കുന്ന കോൺഫറൻസിനായി ‘Apply’ ക്ലിക്ക് ചെയ്യുക.",
      step_title_6: "വിവരങ്ങളും രേഖകളും സമർപ്പിക്കുക",
      step_text_6: "ആവശ്യമായ വിവരങ്ങൾ പൂരിപ്പിച്ച്, ആവശ്യപ്പെടുന്ന പക്ഷം ബന്ധപ്പെട്ട രേഖകൾ അപ്‌ലോഡ് ചെയ്യുക.",
      step_title_7: "Apply / Submit ക്ലിക്ക് ചെയ്യുക",
      step_text_7: "രജിസ്ട്രേഷൻ പൂർത്തിയാക്കാൻ 'Apply/Submit' എന്നതിൽ ക്ലിക്ക് ചെയ്യുക.",
      reg_cta_btn: "അടൽ പോർട്ടലിൽ സൗജന്യമായി രജിസ്റ്റർ ചെയ്യുക →",

      comm_eyebrow: "നേതൃത്വവും സംഘാടക സമിതിയും",
      comm_heading: "സംഘാടക സമിതി",
      comm_tier1_title: "മുഖ്യ രക്ഷാധികാരികൾ",
      comm_patron_1_name: "റവ. ഫാ. ഡോ. എബ്രഹാം ഒലിയപുറത്ത്",
      comm_patron_1_role: "മാനേജർ, ഭാരത മാതാ കോളേജ്",
      comm_patron_2_name: "റവ. ഫാ. സെബാസ്റ്റ്യൻ കല്ലുങ്കൽ",
      comm_patron_2_role: "അസിസ്റ്റന്റ് മാനേജർ, ഭാരത മാതാ കോളേജ്",
      comm_tier2_title: "രക്ഷാധികാരികൾ",
      comm_patron_3_name: "ഡോ. സൗമ്യ തോമസ്",
      comm_patron_3_role: "പ്രിൻസിപ്പൽ ഇൻ ചാർജ്",
      comm_patron_4_name: "പ്രൊഫ. ഡോ. ജോൺസൺ കെ. എം.",
      comm_patron_4_role: "അക്കാദമിക് ഡയറക്ടർ",
      comm_patron_5_name: "ശ്രീമതി. ബിനി റാണി ജോസ്",
      comm_patron_5_role: "വൈസ് പ്രിൻസിപ്പൽ",
      comm_tier3_title: "സംഘാടകർ",
      comm_coord_1_name: "ഡോ. ജോൺ ടി. എബ്രഹാം",
      comm_coord_1_role: "കോർഡിനേറ്റർ (ഡീൻ & വകുപ്പദ്ധ്യക്ഷൻ, കമ്പ്യൂട്ടർ സയൻസ് വിഭാഗം)",
      comm_coord_2_name: "ഫാ. ഡോ. അനീഷ് പോൾ",
      comm_coord_2_role: "സഹ-കോർഡിനേറ്റർ (വകുപ്പദ്ധ്യക്ഷൻ, മലയാളവിഭാഗം)",
      comm_coord_3_name: "ശ്രീമതി. ദീപ വി",
      comm_coord_3_role: "കൺവീനർ (കമ്പ്യൂട്ടർ സയൻസ് വിഭാഗം)",
      comm_tier4_title: "സംഘാടക സമിതി അംഗങ്ങൾ",
      comm_member_1: "ഡോ. തോമസ് വർഗീസ്",
      comm_member_2: "ഫാ. ഡോ. വർഗീസ് പോൾ",
      comm_member_3: "ഡോ. അലീന കെ. നോബിൾ",
      comm_member_4: "ശ്രീ. ഹരികൃഷ്‌ണൻ പി",
      comm_member_5: "ശ്രീമതി. ദേവിക ഡി",
      comm_member_6: "ശ്രീമതി. അൽഫോൻസ സിനി",
      comm_member_7: "ശ്രീമതി. ബിൻഷ ബെന്നി",
      comm_member_8: "ശ്രീമതി. അനിഷ പോളി",
      comm_member_9: "ശ്രീമതി. ഗ്രീറ്റി ഡൊമാനിക്",
      comm_member_10: "ശ്രീമതി. സമൃദ്ധ പുതിയിൽ",
      comm_member_11: "ജീവന സജീവ്",

      contact_heading: "കൂടുതൽ വിവരങ്ങൾക്ക് ബന്ധപ്പെടുക",
      contact_subtext: "കോൺഫറൻസ് അന്വേഷണങ്ങൾ, രജിസ്ട്രേഷൻ സഹായം, വേദി വിവരങ്ങൾ എന്നിവയ്ക്കായി ബന്ധപ്പെടുക.",
      venue_tag: "കോൺഫറൻസ് വേദി",
      venue_title: "ഭാരത മാതാ കോളേജ് (ഓട്ടോണമസ്)",
      venue_address: "സീപോർട്ട് - എയർപോർട്ട് റോഡ്, തൃക്കാക്കര,<br />കൊച്ചി, കേരളം, പിൻ: 682021",
      contact_name_1: "ഡോ. ജോൺ ടി. എബ്രഹാം",
      contact_role_1: "കോർഡിനേറ്റർ",
      contact_name_2: "ശ്രീമതി. ദീപ വി.",
      contact_role_2: "കൺവീനർ",
      contact_name_3: "ഫാ. ഡോ. അനീഷ് പോൾ",
      contact_role_3: "സഹ-കോർഡിനേറ്റർ",
      contact_name_4: "ഇമെയിൽ",
      contact_role_4: "കോൺഫറൻസ് അന്വേഷണങ്ങൾക്ക്",
      contact_name_5: "കോളേജ് വെബ്സൈറ്റ്",
      contact_role_5: "ഔദ്യോഗിക പോർട്ടൽ",

      footer_title: "ഭാരത മാതാ കോളേജ്",
      footer_sub: "ഓട്ടോണമസ് &bull; തൃക്കാക്കര, കൊച്ചി-21",
      footer_lead: "എ ഐ & ഡാറ്റാ സയൻസ്: സങ്കല്പനം, സാങ്കേതികത, സമൂഹം",
      footer_heading_nav: "നാവിഗേഷൻ",
      footer_nav_home: "ഹോം",
      footer_nav_about: "വിവരണം",
      footer_nav_tracks: "വിഷയമേഖലകൾ",
      footer_nav_dates: "പ്രധാന തീയതികൾ",
      footer_nav_speakers: "പ്രഭാഷകർ",
      footer_heading_quick: "പ്രധാന ലിങ്കുകൾ",
      footer_link_reg: "രജിസ്ട്രേഷൻ (ATAL പോർട്ടൽ)",
      footer_link_sub: "പ്രബന്ധ സമർപ്പണം",
      footer_link_con: "ബന്ധപ്പെടുക & വേദി",
      footer_link_web: "കോളേജ് വെബ്സൈറ്റ്",
      footer_copyright: "&copy; 2026 ഭാരത മാതാ കോളേജ് (ഓട്ടോണമസ്), തൃക്കാക്കര. സർവ്വ അവകാശങ്ങളും നിക്ഷിപ്തം."
    },
    en: {
      page_title: "AI & Data Science: Concepts, Skills & Society | Bharata Mata College",
      meta_desc: "AI & Data Science: Concepts, Skills & Society — A two-day national conference conducted in Malayalam under the AICTE-VAANI Scheme. December 8–9, 2026 at Bharata Mata College (Autonomous), Thrikkakara, Kochi, Kerala.",
      nav_register: "Register",
      nav_submit: "Submit Paper",
      nav_contact: "Contact",
      sidebar_title: "BHARATA MATA COLLEGE",
      sidebar_subtitle: "AICTE-VAANI CONFERENCE",
      sidebar_lang_label: "Language / ഭാഷ:",
      sidebar_btn_register: "Register (ATAL Portal)",
      sidebar_btn_submit: "Submit Paper",
      sidebar_btn_contact: "Contact & Venue",
      sidebar_nav_heading: "Navigation",
      sidebar_nav_home: "Home",
      sidebar_nav_about: "About Conference",
      sidebar_nav_countdown: "Countdown",
      sidebar_nav_college: "Host College",
      sidebar_nav_tracks: "Tracks",
      sidebar_nav_dates: "Important Dates",
      sidebar_nav_papers: "Call for Papers",
      sidebar_nav_speakers: "Keynote Speakers",
      sidebar_nav_registration: "Registration",
      sidebar_nav_contact: "Venue & Contact",

      hero_scheme_title: "AICTE-VAANI SCHEME &bull; TWO-DAY NATIONAL CONFERENCE",
      hero_date_month: "DEC",
      hero_date_days: "8-9",
      hero_date_year: "2026",
      hero_overline: "AI &amp; DATA SCIENCE",
      hero_title: "Concepts, Skills<br />&amp; Society",
      hero_medium_pill: "Conference Medium: <strong>Malayalam</strong>",
      hero_org_label: "ORGANISED BY",
      hero_org_depts: "Department of Computer Science &amp;<br />Department of Malayalam",
      hero_org_institution: "Bharata Mata College (Autonomous), Thrikkakara, Kochi-21, Kerala",

      cd_eyebrow: "CONFERENCE BEGINS IN",
      cd_days: "DAYS",
      cd_hours: "HOURS",
      cd_minutes: "MINUTES",
      cd_seconds: "SECONDS",
      cd_date_main: "December 8 &ndash; 9, 2026",
      cd_date_time: "9:30 AM IST",

      about_heading: "About the Conference",
      about_caption: "AICTE-VAANI Sponsored Two-Day National Conference on Artificial Intelligence and Data Science",
      about_lead: "Artificial Intelligence and Data Science are rapidly transforming various sectors, including education, healthcare, agriculture, governance, and industry.",
      about_p1: "This two-day conference, organised under the <strong>AICTE-VAANI (Vibrant Advocacy for Advancement and Nurturing of Indian Languages) Scheme</strong>, aims to promote the dissemination of technical knowledge in Malayalam and create awareness about emerging developments in Artificial Intelligence and related technologies.",
      about_p2: "The conference provides a common platform for academicians, researchers, students, industry professionals, and technology enthusiasts to explore contemporary advancements in AI and Data Science, exchange research ideas, and discuss their applications and societal impact through <strong>expert-led technical sessions conducted in Malayalam</strong>.",
      about_focus_title: "Conference Focus &amp; Objectives",
      about_point1: "<strong>Regional Technical Discourse:</strong> Conducting expert sessions in Malayalam to enhance technical accessibility and nurture indigenous language computing.",
      about_point2: "<strong>Academic Exchange:</strong> Providing a peer-reviewed forum for faculty, research scholars, and students to present innovative findings.",
      about_point3: "<strong>Societal Impact:</strong> Deliberating on responsible AI governance, ethics, and multi-sector applications in healthcare, education, and governance.",
      about_panel_title: "Conference Highlights",
      about_panel_subtitle: "Official AICTE-VAANI Event",
      about_card1_label: "Scheme &amp; Sponsorship",
      about_card1_heading: "AICTE-VAANI Scheme",
      about_card1_text: "Vibrant Advocacy for Advancement and Nurturing of Indian Languages. Promoting indigenous language computing and high-tech education in Malayalam.",
      about_card2_label: "Registration",
      about_card2_heading: "Free Registration",
      about_card2_text: "Supported by AICTE ATAL Academy. Open to faculty members, research scholars, and students with no registration fees.",
      about_card3_label: "Publication",
      about_card3_heading: "Proceedings with ISBN",
      about_card3_text: "All accepted and presented papers will be published in official conference proceedings with ISBN: <strong>978-81-985405-9-1</strong>.",
      about_meta_dates_label: "Dates",
      about_meta_dates_val: "Dec 8–9, 2026",
      about_meta_medium_label: "Medium",
      about_meta_medium_val: "Malayalam",
      about_meta_venue_label: "Venue",
      about_meta_venue_val: "BMC Kochi",

      college_heading: "About Bharata Mata College",
      college_caption: "Autonomous Institution · Affiliated with Mahatma Gandhi University · NAAC A+ Accredited",
      college_badge_grade: "NAAC A+ Accredited",
      college_badge_est: "Established in 1965",
      college_badge_tag: "AUTONOMOUS",
      college_motto_label: "College Motto",
      college_motto_text: '"For God and country"',
      college_p1: "<strong>Bharata Mata College (Autonomous) Thrikkakara</strong>, a prestigious institution established in 1965 under the Bharata Mata educational trust, is affiliated with <strong>Mahatma Gandhi University</strong> and managed by the <strong>Archdiocese of Ernakulam-Angamaly</strong>.",
      college_p2: "Located along the seaport-airport road in Thrikkakara, the college earned an <strong>A+ grade from the National Assessment and Accreditation Council (NAAC) in 2019</strong>, reflecting its sustained commitment to excellence in higher education.",
      college_p3: 'Emphasizing its motto "For God and country", the college delivers a holistic academic environment prioritizing responsible citizenship, secular ethics, and innovative inquiry, preparing graduates to address contemporary global challenges.',
      college_meta_accred_label: "Accreditation",
      college_meta_accred_val: "NAAC A+ (2019)",
      college_meta_status_label: "Status",
      college_meta_status_val: "Autonomous",
      college_meta_affil_label: "Affiliation",
      college_meta_affil_val: "MG University",
      college_meta_founded_label: "Founded",
      college_meta_founded_val: "1965",
      college_portal_btn: "Visit Official College Website",

      depts_heading: "Organising Departments",
      dept1_tag: "Government-Aided Stream",
      dept1_title: "Department of Computer Science",
      dept1_desc1: "Established in <strong>January 2021</strong> within the Government-aided stream, the Department of Computer Science offers a pioneering <strong>Integrated MSc in AI and Machine Learning</strong>.",
      dept1_desc2: "The program blends theoretical foundation with practical skills and ethical values, equipping socially responsible graduates to address modern technological challenges across academia and industries worldwide.",
      dept2_tag: "Pioneer in Vocational Malayalam",
      dept2_title: "Department of Malayalam",
      dept2_desc1: "Established in <strong>1965</strong> for second-language Malayalam, the department launched Kerala’s first <strong>BA Malayalam Copywriting (Vocational)</strong> course in 1998 under Prof. Somavarma Raja.",
      dept2_desc2: "Designed for practical industry integration, it has successfully prepared students for reputable positions across leading media houses, creative communications, literature, and distinguished teaching careers.",

      objectives_heading: "Conference Objectives",
      obj_title_1: "Bridging the Language Gap",
      obj_desc_1: "Disseminating advanced technical and AI knowledge in Malayalam to make technology inclusive and vernacularly accessible.",
      obj_title_2: "Promoting Emerging Technologies",
      obj_desc_2: "Creating deep awareness about modern developments in Artificial Intelligence, Machine Learning, and Big Data.",
      obj_title_3: "Encouraging Research & Innovation",
      obj_desc_3: "Providing a platform for young researchers, academicians, and scholars to present novel and interdisciplinary ideas.",
      obj_title_4: "Strengthening Industry Collaboration",
      obj_desc_4: "Bridging academia with leading IT firms, Infopark organizations, and regional development initiatives.",
      obj_title_5: "Promoting Inclusive Technical Education",
      obj_desc_5: "Democratizing AI literacy across all academic streams through accessible Malayalam-medium presentations.",
      obj_title_6: "Addressing Societal Challenges",
      obj_desc_6: "Examining ethical, cultural, linguistic, and public administration impacts of AI in Kerala and beyond.",

      participate_heading: "Who Can Participate?",
      participate_lead: "Participation is open to faculty members, postgraduate students, research scholars, and industry professionals from all academic disciplines.",
      participate_muted: "AI enthusiasts from diverse fields of study are encouraged to participate and present their research papers, innovative ideas, and interdisciplinary contributions in Artificial Intelligence, Data Science, and emerging technologies.",

      tracks_heading: "Conference Tracks",
      tracks_caption: "Original, unpublished research contributions are invited across five peer-reviewed thematic tracks. All technical presentations and paper discussions are conducted in Malayalam under the AICTE-VAANI scheme.",
      track_badge_1: "Track 01",
      track_title_1: "Foundations of Artificial Intelligence & Advanced Models",
      track_badge_2: "Track 02",
      track_title_2: "Upskilling and Reskilling for Industry 4.0 / 5.0",
      track_badge_3: "Track 03",
      track_title_3: "Societal Impact, Ethics, Security & Applications",
      track_badge_4: "Track 04",
      track_title_4: "Regional Language Computing & Digital Preservation",
      track_badge_5: "Track 05",
      track_title_5: "AI in E-Governance, Policy & Public Administration",

      dates_heading: "Important Dates",
      date_month_1: "DECEMBER 2026",
      date_event_1a: "Abstract & Full Paper Submission",
      date_event_1b: "Last Date of Registration",
      date_month_2: "DECEMBER 2026",
      date_event_2: "Conference Days",

      cfp_title: "Call for Papers",
      cfp_lead: "All accepted and presented papers will be published in the conference proceedings with an official ISBN.",
      isbn_label: "PUBLICATION ISBN",
      cfp_text: "Submit your original research papers, case studies, and interdisciplinary contributions focusing on AI and Data Science. Presentations and papers are encouraged in Malayalam and English as per conference guidelines.",
      cfp_btn: "Submit / Register Paper Online →",

      speakers_heading: "Keynote Speakers",
      speakers_caption: "Eminent leaders and researchers from industry, government bodies, and premier universities.",
      speaker_name_1: "Er. Binu Janardanan",
      speaker_role_1: "Scientist F / Associate Director",
      speaker_org_1: "Health Technology Group<br />C-DAC Trivandrum",
      speaker_name_2: "Mr. Joy Sebastian",
      speaker_role_2: "Chief Executive Officer (CEO)",
      speaker_org_2: "Techgentsia<br />Infopark, Kochi",
      speaker_name_3: "Yadu Krishnan",
      speaker_role_3: "Product Designer",
      speaker_org_3: "KeyValue Software Systems<br />Infopark, Kochi",
      speaker_name_4: "Dr. Vivek P",
      speaker_role_4: "Director, IT Directorate & Asst. Professor",
      speaker_org_4: "UGC-MMTTC<br />Kannur University",
      speaker_name_5: "Dr. Baiju K B",
      speaker_role_5: "Assistant Professor & HoD of Computer Science",
      speaker_org_5: "NMSM Govt College",
      speaker_name_6: "Dr. Sreeraj M",
      speaker_role_6: "Assistant Professor",
      speaker_org_6: "Department of Computer Science<br />Sree Ayyappa College",
      speaker_name_7: "Dr. Benson C C",
      speaker_role_7: "Assistant Professor",
      speaker_org_7: "Department of Computer Applications<br />Mar Dionysius College",
      speaker_name_8: "Dr. Raji N R",
      speaker_role_8: "Assistant Professor & In-charge",
      speaker_org_8: "Department of Computer Science<br />NISH",
      speaker_name_9: "Dr. Aljinu Khader K V",
      speaker_role_9: "Assistant Professor",
      speaker_org_9: "Department of Computer Science<br />University of Calicut",

      reg_heading: "Registration Guide",
      reg_free_text: 'Registration is <span class="free-reg-highlight">100% FREE</span> under AICTE-VAANI Scheme',
      step_title_1: "Visit the AICTE ATAL Academy Portal",
      step_text_1: 'Access the official portal at <a href="https://atalacademy.aicte.gov.in/" target="_blank" rel="noopener noreferrer">atalacademy.aicte.gov.in</a>',
      step_title_2: "Sign Up / Login",
      step_text_2: 'New participants should click Sign Up and create an account at <a href="https://atalacademy.aicte.gov.in/signup" target="_blank" rel="noopener noreferrer">atalacademy.aicte.gov.in/signup</a>',
      step_title_3: "Navigate to FDPs Menu",
      step_text_3: 'After logging into your dashboard, go to the <strong>FDPs</strong> menu.<br/>Select: <strong>FDP Type: VAANI</strong> | <strong>Month: December</strong> | <strong>Mode: Offline</strong>',
      step_title_4: "Filter & Search for the Conference",
      step_text_4: 'Press <kbd>Ctrl + F</kbd> and search for: <strong>Artificial Intelligence: Concepts, Skills and Society</strong>',
      step_app_num_4: "Application Number: <code>2574946848</code>",
      step_title_5: "Select Bharata Mata College",
      step_text_5: "Apply for the conference organized by <strong>Bharata Mata College, Kochi, Kerala</strong> (Department of Computer Science – AI & ML and Department of Malayalam).",
      step_title_6: "Complete Profile & Required Documents",
      step_text_6: "Fill in your institutional details, NOC/identity verification if prompted by ATAL portal.",
      step_title_7: "Click Apply / Submit",
      step_text_7: "Complete your registration to receive confirmation and attendance guidelines.",
      reg_cta_btn: "Register for Free on ATAL Portal →",

      comm_eyebrow: "LEADERSHIP & COMMITTEE",
      comm_heading: "Organizing Committee",
      comm_tier1_title: "Chief Patrons",
      comm_patron_1_name: "Rev. Fr. Dr. Abraham Oliapurath",
      comm_patron_1_role: "Manager, Bharata Mata College",
      comm_patron_2_name: "Rev. Fr. Sebastian (Sen) Kallungal",
      comm_patron_2_role: "Assistant Manager, Bharata Mata College",
      comm_tier2_title: "Patrons",
      comm_patron_3_name: "Dr. Soumya Thomas",
      comm_patron_3_role: "Principal in Charge",
      comm_patron_4_name: "Prof. Dr. Johnson K. M",
      comm_patron_4_role: "Academic Director",
      comm_patron_5_name: "Ms. Bini Rani Jose",
      comm_patron_5_role: "Vice Principal",
      comm_tier3_title: "Coordinators",
      comm_coord_1_name: "Dr. John T Abraham",
      comm_coord_1_role: "Dean & HoD / Coordinator · Dept of Computer Science",
      comm_coord_2_name: "Fr. Anish Paul",
      comm_coord_2_role: "Co-Coordinator · Bharata Mata College",
      comm_coord_3_name: "Ms. Deepa V",
      comm_coord_3_role: "Convenor · Dept of Computer Science",
      comm_tier4_title: "Organizing Members",
      comm_member_1: "Dr. Thomas Varghese",
      comm_member_2: "Dr. Varghese Paul",
      comm_member_3: "Dr. Aleena K Noble",
      comm_member_4: "Mr. Harikrishnan P",
      comm_member_5: "Ms. Devika D",
      comm_member_6: "Ms. Alphonsa Sini",
      comm_member_7: "Ms. Binsha Benny",
      comm_member_8: "Ms. Anisha Poly",
      comm_member_9: "Ms. Greety Domanic",
      comm_member_10: "Ms. Samridha Puthiyil",
      comm_member_11: "Ms. Jeevana Sajeev",

      contact_heading: "Contact Us",
      contact_subtext: "Reach out to our organizing team for conference inquiries, registration assistance, and venue directions.",
      venue_tag: "CONFERENCE VENUE",
      venue_title: "Bharata Mata College (Autonomous)",
      venue_address: "Seaport - Airport Road, Thrikkakara,<br />Kochi, Kerala, Pin: 682021",
      contact_name_1: "Dr. John T. Abraham",
      contact_role_1: "Coordinator",
      contact_name_2: "Ms. Deepa V",
      contact_role_2: "Convenor",
      contact_name_3: "Fr. Anish Paul",
      contact_role_3: "Co-Coordinator",
      contact_name_4: "Email",
      contact_role_4: "Conference Enquiries",
      contact_name_5: "BMC Website",
      contact_role_5: "Official Portal",

      footer_title: "BHARATA MATA COLLEGE",
      footer_sub: "Autonomous &bull; Thrikkakara, Kochi-21",
      footer_lead: "AI & Data Science: Concepts, Skills & Society",
      footer_heading_nav: "Navigation",
      footer_nav_home: "Home",
      footer_nav_about: "About",
      footer_nav_tracks: "Tracks",
      footer_nav_dates: "Important Dates",
      footer_nav_speakers: "Speakers",
      footer_heading_quick: "Quick Links",
      footer_link_reg: "Register (ATAL Portal)",
      footer_link_sub: "Paper Submission",
      footer_link_con: "Contact & Venue",
      footer_link_web: "College Website",
      footer_copyright: "&copy; 2026 Bharata Mata College (Autonomous), Thrikkakara. All rights reserved."
    }
  };

  /**
   * Applies the chosen language (ml or en) across all DOM nodes with [data-i18n].
   * Requirement:
   * - "the website should initially be malayalam"
   * - "the toggle button should be 'english' when the website is malayalam and 'മലയാളം' when the website is in english"
   */
  const applyLanguage = (lang, persist = true) => {
    const targetLang = (lang === 'en') ? 'en' : 'ml';
    document.documentElement.lang = targetLang;

    const dict = TRANSLATIONS[targetLang];
    if (!dict) return;

    // Update all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });

    // Update toggle button text in top bar and mobile drawer:
    // When website is in Malayalam -> button text is "english"
    // When website is in English -> button text is "മലയാളം"
    const toggleButtonText = (targetLang === 'ml') ? 'english' : 'മലയാളം';
    const topBarToggleTextEl = document.getElementById('langToggleText');
    if (topBarToggleTextEl) {
      topBarToggleTextEl.textContent = toggleButtonText;
    }
    const sidebarToggleTextEl = document.getElementById('sidebarLangToggleText');
    if (sidebarToggleTextEl) {
      sidebarToggleTextEl.textContent = toggleButtonText;
    }

    // Update document title and description
    if (dict.page_title) {
      document.title = dict.page_title;
    }
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && dict.meta_desc) {
      metaDesc.setAttribute('content', dict.meta_desc);
    }

    if (persist) {
      try {
        localStorage.setItem('bmc_vaani_lang', targetLang);
      } catch (e) {
        // Handle private browsing or restricted environments safely
      }
    }
  };

  // Switch between languages
  const toggleLanguage = () => {
    const current = document.documentElement.lang === 'en' ? 'en' : 'ml';
    const next = (current === 'ml') ? 'en' : 'ml';
    applyLanguage(next, true);
  };

  // Attach click listener to top bar toggle button
  const topBarToggleBtn = document.getElementById('langToggleBtn');
  if (topBarToggleBtn) {
    topBarToggleBtn.addEventListener('click', toggleLanguage);
  }

  // Attach click listener to mobile drawer toggle button
  const sidebarToggleBtn = document.getElementById('sidebarLangToggleBtn');
  if (sidebarToggleBtn) {
    sidebarToggleBtn.addEventListener('click', toggleLanguage);
  }

  // Initialize Language:
  // "the website should initially be malayalam"
  // If user previously switched and preference is stored, honour it; otherwise default to 'ml'.
  let savedLang = 'ml';
  try {
    savedLang = localStorage.getItem('bmc_vaani_lang') || 'ml';
  } catch (e) {
    savedLang = 'ml';
  }
  applyLanguage(savedLang, false);
  /* ========================================================================== */
  /* >>>>> END SCRIPT PART 00: BILINGUAL I18N SYSTEM (MALAYALAM & ENGLISH) <<<<< */
  /* ========================================================================== */

  /* ========================================================================== */
  /* >>>>> START SCRIPT PART 01: SMOOTH SCROLL WITH HEADER OFFSET <<<<< */
  /* ========================================================================== */
  // Navigation Anchor Links with Header Offset and Instant Hardware-Accelerated Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').slice(1);
      if (!targetId) return;

      const targetEl = document.getElementById(targetId);
      if (!targetEl) return;

      e.preventDefault();
      const topBar = document.getElementById('topBar');
      const offset = topBar ? topBar.offsetHeight + 10 : 80;

      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    });
  });
  /* ========================================================================== */
  /* >>>>> END SCRIPT PART 01: SMOOTH SCROLL WITH HEADER OFFSET <<<<< */
  /* ========================================================================== */


  /* ========================================================================== */
  /* >>>>> START SCRIPT PART 02: SPEAKER IMAGE ERROR FALLBACK <<<<< */
  /* ========================================================================== */
  document.querySelectorAll('.speaker-photo').forEach(photo => {
    photo.addEventListener('error', function () {
      this.style.display = 'none';
      const fallback = this.nextElementSibling;
      if (fallback) fallback.style.display = 'flex';
    });
    // Check if image already failed
    if (photo.complete && photo.naturalWidth === 0) {
      photo.dispatchEvent(new Event('error'));
    }
  });
  /* ========================================================================== */
  /* >>>>> END SCRIPT PART 02: SPEAKER IMAGE ERROR FALLBACK <<<<< */
  /* ========================================================================== */


  /* ========================================================================== */
  /* >>>>> START SCRIPT PART 03: BUTTONS MOUSE-FOLLOWING EFFECT <<<<< */
  /* ========================================================================== */
  document.querySelectorAll('.nav-gold-btn').forEach(btn => {
    let rafId = null;

    const updatePosition = (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      btn.style.setProperty('--mouse-x', `${x}px`);
      btn.style.setProperty('--mouse-y', `${y}px`);

      // Subtle magnetic follow
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const deltaX = (x - centerX) * 0.16;
      const deltaY = (y - centerY) * 0.16;
      btn.style.transform = `translate(${deltaX.toFixed(2)}px, ${deltaY.toFixed(2)}px)`;
    };

    btn.addEventListener('mouseenter', (e) => {
      btn.classList.remove('is-leaving');
      btn.classList.add('is-hovered');
      updatePosition(e);
    });

    btn.addEventListener('mousemove', (e) => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => updatePosition(e));
    });

    btn.addEventListener('mouseleave', (e) => {
      if (rafId) cancelAnimationFrame(rafId);
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      btn.style.setProperty('--mouse-x', `${x}px`);
      btn.style.setProperty('--mouse-y', `${y}px`);

      btn.classList.remove('is-hovered');
      btn.classList.add('is-leaving');
      btn.style.transform = 'translate(0px, 0px)';
    });
  });
  /* ========================================================================== */
  /* >>>>> END SCRIPT PART 03: BUTTONS MOUSE-FOLLOWING EFFECT <<<<< */
  /* ========================================================================== */


  /* ========================================================================== */
  /* >>>>> START SCRIPT PART 04: SCROLL ANIMATIONS (PARTICIPATE & CONTACT) <<<<< */
  /* ========================================================================== */
  // Minimal Asynchronous IntersectionObserver for sections with explicit entrance effects
  const animatedSections = [
    'participate',
    'committee',
    'contact'
  ];

  animatedSections.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            el.classList.add('is-in-view');
            obs.unobserve(el);
          }
        });
      }, {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px'
      });
      observer.observe(el);
    } else {
      el.classList.add('is-in-view');
    }
  });
  /* ========================================================================== */
  /* >>>>> END SCRIPT PART 04: SCROLL ANIMATIONS (PARTICIPATE & CONTACT) <<<<< */
  /* ========================================================================== */

  /* ========================================================================== */
  /* >>>>> START SCRIPT PART 05: HERO PIXEL SQUARE FLIP WAVE (CANVAS) <<<<< */
  /* ========================================================================== */
  const initPixelWave = () => {
    const canvas = document.getElementById('heroPixelCanvas');
    const frame = document.getElementById('heroParallelogramFrame');
    if (!canvas || !frame) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId = null;
    let isAnimationComplete = false;
    const img = new Image();
    img.src = 'assets/college/bmc.jpg'; // <-- changed from .jpeg to match YOUR file

    const renderSolidImage = (width, height, dpr, sx, sy, sw, sh) => {
      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(img, sx, sy, sw, sh, 0, 0, width, height);
      ctx.restore();
    };

    const runEngine = (replayAnimation = true) => {
      if (animId) {
        cancelAnimationFrame(animId);
        animId = null;
      }

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = frame.clientWidth;
      const height = frame.clientHeight;

      if (width <= 0 || height <= 0) {
        setTimeout(() => runEngine(replayAnimation), 60);
        return;
      }

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      const imgW = img.naturalWidth || 1920;
      const imgH = img.naturalHeight || 1080;
      const imgRatio = imgW / imgH;
      const frameRatio = width / height;

      let sx, sy, sw, sh;
      if (frameRatio > imgRatio) {
        sw = imgW;
        sh = imgW / frameRatio;
        sx = 0;
        sy = (imgH - sh) * 0.35;
      } else {
        sw = imgH * frameRatio;
        sh = imgH;
        sx = Math.max(0, Math.min(imgW - sw, (imgW - sw) * 0.24));
        sy = 0;
      }

      if (isAnimationComplete && !replayAnimation) {
        renderSolidImage(width, height, dpr, sx, sy, sw, sh);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const targetSize = width <= 600 ? 34 : (width <= 1024 ? 40 : 44);
      const cols = Math.max(6, Math.ceil(width / targetSize));
      const rows = Math.max(6, Math.ceil(height / targetSize));

      const tileW = width / cols;
      const tileH = height / rows;

      const tiles = [];
      let maxDelay = 0;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const delay = (c * 26) + (r * 18) + 200;
          const duration = 380;
          if (delay + duration > maxDelay) {
            maxDelay = delay + duration;
          }

          const dx = c * tileW;
          const dy = r * tileH;
          const dw = tileW + 0.6;
          const dh = tileH + 0.6;

          const tsx = sx + (dx / width) * sw;
          const tsy = sy + (dy / height) * sh;
          const tsw = (dw / width) * sw;
          const tsh = (dh / height) * sh;

          tiles.push({
            dx, dy, dw, dh,
            tsx, tsy, tsw, tsh,
            centerX: dx + tileW / 2,
            centerY: dy + tileH / 2,
            delay,
            duration
          });
        }
      }

      let startTime = null;

      const render = (now) => {
        if (!startTime) startTime = now;
        const elapsed = now - startTime;

        ctx.save();
        ctx.scale(dpr, dpr);
        ctx.clearRect(0, 0, width, height);

        if (elapsed >= maxDelay + 40) {
          ctx.drawImage(img, sx, sy, sw, sh, 0, 0, width, height);
          ctx.restore();
          isAnimationComplete = true;
          animId = null;
          return;
        }

        for (let i = 0; i < tiles.length; i++) {
          const t = tiles[i];

          if (elapsed < t.delay) continue;

          if (elapsed >= t.delay + t.duration) {
            ctx.drawImage(img, t.tsx, t.tsy, t.tsw, t.tsh, t.dx, t.dy, t.dw, t.dh);
            continue;
          }

          const progress = (elapsed - t.delay) / t.duration;
          const ease = 1 - Math.pow(1 - progress, 3);
          const angle = (1 - ease) * (Math.PI / 2);
          const scaleX = Math.max(0.01, Math.cos(angle));

          ctx.save();
          ctx.translate(t.centerX, t.centerY);
          ctx.scale(scaleX, 1);
          ctx.drawImage(
            img,
            t.tsx, t.tsy, t.tsw, t.tsh,
            -t.dw / 2, -t.dh / 2, t.dw, t.dh
          );
          ctx.restore();
        }

        ctx.restore();
        animId = requestAnimationFrame(render);
      };

      animId = requestAnimationFrame(render);
    };

    if (img.complete && img.naturalWidth > 0) {
      runEngine(true);
    } else {
      img.onload = () => runEngine(true);
    }

    let resizeTimer = null;
    window.addEventListener('resize', () => {
      if (resizeTimer) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (img.complete && img.naturalWidth > 0) {
          runEngine(false);
        }
      }, 200);
    });
  };

  if (document.readyState === 'complete') {
    initPixelWave();
  } else {
    window.addEventListener('load', initPixelWave);
  }
  /* ========================================================================== */
  /* >>>>> END SCRIPT PART 05: HERO PIXEL SQUARE FLIP WAVE (CANVAS) <<<<< */
  /* ========================================================================== */

  /* ========================================================================== */
  /* >>>>> START SCRIPT PART 06: MODERN GLASS COUNTDOWN TIMER <<<<< */
  /* ========================================================================== */
  (() => {
    // Target: December 8, 2026 at 09:30:00 IST (UTC+5:30)
    const TARGET = new Date('2026-12-08T09:30:00+05:30').getTime();

    const elDays    = document.getElementById('cd-days');
    const elHours   = document.getElementById('cd-hours');
    const elMinutes = document.getElementById('cd-minutes');
    const elSeconds = document.getElementById('cd-seconds');

    if (!elDays || !elHours || !elMinutes || !elSeconds) return;

    const setVal = (el, val, isInitial) => {
      const padded = String(Math.max(0, val)).padStart(2, '0');
      if (el.textContent !== padded) {
        el.textContent = padded;
        if (!isInitial) {
          el.classList.remove('cd-digit--tick');
          void el.offsetWidth; // trigger reflow
          el.classList.add('cd-digit--tick');
        }
      }
    };

    let isInitialTick = true;

    const tick = () => {
      const now  = Date.now();
      const diff = TARGET - now;

      if (diff <= 0) {
        setVal(elDays,    0, isInitialTick);
        setVal(elHours,   0, isInitialTick);
        setVal(elMinutes, 0, isInitialTick);
        setVal(elSeconds, 0, isInitialTick);
        clearInterval(timerInterval);
        return;
      }

      const totalSeconds = Math.floor(diff / 1000);
      const days    = Math.floor(totalSeconds / 86400);
      const hours   = Math.floor((totalSeconds % 86400) / 3600);
      const minutes = Math.floor((totalSeconds % 3600)  / 60);
      const seconds = totalSeconds % 60;

      setVal(elDays,    days,    isInitialTick);
      setVal(elHours,   hours,   isInitialTick);
      setVal(elMinutes, minutes, isInitialTick);
      setVal(elSeconds, seconds, isInitialTick);

      isInitialTick = false;
    };

    tick(); // run immediately
    const timerInterval = setInterval(tick, 1000);
  })();
  /* ========================================================================== */
  /* >>>>> END SCRIPT PART 06: MODERN GLASS COUNTDOWN TIMER <<<<< */
  /* ========================================================================== */

  /* ========================================================================== */
  /* >>>>> START SCRIPT PART 07: MOBILE SIDEBAR MENU <<<<< */
  /* ========================================================================== */
  (() => {
    const menuBtn   = document.getElementById('mobileMenuBtn');
    const closeBtn  = document.getElementById('sidebarCloseBtn');
    const sidebar   = document.getElementById('mobileSidebar');
    const backdrop  = document.getElementById('sidebarBackdrop');

    if (!menuBtn || !sidebar || !backdrop) return;

    const openSidebar = () => {
      sidebar.classList.add('is-open');
      backdrop.classList.add('is-open');
      menuBtn.setAttribute('aria-expanded', 'true');
      sidebar.setAttribute('aria-hidden', 'false');
      backdrop.setAttribute('aria-hidden', 'false');
      document.body.classList.add('sidebar-locked');
    };

    const closeSidebar = () => {
      sidebar.classList.remove('is-open');
      backdrop.classList.remove('is-open');
      menuBtn.setAttribute('aria-expanded', 'false');
      sidebar.setAttribute('aria-hidden', 'true');
      backdrop.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('sidebar-locked');
    };

    menuBtn.addEventListener('click', openSidebar);

    if (closeBtn) {
      closeBtn.addEventListener('click', closeSidebar);
    }

    backdrop.addEventListener('click', closeSidebar);

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && sidebar.classList.contains('is-open')) {
        closeSidebar();
      }
    });

    // Close when resized to desktop breakpoint
    window.addEventListener('resize', () => {
      if (window.innerWidth > 820 && sidebar.classList.contains('is-open')) {
        closeSidebar();
      }
    });

    // Close when clicking any link inside sidebar
    const links = sidebar.querySelectorAll('a');
    links.forEach((link) => {
      link.addEventListener('click', () => {
        closeSidebar();
      });
    });
  })();
  /* ========================================================================== */
  /* >>>>> END SCRIPT PART 07: MOBILE SIDEBAR MENU <<<<< */
  /* ========================================================================== */

});   // <-- this is your existing closing line, keep only ONE of these
