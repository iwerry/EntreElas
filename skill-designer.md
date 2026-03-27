# Design System: Entre Elas

## 1. Paleta de Cores (Color Palette)
O projeto utiliza uma paleta elegante e acolhedora, com forte contraste para manter a legibilidade e sofisticação.

- **Primary**: `#4A2B47` (Roxo escuro profundo) - Utilizado para textos principais, fundos fortes e elementos de destaque.
- **Secondary**: `#C99451` (Dourado/Ouro) - Utilizado para detalhes, linhas de destaque e elementos interativos.
- **Surface**: `#FFF5F8` (Off-white / levemente rosado) - Fundo padrão da aplicação.
- **Surface Container Low**: `#FCEEF2` - Fundo secundário para cards e seções com leve destaque.
- **Surface Container Highest**: `#F5DADB` - Utilizado para contrastes sutis de background.
- **Primary Container**: `#2D182B` - Roxo ainda mais escuro para o rodapé e áreas que exigem máximo peso visual.

## 2. Tipografia (Typography)
A hierarquia tipográfica mistura a elegância das fontes serifadas itálicas com a modernidade das fontes sem serifa em caixa alta.

- **Headline (`font-headline`)**: Fonte serifada elegante (ex: *Playfair Display*, *Newsreader*). Sempre utilizada em **itálico**, proporcionando um tom editorial e sofisticado aos títulos grandes.
- **Newsreader (`font-newsreader`)**: Utilizada para subtítulos e parágrafos de destaque, mantendo a sofisticação também em itálico.
- **Label (`font-label`)**: Fonte sem serifa (ex: *Inter*, *Montserrat*). Sempre em **Letras Maiúsculas (Uppercase)** com espaçamento entre letras (tracking) extremamente largo (`tracking-[0.2em]` a `0.4em`) e tamanhos menores (`text-[10px]` a `text-xs`).
- **Body (`font-body`)**: Fonte sem serifa limpa para textos longos e de descrição, focada em legibilidade.

## 3. Sombras e Profundidade (Shadows & Depth)
Para separar os cards do fundo (especialmente quando as cores são similares), utilizamos:
- Sombras ambientes suaves: `shadow-[0_20px_50px_rgba(0,0,0,0.03)]`
- Efeitos Glassmorphism: Elementos com `backdrop-blur-xl` apoiados por painéis levemente translúcidos (`bg-white/5` ou `bg-surface/90`)
- Bordas sutis `border-white/10` ou `border-primary/5` para desenhar o limite exato dos containers.

## 4. Estilo de Fotografia (Photography Style)
- **Tom Editorial**: As fotos utilizam efeitos de escala de cinza (`grayscale`) ou alto contraste dramático por padrão.
- **Interação**: Ao passar o mouse, as fotos ganham sua cor original (`group-hover:grayscale-0`) e sofrem um leve zoom (`group-hover:scale-105`), trazendo vivacidade à interação.
- **Temática**: Apenas mulheres, demonstrando superação transversal, união e foco educacional.

## 5. Animações e Movimento (Motion)
O projeto utiliza a biblioteca `framer-motion`. As regras de animação são "Foda, Épico e Orgânico":
- Entradas suaves rolando de baixo para cima `y: 20 -> 0`.
- Durações estendidas (`duration: 0.8` a `1.5`) com curvas de `easeOut` profundas (`ease: [0.16, 1, 0.3, 1]`) para sensação premium.
- Elementos interativos saltam suavemente (`scale: 1.05`) com glow styles ao passar o mouse.
- **Backgrounds e Efeitos Épicos**: Utilização intensiva de div em absolute atuando como gradientes mutáveis (glow spheres) e fundos em overlay para intensificar as chamadas de seções (ex: Página "Vozes").
