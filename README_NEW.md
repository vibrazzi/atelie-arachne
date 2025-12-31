# Ateliê Arachne - E-commerce de Chaveirinhos Artesanais

<div align="center">
  <img src="/public/logo-arachneee.png" alt="Ateliê Arachne Logo" width="200" />
  <p><strong>Chaveirinhos artesanais de crochê com design exclusivo e temática aracnídea</strong></p>
</div>

[![Deploy](https://img.shields.io/badge/Deploy-Vercel-black?style=flat&logo=vercel)](https://atelie-arachne.vercel.app/)
[![React](https://img.shields.io/badge/React-18.2-61DAFB?style=flat&logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

---

## Stack Tecnológica

| Tecnologia | Versão | Descrição |
|------------|---------|-------------|
| **React** | 18.2.0 | Biblioteca JavaScript para interfaces de usuário |
| **Vite** | 6.3.5 | Build tool moderna e ultrarrápida |
| **Tailwind CSS** | 3.4.17 | Framework CSS utility-first |
| **React Router** | 6.x | Roteamento para SPA |
| **AOS** | 2.3.4 | Animações on scroll |
| **React Icons** | 4.12.0 | Biblioteca de ícones |
| **React Slick** | 0.29.0 | Carrossel responsivo |
| **React Hot Toast** | Latest | Sistema de notificações |

---

## Funcionalidades

### E-commerce Completo
- Catálogo de produtos com filtros e busca
- Sistema de carrinho de compras persistente
- Favoritos salvos localmente
- Integração com WhatsApp para pedidos
- Cálculo automático de totais

### Design Premium
- Tema aracnídeo com paleta roxa e neon
- Glassmorphism e efeitos de vidro fosco
- Animações CSS customizadas
- Cursor personalizado temático
- Decorações de teia e aranhas flutuantes

### Performance e SEO
- Code splitting e lazy loading
- Meta tags completas (Open Graph, Twitter Cards)
- Otimização de imagens
- Preconnect para recursos externos
- Schema.org para produtos

### Acessibilidade
- ARIA labels e roles semânticos
- Navegação por teclado
- Focus states visíveis
- Screen reader friendly
- Semantic HTML5

### Experiência do Usuário
- Loading states e skeleton screens
- Toasts para feedback visual
- Responsivo para todos os dispositivos
- Animações suaves e fluidas
- Back to top button temático

---

## Paleta de Cores Arachne

```javascript
arachne: {
  deepPurple: '#1a0033',      // Roxo profundo como noite
  darkPurple: '#2d004d',       // Roxo escuro principal
  royalPurple: '#4a0080',      // Roxo real vibrante
  neonPurple: '#7b2cbf',       // Roxo neon brilhante
  lightPurple: '#9d4edd',      // Roxo claro para destaques
  web: '#b8b8d1',              // Cor de teia prateada
  venom: '#00ff88',            // Verde venenoso neon
  shadow: '#0f0818',           // Sombra profunda
  silk: '#e0aaff',             // Seda clara
  accent: '#ff006e',           // Rosa/magenta de acento
}
```

---

## Estrutura do Projeto

```
src/
├── components/              # Componentes React
│   ├── Navbar/             # Barra de navegação
│   ├── Banner/             # Hero banner principal
│   ├── Hero/               # Slider de produtos
│   ├── About/              # Sobre o ateliê
│   ├── Products/           # Catálogo de produtos
│   ├── Testimonials/       # Depoimentos
│   ├── Footer/             # Footer profissional
│   ├── BackToHome/         # Botão voltar ao topo
│   ├── WebDecoration/      # Decorações temáticas
│   └── LoadingSpinner/     # Componente de loading
├── context/                # Context API
│   └── CartContext.jsx     # Gerenciamento de carrinho
├── hooks/                  # Custom hooks
│   └── useWhatsApp.js      # Hook para WhatsApp
├── constants/              # Constantes e dados
│   └── products.js         # Dados dos produtos
├── assets/                 # Imagens e recursos
├── App.jsx                # Componente raiz
├── index.css              # Estilos globais
└── main.jsx               # Entry point
```

---

## Instalação e Uso

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/vibrazzi/atelie-arachne.git
cd atelie-arachne

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env
# Edite o arquivo .env com suas configurações

# Inicie o servidor de desenvolvimento
npm run dev
```

### Scripts Disponíveis

```bash
npm run dev      # Inicia servidor de desenvolvimento
npm run build    # Cria build de produção
npm run preview  # Visualiza build de produção
npm run lint     # Executa ESLint
```

---

## Melhorias Implementadas

Esta versão profissional inclui:

- **Arquitetura**: Context API para estado global, hooks customizados, separação de concerns
- **Performance**: Code splitting, lazy loading, otimização de bundle
- **SEO**: Meta tags completas, Schema.org, sitemap, robots.txt
- **Acessibilidade**: WCAG 2.1 Level AA, ARIA labels, navegação por teclado
- **UX**: Loading states, toasts, feedback visual, animações otimizadas
- **Código**: PropTypes, ESLint configurado, constantes centralizadas
- **Integração**: WhatsApp Business, carrinho persistente, favoritos
- **Documentação**: README completo, .env.example, comentários no código

---

## Configuração do WhatsApp

Para configurar a integração com WhatsApp:

1. Edite o arquivo `.env`:
```env
VITE_WHATSAPP_NUMBER=5511999999999
```

2. Substitua pelo número do WhatsApp Business do ateliê (com código do país e DDD)

---

## Deploy

O projeto está configurado para deploy automático no Vercel:

1. Conecte o repositório ao Vercel
2. Configure as variáveis de ambiente
3. Deploy automático a cada push na branch main

---

## Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## Contato

**Desenvolvedor**: Webert Fernandes Souza  
**Portfolio**: [portifolio-vue-delta.vercel.app](https://portifolio-vue-delta.vercel.app/)  
**GitHub**: [@vibrazzi](https://github.com/vibrazzi)

---

**Ateliê Arachne** - Desenvolvido com 💜 e muita dedicação artesanal
