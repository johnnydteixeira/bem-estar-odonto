import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, ArrowUpRight, Check, HeartHandshake, MapPin, Menu, X, Phone, ShieldCheck, Sparkles, Star, Users, Smile, Stethoscope, Baby, Heart, Building2, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { units, whatsappUrl } from "@/lib/clinic";
import { PatientReviews } from "@/components/patient-reviews";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
const logo = { url: "/images/logo.webp" };
const vanessa = { url: "/images/vanessa.webp" };
const consultorio = { url: "/images/consultorio.webp" };
const sorriso = { url: "/images/sorriso.webp" };
const reabilitacao = { url: "/images/reabilitacao.webp" };
const clareamento = { url: "/images/clareamento.webp" };
const estetica = { url: "/images/estetica.webp" };
const facetas = { url: "/images/facetas.webp" };
const aparelhosOrtodonticosVideo = { url: "/videos/colocacao-de-aparelho.mp4" };
const aparelhosOrtodonticosPoster = { url: "/images/aparelhos-ortodonticos-poster.webp" };

const instagram = "https://www.instagram.com/clinicaodontobemestar/";
const treatments = [
  { name: "Implantes e próteses dentárias", description: "Cuidado para recuperar a função, o conforto e a confiança no seu sorriso.", image: sorriso.url, icon: Smile },
  { name: "Restaurações e reabilitação oral", description: "Soluções para cuidar dos seus dentes e restabelecer a saúde bucal.", image: reabilitacao.url, icon: ShieldCheck },
  { name: "Aparelhos ortodônticos", description: "Acompanhamento para o alinhamento dos dentes e o equilíbrio do sorriso.", video: aparelhosOrtodonticosVideo.url, poster: aparelhosOrtodonticosPoster.url, icon: Smile },
  { name: "Clareamento dental", description: "Uma avaliação individualizada para cuidar da estética do seu sorriso.", image: clareamento.url, icon: Sparkles },
  { name: "Facetas e lentes em resina", description: "Atenção aos detalhes, à forma e à harmonia dos seus dentes.", image: facetas.url, icon: Smile },
  { name: "Botox e procedimentos estéticos", description: "Cuidado estético com atenção às suas necessidades e características.", image: estetica.url, icon: Sparkles },
  { name: "Prevenção e limpeza dental", description: "A saúde do seu sorriso começa com cuidados e acompanhamento regular.", icon: ShieldCheck },
  { name: "Odontopediatria", description: "Um atendimento acolhedor e cuidadoso para o sorriso dos pequenos.", icon: Baby },
  { name: "Extrações e tratamento de canal", description: "Avaliação e cuidado profissional para preservar sua saúde bucal.", icon: Stethoscope },
];
const navigation = [{ name: "A clínica", href: "#clinica" }, { name: "Tratamentos", href: "#tratamentos" }, { name: "Dra. Vanessa", href: "#vanessa" }, { name: "Unidades", href: "#unidades" }];

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Clínica Odontológica Bem Estar | Campo Grande e Bangu" },
    { name: "description", content: "Seu sorriso merece cuidado, atenção e profissionalismo. Conheça a Clínica Bem Estar e agende sua avaliação em Campo Grande ou Bangu pelo WhatsApp." },
    { property: "og:title", content: "Clínica Odontológica Bem Estar | Cuidado para o seu sorriso" },
    { property: "og:description", content: "Odontologia e estética dental com atendimento humanizado em Campo Grande e Bangu, Rio de Janeiro. Agende sua avaliação." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

function Stars() { return <span className="stars" aria-label="5 estrelas"><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /></span>; }

function Index() {
  const [appointment, setAppointment] = useState(false);
  const [treatment, setTreatment] = useState<string>();
  const [menuOpen, setMenuOpen] = useState(false);
  const book = (name?: string) => { setTreatment(name); setAppointment(true); };
  return <>
    <div className="top-strip"><div className="container-clinic"><span className="flex items-center gap-2"><MapPin size={12} /> Campo Grande e Bangu • Rio de Janeiro</span><a className="top-instagram flex items-center gap-2" href={instagram} target="_blank" rel="noopener noreferrer"><Instagram size={12} /> @clinicaodontobemestar</a></div></div>
    <header className="site-header"><div className="container-clinic header-inner">
      <a href="#inicio" aria-label="Bem Estar — início"><img className="brand-logo" src={logo.url} alt="Consultório Odontológico Bem Estar" /></a>
      <nav className="desktop-nav" aria-label="Navegação principal">{navigation.map(item => <a key={item.href} href={item.href}>{item.name}</a>)}</nav>
      <Button className="header-appointment" variant="hero" size="cta" onClick={() => book()}><WhatsAppIcon /> Agendar avaliação <ArrowUpRight /></Button>
      <Button variant="ghost" size="icon" className="mobile-menu-button" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
    </div>{menuOpen && <nav className="mobile-nav" aria-label="Navegação no celular">{navigation.map(item => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.name}</a>)}<Button variant="hero" size="cta" onClick={() => {setMenuOpen(false);book();}}><WhatsAppIcon /> Agendar avaliação <ArrowUpRight /></Button></nav>}</header>
    <main>
      <section className="hero" id="inicio"><div className="container-clinic hero-inner">
        <img className="hero-portrait" src={vanessa.url} alt="Dra. Vanessa Macedo, cirurgiã-dentista responsável pela Clínica Bem Estar" fetchPriority="high" />
        <div className="hero-copy"><div className="eyebrow"><span className="h-px w-6 bg-primary" /> Cuidado de verdade. Sorrisos com bem-estar.</div>
          <h1>Seu sorriso merece <span>cuidado, atenção</span> e profissionalismo!</h1>
          <p className="hero-description">Da prevenção à estética dental, oferecemos tratamentos odontológicos para cuidar da sua saúde bucal e transformar seu sorriso.</p>
          <div className="hero-actions"><Button variant="hero" size="cta" onClick={() => book()}><WhatsAppIcon /> AGENDAR MINHA AVALIAÇÃO <ArrowUpRight /></Button><a href="#tratamentos">Conheça os tratamentos <ArrowRight size={15} /></a></div>
          <div className="hero-rating"><Stars /><span><strong className="text-foreground">4,8 no Google</strong> · Mais de 36 avaliações</span></div>
        </div><div className="hero-caption"><strong>Dra. Vanessa Macedo</strong><span>Cirurgiã-dentista • Cuidado que acolhe</span></div>
      </div></section>
      <div className="trust-strip"><div className="container-clinic trust-inner">
        {[{ icon: HeartHandshake, title: "Atendimento humanizado", text: "Você em primeiro lugar" }, { icon: ShieldCheck, title: "Profissionais qualificados", text: "Cuidado e atenção em cada detalhe" }, { icon: Users, title: "Para toda a família", text: "Da infância à vida adulta" }, { icon: MapPin, title: "Duas unidades no Rio", text: "Campo Grande e Bangu" }].map(item => <div className="trust-item" key={item.title}><item.icon /><div className="min-w-0"><strong>{item.title}</strong><span>{item.text}</span></div></div>)}
      </div></div>
      <section className="section" id="clinica"><div className="container-clinic about-grid">
        <div className="about-photo"><img src={consultorio.url} loading="lazy" alt="Atendimento odontológico real na Clínica Bem Estar" /></div>
        <div className="about-copy"><div className="eyebrow">BEM-VINDO À BEM ESTAR</div><h2>Um lugar para cuidar<br />do seu sorriso. <em>E de você.</em></h2><p>Na Clínica Odontológica Bem Estar, acreditamos que um bom atendimento começa com escuta, acolhimento e atenção a cada pessoa.</p><p>Reunimos profissionais qualificados e diversas soluções odontológicas em um ambiente acolhedor, para cuidar da saúde bucal de toda a sua família.</p><ul className="about-points"><li><Check /> Atenção individualizada em cada atendimento</li><li><Check /> Saúde e estética dental no mesmo lugar</li><li><Check /> Cuidado próximo, do início ao acompanhamento</li></ul><Button variant="outline" size="cta" onClick={() => book()}><WhatsAppIcon /> Quero conhecer a clínica <ArrowUpRight /></Button></div>
      </div></section>
      <section className="section treatments-section" id="tratamentos"><div className="container-clinic">
        <div className="section-heading"><div><div className="eyebrow">NOSSOS TRATAMENTOS</div><h2>Cuidado completo para <em>cada sorriso.</em></h2><p>Da prevenção aos cuidados estéticos, encontre o atendimento para a sua necessidade.</p></div><Button variant="outline" size="cta" onClick={() => book()}><WhatsAppIcon /> Agendar uma avaliação <ArrowUpRight /></Button></div>
        <div className="treatment-grid">{treatments.map(item => <article key={item.name} className="treatment-card">{item.video ? <video src={item.video} poster={item.poster} autoPlay muted loop playsInline preload="metadata" aria-label={`Vídeo de atendimento real: ${item.name}`} /> : item.image ? <img src={item.image} alt={`Registro clínico fornecido: ${item.name}`} loading="lazy" /> : null}<div className="treatment-body">{!item.image && !item.video && <item.icon className="treatment-icon" />}<h3>{item.name}</h3><p>{item.description}</p><Button variant="link" onClick={() => book(item.name)}><WhatsAppIcon /> Agendar avaliação <ArrowUpRight /></Button></div></article>)}</div>
        <p className="clinical-note">Imagens de atendimentos reais da clínica. Cada tratamento depende de avaliação individual; os resultados variam de pessoa para pessoa.</p>
      </div></section>
      <section className="section doctor-section" id="vanessa"><div className="container-clinic doctor-grid"><img className="doctor-image" src={vanessa.url} alt="Retrato profissional da Dra. Vanessa Macedo" loading="lazy" /><div className="doctor-copy"><div className="eyebrow">QUEM CUIDA DE VOCÊ</div><h2>Dra. Vanessa Macedo</h2><div className="mt-3 text-sm text-primary font-medium">Cirurgiã-dentista • Responsável pela clínica</div><p>À frente da Clínica Odontológica Bem Estar, a Dra. Vanessa Macedo trabalha para oferecer um atendimento odontológico pautado no cuidado, profissionalismo e atenção individualizada a cada paciente.</p><p>Sua dedicação e compromisso com a saúde e o bem-estar dos pacientes fazem parte da essência da clínica.</p><div className="doctor-signature">Dra. Vanessa Macedo</div><Button className="mt-7" variant="hero" size="cta" onClick={() => book()}><WhatsAppIcon /> Agendar minha avaliação <ArrowUpRight /></Button></div></div></section>
      <section className="section" id="estrutura"><div className="container-clinic"><div className="section-heading"><div><div className="eyebrow">NOSSA ESTRUTURA</div><h2>Você merece se sentir <em>bem cuidado.</em></h2><p>Um ambiente acolhedor, pensado para receber você com atenção e conforto.</p></div></div><div className="structure-grid"><img src={consultorio.url} alt="Dra. Vanessa atendendo no consultório da clínica, com cadeira e equipamentos odontológicos" loading="lazy" /><div className="structure-features"><div><Building2 /><div><h3>Um espaço acolhedor</h3><p>Consultório e ambiente preparados para receber você e sua família.</p></div></div><div><Stethoscope /><div><h3>Atendimento com atenção</h3><p>Profissionais qualificados e cuidado em cada etapa do seu tratamento.</p></div></div><div><Heart /><div><h3>Conforto e proximidade</h3><p>Escuta e atenção individualizada para uma experiência mais tranquila.</p></div></div><Button asChild variant="link" className="justify-start px-0"><a href={instagram} target="_blank" rel="noopener noreferrer"><Instagram /> Conheça nosso dia a dia no Instagram <ArrowUpRight /></a></Button></div></div></div></section>
      <section className="reviews-band" id="avaliacoes"><div className="container-clinic"><div className="reviews-inner"><div><div className="eyebrow">AVALIAÇÕES DOS PACIENTES</div><h2>A confiança de quem cuida<br />do sorriso com a gente.</h2><p className="text-sm text-muted-foreground">Cuidado, acolhimento e atenção fazem parte da nossa essência.</p></div><div className="review-score"><strong>4,8</strong><div><Stars /><p>Mais de 36 avaliações<br /><strong className="text-foreground">no Google</strong></p></div></div></div><PatientReviews /></div></section>
      <section className="section" id="unidades"><div className="container-clinic"><div className="section-heading"><div><div className="eyebrow">NOSSAS UNIDADES</div><h2>Perto de você, <em>pronto para acolher.</em></h2><p>Escolha a unidade mais próxima e dê o primeiro passo para cuidar do seu sorriso.</p></div></div><div className="unit-grid">{units.map(unit => <article className="unit-card" key={unit.name}><div className="unit-heading"><MapPin /><h3>{unit.name}</h3></div><div className="unit-body"><p>{unit.address}</p><a className="unit-phone" href={`tel:${unit.phone.replace(/\D/g, "")}`}><Phone size={15} /> {unit.phone}</a>{unit.name === "Bangu" && <div className="unit-phone"><WhatsAppIcon className="size-[15px]" /> (21) 97378-6882</div>}<div className="unit-actions"><Button asChild variant="whatsapp" size="cta"><a href={whatsappUrl(unit.whatsapp)} target="_blank" rel="noopener noreferrer"><WhatsAppIcon /> Agendar nesta unidade</a></Button></div></div></article>)}</div></div></section>
      <section className="final-cta"><div className="container-clinic"><h2>Está na hora de cuidar do seu sorriso!</h2><p>Nossa equipe está pronta para receber você.<br />Entre em contato e agende sua avaliação.</p><Button variant="whatsapp" size="cta" onClick={() => book()}><WhatsAppIcon /> FALAR COM NOSSA EQUIPE PELO WHATSAPP <ArrowUpRight /></Button></div></section>
    </main>
    <footer className="site-footer"><div className="container-clinic"><div className="footer-inner"><div className="footer-brand"><a href="#inicio"><img className="footer-logo" src={logo.url} alt="Clínica Odontológica Bem Estar" loading="lazy" /></a><p>Cuidado, atenção e profissionalismo para a saúde e o bem-estar do seu sorriso.</p></div><div><h3>Conheça a Bem Estar</h3><div className="footer-links">{navigation.map(item => <a href={item.href} key={item.href}>{item.name}</a>)}</div></div><div><h3>Estamos perto de você</h3><div className="footer-links"><a href="#unidades">Campo Grande · Rio de Janeiro</a><a href="#unidades">Bangu · Rio de Janeiro</a><a className="flex items-center gap-2" href={instagram} target="_blank" rel="noopener noreferrer"><Instagram size={15} /> Instagram <ArrowUpRight size={13} /></a></div></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Clínica Odontológica Bem Estar. Todos os direitos reservados.</span><span>Feito com cuidado. Para cuidar de você.</span></div></div></footer>
    <Button className="floating-whatsapp" variant="whatsapp" size="icon" aria-label="Agendar pelo WhatsApp" title="Agendar pelo WhatsApp" onClick={() => book()}><WhatsAppIcon className="size-[26px]" /></Button>
    <Dialog open={appointment} onOpenChange={setAppointment}><DialogContent className="max-w-md w-[calc(100%-32px)] rounded-lg"><DialogTitle className="text-xl pr-5">Em qual unidade vamos receber você?</DialogTitle><DialogDescription>Escolha a unidade para conversar com nossa equipe pelo WhatsApp{treatment ? ` sobre ${treatment.toLowerCase()}` : " e agendar sua avaliação"}.</DialogDescription><div className="grid gap-3 mt-2">{units.map(unit => <Button key={unit.name} asChild variant="whatsapp" size="cta"><a href={whatsappUrl(unit.whatsapp, treatment)} target="_blank" rel="noopener noreferrer"><WhatsAppIcon /> {unit.name} <ArrowUpRight /></a></Button>)}</div></DialogContent></Dialog>
  </>;
}
