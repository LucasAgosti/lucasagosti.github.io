Refactor the current portfolio project architecture and navigation so it matches much more closely the real page structure of guttorocha.com.br, while preserving the current dark visual direction, color palette and overall authorial tone already generated for Lucas Fernandes.

IMPORTANT
Do NOT focus on visual redesign yet.
This task is primarily about:
- information architecture
- navigation behavior
- page structure
- route logic
- content relocation between pages
- fixing incorrect anchor-based navigation

Keep the current dark visual style, colors and general atmosphere already generated, unless a small structural adjustment is necessary.

GOAL
Transform the portfolio from a one-page anchor navigation structure into a multi-page portfolio structure closer to guttorocha.com.br, with dedicated pages for:
- Home
- Bio / Sobre
- Cases
- Contato
- Individual case pages

MAIN STRUCTURE TO IMPLEMENT

Create these top-level pages/routes:

1. HOME
Route: /
2. SOBRE
Route: /sobre
3. CASES
Route: /cases
4. CONTATO
Route: /contato

Also keep individual case pages:
- /cases/auralize
- /cases/smartdyn
- /cases/arvorar
- /cases/asavac
- /cases/lovemypet

HEADER / NAVIGATION RULES
The top navigation should no longer scroll to sections inside the Home.

It must now navigate to dedicated pages:
- INÍCIO → /
- BIO → /sobre
- CASES → /cases
- FALA COMIGO → /contato

Keep the visible language switcher in the header:
- PT/BR | EN/US

Keep the header dark, thin, subtle and premium.
Preserve current visual tone, but make navigation behavior match this multi-page structure.

HOME PAGE — RESTRUCTURE
The Home page should become leaner and more focused.
Remove the BIO section from the Home.

The Home page should include only these sections, in this order:

1. HERO / INÍCIO
Keep current hero content:
- Lucas Fernandes
- Desenho produtos digitais com UX/UI para mobile e desktop.
- supporting paragraph
- metadata line

2. CREDIBILITY / EXPERIENCE
Keep current credibility section and content.

3. MANIFESTO
Keep the manifesto section in Home.

4. EXPERTISE
Replace the current Bio-in-Home section with an expertise-style section similar in role to the previously generated “What I bring to product design” block.
This section should work as a compact preview of strengths, not a biography.

Use a section title adapted to the current tone, such as:
- Expertise
or
- O que eu trago para o design de produto

Use short structured blocks that communicate:
- UX & UI para produtos reais
- Mobile e desktop
- Mentalidade orientada a sistemas

Keep it concise and editorial.

5. CASES PREVIEW
On the Home page, do NOT show the full dedicated cases page.
Instead, show a preview/selection of featured cases with a clear CTA to the full /cases page.

Featured preview can include:
- Auralize
- SmartDyn
- Arvorar

Add a clear link or button:
- Ver todos os cases
This must lead to /cases

6. PROJETOS PRÓPRIOS E EXPERIMENTAÇÃO
Keep this section on Home.

7. CONTACT PREVIEW / CTA
At the end of Home, do NOT make this the full contact page.
Instead, make it a strong preview or CTA block inviting users to go to /contato.

Use a CTA like:
- Fala comigo
- Entrar em contato

This CTA must navigate to /contato

SOBRE PAGE — CREATE DEDICATED PAGE
Create a dedicated Sobre / Bio page at route /sobre.

This page should contain the biography content that was previously inside the Home, plus any additional supporting content that fits this page.

Use the current Bio texts:

Main text:
Sou Product Designer com foco forte em UX e UI para produtos mobile e desktop. Gosto de organizar complexidade, estruturar jornadas, construir sistemas visuais consistentes e transformar requisitos em experiências mais claras, úteis e fáceis de usar.

Complementary paragraph:
Meu trabalho está na interseção entre produto, interface e tomada de decisão. Mais do que desenhar telas, busco dar forma a produtos digitais que façam sentido no uso real.

This page can also include:
- short experience summary
- expertise
- process / how I think
But keep it aligned with the dark editorial style already created.

CASES PAGE — CREATE DEDICATED LISTING PAGE
Create a dedicated Cases page at route /cases.

This page must function as the full list of all cases.
It should not be just a Home section.
It must be a real page accessible from the top navigation.

Include all projects:
- Auralize
- SmartDyn
- Arvorar
- AsaVac
- LoveMyPet

The style should remain editorial and text-first, consistent with current dark portfolio direction.

Each listed case must link to its own individual route:
- /cases/auralize
- /cases/smartdyn
- /cases/arvorar
- /cases/asavac
- /cases/lovemypet

CONTATO PAGE — CREATE DEDICATED CONTACT PAGE
Create a dedicated contact page at route /contato.

This page should be much closer in spirit to guttorocha.com.br/contato:
- bold
- direct
- minimal
- memorable
- contact-first

Do not keep it only as a footer section.
It must be a real standalone page.

Use content adapted from Lucas’s portfolio:

Title:
Fala comigo

Main text:
Aberto a oportunidades, freelas e conversas sobre produtos digitais que precisem de clareza, estrutura e boa execução.

Secondary text:
Se você está construindo um produto digital e precisa de alguém para pensar UX, UI, sistema e experiência de forma consistente, vamos conversar.

Contact items:
- LinkedIn
- Email
- GitHub

Make this page feel stronger and more dedicated than the current Home contact block.

INDIVIDUAL CASE PAGES — NAVIGATION CORRECTION
Keep the existing individual case pages, but correct their navigation logic.

Critical fix:
The link/button “Todos os cases” must go to:
- /cases

It must NOT return to the Home page.

Also ensure the top navigation inside case pages uses the same correct routes:
- INÍCIO → /
- BIO → /sobre
- CASES → /cases
- FALA COMIGO → /contato

HEADER CONSISTENCY
Use the same header system across:
- Home
- Sobre
- Cases
- Contato
- Individual case pages

Keep:
- Lucas Fernandes wordmark
- navigation links
- language switcher
- dark premium styling

FOOTER CONSISTENCY
Use a consistent footer system across all pages.
Keep it minimal, dark and subtle.

DO NOT
- do not redesign the whole visual language yet
- do not revert to a light theme
- do not remove the current green accent direction
- do not create anchor-only navigation anymore
- do not keep Bio as a Home section
- do not keep “Todos os cases” linking to Home
- do not collapse everything back into a one-page site

PRIORITY ORDER
1. Fix routes and multi-page logic
2. Move sections to the correct pages
3. Correct navigation behavior
4. Keep the current dark design direction intact
5. Preserve consistency across pages

OUTPUT
Refactor the portfolio into a correct multi-page structure inspired by the real navigation architecture of guttorocha.com.br, while preserving the current dark UI direction already generated for Lucas Fernandes.