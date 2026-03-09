function showTab(name) {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.getElementById(name).classList.add('active');
  event.target.classList.add('active');
}

function typeWriter(el, text, speed = 18) {
  el.textContent = '';
  el.classList.add('typing');
  let i = 0;
  const interval = setInterval(() => {
    el.textContent += text[i];
    i++;
    if (i >= text.length) {
      clearInterval(interval);
      el.classList.remove('typing');
    }
  }, speed);
}

function genRapport() {
  const kunde = document.getElementById('r-kunde').value || 'Kunde AS';
  const adresse = document.getElementById('r-adresse').value || 'Bodø';
  const jobb = document.getElementById('r-jobb').value || 'Elektrisk arbeid';
  const utstyr = document.getElementById('r-utstyr').value || 'Standard utstyr';
  const dato = new Date().toLocaleDateString('no-NO');

  const tekst = `SERVICERAPPORT
──────────────────────────
Dato: ${dato}
Kunde: ${kunde}
Adresse: ${adresse}
Utført av: Elektro Bodø AS

BESKRIVELSE AV ARBEID:
${jobb} er utført i henhold til NEK 400 og gjeldende forskrifter. Arbeidet ble gjennomgått og kontrollert etter ferdigstillelse.

MATERIELL BRUKT:
${utstyr}

KONTROLL OG GODKJENNING:
Anlegget er kontrollert visuelt og funksjonelt. Ingen avvik ble oppdaget. Anlegget er klart for bruk.

Ansvarlig montør: ___________________
Dato godkjent: ${dato}

Elektro Bodø AS — Tlf: 75 XX XX XX
Org.nr: XXX XXX XXX`;

  const out = document.getElementById('rapport-output');
  typeWriter(out, tekst);
}

function genTilbud() {
  const kunde = document.getElementById('t-kunde').value || 'Kunde AS';
  const jobb = document.getElementById('t-jobb').value || 'Elektrisk installasjon';
  const timer = document.getElementById('t-timer').value || '8';
  const materiell = document.getElementById('t-materiell').value || 'Standard materiell';
  const dato = new Date().toLocaleDateString('no-NO');
  const timepris = 895;
  const matpris = 4500;
  const total = (parseInt(timer) || 8) * timepris + matpris;

  const tekst = `TILBUD
──────────────────────────
Tilbudsdato: ${dato}
Gyldig til: 30 dager
Til: ${kunde}

ARBEIDSBESKRIVELSE:
${jobb}

PRISBEREGNING:
Arbeid: ${timer} timer × kr ${timepris},-
Materiall: ${materiell} (estimert)

DELSUM ARBEID:  kr ${(parseInt(timer)||8)*timepris},-
DELSUM MATERIELL: kr ${matpris},-
MVA (25%):      kr ${Math.round(total*0.25)},-
──────────────────────
TOTALT INKL. MVA: kr ${Math.round(total*1.25)},-

Betalingsbetingelser: 14 dager netto
Godta tilbud ved å svare på denne e-posten.

Elektro Bodø AS`;

  const out = document.getElementById('tilbud-output');
  typeWriter(out, tekst);
}

function genHMS() {
  const sted = document.getElementById('h-sted').value || 'Teknisk rom';
  const jobb = document.getElementById('h-jobb').value || 'Elektrisk arbeid';
  const folk = document.getElementById('h-folk').value || '2';
  const risiko = document.getElementById('h-risiko').value || 'Ingen kjente';

  const tekst = `HMS RISIKOVURDERING
──────────────────────────
Dato: ${new Date().toLocaleDateString('no-NO')}
Arbeidsted: ${sted}
Antall personer: ${folk}
Type arbeid: ${jobb}

IDENTIFISERTE RISIKOER:
⚠️  ${risiko}
⚠️  Strømgjennomgang ved feil prosedyre
⚠️  Fall/snublefare i arbeidssone

TILTAK:
✅ Koble fra strøm og lås ut før arbeid
✅ Bruk verneutstyr (hjelm, hansker, vernesko)
✅ Rydd arbeidssone — fjern snublefarer
✅ Minimum 2 personer ved høyspentarbeid
✅ Nødnummer synlig: 110 (brann), 113 (ambulanse)

ANSVARLIG:
Førstehjelp: ___________________
Evakueringsansvarlig: ___________________

Godkjent av arbeidsleder: ___________________
Elektro Bodø AS`;

  const out = document.getElementById('hms-output');
  typeWriter(out, tekst);
}