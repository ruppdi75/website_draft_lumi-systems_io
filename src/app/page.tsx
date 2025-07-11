import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle2, XCircle, Award, Heart, Recycle, ShieldCheck, Users, Code2, Cpu, Package, Fingerprint, Laptop, ShoppingCart, Bot, Rocket, Smile, LifeBuoy, Handshake } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Logo } from "@/components/logo";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";


function WindowsLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M3,12.5H11V21H3V12.5M3,3H11V11.5H3V3M12,3H21V11.5H12V3M12,12.5H21V21H12V12.5Z" />
    </svg>
  );
}


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
        <SupportSection />
        <PartnersSection />
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
          Warum Windows, wenn's auch mit Linux geht
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
            Unsere Notebooks sind mit AnduinOS oder Ubuntu vorinstalliert und enthalten alle notwendigen Programme wie E-Mail, Bildbearbeitung, OnlyOffice (kompatibel mit Word, Excel, PowerPoint), VLC für Videos, pCloud für sichere Datenspeicherung und viele weitere nützliche Werkzeuge. Erleben Sie einen nahtlosen Übergang von Windows mit vertrauten Anwendungen, intuitiven Workflows und einem starken Fokus auf Ihre Privatsphäre.
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
        { icon: ShieldCheck, title: "Stabil & Sicher", description: "Notebooks von Lumi-Systems basieren auf einem robusten Linux-Kern und bieten Ihnen eine sichere Umgebung ohne Viren und ständige Updates." },
        { icon: Smile, title: "Benutzerfreundlich", description: "Eine intuitive Oberfläche, die speziell für Windows-Umsteiger entwickelt wurde. Fühlen Sie sich sofort zu Hause." },
        { icon: Rocket, title: "Sofort Einsatzbereit", description: "Alle wichtigen Anwendungen für Büro, Kreativität und das Web sind bereits vorinstalliert. Einfach einschalten und loslegen." },
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
                 <Card key={benefit.title} className="text-center">
                    <CardHeader className="items-center">
                        <div className="bg-primary/10 p-4 rounded-full mb-4">
                           <benefit.icon className="w-10 h-10 text-primary" />
                        </div>
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
  const windowsFeatures = [
    { text: "Hohe Lizenzgebühren" },
    { text: "Häufige Zwangsupdates" },
    { text: "Datensammlung & Tracking" },
    { text: "Sicherheitslücken" },
    { text: "Ressourcenhungrig" },
    { text: "Starke Hardware-Anforderungen" },
    { text: "Wenig Anpassungsoptionen" },
    { text: "Anfällig für Viren und Malware" },
    { text: "Proprietäre Software" },
    { text: "Langsamer mit der Zeit" },
  ];

  const lumiFeatures = [
    { text: "Völlig kostenlos & Open Source" },
    { text: "Updates nur wenn Sie wollen" },
    { text: "Absolute Privatsphäre" },
    { text: "Höchste Sicherheitsstandards" },
    { text: "Optimiert für Performance" },
    { text: "Läuft auch auf älterer Hardware" },
    { text: "Vollständig anpassbar" },
    { text: "Kaum anfällig für Viren" },
    { text: "Transparenz durch Open Source" },
    { text: "Bleibt dauerhaft schnell" },
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
        <Card className="max-w-4xl mx-auto overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-6 md:p-8 bg-red-50 dark:bg-red-900/20">
              <div className="flex items-center gap-3 mb-6">
                <WindowsLogo className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl font-bold">Windows</h3>
              </div>
              <ul className="space-y-4">
                {windowsFeatures.map((item) => (
                  <li key={item.text} className="flex items-center gap-3">
                    <XCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 md:p-8 bg-green-50 dark:bg-green-900/20">
               <div className="flex items-center gap-3 mb-6">
                 <Logo className="w-8 h-8 text-primary" />
                 <h3 className="text-2xl font-bold">AnduinOS oder Ubuntu</h3>
               </div>
               <ul className="space-y-4">
                {lumiFeatures.map((item) => (
                  <li key={item.text} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
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

function SupportSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Wir sind für Sie da</h2>
          <p className="text-lg text-muted-foreground mt-4">
            Vom ersten Klick bis zur Expertenanwendung – wir lassen Sie nicht allein. Verlassen Sie sich auf unsere umfassende Garantie und optionale Support-Services, die Ihnen den Rücken freihalten.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                <Award className="w-10 h-10 text-primary" />
                <CardTitle>1 Jahr Hardware-Garantie</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Arbeiten Sie sorgenfrei. Jedes unserer aufbereiteten Notebooks ist durch eine einjährige Garantie auf die komplette Hardware abgesichert. So können Sie sich voll und ganz auf Ihre Projekte konzentrieren.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
               <div className="flex items-center gap-4">
                <LifeBuoy className="w-10 h-10 text-primary" />
                <CardTitle>Premium Support-Service</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Benötigen Sie persönliche Hilfe beim Umstieg oder bei der Einrichtung? Unser Support-Service begleitet Sie und beantwortet all Ihre Fragen zu Ihrem neuen Notebook und dem gewählten Betriebssystem – egal ob AnduinOS oder Ubuntu.
              </p>
            </CardContent>
            <CardFooter>
                <Button variant="outline">Mehr erfahren</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}

const partners = [
  { name: "AnduinOS", logo: "https://placehold.co/200x100.png" },
  { name: "Gnome", logo: "https://placehold.co/200x100.png" },
  { name: "Perfomedia", logo: "https://placehold.co/200x100.png" },
  { name: "Osambit OÜ", logo: "https://placehold.co/200x100.png" },
  { name: "Tierquartier Wien", logo: "https://placehold.co/200x100.png" },
  { name: "Tierrettung Wien", logo: "https://placehold.co/200x100.png" },
  { name: "Auffangstation", logo: "https://placehold.co/200x100.png" },
  { name: "Katzen Cafe Tallinn", logo: "https://placehold.co/200x100.png" },
  { name: "Katzen Cafe Prag", logo: "https://placehold.co/200x100.png" },
  { name: "Katzen Cafe Bratislava", logo: "https://placehold.co/200x100.png" },
];

function PartnersSection() {
  return (
    <section className="py-20 md:py-28 bg-white dark:bg-card">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Unsere Kooperations-Partner</h2>
          <p className="text-lg text-muted-foreground mt-4">
            Zu unseren Kooperations-partnern zählen unter anderem:
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {partners.map((partner, index) => (
              <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/5">
                <div className="p-1">
                  <Card className="bg-transparent border-0 shadow-none">
                    <CardContent className="flex aspect-video items-center justify-center p-6">
                      <Image 
                        src={partner.logo} 
                        alt={`Logo von ${partner.name}`} 
                        width={150} 
                        height={75} 
                        className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                        data-ai-hint="company logo"
                        />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
    