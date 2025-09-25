# IAC - Instituto de Ensino Aragão e Cabral

Landing page oficial do Instituto de Ensino Aragão e Cabral, especializado em cursos jurídicos para advogados que atuam nos Tribunais Superiores (STJ e STF).

## 🚀 Site Publicado

**URL do site**: https://iacensino-76e72.web.app

## 🛠️ Tecnologias

- **React 18** + **TypeScript**
- **Vite** para build e desenvolvimento
- **Tailwind CSS** para estilização
- **Shadcn/ui** + **Radix UI** para componentes
- **Firebase Hosting** para deploy
- **SEO completo** com metadados e Open Graph

## 📁 Estrutura do Projeto

```
├── App.tsx                 # Componente principal (SPA)
├── public/                 # Assets estáticos
│   ├── favicon.ico
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── apple-touch-icon.png
│   ├── og-image.jpg        # Imagem para redes sociais
│   └── site.webmanifest    # PWA manifest
├── build/                  # Build de produção
├── components/ui/          # Componentes reutilizáveis
└── firebase.json          # Configuração do Firebase
```

## ⚡ Desenvolvimento

### Instalação
```bash
npm i
```

### Servidor de desenvolvimento
```bash
npm run dev
```
Abre automaticamente em `http://localhost:3000`

### Build de produção
```bash
npm run build
```
Gera arquivos em `build/` e copia assets automaticamente

## 🚀 Deploy

Deploy é feito via Firebase Hosting:
```bash
firebase deploy --only hosting
```

## 📱 Features

✅ **SEO Otimizado** - Metadados completos para Google
✅ **Social Media** - Preview perfeito no WhatsApp, Facebook, Twitter
✅ **Favicon** - Ícone nas abas do navegador
✅ **PWA Ready** - Manifest e ícones para instalação
✅ **Responsivo** - Design adaptável para todos os dispositivos
✅ **Performance** - Build otimizado com Vite

## 📋 Design Original

Design baseado no projeto Figma: https://www.figma.com/design/TWKmtKbZWWJvO7cHRUjRSp/IAC-Landing-Page-Design