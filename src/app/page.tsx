import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle2, XCircle, Award, Heart, Recycle, ShieldCheck, Users, Code2, Cpu, Package, Fingerprint, Laptop, ShoppingCart, Bot } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <NewBenefitsSection />
        <BenefitsSection />
        <ProductsSection />
        <ComparisonSection />
        <CatSupportSection />
        <WarrantySection />
      </main>
      <Footer />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="container grid lg:grid-cols-2 gap-12 items-center py-20 md:py-32">
      <div className="flex flex-col gap-6">
        <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold">
          Warum Windows, wenn's mit Linux auch geht
        </h1>
        <p className="text-xl text-muted-foreground">
          Entdecken Sie unsere refurbished Notebooks mit vorinstalliertem AnduinOS Linux (basierend auf Ubuntu). Die sichere, schnelle und benutzerfreundliche Alternative zu Windows – perfekt für Einsteiger und Profis.
        </p>
        <div className="flex gap-4">
          <Button size="lg" asChild className="bg-royal-blue hover:bg-royal-blue/90 text-white">
            <Link href="#">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Online Shop
            </Link>
          </Button>
          <Button size="lg" asChild variant="outline" className="bg-royal-green hover:bg-royal-green/90 text-white">
            <Link href="#">
              <Bot className="mr-2 h-5 w-5" />
              AI Support Assistent
            </Link>
          </Button>
        </div>
      </div>
      <div className="rounded-xl overflow-hidden shadow-2xl">
        <Image
          src="https://placehold.co/800x600.png"
          alt="Desktop mit schwarzer Katze"
          width={800}
          height={600}
          className="w-full h-auto object-cover"
          data-ai-hint="black cat desk"
        />
      </div>
    </section>
  );
}

const benefits = [
  {
    icon: Fingerprint,
    title: "Sicher & Privat",
    description: "Ihr Lumi-Notebook schützt Ihre Daten. Kein Tracking, keine Datensammlung. Ihre Privatsphäre steht an erster Stelle, garantiert durch die Transparenz von Open-Source-Software.",
  },
  {
    icon: Users,
    title: "Intuitiv & Vertraut",
    description: "Fühlen Sie sich sofort zuhause. Dank der vertrauten Oberfläche von LumiOS gelingt der Umstieg von Windows mühelos und ohne lange Einarbeitung. Ihr neues Notebook ist sofort produktiv.",
  },
  {
    icon: Laptop,
    title: "Sofort Einsatzbereit",
    description: "Auspacken und loslegen. Ihr Lumi-Notebook kommt mit allen wichtigen, vorinstallierten Anwendungen. Sparen Sie sich die komplizierte Einrichtung und starten Sie sofort durch.",
  },
  {
    icon: Package,
    title: "Riesige App-Auswahl",
    description: "Installieren Sie Apps einfach und sicher. Greifen Sie auf Tausende von Anwendungen zu. Dank moderner Flatpak-Technologie bleibt Ihr System dabei stets stabil und geschützt.",
  },
  {
    icon: Recycle,
    title: "Nachhaltig & Leistungsstark",
    description: "Nachhaltigkeit trifft auf Performance. Wir geben hochwertiger Business-Hardware ein zweites Leben. Das reduziert Elektroschrott und liefert Ihnen zugleich zuverlässige Leistung für all Ihre Aufgaben.",
  },
  {
    icon: Code2,
    title: "Volle Linux-Kompatibilität",
    description: "Entfesseln Sie das Potenzial von Linux. Unsere Notebooks bieten volle Kompatibilität mit dem riesigen Software-Ökosystem von Ubuntu – perfekt für Entwickler, Profis und alle, die mehr wollen.",
  },
];

