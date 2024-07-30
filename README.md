... soon to be completed!

# jezpie Portfolio

This is my personal [portfolio](https://www.jezpie.dev/), and built with Next.js, TailwindCSS, and hosted with Vercel.

Inspiration of this portfolio was taken from [Timonthy Lin](https://github.com/timlrx). I used his template, which can be found [here](https://github.com/timlrx/tailwind-nextjs-starter-blog), to try understand how the site was built and what technologies were used, but I've coded this site separately. I started the project using [T3](https://create.t3.gg/).

## 🛠 Installation & Set Up

1. Clone this repository

   ```sh
   gh repo fork repository --clone=true
   ```

2. Change directories

   ```sh
   cd jezpie-portfolio-next.js
   ```

3. Install and use the correct version of Node using [NVM](https://github.com/nvm-sh/nvm)

   ```sh
   nvm install
   ```

4. Install dependencies

   ```sh
   npm install
   ```

5. Start the development server

   ```sh
   npm start
   ```

6. Create a .env.local and following the .env.example input some environment variables so that can run normally.

   ```txt
  NEXTAUTH_URL=
  DISCORD_CLIENT_ID=
  DISCORD_CLIENT_SECRET=
   ```

## 🏗️ Building and Running for Production

1. Generate a full static production build

   ```sh
   npm run dev
   ```

2. Preview the site as it will appear once deployed

   ```sh
   npm run serve
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.