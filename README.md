# blog — da quando sei qui

Blog where I put my ideas.

Un blog personale statico, ispirato allo stile contemplativo di
[sinceyouarrived.world](https://sinceyouarrived.world): sfondo quasi nero,
tipografia serif, prosa che appare lentamente e una riga "viva" che racconta
quanto tempo sei sulla pagina (battiti del cuore, respiri, chilometri percorsi
dalla Terra).

## Struttura

```
index.html                 pagina principale con l'indice delle note
chi-sono.html              pagina di presentazione
posts/                     una pagina HTML per ogni nota
css/style.css              tutto lo stile del sito
js/main.js                 apparizione lenta + contatore di presenza
```

Nessun build tool, nessuna dipendenza: solo HTML, CSS e JavaScript.

## Come vederlo in locale

```sh
python3 -m http.server 8000
# poi apri http://localhost:8000
```

## Come pubblicarlo

Il sito è pronto per GitHub Pages: nelle impostazioni del repository,
sezione **Pages**, scegli il branch da pubblicare con cartella `/ (root)`.

## Come aggiungere una nota

1. Copia una pagina esistente da `posts/` e rinominala.
2. Cambia titolo, data e testo (i paragrafi con classe `appari` compaiono
   con la dissolvenza; il primo paragrafo usa la classe `capoverso`).
3. Aggiungi la voce in cima alla lista in `index.html`.