function BenefitsSection() {
  return (
    <section id="vorteile" className="py-20 md:py-28 bg-white dark:bg-card">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Warum ein Notebook von Lumi-Systems wählen?</h2>
          <p className="text-lg text-muted-foreground mt-4">
            Unsere Notebooks sind mit LumiOS ausgestattet, einem modernen und sicheren Betriebssystem auf Linux-Basis. Erleben Sie einen nahtlosen Übergang von Windows mit vertrauten Anwendungen, intuitiven Workflows und einem starken Fokus auf Ihre Privatsphäre.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center border-0 shadow-none bg-transparent">
              <CardHeader className="items-center">
                <div className="bg-primary/10 p-4 rounded-full">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-headline mt-4">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function NewBenefitsSection() {
    const newBenefits = [
        { title: "Stabil & Sicher", description: "Notebooks von Lumi-Systems basieren auf einem robusten Linux-Kern und bieten Ihnen eine sichere Umgebung ohne Viren und ständige Updates." },
        { title: "Benutzerfreundlich", description: "Eine intuitive Oberfläche, die speziell für Windows-Umsteiger entwickelt wurde. Fühlen Sie sich sofort zu Hause." },
        { title: "Sofort Einsatzbereit", description: "Alle wichtigen Anwendungen für Büro, Kreativität und das Web sind bereits vorinstalliert. Einfach einschalten und loslegen." },
    ]
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Ihre Vorteile mit Notebooks von Lumi-Systems</h2>
          <p className="text-lg text-muted-foreground mt-4">
            Notebooks von Lumi-Systems wurden entwickelt, um Ihnen den Umstieg so einfach wie möglich zu machen und gleichzeitig die Stabilität und Sicherheit von Linux zu bieten.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
            {newBenefits.map(benefit => (
                 <Card key={benefit.title}>
                    <CardHeader>
                        <CardTitle>{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                 </Card>
            ))}
        </div>
      </div>
    </section>
  )
}

const products = [
  {
    name: "LumiBook Air",
    price: "€ 499,-",
    audience: "Alltag, Büroanwendungen, Web-Nutzung",
    specs: "Intel i5, 8GB RAM, 256GB SSD",
    description: "Ein schlankes und leistungsstarkes Alltagsgerät.",
    image: { src: "https://placehold.co/600x400.png", hint: "modern laptop" },
  },
  {
    name: "LumiBook Pro",
    price: "€ 799,-",
    audience: "Professionelle Anwender, Kreative, Entwickler",
    specs: "Intel i7, 16GB RAM, 512GB SSD",
    description: "Maximale Leistung für anspruchsvolle Aufgaben.",
    image: { src: "https://placehold.co/600x400.png", hint: "powerful laptop" },
    featured: true,
  },
  {
    name: "LumiBook Flex",
    price: "€ 549,-",
    audience: "Mobile Nutzer, die Flexibilität benötigen",
    specs: "AMD Ryzen 5, 8GB RAM, 256GB SSD",
    description: "Eine flexible und performante Lösung für unterwegs.",
    image: { src: "https://placehold.co/600x400.png", hint: "convertible laptop" },
  },
];

function ProductsSection() {
  return (
    <section id="produkte" className="py-20 md:py-28 bg-white dark:bg-card">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Ihr nächstes Notebook: Zuverlässig & Sicher</h2>
          <p className="text-lg text-muted-foreground mt-4">
            Jedes Notebook wird von uns sorgfältig geprüft und mit einem sicheren Linux-Betriebssystem Ihrer Wahl (AnduinOS oder Ubuntu) für Sie vorbereitet.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {products.map((product) => (
            <Card key={product.name} className={`flex flex-col h-full ${product.featured ? 'border-primary shadow-lg' : ''}`}>
              <CardHeader>
                <div className="aspect-video rounded-md overflow-hidden mb-4">
                  <Image src={product.image.src} alt={product.name} width={600} height={400} data-ai-hint={product.image.hint} className="w-full h-full object-cover" />
                </div>
                <CardTitle className="font-headline">{product.name}</CardTitle>
                <p className="text-2xl font-bold">{product.price}</p>
                <CardDescription>{product.audience}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>{product.specs}</li>
                  <li>{product.description}</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={product.featured ? 'default' : 'outline'}>Jetzt Kaufen</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground">
                Weitere Modelle finden Sie in unserem <Link href="#" className="text-primary hover:underline">Online Shop</Link>.
            </p>
        </div>
      </div>
    </section>
  );
}

function ComparisonSection() {
  const comparisonData = [
    { feature: "Kosten", standard: "Hohe Lizenzgebühren", lumi: "Keine Lizenzkosten" },
    { feature: "Datenschutz", standard: "Nutzer-Tracking", lumi: "Keine Datensammlung" },
    { feature: "Updates", standard: "Zwangsupdates", lumi: "Volle Kontrolle" },
    { feature: "Sicherheit", standard: "Hauptziel für Viren", lumi: "Robust & sicher" },
    { feature: "Nachhaltigkeit", standard: "Fördert Elektroschrott", lumi: "Reduziert Elektroschrott" },
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Eine sichere & kosteneffiziente Alternative</h2>
          <p className="text-lg text-muted-foreground mt-4">
            Sehen Sie, warum Lumi-Systems die bessere Wahl für modernes, sicheres und nachhaltiges Computing ist.
          </p>
        </div>
        <Card className="max-w-4xl mx-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/3">Merkmal</TableHead>
                <TableHead className="text-center">Standard-Notebook</TableHead>
                <TableHead className="text-center">Lumi-System</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparisonData.map((item) => (
                <TableRow key={item.feature}>
                  <TableCell className="font-medium">{item.feature}</TableCell>
                  <TableCell className="text-center">
                    <div className="flex items-center justify-center gap-2 text-destructive">
                      <XCircle className="w-5 h-5" />
                      <span>{item.standard}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="flex items-center justify-center gap-2 text-green-600">
                      <CheckCircle2 className="w-5 h-5" />
                      <span className="font-semibold">{item.lumi}</span>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </section>
  );
}

function CatSupportSection() {
  return (
    <section id="versprechen" className="py-20 md:py-28 bg-white dark:bg-card">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        <div className="rounded-xl overflow-hidden shadow-2xl">
          <Image
            src="https://placehold.co/800x600.png"
            alt="Eine süße Katze"
            width={800}
            height={600}
            className="w-full h-auto object-cover"
            data-ai-hint="cute cat"
          />
        </div>
        <div className="flex flex-col gap-4">
          <Heart className="w-12 h-12 text-primary" />
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            Unser Versprechen an die Katzen
          </h2>
          <p className="text-lg text-muted-foreground">
            Von jedem verkauften Notebook oder Computer werden 20% des Gewinns am Ende jeden Monats für die Unterstützung und Versorgung von Katzen verwendet.
          </p>
          <p className="text-muted-foreground">
            Dies geschieht in Form von Spenden, Operationen, Katzenfutter oder Kratzbäumen für Tierheime, Auffangstationen, Pflegeheime, Katzen-Kaffees und andere Organisationen oder Individuen, die sich hingebungsvoll um Katzen kümmern.
          </p>
        </div>
      </div>
    </section>
  );
}

function WarrantySection() {
  return (
    <section className="bg-primary/10 py-12">
      <div className="container text-center flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-8">
        <Award className="w-10 h-10 text-primary" />
        <h3 className="text-xl md:text-2xl font-semibold text-primary-foreground/90 dark:text-primary-foreground">
          Vertrauen und Sicherheit mit unserer 1-jährigen Hardware-Garantie auf alle Geräte.
        </h3>
      </div>
    </section>
  );
}
