export const metadata = {
  title: 'AWS Flashcards',
  description: 'Interactive AWS flashcards built with Next.js'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
