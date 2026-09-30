# Lernraum

Separate allgemeine Lern-App: https://focusframedigitalwebdesign.github.io/chemie/lernraum/

Installierbare, offlinefähige Web-App für iPhone, iPad, Samsung und andere Geräte. Fächer, Lernsets, Notizen, Karten, Textlisten-Import, aktives Abrufen, fällige Wiederholungen, Tests, Lernset-Sharing und Sicherungen. Deutsch-Startset „Eine Kurzgeschichte analysieren“ mit 30 Karten und eigenem Übungstext.

Alle Inhalte und Fortschritte liegen lokal im Browser/App-Speicher (`lernraum-v1`). Keine Anmeldung, Cloud-Synchronisierung oder automatische KI-Erzeugung. Inhalte werden über exportierte JSON-Lernsets geteilt. Eine vollständige Sicherung enthält zusätzlich den Fortschritt; Wiederherstellung ersetzt Daten nach Bestätigung.

Der Service Worker ist ausschließlich auf `/chemie/lernraum/` beschränkt und verwendet eigene Cache-Namen. Dateien der bestehenden Niederländisch-App unter `woord/` bleiben unverändert.

## Entwicklung

Statische Dateien über einen lokalen HTTP-Server ausliefern. Offline und Installation benötigen HTTPS oder localhost. DOM-/Logiktests: `node check.cjs` (jsdom benötigt). Geräteinstallation wurde nicht auf einem physischen iPhone/Samsung getestet.

Installation: Safari → Teilen → Zum Home-Bildschirm; Android-Browsermenü → App installieren / Zum Startbildschirm hinzufügen. Browserdaten nicht löschen, ohne vorher eine Sicherung zu exportieren.
