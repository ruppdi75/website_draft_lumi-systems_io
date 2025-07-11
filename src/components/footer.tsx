import Link from 'next/link';
import { Logo } from './logo';

export function Footer() {
  return (
    <footer className="border-t bg-white dark:bg-card py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-start gap-4">
            <Link href="/" className="flex items-center space-x-2">
              <Logo className="h-8 w-8" />
              <span className="font-bold text-lg">Lumi-Systems</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Nachhaltige Notebooks mit benutzerfreundlichem Linux.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm tracking-wider uppercase">Kontakt</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <p>Lumi-Systems.io</p>
              <p>Arnikaweg 47a/3</p>
              <p>1220 Wien</p>
              <p>Österreich</p>
              <p className="mt-2">E: office@lumi-systems.io</p>
              <p>T: +43 664 16 17 219</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm tracking-wider uppercase">Unternehmen</h4>
            <nav className="flex flex-col gap-2 text-sm">
              <Link href="#vorteile" className="text-muted-foreground hover:text-primary transition-colors">Vorteile</Link>
              <Link href="#versprechen" className="text-muted-foreground hover:text-primary transition-colors">Unser Versprechen</Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Über uns</Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Support</Link>
            </nav>
          </div>
           <div>
            <h4 className="font-semibold mb-4 text-sm tracking-wider uppercase">Rechtliches</h4>
            <nav className="flex flex-col gap-2 text-sm">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Impressum</Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Datenschutz</Link>
            </nav>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 flex justify-center items-center">
            <p className="text-sm text-muted-foreground">&copy; 2025 Lumi-Systems. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
